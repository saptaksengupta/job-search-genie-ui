import React from 'react';
import '../App.css';

// Importing react bootstrap components...
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// Importing custom functional Components...
import SearchBox from '../containers/SearchBox';
import AutoCompleteList from '../containers/AutoCompleteList';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <SearchBox></SearchBox>
            <AutoCompleteList></AutoCompleteList>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
