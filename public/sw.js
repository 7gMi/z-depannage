const CACHE = 'zdep-v1';
const ASSETS = ['/', '/favicon.svg', '/logo-zdepannage.svg', '/manifest.webmanifest'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const { request } = e;
  if (request.method !== 'GET') return;
  // Skip non-http(s) schemes (chrome-extension://, data:, etc.)
  const url = new URL(request.url);
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;
  // Skip cross-origin pour ne pas casser tile.openstreetmap.org
  if (url.origin !== self.location.origin) return;

  e.respondWith(
    caches.match(request).then((cached) => {
      const fetchPromise = fetch(request)
        .then((response) => {
          if (response && response.status === 200 && response.type === 'basic') {
            const clone = response.clone();
            caches.open(CACHE).then((c) => c.put(request, clone)).catch(() => {});
          }
          return response;
        })
        .catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
