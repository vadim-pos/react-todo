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

        it('should set createdAt prop as a number of milliseconds', () => {
            let todoText = 'Test Test';
            let main = TestUtils.renderIntoDocument(<Main/>);

            main.setState({todos: []});
            main.handleAddTodo(todoText);

            expect(main.state.todos[0].createdAt).toBeA('number');
        });
    });

    describe('handleToggle', () => {

        it('should toggle completed prop of an item', () => {
            let todoTest = {
                id: 123,
                text: 'Test Test',
                completed: false,
                createdAt: 0,
                completedAt: undefined
            };
            let main = TestUtils.renderIntoDocument(<Main/>);
            main.setState({todos: [todoTest]});

            expect(main.state.todos[0].completed).toBe(false);
            main.handleToggle(todoTest.id);
            expect(main.state.todos[0].completed).toBe(true);
        });

        it('should set completedAt prop as a number of milliseconds for completed item', () => {
            let todoTest = {
                id: 123,
                text: 'Test Test',
                completed: false,
                createdAt: 0,
                completedAt: 1232142
            };
            let main = TestUtils.renderIntoDocument(<Main/>);
            main.setState({todos: [todoTest]});

            main.handleToggle(todoTest.id);
            expect(main.state.todos[0].completedAt).toBeA('number');
        });

        it('should set completedAt prop as undefined for incompleted item', () => {
            let todoTest = {
                id: 123,
                text: 'Test Test',
                completed: true,
                createdAt: 0,
                completedAt: undefined
            };
            let main = TestUtils.renderIntoDocument(<Main/>);
            main.setState({todos: [todoTest]});

            main.handleToggle(todoTest.id);
            expect(main.state.todos[0].completedAt).toBeA('undefined');
        });
    });

});