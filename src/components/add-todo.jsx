import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/actions.jsx';

export class AddTodo extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        let { dispatch } = this.props;
        let newTodoText = this.refs.todoText.value;

        if (newTodoText) {
            dispatch(actions.addTodo(newTodoText));
            this.refs.todoText.value = '';
        } else {
            this.refs.todoText.focus();
        }
    }

    render() {
        return(
            <div className="container__footer">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="todoText" placeholder="What you need to do?"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );
    }
}

export default connect()(AddTodo);