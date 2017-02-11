const mutations = {
  setResults (state, { results }) {
    state.search = {
      ...state.search,
      results
    }
  }
}

export default mutations
