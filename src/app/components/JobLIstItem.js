import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class JobListItem extends React.Component {
    render() {
        return (
            <div className="job-list-item">
                <h3 style={{ color: '#34495e' }}>Software Developer Full Stack</h3>
                <Row className="loc-desc">
                    <Col>
                        <div>
                            <span>Company: Vattenfall</span>
                            ,&nbsp;Location: <span>Berlin</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div style={{color: '#7f8c8d'}}>
                            Some Learge Desc, Some Learge Desc Some Learge Desc Some Learge Desc Some Learge Desc Some Learge Desc, Some Learge Desc
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}