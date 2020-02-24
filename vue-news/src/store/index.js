import Vue from 'vue';
import Vuex from 'vuex';
import {fetchNewsItemList} from '../api/index.js'
import {fetchJobsItemList} from '../api/index.js'
import {fetchAsksItemList} from '../api/index.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        newsItems: [],
        jobsItems: [],
        asksItems: [],
    },
    mutations: {
        SET_NEWS_ITEMS(state, news) {
            state.newsItems = news;
        },
        SET_JOBS_ITEMS(state, jobs) {
            state.jobsItems = jobs;
        },
        SET_ASKS_ITEMS(state, asks) {
            state.asksItems = asks;
        }
    },
    actions: {
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
})