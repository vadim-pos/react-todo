import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import configureStore from '../../store/configure-store.jsx';
import { Main } from '../../components/main.jsx';
import TodoList from '../../components/todo-list.jsx';

describe('Main', () => {
    it('should exist', () => {
        expect(Main).toExist();
    });

    it('should render TodoList component', () => {
        let store = configureStore();
        let provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
                <Main/>
            </Provider>
        );
        let main = TestUtils.scryRenderedComponentsWithType(provider, Main)[0];
        let todoList = TestUtils.scryRenderedComponentsWithType(main, TodoList);

        expect(todoList.length).toEqual(1);
    });
});