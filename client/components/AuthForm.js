import React, { Component } from 'react';

class AuthForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: '',
        };
    }

    onSubmit(e) {
        e.preventDefault();
        const { email, password } = this.state;
        this.props.onSubmit({ email, password });
    }

    render() {
        return (
            <div className="row">
                <form className="col s4" onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input 
                            placeholder="Email"
                            value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                    </div>
                    <div className="input-field">
                        <input 
                            placeholder="Password"
                            type="password"
                            value={this.state.password}
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                    </div>
                    <div className="errors">
                        {this.props.errors.map((err) => <div key={err}>{err}</div>)}
                    </div>
                    <button className="btn">Submit</button>
                </form>
            </div>
        );
    }
};

export default AuthForm;