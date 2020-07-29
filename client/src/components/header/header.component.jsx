import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import  { ReactComponent as Logo } from '../../assets/yellow-raven.svg';

import './header.styles.scss';

class Header extends React.Component {
    constructor() {
        super();

        this.state = {
            redirectTo: null
        }
    }

    redirect = async () => {
        const response = await axios.get('/authenticated');

        if (response.data.user) {
            this.setState({
                redirectTo: '/'
            });
        }
    }

    getUser = async () => {
        return await axios.get('/authenticated');
    }

    logOut = async event => {
        event.preventDefault();

        const userData = await this.getUser();

        const user = userData.data.user;

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const data = {
                username: user.username,
                email: user.email,
                id: user._id
            };

            const body = JSON.stringify(data);

            await axios.post('/logout', body, config);

            this.redirect();
        } catch (error) {
            alert(error.response.data);
        }
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={this.state.redirectTo} />
        } else {
            return (    
                <div className='header'>
                    <Link className='logo-container' to='/'>
                        <Logo className='logo' />
                    </Link>
                    <div className='options'>
                        <Link className='option' to='/shop'>
                            Shop
                        </Link>
                        <Link className='option' to='/contact'>
                            Contact
                        </Link>
                        {
                            this.props.loggedIn 
                            ?
                            <Link className='option' to='#' onClick={this.logOut}>Sign Out</Link> 
                            :
                            (
                                <div>
                                    <Link className='option' to='/signin'>
                                        Sign In
                                    </Link>
                                    <Link to='signup'>
                                        Sign Up
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            );
        }
    }
};

export default Header;