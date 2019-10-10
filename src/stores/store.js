import Vue from "vue";
import Vuex from "vuex";

import state from "./state";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

import home from "./modules/home/store";
import movie from "./modules/movie/store";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    home,
    movie,
  },
});
