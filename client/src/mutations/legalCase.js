const mutations = {
  setLegalCase (state, data) {
    state.legalCase = {
      loading: false,
      ...data
    }
  }
}

export default mutations
