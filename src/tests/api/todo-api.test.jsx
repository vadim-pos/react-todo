import expect from 'expect';

import { TodoAPI } from '../../api/todo-api.jsx';

describe('TodoAPI', () => {
    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    describe('setTodos', () => {
        beforeEach(() => {
            localStorage.removeItem('todos');
        });

        it('should set valid todos array', () => {
            let todos = [{
                id: 123,
                text: 'Test Test',
                completed: false
            }];
            TodoAPI.setTodos(todos);

            let actualTodos = JSON.parse(localStorage.getItem('todos'));

            expect(actualTodos).toEqual(todos);
        });

        it('should not set invalid todos array', () => {
            let invalidTodos = {
                id: 123,
                text: 'Test Test',
                completed: false
            };
            TodoAPI.setTodos(invalidTodos);

            expect(localStorage.getItem('todos')).toEqual(null);
        });
    });

    describe('getTodos', () => {
        it('should return empty array for invalid localStorage data', () => {
            let actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual([]);
        });

        it('should return saved array if localStorage data is valid', () => {
            let todos = [{
                id: 123,
                text: 'Test Test',
                completed: false
            }];
            
            localStorage.setItem('todos', JSON.stringify(todos));
            let actualTodos = TodoAPI.getTodos();
            
            expect(actualTodos).toEqual(todos);
        });
    });
});