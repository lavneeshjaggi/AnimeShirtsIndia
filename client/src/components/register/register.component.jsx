import React from 'react';
import { Link } from 'react-router-dom';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './register.styles.scss';

class Register extends React.Component {
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

        const { password, confirmPassword } = event.target;

        if (password !== confirmPassword) {
            alert('Passwords do not match');
        }

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
            <div className='register'>
                <h2 className='title'>Sign Up</h2>
                <span>Create your account</span>

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
                    <h4 className='option'>
                        Already have an account?
                        <Link className='route' to='/signin'>
                            Sign In
                        </Link>
                    </h4>
                </form>
            </div>
        )
    }
}

export default Register;