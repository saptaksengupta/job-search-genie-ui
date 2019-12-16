import React from 'react';
import JobListItem from '../components/JobListItem';

import { connect } from 'react-redux';

class JobList extends React.Component {

    componentDidUpdate(prevProps){
        if(prevProps.jobSearch.location !== this.props.jobSearch.location){
            this.fetchJobsBasedOnLocation(this.props.jobSearch.location);
        }
    }

    fetchJobsBasedOnLocation() {
        //TODO: Fetch Jobs based on location...
    }

    render() {
        return (
            <div className="job-list-container">
                <JobListItem></JobListItem>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        jobSearch: state.jobSearch
    }
}

export default connect(mapStateToProps, null)(JobList);