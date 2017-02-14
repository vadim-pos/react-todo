import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import { TodoItem } from '../../components/todo-item.jsx';

describe('TodoItem', () => {
    it('should exist', () => {
        expect(TodoItem).toExist();
    });

    it('should dispatch toggleTodo action when selected', () => {
        let todoTest = {
            id: 123,
            text: 'Test Test',
            completed: false
        };
        let spy = expect.createSpy();
        let todoItem = TestUtils.renderIntoDocument(<TodoItem {...todoTest} dispatch={spy}/>);
        
        let $elem = $(ReactDOM.findDOMNode(todoItem));
        TestUtils.Simulate.click($elem.find('input')[0]);

        expect(spy).toHaveBeenCalledWith({
            type: 'TOGGLE_TODO',
            id: todoTest.id
        });
    });
});