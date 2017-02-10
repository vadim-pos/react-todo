import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

// Components 
import { Main } from './components/main.jsx';

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