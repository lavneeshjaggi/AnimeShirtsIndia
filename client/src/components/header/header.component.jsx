import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import  { ReactComponent as Logo } from '../../assets/yellow-raven.svg';

import './header.styles.scss';

class Header extends React.Component {
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

            console.log('before: ', data);

            const body = JSON.stringify(data);

            console.log('after: ', body);

            await axios.post('/logout', body, config);

            console.log(body);
        } catch (error) {
            alert(error.response.data);
        }
    }

    render() {
        return (
            <div className='header'>
                <Link className='logo-container' to='/'>
                    <Logo className='logo' />
                </Link>
                <div className='options'>
                    <Link className='option' to='/shop'>
                        Shop
                    </Link>
                    <Link className='option' to='/shop'>
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
        )
    }
};

export default Header;