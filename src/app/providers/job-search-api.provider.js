const BASE_URL = 'http://localhost:9998';


export const getJobsByLocationUrl = (location) => {
    return `${BASE_URL}/jobs/search?location=${location}`;
}