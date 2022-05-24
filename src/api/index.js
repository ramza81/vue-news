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

async function fetchJobsList() {
    try {
        const response = await axios.get(`${config.baseUrl}jobs/1.json`);   
        return response;
    } catch (error) {
        console.log(error);
    }
}

async function fetchAskList() {
    try {
        const response = await axios.get(`${config.baseUrl}ask/1.json`);        
        return response;
    } catch (error) {
        console.log(error);
    }
}

async function fetchList(pageName) {
    try {
        const response = await axios.get(`${config.baseUrl}${pageName}/1.json`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

async function fetchUserInfo(username) {
    try {
        const response = await axios.get(`${config.baseUrl}user/${username}.json`);
        return response;
    } catch (error) {
        console.log(error);
    }
}

async function fetchItem(askid) {
    try {
        const response = await axios.get(`${config.baseUrl}item/${askid}.json`);
        return response;
    } catch (error) {
        console.log(error);
    }
}



export {
    fetchNewsList,
    fetchJobsList,
    fetchAskList,
    fetchList,
    fetchUserInfo,
    fetchItem,
}