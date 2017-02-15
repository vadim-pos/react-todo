import firebase, { firebaseRef } from '../firebase';
import moment from 'moment';

let setSearchText = searchText => {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    };
};
let addTodo = todo => {
    return {
        type: 'ADD_TODO',
        todo
    };
};
let startAddTodo = text => {
    return (dispatch, getState) => {
        let todo = {
            text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: null
        };
        let todoRef = firebaseRef.child('todos').push(todo);

        return todoRef.then(() => {
            dispatch(addTodo({
                ...todo,
                id: todoRef.key
            }));
        });
    };
};
let addTodos = todos => {
    return {
        type: 'ADD_TODOS',
        todos
    };
};
let toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    };
};
let toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};

export default {
    setSearchText,
    addTodo,
    toggleShowCompleted,
    toggleTodo,
    addTodos,
    startAddTodo
};