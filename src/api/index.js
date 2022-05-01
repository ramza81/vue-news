import axios from 'axios';

// 1. HTTP Request & Response default setting
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}

// 2. API Function List
function fetchNewsList() {
    // return axios.get(config.baseUrl + 'news/1.json');
    return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`);
}

export {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
}