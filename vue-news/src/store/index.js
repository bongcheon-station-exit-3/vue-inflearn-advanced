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
    },
    getters: {
        newItems: (state) => state.newsItems,
        jobsItems: (state) => state.jobsItems,
        asksItems: (state) => state.asksItems,
    },
    mutations,
    actions,
})