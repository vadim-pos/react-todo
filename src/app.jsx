import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

// Components 
import Main from './components/main.jsx';

// Redux
import actions from './actions/actions.jsx';
import configureStore from './store/configure-store.jsx';

let store = configureStore();

store.subscribe(() => {
    console.log('New state: ', store.getState());
});

// Vendors
import 'jquery/dist/jquery.min.js';
import 'foundation-sites/dist/js/foundation.min.js';
// Load Foundation
$(document).foundation();

// Styles
import './scss/main.scss';

ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>
    , document.getElementById('app-container')
);