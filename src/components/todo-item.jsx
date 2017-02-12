import React from 'react';
import moment from 'moment';

export class TodoItem extends React.Component {
    render() {
        let {id, text, completed, createdAt, completedAt} = this.props;
        let renderDate = () => {
            let message = 'Created';
            let timestamp = createdAt;
            
            if (completed) {
                message = 'Completed';
                timestamp = completedAt;
            }

            return `${message} ${moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')}`;
        };

        return(
            <div onClick={() => {this.props.onToggle(id)}}>
                <input type="checkbox" checked={completed}/>
                <p>{text}</p>
                <p>{renderDate()}</p>
            </div>
        );
    }
}