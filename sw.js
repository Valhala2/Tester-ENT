const CACHE_NAME = 'quiz-v1';
const FILES_TO_CACHE = [
    './',
    './Test.html',
    './manifest.json',
    './topics/chemistry_qualitative.js',
    './topics/example_math.js',
    './topics/bones.js',
    './topics/SlivBiology.js',
    './topics/SlivHistory.js',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
    );
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cached => cached || fetch(event.request))
    );
});
