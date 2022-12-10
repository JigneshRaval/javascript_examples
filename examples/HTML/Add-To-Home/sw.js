self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('fox-store').then(function (cache) {
            return cache.addAll([
                'index.html',
                './images/fox1.jpg',
                './images/fox2.jpg',
                './images/fox3.jpg'
            ]);
        })
    );
});

self.addEventListener('fetch', function (e) {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});