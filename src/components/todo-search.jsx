import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions/actions.jsx';

export class TodoSearch extends React.Component {
    render() {
        let { dispatch, showCompleted, searchText } = this.props;

        return(
            <div className="container__header">
                <div>
                    <input type="text" ref="searchText" placeholder="Search todos" value={searchText} onChange={() => {
                            let searchText = this.refs.searchText.value;
                            dispatch(actions.setSearchText(searchText));
                        }}/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted"  checked={showCompleted} onChange={() => {
                            dispatch(actions.toggleShowCompleted());
                        }}/>
                        Show completed todos
                    </label>
                </div>
            </div>
        );
    }
}

export default connect(
    state => {
        return {
            showCompleted: state.showCompleted,
            searchText: state.searchText
    };
})(TodoSearch);