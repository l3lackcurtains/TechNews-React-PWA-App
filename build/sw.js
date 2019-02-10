importScripts("/precache-manifest.95670afe5779d419919377cd94677fa5.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/* eslint-disable */

const staticFiles = [
  "./",
  "./manifest.json",
  "./favicon.png",
  "./icons/app-icon-256.png",
  "./icons/app-icon.png",
  "./icons/app-icon.svg"
];

workbox.clientsClaim();
self.__precacheManifest = staticFiles.concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest);

workbox.routing.registerNavigationRoute("/index.html", {});

workbox.routing.registerRoute(
  new RegExp("https://newsapi.org/(.*)"),
  workbox.strategies.networkFirst()
);

