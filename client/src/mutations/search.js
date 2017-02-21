import initialState from '../states/search'

const mutations = {
  setResults (state, data) {
    state.search = {
      ...state.search,
      ...data
    }
  },
  setFetching (state, { isFetching }) {
    state.search = {
      ...state.search,
      isFetching
    }
  },
  resetResearch (state) {
    state.search = {
      ...initialState
    }
  }
}

export default mutations
