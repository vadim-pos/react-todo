import expect from 'expect';
import df from 'deep-freeze-strict';
import { reducers } from '../../reducers/reducers.jsx';

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
                text: 'Test, Test, Test'
            };
            let state = [];
            let res = reducers.todosReducer(df(state), df(action));
            

            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);
        });

        it('should set completed status to opposite & update completedAt prop', () => {
            let action1 = {
                type: 'TOGGLE_TODO',
                id: '123'
            };
            let action2 = {
                type: 'TOGGLE_TODO',
                id: '12'
            };
            let state = [
                {
                    id: '12',
                    text: 'Test',
                    completed: true,
                    createdAt: 123123,
                    completedAt: 123123123
                },
                {
                    id: '123',
                    text: 'Test Test',
                    completed: false,
                    createdAt: 123123,
                    completedAt: undefined
                }
            ];
            let res1 = reducers.todosReducer(df(state), df(action1));
            let res2 = reducers.todosReducer(df(state), df(action2));

            expect(res1[1].completed).toEqual(!state[1].completed);
            expect(res1[1].completedAt).toBeA('number');

            expect(res2[0].completed).toEqual(!state[0].completed);
            expect(res2[0].completedAt).toEqual(undefined);
        });
    });
});