import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getter.js'
import menu from './moudle/menu.js'
import tabBar from './moudle/tabbar.js'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    menu,
    tabBar
  },
  getters
})