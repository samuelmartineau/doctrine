import Vue from 'vue'
import Vuex from 'vuex'
import actions from '../actions'
import mutations from '../mutations/'
import search from '../states/search'
import legalCase from '../states/legalCase'

Vue.use(Vuex)

const getters = {
}

export default new Vuex.Store({
  state: {
    search,
    legalCase
  },
  getters,
  actions,
  mutations
})
