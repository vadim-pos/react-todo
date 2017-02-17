import expect from 'expect';
import df from 'deep-freeze-strict';
import reducers from '../../reducers/reducers.jsx';

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set search text', () => {
            let action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'Test'
            };
            let res = reducers.searchTextReducer(df(''), df(action));

            expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompletedReducer', () => {
        it('should set showCompleted status to opposite', () => {
            let action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };
            let state = false;
            let res = reducers.showCompletedReducer(df(state), df(action));

            expect(res).toEqual(!state);
        });
    });

    describe('todosReducer', () => {
        it('should add new todo item', () => {
            let action = {
                type: 'ADD_TODO',
                todo: {
                    id: '123j21a',
                    text: 'test',
                    completed: false,
                    createdAt: 123321
                }
            };
            let state = [];
            let res = reducers.todosReducer(df(state), df(action));
            

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(action.todo);
        });

        it('should update todo item of the todos state', () => {
            let todos = [{
                id: '12',
                text: 'Test',
                completed: true,
                createdAt: 123123,
                completedAt: 123123123
            }];
            let updates = {
                completed: false,
                completedAt: null
            };
            let action = {
                type: 'UPDATE_TODO',
                id: todos[0].id,
                updates
            };
            let res = reducers.todosReducer(df(todos), df(action));

            expect(res[0].completed).toEqual(updates.completed);
            expect(res[0].completedAt).toEqual(updates.completedAt);
            expect(res[0].text).toEqual(todos[0].text);
        });

        it('should update state with existing todos', () => {
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
            let res = reducers.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(todos[0]);
        });

        describe('authReducer', () => {
            it('should store uid on login', () => {
                let action = {
                    type: 'LOGIN',
                    uid: '3ui123i1'
                };
                let res = reducers.authReducer(null, df(action));

                expect(res).toEqual({uid: action.uid});
            });

            it('should clean up auth prop of the store', () => {
                let auth = {
                    uid: '3ui123i1'
                };
                let action = {
                    type: 'LOGOUT'
                };
                let res = reducers.authReducer(df(auth), df(action));

                expect(res).toEqual({});
            });
        });
    });
});