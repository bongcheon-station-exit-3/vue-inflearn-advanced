import {fetchNewsItemList} from '../api/index.js';
import {fetchJobsItemList} from '../api/index.js';
import {fetchAsksItemList} from '../api/index.js';
import {fetchElementByItem} from '../api/index.js';

export default {
    FETCH_NEWS_ITMES(context) {
        return new Promise((resolve, reject) => {
            fetchNewsItemList().then((response) => {
                context.commit('SET_NEWS_ITEMS', response.data);
                resolve();
            }).catch(error => {
                console.error(error);
            })
        });
    },

    FETCH_JOBS_ITEMS(context) {
        return new Promise((resolve, reject) => {
            fetchJobsItemList().then((response) => {
                context.commit('SET_JOBS_ITEMS', response.data);
                resolve();
            }).catch(error => {
                console.error(error);
            })
        });
    },

    FETCH_ASKS_ITEMS(context) {
        return new Promise((resolve, reject) => {
            fetchAsksItemList().then((response) => {
                context.commit('SET_ASKS_ITEMS', response.data);
                resolve();
            }).catch(error => {
                console.error(error);
            })
        });
    },

    FETCH_ELEMENT_BY_ITEM({state, commit}, params) {
        const type = params.type;
        params.items.forEach(item => {
            fetchElementByItem(item).then((response) => {
                if(type === 'asks'){
                    commit('SET_ASKS_ELEMENTS', response.data);
                } else if(type === 'jobs') {
                    commit('SET_JOBS_ELEMENTS', response.data);
                } else {
                    commit('SET_NEWS_ELEMENTS', response.data);
                }
            }).catch(error => {
                console.error(error);
            })
        });
    }
}