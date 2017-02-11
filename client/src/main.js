// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import runtime from 'serviceworker-webpack-plugin/lib/runtime'
import store from 'store'
import App from './App'
import router from './router'

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  const registration = runtime.register()
  registration.then((reg) => {
    console.log('Successfully registered service worker', reg)
  }).catch((err) => {
    console.warn('Error whilst registering service worker', err)
  })
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
