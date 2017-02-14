import React from 'react';

export default class TodoSearch extends React.Component {
    handleSearch = () => {
        let showCompleted = this.refs.showCompleted.checked,
            searchText    = this.refs.searchText.value;

        this.props.onSearch(showCompleted, searchText);
    }

    render() {
        return(
            <div className="container__header">
                <div>
                    <input type="text" ref="searchText" onChange={this.handleSearch} placeholder="Search todos"/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
                        Show completed todos
                    </label>
                </div>
            </div>
        );
    }
}