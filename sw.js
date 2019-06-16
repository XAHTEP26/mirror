importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.core.setCacheNameDetails({
  prefix: 'kogri-workertest',
  suffix: 'v1',
  precache: 'precache',
  runtime: 'runtime'
});

workbox.precaching.precacheAndRoute([
  { url: 'index.html', revision: '5' },
  { url: 'styles.css', revision: '5' },
  { url: 'script.js', revision: '5' }
]);
