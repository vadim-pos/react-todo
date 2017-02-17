import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

// Components 
import Main from './components/main.jsx';
import Login from './components/login.jsx';

// API
import TodoAPI from './api/todo-api.jsx';
import firebase from './firebase/index.js';

// Redux
import actions from './actions/actions.jsx';
import configureStore from './store/configure-store.jsx';

let store = configureStore();

// Redirection with firebase auth state
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        store.dispatch(actions.login(user.uid));
        store.dispatch(actions.startAddTodos());
        hashHistory.push('/todos');
    } else {
        store.dispatch(actions.logout());
        hashHistory.push('');
    }
});

// Vendors
import 'jquery/dist/jquery.min.js';
import 'foundation-sites/dist/js/foundation.min.js';
$(document).foundation();

// Styles
import './scss/main.scss';

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/">
                <Route path="todos" component={Main}/>
                <IndexRoute component={Login}/>  
            </Route>
        </Router>
    </Provider>
    , document.getElementById('app-container')
);