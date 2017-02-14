import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import configureStore from '../../store/configure-store.jsx';

import ConnectedTodoList, { TodoList } from '../../components/todo-list.jsx';
import ConnectedTodoItem, { TodoItem } from '../../components/todo-item.jsx';

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('shold render TodoItem components depends on number of passed items', () => {
        let todos = [
            {
                id: 1,
                text: 'Test',
                completed: false,
                completedAt: undefined,
                cratedAt: 123123123
            },
            {
                id: 2,
                text: 'Test',
                completed: false,
                completedAt: undefined,
                cratedAt: 123123123
            }
        ];

        let store = configureStore({
            todos
        });
        let provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <ConnectedTodoList/>
            </Provider>
        );
        let todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
        let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodoItem);

        expect(todosComponents.length).toBe(todos.length);
    });

    it('shold render message if no todos passed', () => {
        let todos = [];
        let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        let $elem = $(ReactDOM.findDOMNode(todoList));

        expect($elem.find('.container__message').length).toBe(1);
    });
});