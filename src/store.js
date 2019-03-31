import Vue from "vue";
import Dexie from "dexie";
import { DateTime } from "luxon";
import Vuex from "vuex";
Vue.use(Vuex);

const db = new Dexie("orklo");
db.version(1).stores({
  worklog: "++id,dt", // e1,s1,e2,s2
  settings: "++id"
});

export default new Vuex.Store({
  state: { logs: [], stats: {}, filter: {} },
  mutations: {
    setFilter(state, { min, max, obs }) {
      state.filter = { min, max, obs };
      return state;
    },
    setLogs(state, logs) {
      console.log("lista:");
      console.log(logs);
      state.logs = logs;
      return state;
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
      console.log("listando...");
      const {
        min = DateTime.local()
          .minus({ days: 60 })
          .toJSDate(),
        max = DateTime.local().toJSDate()
      } = state.filter;
      db.worklog
        .where("dt")
        .between(min, max)
        .toArray()
        .then(logs => {
          commit("setLogs", logs);
        });
    },
    async del({ dispatch }, id) {
      await db.worklog.del(id);
      return dispatch("list");
    }
    // async stats({ commit }, { min, max }) {}
  }
});
