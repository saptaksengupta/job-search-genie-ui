import React from 'react';
import { connect } from 'react-redux';

import AutoCompleteList from '../containers/AutoCompleteList';

// Importing react bootstrap components...
import Form from 'react-bootstrap/Form';

class SearchBox extends React.Component {

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
            <div style={{ textAlign: 'left' }}>
                <Form.Control size="lg" type="text" placeholder="Location" onKeyUp={this.handleSearchChange} />
                <AutoCompleteList searchQuery={this.state.searchQuery}></AutoCompleteList>
            </div>
        );
    }
}

export default connect(null, null)(SearchBox);