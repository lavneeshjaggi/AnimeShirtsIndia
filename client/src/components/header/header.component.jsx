import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

import  { ReactComponent as Logo } from '../../assets/yellow-raven.svg';

import './header.styles.scss';

const Header  = ({ currentUser }) => {
    const getUser = async () => {
        return await axios.get('/authenticated');
    }

    const logOut = async event => {
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
        } catch (error) {
            alert(error.response.data);
        }
    }

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
                    currentUser
                    ?
                    <Link className='option' to='#' onClick={logOut}>Sign Out</Link> 
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
};

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
}); 

export default connect(mapStateToProps)(Header);