import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class JobListItem extends React.Component {

    onJobClick = (url) => {
        window.open(url);
    }

    render() {
        const job = this.props.job;
        return (
            <div className="job-list-item" onClick={(e) => this.onJobClick(job.url)}>
                <h3 style={{ color: '#34495e' }}>{job.title}</h3>
                <Row className="loc-desc">
                    <Col>
                        <div>
                            <span>Company: {job.company}</span>
                            ,&nbsp;Location: <span>{job.location}</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div style={{color: '#7f8c8d'}} dangerouslySetInnerHTML={{__html: job.description}}></div>
                    </Col>
                </Row>
            </div>
        )
    }
}