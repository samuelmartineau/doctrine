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
  }
}

export default mutations
