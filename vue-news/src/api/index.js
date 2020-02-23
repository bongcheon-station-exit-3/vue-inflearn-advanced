import axios from 'axios';

// 1. HTTP Request & Response 기본 설정 
const config = {
    baseUrl: 'https://hacker-news.firebaseio.com/v0/'
};

// 2.  API 함수 정리
function fetchNewsList() {
    return axios.get(`${config.baseUrl}newstories.json?print=pretty`);
}

function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobstories.json?print=pretty`);
}

function fetchAsksList() {
    return axios.get(`${config.baseUrl}askstories.json?print=pretty`);
}

export {
    fetchNewsList,
    fetchJobsList,
    fetchAsksList
}