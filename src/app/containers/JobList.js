import React from 'react';
import axios from 'axios';
import JobListItem from '../components/JobListItem';

import { setJobs } from '../actions/jobSearch.action';

import { getJobsByLocationUrl } from '../providers/job-search-api.provider';

import { connect } from 'react-redux';

class JobList extends React.Component {

    componentDidUpdate(prevProps) {
        if (prevProps.jobSearch.location !== this.props.jobSearch.location) {
            this.fetchJobsBasedOnLocation(this.props.jobSearch.location);
        }
    }

    fetchJobsBasedOnLocation(location) {
        //TODO: Fetch Jobs based on location...
        axios.get(getJobsByLocationUrl(location))
            .then((resp) => {
                this.props.setJobs(resp.data);
            }).catch((error) => {
                console.log(error);
            })
    }

    render() {
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