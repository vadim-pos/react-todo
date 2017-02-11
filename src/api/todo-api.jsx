export let TodoAPI = {
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
    }
};