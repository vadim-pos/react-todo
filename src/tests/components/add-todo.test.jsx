import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import { AddTodo } from '../../components/add-todo.jsx';
import actions from '../../actions/actions.jsx';

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should dispatch addTodo with valid input data', () => {
        let testText = 'test value';
        let action = actions.startAddTodo();

        let spy = expect.createSpy();
        let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        let $elem = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = testText;
        TestUtils.Simulate.submit($elem.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should not dispatch addTodo when input data is invalid', () => {
        let testText = '';
        let spy = expect.createSpy();
        let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
        let $elem = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = testText;
        TestUtils.Simulate.submit($elem.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});