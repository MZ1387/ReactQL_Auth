import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import CurrentUserQuery from '../queries/CurrentUser';
import LoginMutation from '../mutations/Login';
import AuthForm from './AuthForm';

class LoginForm extends Component {
    onSubmit({ email, password }) {
        this.props.mutate({
            variables: { email, password },
            refetchQueries: [{ query: CurrentUserQuery }]
        });
    }

    render() {
        return (
            <div>
                <h3>Login</h3>
                <AuthForm onSubmit={this.onSubmit.bind(this)} />
            </div>
        );
    }
};

export default graphql(LoginMutation)(LoginForm);