import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
    deleteTask(state, task) {
      // eslint-disable-next-line no-param-reassign
      state.tasks = state.tasks.filter(val => val !== task);
    },
    changeTaskState(state, task) {
      state.tasks.map((val) => {
        if (val.name === task.name) {
          const temp = !val.completed;
          // eslint-disable-next-line no-param-reassign
          val.completed = temp;
        }
        return val;
      });
    },
  },
  actions: {
    addTask({ commit }, { task }) {
      commit('addTask', task);
    },
    deleteTask({ commit }, { task }) {
      commit('deleteTask', task);
    },
    changeTaskState({ commit }, { task }) {
      commit('changeTaskState', task);
    },
  },
  getters: {
    getTasks(state) {
      return state.tasks;
    },
  },
});
