let setSearchText = searchText => {
    return {
        type: 'SET_SEARCH_TEXT',
        searchText
    };
};
let addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        text
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
    toggleTodo
};