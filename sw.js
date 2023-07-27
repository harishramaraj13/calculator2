const cacheName = 'calculator-pwa-cache-v1';
const filesToCache = [
'/', // The root URL of your PWA
 '/index.html',
 '/operate.js', // Your main JavaScript file
 '/', // Your CSS file
];

self.addEventListener('install', (event) => {
 event.waitUntil(
 caches.open(cacheName)
 .then((cache) => cache.addAll(filesToCache))
 .then(self.skipWaiting())
 );
});

self.addEventListener('activate', (event) => {
 event.waitUntil(
 caches.keys()
 .then((cacheNames) => {
 return Promise.all(
 cacheNames.filter((name) => name !== cacheName)
 .map((name) => caches.delete(name))
 );
 })
 .then(self.clients.claim())
 );
});

self.addEventListener('fetch', (event) => {
 event.respondWith(
 caches.match(event.request)
.then((response) => {
 return response || fetch(event.request);
 })
);
});

