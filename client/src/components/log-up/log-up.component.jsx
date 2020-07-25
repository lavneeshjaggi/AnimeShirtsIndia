import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './log-up.styles.scss';

class LogUp extends React.Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value })
    };

    render() {
        return (
            <div className='log-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='name' 
                        type='text'
                        label='Name'
                        handleChange={this.handleChange}
                        value={this.state.name}
                        required
                    />
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
                        required
                    />
                    <FormInput
                        name='confirmPassword' 
                        type='password'
                        label='Confirm Password'
                        handleChange={this.handleChange}
                        value={this.state.confirmPassword}
                        required
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default LogUp;