import * as redux from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/reducers.jsx';

let { searchTextReducer, showCompletedReducer, todosReducer } = reducers;

export default function configureStore(initialState={}) {
    let reducer = redux.combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer
    });

    let store = redux.createStore(reducer, initialState, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};