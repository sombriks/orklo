import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import Dexie from "dexie";
const db = new Dexie("orklo");
db.version(1).stores({
  worklog: "++id,obs" // e1,s1,e2,s2
});

export default new Vuex.Store({
  state: { logs: [], stats: {} },
  mutations: {
    save({ state }, worklog) {},
    list({ commit }, { min, max, obs }) {},
    del({ commit }, id) {},
    stats({ state }, { min, max }) {}
  },
  actions: {
    save({ commit }, worklog) {},
    list({ commit }, { min, max, obs }) {},
    del({ commit }, id) {},
    stats({ commit }, { min, max }) {}
  }
});
