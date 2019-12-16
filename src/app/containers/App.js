import React from 'react';
import '../App.css';
import JobList from './JobList';

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
        <Row className="justify-content-md-center">
          <Col xs md="12" lg="4">
            <h2>Job Search Genie</h2>
          </Col>  
        </Row>
        <Row className="justify-content-md-center">
          <Col xs md="6" lg="4">
            <SearchBox></SearchBox>
          </Col>
        </Row>
        <Row style={{marginTop: '70px'}}>
          <Col>
            <JobList></JobList>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
