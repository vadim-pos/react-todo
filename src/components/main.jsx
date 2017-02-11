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
                    text: 'Walk the dog',
                    completed: false
                },
                {
                    id: uuid(),
                    text: 'Clean the house',
                    completed: true
                },
                {
                    id: uuid(),
                    text: 'Feed the cat',
                    completed: true
                },
                {
                    id: uuid(),
                    text: 'Learn React',
                    completed: false
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
                    text,
                    completed: false
                }
            ]
        });
    }

    handleToggle = (id) => {
        let updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });

        this.setState({todos: updatedTodos});
    }

    handleSearch = (showCompleted, searchText) => {
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
                <TodoList todos={todos} onToggle={this.handleToggle}/>
                <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
        );
    }
};