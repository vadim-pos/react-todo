import React from 'react';

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
                    id: 1,
                    text: 'Walk the dog'
                },
                {
                    id: 2,
                    text: 'Clean the house'
                },
                {
                    id: 3,
                    text: 'Feed the cat'
                },
                {
                    id: 4,
                    text: 'Learn React'
                }
            ]
        };
    }

    handleAddTodo(text) {
        console.log('New todo ' + text);
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