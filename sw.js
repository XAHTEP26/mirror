importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.core.setCacheNameDetails({
  prefix: 'kogri',
  suffix: 'v1',
  precache: 'precache',
  runtime: 'runtime'
});

workbox.precaching.precacheAndRoute([
  { url: '/workertest/index.html', revision: '4' },
  { url: '/workertest/styles.css', revision: '4' },
  { url: '/workertest/script.js', revision: '4' },
]);

if (workbox) {
  // workbox.routing.registerRoute(
  //   new RegExp('.*\.js'),
  //   new workbox.strategies.NetworkFirst()
  // );
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}