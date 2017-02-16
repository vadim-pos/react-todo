export default {
    filterTodos(todos, showCompleted, searchText) {
        let filteredTodos = todos;
        
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });

        filteredTodos = filteredTodos.filter((todo) => {
            return searchText ? todo.text.toLowerCase().indexOf(searchText) >= 0 : todo;
        });

        filteredTodos.sort((a,b) => {
            if (!a.completed && b.completed) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }
        });

        return filteredTodos;
    }
};