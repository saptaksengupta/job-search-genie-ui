import React from 'react';
import AutoCompleteList from '../containers/AutoCompleteList';

// Importing react bootstrap components...
import Form from 'react-bootstrap/Form';

export default class SearchBox extends React.Component {

    state = {
        searchQuery: ''
    };

    handleSearchChange = event => {
        this.setState({
            searchQuery: event.target.value
        });
    }

    render() {
        return (
            <div>
                <Form.Control size="lg" type="text" placeholder="Location" onKeyUp={this.handleSearchChange} />
                <AutoCompleteList searchQuery={this.state.searchQuery}></AutoCompleteList>
            </div>
        );
    }
}