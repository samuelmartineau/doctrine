import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'search',
    component: resolve => {
      require.ensure(['../containers/Search.vue'], () => {
        resolve(require('../containers/Search.vue'))
      })
    }
  }, {
    path: '/legal-case/:id',
    name: 'legal-case',
    component: resolve => {
      require.ensure(['../containers/LegalCase.vue'], () => {
        resolve(require('../containers/LegalCase.vue'))
      })
    }
  }]
})
