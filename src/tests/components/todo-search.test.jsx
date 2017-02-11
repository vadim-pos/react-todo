import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import { TodoSearch } from '../../components/todo-search.jsx';

describe('TodoSearch', () => {
    it('should exist', () => {
        expect(TodoSearch).toExist();
    });

    it('should call onSearch with input text value', () => {
        let testText = 'Test';
        let spy = expect.createSpy();
        let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

        todoSearch.refs.searchText.value = testText;
        TestUtils.Simulate.change(todoSearch.refs.searchText);

        expect(spy).toHaveBeenCalledWith(false, testText);
    });

    it('should call onSearch with input checked value', () => {
        let spy = expect.createSpy();
        let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
        
        todoSearch.refs.showCompleted.checked = true;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);

        expect(spy).toHaveBeenCalledWith(true, '');
    });
});