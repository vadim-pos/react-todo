import expect from 'expect';

import TodoAPI from '../../api/todo-api.jsx';

describe('TodoAPI', () => {
    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    describe('filterTodos', () => {
        let todos = [
            {id: 1, text: 'Test', completed: true},
            {id: 2, text: 'Other Test', completed: false},
            {id: 3, text: 'Another Test', completed: true}
        ];

        it('should return all todo items if showCompleted = true', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });

        it('should return only uncompleted todo items if showCompleted = false', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, false, '');
            expect(filteredTodos.length).toBe(1);
        });

        it('should sort todo items by completed prop (ucompleted first)', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos[0].completed).toBe(false);
        });

        it('should filter todos by searchText', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, 'other');
            expect(filteredTodos.length).toBe(2);
        });

        it('should return all todos if no searchText passed', () => {
            let filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });
    });
});