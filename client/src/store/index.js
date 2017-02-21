import Vue from 'vue'
import Vuex from 'vuex'
import actions from '../actions'
import mutations from '../mutations/'
import search from '../states/search'
import legalCase from '../states/legalCase'
import favorites from '../states/favorites'

Vue.use(Vuex)

const getters = {
  isFavoriteSelected: (state, getters) => (id) => {
    return state.favorites.map(favorite => favorite.id).includes(id)
  }
}

export default new Vuex.Store({
  state: {
    search,
    legalCase,
    favorites
  },
  getters,
  actions,
  mutations
})
