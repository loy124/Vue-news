import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: [],
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_ASK(state, ask) {
      state.ask = ask;
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    },
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then(res => {
          console.log(res.data);
          context.commit('SET_NEWS', res.data);
        })
        .catch(e => console.log(e));
    },
    FETCH_ASK({ commit }) {
      fetchAskList()
        .then(({ data }) => {
          commit('SET_ASK', data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    // FETCH_ASK(context) {
    //   fetchAskList()
    //     .then(res => context.commit('SET_ASK', res.data))
    //     .catch(e => console.log(e));
    // },
    FETCH_JOBS({ commit }) {
      fetchJobsList()
        .then(({ data }) => {
          commit('SET_JOBS', data);
        })
        .catch(e => console.log(e));
    },
    // FETCH_JOBS(context) {
    //   fetchJobsList()
    //     .then(res => context.commit('SET_JOBS', res.data))
    //     .catch(e => console.log(e));
    // },
  },
});
