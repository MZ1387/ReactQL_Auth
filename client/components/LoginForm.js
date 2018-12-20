import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import CurrentUser from '../queries/CurrentUser';
import Logout from '../mutations/Logout';
import AuthForm from './AuthForm';

class LoginForm extends Component {
    render() {
        return (
            <div>
                <h3>Login</h3>
                <AuthForm />
            </div>
        );
    }
};

export default LoginForm;