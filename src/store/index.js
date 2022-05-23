import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        askes: [],
        jobs: [],
        user: {},
        item: {},
        list: [],
    },
    getters:{
        fetchedAsk(state) {
            return state.askes;
        },
        fetchedNews(state) {
            return state.news;
        },
        fetchedJobs(state) {
            return state.jobs;
        },
        fetchedUser(state) {
            return state.user;
        },
        fetchedItem(state) {
            return state.item;
        }
    },
    mutations,
    actions,
  });