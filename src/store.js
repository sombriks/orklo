import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import Dexie from "dexie";
const db = new Dexie("orklo");
db.version(1).stores({
  worklog: "++id,dt,obs" // e1,s1,e2,s2
});

export default new Vuex.Store({
  state: { logs: [], stats: {}, filter: {} },
  mutations: {
    setFilter({ state }, { min, max, obs }) {
      state.filter = { min, max, obs };
      return state;
    },
    setList({ state }, list) {
      state.list = list;
      return list;
    },
    stats({ state }, { min, max }) {}
  },
  actions: {
    async save({ dispatch, state }, w) {
      await db.worklog[w.id ? "put" : "add"](w);
      return dispatch("list", state.filter);
    },
    async list({ commit }, { min, max, obs }) {
      commit("setFilter", { min, max, obs });
    },
    async del({ commit }, id) {},
    async stats({ commit }, { min, max }) {}
  }
});
