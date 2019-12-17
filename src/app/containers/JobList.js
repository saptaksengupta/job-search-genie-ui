import React from 'react';
import axios from 'axios';

// Importing react bootstrap components...
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';


import JobListItem from '../components/JobListItem';

import { setJobs } from '../actions/jobSearch.action';

import { getJobsByLocationUrl } from '../providers/job-search-api.provider';

import { connect } from 'react-redux';

class JobList extends React.Component {

    state = {
        isJobFetching: false
    }

    componentDidUpdate(prevProps) {
        if (prevProps.jobSearch.location !== this.props.jobSearch.location) {
            this.setState({ isJobFetching: true });
            this.fetchJobsBasedOnLocation(this.props.jobSearch.location);
        }
    }

    fetchJobsBasedOnLocation(location) {
        //TODO: Fetch Jobs based on location...
        axios.get(getJobsByLocationUrl(location))
            .then((resp) => {
                this.props.setJobs(resp.data);
                this.setState({
                    isJobFetching: false
                });
            }).catch((error) => {
                this.setState({
                    isJobFetching: false
                });
                console.log(error);
            })
    }

    render() {
        if (this.state.isJobFetching) {
            return (
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs md="12" lg="4" style={{textAlign: 'center'}}>
                            <Spinner animation="grow" variant="primary" />
                        </Col>
                    </Row>
                </Container>
            )
        }
        const filteredJobs = this.props.jobSearch.jobs;
        const jobList = filteredJobs.map((job) => <JobListItem className="job-list-item-container" key={job.id} job={job}></JobListItem>);
        return (
            <div className="job-list-container">
                {jobList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        jobSearch: state.jobSearch
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setJobs: (jobs) => {
            dispatch(setJobs(jobs))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobList);