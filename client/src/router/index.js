import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    name: 'search',
    component: resolve => {
      require.ensure(['../containers/Search.vue'], () => {
        resolve(require('../containers/Search.vue'))
      })
    }
  }, {
    path: '/legal-case',
    name: 'legal-case',
    component: resolve => {
      require.ensure(['../containers/LegalCase.vue'], () => {
        resolve(require('../containers/LegalCase.vue'))
      })
    }
  }]
})
