import React from 'react';

export class TodoItem extends React.Component {
    render() {
        let {id, text} = this.props;
        return(
            <div>
                <div>{`${id}. ${text}`}</div>
            </div>
        );
    }
}