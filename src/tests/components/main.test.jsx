import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import { Main } from '../../components/main.jsx';

describe('Main', () => {
    it('should exist', () => {
        expect(Main).toExist();
    });

    describe('handleAddTodo', () => {
        it('should add new todo item to the todos array', () => {
            let todoText = 'Test Test';
            let main = TestUtils.renderIntoDocument(<Main/>);

            main.setState({todos: []});
            main.handleAddTodo(todoText);

            expect(main.state.todos[0].text).toBe(todoText);
        });
    });
});