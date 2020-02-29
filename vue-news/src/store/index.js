import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions.js';
import mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        newsItems: [],
        jobsItems: [],
        asksItems: [],
        newsElements: [],
        jobsElements: [],
        asksElements: [],
    },
    getters: {
        newsItems: (state) => state.newsItems,
        jobsItems: (state) => state.jobsItems,
        asksItems: (state) => state.asksItems,
        newsElements: (state) => state.newsElements,
        jobsElements: (state) => state.jobsElements,
        asksElements: (state) => state.asksElements
    },
    mutations,
    actions,
})