import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import CurrentUserQuery from '../queries/CurrentUser';
import LoginMutation from '../mutations/Login';
import AuthForm from './AuthForm';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = { errors: [] };
    }

    onSubmit({ email, password }) {
        this.props.mutate({
            variables: { email, password },
            refetchQueries: [{ query: CurrentUserQuery }]
        }).catch((res) => {
            const errors = res.graphQLErrors.map((err) => err.message);
            this.setState({ errors });
        });
    }

    render() {
        return (
            <div>
                <h3>Login</h3>
                <AuthForm 
                    onSubmit={this.onSubmit.bind(this)} 
                    errors={this.state.errors} 
                />
            </div>
        );
    }
};

export default graphql(LoginMutation)(LoginForm);