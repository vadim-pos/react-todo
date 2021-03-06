import React from 'react';
import { connect } from 'react-redux';

import TodoItem from './todo-item.jsx';
import TodoAPI from '../api/todo-api.jsx';

export class TodoList extends React.Component {
    render() {
        let {todos, showCompleted, searchText} = this.props;
        let renderItems = () => {
            let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
            if (!filteredTodos.length) {
                return (<p className="container__message">Nothing To Do</p>);    
            }

            return filteredTodos.map((todo) => {
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
        return state;
    }
)(TodoList);