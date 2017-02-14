import React from 'react';
import { connect } from 'react-redux';

import TodoItem from './todo-item.jsx';

export class TodoList extends React.Component {
    render() {
        let {todos} = this.props;
        let renderItems = () => {
            if (!todos.length) {
                return (<p className="container__message">Nothing To Do</p>);    
            }

            return todos.map((todo) => {
                return(<TodoItem key={todo.id} {...todo}/>);
            });
        };
        return(
            <div>{renderItems()}</div>
        );
    }
}

export default connect(
    (state) => {
        return {
            todos: state.todos
        };
    }
)(TodoList);