import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import Dexie from "dexie";
const db = new Dexie("orklo");
db.version(1).stores({
  worklog: "++id,dt,obs", // e1,s1,e2,s2
  settings: "++id"
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
    }
    // stats({ state }, { min, max }) {}
  },
  actions: {
    async save({ dispatch, state }, w) {
      await db.worklog[w.id ? "put" : "add"](w);
      return dispatch("list", state.filter);
    },
    async list({ commit }, { min, max, obs }) {
      commit("setFilter", { min, max, obs });
      const list = db.worklog.where("dt").between(min, max);
      return commit("setList", list);
    },
    async del({ dispatch, state }, id) {
      await db.worklog.del(id);
      return dispatch("list", state.filter);
    }
    // async stats({ commit }, { min, max }) {}
  }
});
