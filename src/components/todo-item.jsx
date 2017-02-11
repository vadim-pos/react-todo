import React from 'react';

export class TodoItem extends React.Component {
    render() {
        let {id, text, completed} = this.props;
        return(
            <div onClick={() => {this.props.onToggle(id)}}>
                <input type="checkbox" checked={completed}/>
                {text}
            </div>
        );
    }
}