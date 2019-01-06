/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "883ec43551c04822018708f660b0b65c"
  },
  {
    "url": "about.html",
    "revision": "911f1ce0ead4a6c88615b70dd7cfc5c7"
  },
  {
    "url": "assets/css/0.styles.ff9c3157.css",
    "revision": "def91ddaa71b76c4ad3c905cea01a409"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a92150a7.js",
    "revision": "ee9dfdd86752fc77db2a56245b5b519c"
  },
  {
    "url": "assets/js/11.581502d9.js",
    "revision": "d0b18cb8618f46c0ec2c3060ba1122d8"
  },
  {
    "url": "assets/js/12.d9ac473b.js",
    "revision": "a273ef51261fdf4cb92d6697b54eb971"
  },
  {
    "url": "assets/js/13.a6ffcaa2.js",
    "revision": "4ebdf1b552b6491b34dbd439ead42c85"
  },
  {
    "url": "assets/js/14.5779ecdd.js",
    "revision": "e31d5bd506e955eb62904b47fe315b83"
  },
  {
    "url": "assets/js/15.f1d6cad0.js",
    "revision": "9589845fdafcfa756c9056dc529aa2c4"
  },
  {
    "url": "assets/js/16.e2e47b17.js",
    "revision": "a379684c996d87f7a0448aa37dccff1a"
  },
  {
    "url": "assets/js/17.0ce84d0a.js",
    "revision": "ddfa25b3bafdede7a1c5bd3501139501"
  },
  {
    "url": "assets/js/18.9eef49c4.js",
    "revision": "3d2afa024eb07d7472496b73fcada09a"
  },
  {
    "url": "assets/js/19.d4c012a9.js",
    "revision": "1cd2664996ffec4b81082e5ed8a91998"
  },
  {
    "url": "assets/js/2.7e78591a.js",
    "revision": "01ac7bc169a92c5df0d3577ed3f42e46"
  },
  {
    "url": "assets/js/20.b823377c.js",
    "revision": "b9df9d8f604c0a602eaa0153110f2c21"
  },
  {
    "url": "assets/js/3.90dd917d.js",
    "revision": "d977f5cb0a23095d118fcb63c8e80f95"
  },
  {
    "url": "assets/js/4.302e2ad3.js",
    "revision": "3991cd817c7f0238af28f622755647dc"
  },
  {
    "url": "assets/js/5.697826cc.js",
    "revision": "5cb86c419df2c8d9dbf1c5290d76d3c8"
  },
  {
    "url": "assets/js/6.e004f0a8.js",
    "revision": "fdb378d05b775904c716de32118a61e0"
  },
  {
    "url": "assets/js/7.3b8ad3be.js",
    "revision": "e0ddc356cf0167bc2ce62519a7f48b94"
  },
  {
    "url": "assets/js/8.85b657ee.js",
    "revision": "45ab9b2960b7aa8d5b520d4166b97ac4"
  },
  {
    "url": "assets/js/9.a2d5a77a.js",
    "revision": "7261286e233d282866d3c75f7c0cefc7"
  },
  {
    "url": "assets/js/app.f7e51152.js",
    "revision": "26d8c7a1edaeec7bc03633b4cc2d3754"
  },
  {
    "url": "fr/about.html",
    "revision": "f301e287ff6e7148cd0f06b49c46bdfc"
  },
  {
    "url": "fr/index.html",
    "revision": "0a24710c3fa165eb2744139cbccdebf8"
  },
  {
    "url": "fr/vocaloid/index.html",
    "revision": "27f5db7ff80b161e0c84771b4c8fc1e8"
  },
  {
    "url": "fr/vocaloid/kagamine.html",
    "revision": "9e69ed56ba9002c1826f194ab3754c46"
  },
  {
    "url": "fr/vocaloid/luka.html",
    "revision": "edfd288de5176f0a7cdb93b284b96290"
  },
  {
    "url": "fr/vocaloid/miku.html",
    "revision": "a7e348e17e601688f768879e8988814e"
  },
  {
    "url": "index.html",
    "revision": "a6af87ae48458bdc702b9dbe63a77a18"
  },
  {
    "url": "vocaloid/index.html",
    "revision": "b7c42d18dc71b91e7616b8940e3e2b72"
  },
  {
    "url": "vocaloid/kagamine.html",
    "revision": "f8567736623a27ca370be1fc9c3c3d91"
  },
  {
    "url": "vocaloid/luka.html",
    "revision": "7fdad34e18de0cd3b6a931100adc6a89"
  },
  {
    "url": "vocaloid/miku.html",
    "revision": "6bd29566a6f4a6ea9e8a9d5c69e983db"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
