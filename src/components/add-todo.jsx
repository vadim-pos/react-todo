import React from 'react';

export class AddTodo extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        let newTodoText = this.refs.todoText.value;

        if (newTodoText) {
            this.props.onAddTodo(newTodoText);
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