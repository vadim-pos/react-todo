import { combineReducers, compose, createStore } from 'redux';
import { reducers } from '../reducers/reducers.jsx';

let { searchTextReducer, showCompletedReducer, todosReducer } = reducers;

export let configureStore = () => {
    let reducer = combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer
    });

    let store = createStore(reducer, compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};