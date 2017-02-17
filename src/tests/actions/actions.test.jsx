import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import expect from 'expect';

import firebase, { firebaseRef } from '../../firebase';

import actions from '../../actions/actions.jsx';

let createMockStore = configureMockStore([thunk]);

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
            todo: {
                id: '123jifwe12',
                text: 'test',
                completed: false,
                createdAt: 123123
            }
        };
        let res = actions.addTodo(action.todo);
        
        expect(res).toEqual(action);
    });

    it('should create todo and dispatch add todo action', (done) => {
        const store = createMockStore({});
        const todoText = 'Test Test';

        store.dispatch(actions.startAddTodo(todoText)).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toInclude({
                type: 'ADD_TODO'
            });
            expect(actions[0].todo).toInclude({
                text: todoText
            });
            done();
        }).catch(done);
    });

    it('should generate toggle show completed action', () => {
        let action = {
            type: 'TOGGLE_SHOW_COMPLETED'
        };
        let res = actions.toggleShowCompleted();
        
        expect(res).toEqual(action);
    });

    it('should generate update todo action', () => {
        let action = {
            type: 'UPDATE_TODO',
            id: 123,
            updates: {completed: false}
        };
        let res = actions.updateTodo(action.id, action.updates);
        
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

    it('should generate login action', () => {
        let action = {
            type: 'LOGIN',
            uid: '123juh123'
        };
        let res = actions.login(action.uid);

        expect(res).toEqual(action);
    });

    it('should generate logout action', () => {
        let action = {
            type: 'LOGOUT',
        };
        let res = actions.logout(action);

        expect(res).toEqual(action);
    });

    describe('Tests with firebase todos', () => {
        let testTodoRef;

        beforeEach((done) => {
            let todosRef = firebaseRef.child('todos');
            todosRef.remove().then(() => {
                testTodoRef = firebaseRef.child('todos').push();
                testTodoRef.set({
                    text: 'Test',
                    completed: false,
                    createdAt: 123123
                });
            })
            .then(() => done())
            .catch(done);
        });

        afterEach((done) => {
            testTodoRef.remove().then(() => done());
        });

        it('should toggle todo item and dispatch UPDATE_TODO action', (done) => {
            const store = createMockStore({});
            const action = actions.startToggleTodo(testTodoRef.key, true);
            store.dispatch(action).then(() => {
                const mockActions = store.getActions();

                expect(mockActions[0]).toInclude({
                    type: 'UPDATE_TODO',
                    id: testTodoRef.key
                });
                expect(mockActions[0].updates).toInclude({
                    completed: true
                });
                expect(mockActions[0].updates.completedAt).toExist();

                done();
            }, done);
        });

        it('should fill up todos state and dispatch ADD_TODOS', (done) => {
            const store = createMockStore({});
            const action = actions.startAddTodos();

            store.dispatch(action).then(() => {
                const mockActions = store.getActions();

                expect(mockActions[0].type).toEqual('ADD_TODOS');
                expect(mockActions[0].todos.length).toEqual(1);
                expect(mockActions[0].todos[0].text).toEqual('Test');

                done();
            }, done);
        });
    });
});