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
});