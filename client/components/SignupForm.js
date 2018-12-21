import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { hashHistory } from 'react-router';
import CurrentUserQuery from '../queries/CurrentUser';
import SignupMutation from '../mutations/Signup';
import AuthForm from './AuthForm';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = { errors: [] };
    }

    componentWillUpdate(nextProps) {
        if (!this.props.data.user && nextProps.data.user) {
            hashHistory.push('/dashboard');
        }
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
                <h3>Signup</h3>
                <AuthForm 
                    onSubmit={this.onSubmit.bind(this)} 
                    errors={this.state.errors} 
                />
            </div>
        );
    }
};

export default graphql(CurrentUserQuery)(
    graphql(SignupMutation)(SignupForm)
);