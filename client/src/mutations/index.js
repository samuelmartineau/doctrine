const mutations = {
  setResults (state, data) {
    state.search = {
      ...state.search,
      ...data
    }
  }
}

export default mutations
