import React from 'react';
import * as redux from 'react-redux';

import TodoList from './todo-list.jsx';
import AddTodo from './add-todo.jsx';
import TodoSearch from './todo-search.jsx';
import actions from '../actions/actions.jsx';

export class Main extends React.Component {
    onLogout = e => {
        e.preventDefault();
        let { dispatch } = this.props;
        
        dispatch(actions.startLogout());
    }

    render() {
        return(
            <div>
                <div className="page-actions">
                    <a href="#" onClick={this.onLogout}>Logout</a>
                </div>
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

export default redux.connect()(Main);