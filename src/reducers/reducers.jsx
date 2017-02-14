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
                {
                    id: uuid(),
                    text: action.text,
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (todo.id === action.id) {
                    let newCompleted = !todo.completed;

                    return {
                        ...todo,
                        completed: newCompleted,
                        completedAt: newCompleted ? moment().unix() : undefined
                    };
                }
                return todo;
            });
        default:
            return state;
    }
};

export default {
    searchTextReducer,
    showCompletedReducer,
    todosReducer
};