import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import { AddTodo } from '../../components/add-todo.jsx';

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should call onAddTodo() prop with valid input data', () => {
        let testText = 'test value';
        let spy = expect.createSpy();
        let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        let $elem = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = testText;
        TestUtils.Simulate.submit($elem.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(testText);
    });

    it('should not call onAddTodo() prop when input data is invalid', () => {
        let testText = '';
        let spy = expect.createSpy();
        let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        let $elem = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = testText;
        TestUtils.Simulate.submit($elem.find('form')[0]);

        expect(spy).toNotHaveBeenCalled(testText);
    });
});