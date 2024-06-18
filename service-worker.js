self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('tic-tac-toe-cache').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/tic.css',
          '/events.js',
          '/Game_example.js',
          'https://avatars.githubusercontent.com/u/8596759?v=4'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  