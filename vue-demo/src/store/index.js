import Vue from "vue";
import Vuex from "vuex";
import TodoItem from './modules/todo-item.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    loading: false,
    title : '数学'
  },
  mutations: {
    increment(state, number) {
      state.count++;
      state.count = state.count + number;
    }
  },
  actions: {
    asyncShowCount({ state, commit }) {
      state.loading = true;
      setTimeout(() => {
        state.count = state.count + 2;
        state.loading = false;
        commit("increment", 10);
      }, 1000);
    }
  },
  modules : {
    TodoItem
  }
});
