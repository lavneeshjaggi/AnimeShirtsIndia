import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './log-in.styles.scss';

class LogIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            redirectTo: null
        }
    }

    componentDidMount() {
        this.redirect();
    }

    redirect = async () => {
        const response = await axios.get('/authenticated');

        if (response.data.user) {
            this.setState({
                redirectTo: '/'
            });
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;
    
        const newUser = {
            username: email,
            email: email,
            password: password
        }

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const body = JSON.stringify(newUser);

            await axios.post('/login', body, config);

            this.redirect();

            this.setState({
                email: '',
                password: '',
            });
        } catch (error) {
            alert(error.response.data);
        }
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    };

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={this.state.redirectTo} />
        } else {
            return (
                <div className='log-in'>
                    <h2 className='title'>Sign In</h2>
                    <span>Sign into your account</span>

                    <form onSubmit={this.handleSubmit}>
                        <FormInput 
                            name='email' 
                            type='email'
                            label='Email'
                            handleChange={this.handleChange}
                            value={this.state.email}
                            required
                        />
                        <FormInput
                            name='password' 
                            type='password'
                            label='Password'
                            handleChange={this.handleChange}
                            value={this.state.password}
                            minLength='6'
                        />
                        <div className='buttons'>
                            <CustomButton 
                                type='submit'
                            >
                                sign in
                            </CustomButton>
                            <CustomButton 
                                type='submit' 
                                isGoogleSignIn
                            >
                                sign in with google
                            </CustomButton>
                        </div>
                        <h4 className='option'>
                            Don't have an account? 
                            <Link className='route' to='/signup'>
                                Sign Up
                            </Link>
                        </h4>
                    </form>
                </div>
            )
        }
    }
};

export default LogIn;