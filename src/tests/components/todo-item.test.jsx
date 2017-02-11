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
});