import React from 'react';

import { TodoList } from './todo-list.jsx';

export class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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

    render() {
        let {todos} = this.state;
        return(
            <div>
                <TodoList todos={todos}/>
            </div>
        );
    }
};