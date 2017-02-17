import firebase, { firebaseRef, githubProvider } from '../firebase';
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
        let uid = getState().auth.uid;
        let todoRef = firebaseRef.child(`users/${uid}/todos`).push(todo);

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
let startAddTodos = () => {
    return (dispatch, getState) => {
        let uid = getState().auth.uid;
        let todosRef = firebaseRef.child(`users/${uid}/todos`);

        return todosRef.once('value').then((snapshot) => {
            let todos = snapshot.val() || {};
            let parsedTodos = [];

            Object.keys(todos).forEach((todoId) => {
                parsedTodos.push({
                    id: todoId,
                    ...todos[todoId]
                });
            });

            dispatch(addTodos(parsedTodos));
        });
    };
};
let toggleShowCompleted = () => {
    return {
        type: 'TOGGLE_SHOW_COMPLETED'
    };
};
let updateTodo = (id, updates) => {
    return {
        type: 'UPDATE_TODO',
        id,
        updates
    };
};
let startToggleTodo = (id, completed) => {
    return (dispatch, getState) => {
        let uid = getState().auth.uid;
        let todoRef = firebaseRef.child(`users/${uid}/todos/${id}`);
        let updates = {
            completed,
            completedAt: completed ? moment().unix() : null
        };

        return todoRef.update(updates).then(() => {
            dispatch(updateTodo(id, updates));
        });
    };
};
let startLogin = () => {
    return (dispatch, getState) => {
        return firebase.auth().signInWithPopup(githubProvider).then(
            (res) => {console.log('Work', res)},
            (err) => {console.log('Error', err)}
        );
    };
};
let startLogout = () => {
    return (dispatch, getState) => {
        return firebase.auth().signOut().then(
            () => {console.log('Logout')}
        );
    };
};
let login = (uid) => {
    return {
        type: 'LOGIN',
        uid
    };
};
let logout = () => {
    return {
        type: 'LOGOUT'
    };
};

export default {
    setSearchText,
    addTodo,
    toggleShowCompleted,
    updateTodo,
    addTodos,
    startAddTodo,
    startToggleTodo,
    startAddTodos,
    startLogin,
    startLogout,
    login,
    logout
};