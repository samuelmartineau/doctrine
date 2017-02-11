import { checkStatus, parseJSON } from '../utils/fetch'

const actions = {
  search ({ commit }, { value }) {
    return fetch(`${process.env.API}/_search`, {
      method: 'POST',
      body: JSON.stringify({
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
    .then((response) => {
      commit('setResults', {
        results: response
      })
    })
    .catch((error) => {
      console.log('error', error)
    })
  }
}

export default actions
