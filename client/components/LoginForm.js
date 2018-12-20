import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import CurrentUser from '../queries/CurrentUser';
import Logout from '../mutations/Logout';

class LoginForm extends Component {
    render() {
        return (
            <div>
                Login
            </div>
        );
    }
};

export default LoginForm;