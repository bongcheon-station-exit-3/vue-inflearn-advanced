import {fetchNewsItemList} from '../api/index.js';
import {fetchJobsItemList} from '../api/index.js';
import {fetchAsksItemList} from '../api/index.js';

export default {
    FETCH_NEWS_ITMES(context) {
        fetchNewsItemList()
            .then((response) => {
                console.debug(response);
                context.commit('SET_NEWS_ITEMS', response.data);
            })
            .catch(error => {
                console.error(error);
            })
    },

    FETCH_JOBS_ITEMS(context) {
        fetchJobsItemList()
            .then((response) => {
                console.debug(response);
                context.commit('SET_JOBS_ITEMS', response.data);
            })
            .catch(error => {
                console.error(error);
            })
    },

    FETCH_ASKS_ITEMS(context) {
        fetchAsksItemList()
            .then((response) => {
                console.debug(response);
                context.commit('SET_ASKS_ITEMS', response.data);
            })
            .catch(error => {
                console.error(error);
            })
    }
}