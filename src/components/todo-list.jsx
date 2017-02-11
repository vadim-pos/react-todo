import React from 'react';

import { TodoItem } from './todo-item.jsx';

export class TodoList extends React.Component {
    render() {
        let {todos} = this.props;
        let renderItems = () => {
            return todos.map((todo) => {
                return(<TodoItem key={todo.id} {...todo} onToggle={this.props.onToggle}/>);
            });
        };
        return(
            <div>{renderItems()}</div>
        );
    }
}