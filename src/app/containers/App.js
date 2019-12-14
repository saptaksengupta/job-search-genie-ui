import React from 'react';
import '../App.css';

// Importing react bootstrap components...
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// Importing custom functional Components...
import SearchBox from '../containers/SearchBox';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <SearchBox></SearchBox>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
