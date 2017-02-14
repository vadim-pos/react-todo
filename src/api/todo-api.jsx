export default {
    setTodos(todos) {
        if (Array.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },
    
    getTodos() {
        let todos = [];
        let stringTodos = localStorage.getItem('todos');

        try {
            todos = JSON.parse(stringTodos);
        } catch(e) {
            console.log(e);
        }

        return Array.isArray(todos) ? todos : [];
    },

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