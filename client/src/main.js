// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import runtime from 'serviceworker-webpack-plugin/lib/runtime'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'

if ('serviceWorker' in navigator) {
  const registration = runtime.register()
  registration.then((reg) => {
    console.log('Successfully registered service worker', reg)
  }).catch((err) => {
    console.warn('Error whilst registering service worker', err)
  })
}

Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
