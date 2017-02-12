import { checkStatus, parseJSON } from '../utils/fetch'

function searchCall (value, from) {
  return fetch(`${process.env.API}/_search`, {
    method: 'POST',
    body: JSON.stringify({
      from: from,
      query: {
        match: {
          _all: value
        }
      },
      highlight: {
        'pre_tags': ['<span class="highlight__word">'],
        'post_tags': ['</span>'],
        'require_field_match': false,
        fields: {
          '*': {
          }
        }
      }
    })
  })
  .then(checkStatus)
  .then(parseJSON)
  .catch((error) => {
    console.log('error', error)
  })
}

const actions = {
  search ({ commit, state }, { value }) {
    return searchCall(value, state.search.from)
    .then((response) => {
      commit('setResults', {
        query: value,
        results: response
      })
    })
  },
  nextPage ({ commit, state }) {
    const nextPage = state.search.from + 1
    return searchCall(state.search.query, nextPage)
    .then((response) => {
      commit('setResults', {
        from: nextPage,
        results: response
      })
    })
  }
}

export default actions
