import React from 'react';

// Importing react bootstrap components...
import Form from 'react-bootstrap/Form';

export default class SearchBox extends React.Component {
    render() {
        return (
            <div>
                <Form.Control size="lg" type="text" placeholder="Location" />
            </div>
        );
    }
}