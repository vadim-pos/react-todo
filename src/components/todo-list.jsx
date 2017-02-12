import React from 'react';

import { TodoItem } from './todo-item.jsx';

export class TodoList extends React.Component {
    render() {
        let {todos} = this.props;
        let renderItems = () => {
            if (!todos.length) {
                return (<p className="container__message">Nothing To Do</p>);    
            }

            return todos.map((todo) => {
                return(<TodoItem key={todo.id} {...todo} onToggle={this.props.onToggle}/>);
            });
        };
        return(
            <div>{renderItems()}</div>
        );
    }
}