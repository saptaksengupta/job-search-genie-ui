export const SET_LOCATION = 'SET_LOCATION';
export const SET_JOBS = 'SET_JOBS';

export const setLocation = (location) =>{
    return {
        type: SET_LOCATION,
        payload: location
    }
}

export const setJobs = (jobs) =>{
    return {
        type: SET_JOBS,
        payload: jobs
    }
}