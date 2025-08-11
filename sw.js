const CACHE_NAME = 'italien-pronunciation-v1.0.0';
const urlsToCache = [
    './',
    './index.html',
    './manifest.json',
    './icon-192.svg',
    './icon-512.svg',
    './qr-generator.html'
];

// Installation du Service Worker
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Cache ouvert');
                return cache.addAll(urlsToCache);
            })
    );
});

// Activation du Service Worker
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Suppression de l\'ancien cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Interception des requêtes réseau
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Retourner le cache s'il existe
                if (response) {
                    return response;
                }

                // Sinon, récupérer depuis le réseau
                return fetch(event.request).then(function(response) {
                    // Vérifier si nous avons reçu une réponse valide
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    // Cloner la réponse car elle peut être consommée une seule fois
                    const responseToCache = response.clone();

                    caches.open(CACHE_NAME)
                        .then(function(cache) {
                            cache.put(event.request, responseToCache);
                        });

                    return response;
                }).catch(function() {
                    // En cas d'échec, retourner une page d'erreur basique
                    if (event.request.destination === 'document') {
                        return caches.match('./index.html');
                    }
                });
            }
        )
    );
});
