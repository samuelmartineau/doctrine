// Use a cacheName for cache versioning
const cacheName = 'v1:static'

const assets = global.serviceWorkerOption.assets

// During the installation phase, you'll usually want to cache static assets.
self.addEventListener('install', (e) => {
  // Once the service worker is installed, go ahead and fetch the resources to make this work offline.
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll([
        // './offline.html'
      ].concat(Object.values(assets))).then(() => {
        self.skipWaiting()
      })
    })
  )
})

// when the browser fetches a URL…
self.addEventListener('fetch', (event) => {
  // … either respond with the cached object or go ahead and fetch the actual URL
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        // retrieve from cache
        return response
      }
      // fetch as normal
      return fetch(event.request)
    })
  )
})
