import Vue from 'vue'
import Vuex from 'vuex'
import actions from '../actions'
import mutations from '../mutations/'
import search from '../states/search'

Vue.use(Vuex)

const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

export default new Vuex.Store({
  state: {
    search
  },
  getters,
  actions,
  mutations
})
