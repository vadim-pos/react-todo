import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import { TodoList } from '../../components/todo-list.jsx';
import { TodoItem } from '../../components/todo-item.jsx';

describe('TodoList', () => {
    it('should exist', () => {
        expect(TodoList).toExist();
    });

    it('shold render TodoItem components depends on number of passed items', () => {
        let todos = [
            {id: 1, text: 'Test'},
            {id: 2, text: 'Test2'}
        ];
        let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
        let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, TodoItem);

        expect(todosComponents.length).toBe(todos.length);
    });
});