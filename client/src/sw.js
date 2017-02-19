// Use a cacheName for cache versioning
const cacheName = 'v1:static'

const assets = global.serviceWorkerOption.assets
const baseUrl = '/doctrine'
const paths = [
  '/',
  '/index.html',
  '/#/',
  '/#/index.html'
]

// During the installation phase, you'll usually want to cache static assets.
self.addEventListener('install', (e) => {
  // Once the service worker is installed, go ahead and fetch the resources to make this work offline.
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(paths.map(path => baseUrl + path).concat(Object.values(assets)))
      .then(() => {
        self.skipWaiting()
      })
      .catch((error) => {
        console.log(error)
      })
    })
  )
})

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim())
})

// when the browser fetches a URL…
self.addEventListener('fetch', (event) => {
  const apiKey = ':9200/'
  const isWebService = event.request.url.indexOf(apiKey) > -1
  if (isWebService) {
    event.respondWith(
      caches.open(cacheName).then((cache) => {
        return cache.match(event.request).then(function (response) {
          return response || fetch(event.request)
            .then((response) => {
              cache.put(event.request, response.clone())
              return response
            })
        })
      })
    )
  } else {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request)
      })
    )
  }
})
