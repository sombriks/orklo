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
    async save({ dispatch }, w) {
      console.log("saving");
      await db.worklog[w.id ? "put" : "add"](w);
      return dispatch("list");
    },
    list({ commit, state }) {
      const { min, max } = state.filter;
      db.worklog
        .where("dt")
        .between(min, max)
        .toArray()
        .then(list => {
          commit("setList", list);
        });
    },
    async del({ dispatch }, id) {
      await db.worklog.del(id);
      return dispatch("list");
    }
    // async stats({ commit }, { min, max }) {}
  }
});
