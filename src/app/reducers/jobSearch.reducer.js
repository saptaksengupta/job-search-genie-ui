import { SET_LOCATION, SET_JOBS } from "../actions/jobSearch.action";


export default (state = {
    location: '',
    jobs: []
}, action) => {
    switch (action.type) {
        case SET_LOCATION:
            state = {
                ...state,
                location: action.payload
            }
            return state;
        case SET_JOBS:
            state = {
                ...state,
                jobs: action.payload
            }
            return state;
        default:
            return state;
    }
}

