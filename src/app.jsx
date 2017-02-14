import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

// Components 
import { Main } from './components/main.jsx';

// Redux
import { actions } from './actions/actions.jsx';
import { configureStore } from './store/configure-store.jsx';

let store = configureStore();

store.subscribe(() => {
    console.log('New state: ', store.getState());
});
store.dispatch(actions.addTodo('qweqwqwedwqe'));
store.dispatch(actions.setSearchText('ololo'));
store.dispatch(actions.toggleShowCompleted());

// Vendors
import 'jquery/dist/jquery.min.js';
import 'foundation-sites/dist/js/foundation.min.js';
// Load Foundation
$(document).foundation();

// Styles
import './scss/main.scss';

ReactDOM.render(
    <Main/>
    , document.getElementById('app-container')
);