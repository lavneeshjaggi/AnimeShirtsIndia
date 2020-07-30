import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/yellow-raven.svg';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';

const Header  = ({ currentUser }) => {
    const logOut = async event => {
        const response = await axios.get('/authenticated');

        const user = response.data.user;

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const data = {
                cart: user.cart,
                name: user.name,
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
                    currentUser ? 
                        <Link className='option' to='/signin' onClick={logOut}>
                            Sign Out
                        </Link> 
                    : (
                        <div>
                            <Link className='option' to='/signin'>
                                Sign In
                            </Link>
                        </div>
                    )
                }
                <CartIcon />
            </div>
            <CartDropdown />
        </div>
    );   
};

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
}); 

export default connect(mapStateToProps)(Header);