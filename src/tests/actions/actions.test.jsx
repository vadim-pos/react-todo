import expect from 'expect';
import actions from '../../actions/actions.jsx';

describe('Actions', () => {
    it('should generate search text action', () => {
        let action = {
            type: 'SET_SEARCH_TEXT',
            searchText: 'Test Test'
        };
        let res = actions.setSearchText(action.searchText);
        
        expect(res).toEqual(action);
    });

    it('should generate add todo action', () => {
        let action = {
            type: 'ADD_TODO',
            text: 'Test Test'
        };
        let res = actions.addTodo(action.text);
        
        expect(res).toEqual(action);
    });

    it('should generate toggle show completed action', () => {
        let action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };
        let res = actions.toggleShowCompleted();
        
        expect(res).toEqual(action);
    });

    it('should generate toggle todo action', () => {
        let action = {
            type: 'TOGGLE_TODO',
            id: 123
        };
        let res = actions.toggleTodo(123);
        
        expect(res).toEqual(action);
    });

    it('should generate add todos action', () => {
        let todos = [{
            id: 1123,
            text: 'text',
            completed: false,
            completedAt: undefined,
            createdAt: 123123
        }];
        let action = {
            type: 'ADD_TODOS',
            todos
        };
        let res = actions.addTodos(todos);
        
        expect(res).toEqual(action);
    });
});