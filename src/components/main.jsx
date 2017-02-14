import React from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

import TodoList from './todo-list.jsx';
import AddTodo from './add-todo.jsx';
import TodoSearch from './todo-search.jsx';

export default class Main extends React.Component {
    render() {
        return(
            <div>
                <h1 className="page-title">Todo App</h1>
                <div className="row">
                    <div className="column small-centered small-11 medium-6 large-5">
                        <div className="container">
                            <TodoSearch/>
                            <TodoList/>
                            <AddTodo/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};