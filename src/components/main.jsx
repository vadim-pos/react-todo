import React from 'react';
import uuid from 'node-uuid';

import { TodoList } from './todo-list.jsx';
import { AddTodo } from './add-todo.jsx';
import { TodoSearch } from './todo-search.jsx';

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuid(),
                    text: 'Walk the dog'
                },
                {
                    id: uuid(),
                    text: 'Clean the house'
                },
                {
                    id: uuid(),
                    text: 'Feed the cat'
                },
                {
                    id: uuid(),
                    text: 'Learn React'
                }
            ]
        };
    }

    handleAddTodo = (text) => {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text
                }
            ]
        });
    }

    handleSearch(showCompleted, searchText) {
        this.setState({
            showCompleted,
            searchText: searchText.toLowerCase()
        });
    }

    render() {
        let {todos} = this.state;
        return(
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        );
    }
};