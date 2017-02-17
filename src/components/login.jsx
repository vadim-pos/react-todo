import React from 'react';
import  * as redux from 'react-redux';

import actions from '../actions/actions.jsx';

export class Login extends React.Component {
    onLogin = () => {
        let { dispatch } = this.props;
        dispatch(actions.startLogin());
    }

    render() {
        return (
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="column small-centered small-10 medium-6 large-4">
                        <div className="callout callout-auth">
                            <h3>Login</h3>
                            <p>Please login with github account</p>
                            <button className="button" onClick={this.onLogin}>Login With Github</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default redux.connect()(Login);