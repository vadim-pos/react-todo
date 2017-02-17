import uuid from 'node-uuid';
import moment from 'moment';

let searchTextReducer = (state = '', action) => {
    switch(action.type) {
        case 'SET_SEARCH_TEXT':
            return action.searchText;
        default:
            return state;
    }
};
let showCompletedReducer = (state = false, action) => {
    switch(action.type) {
        case 'TOGGLE_SHOW_COMPLETED':
            return !state;
        default:
            return state;
    }
};
let todosReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                action.todo
            ];
        case 'UPDATE_TODO':
            return state.map(todo => {
                if (todo.id === action.id) {
                    return {
                        ...todo,
                        ...action.updates
                    };
                }
                return todo;
            });
        case 'ADD_TODOS':
            return [
                ...state,
                ...action.todos
            ];
        default:
            return state;
    }
};
let authReducer = (state = {}, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                uid: action.uid
            };
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
};

export default {
    searchTextReducer,
    showCompletedReducer,
    todosReducer,
    authReducer
};