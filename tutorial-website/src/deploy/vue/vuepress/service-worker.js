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
    "revision": "7b0a113119349f91ec66b47a174083c9"
  },
  {
    "url": "about.html",
    "revision": "e5084ce44d797f2c01c20c3c00919cf0"
  },
  {
    "url": "assets/css/0.styles.bc69244c.css",
    "revision": "674ed18f17cabfda01cb169db304ade8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c077ba21.js",
    "revision": "622eee0533c5f6b59a730b0a3fcbb6b6"
  },
  {
    "url": "assets/js/11.d05b75b1.js",
    "revision": "0202e5239610139c34aef7d49ddb8210"
  },
  {
    "url": "assets/js/12.d9ac473b.js",
    "revision": "a273ef51261fdf4cb92d6697b54eb971"
  },
  {
    "url": "assets/js/13.55f32fe6.js",
    "revision": "a1686fdba74f77127312f99171241dab"
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
    "url": "assets/js/16.9194cd78.js",
    "revision": "7f759d29b63daf9a8c8ab89c84973554"
  },
  {
    "url": "assets/js/17.5ce6612c.js",
    "revision": "a99dc894d30a1d35e58be3c963d8c981"
  },
  {
    "url": "assets/js/18.a5d3c502.js",
    "revision": "707f635fbb21187b684851634c9945d9"
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
    "url": "assets/js/app.89097caa.js",
    "revision": "ce8692cbc0e18dbc02c9aaf5e07ac582"
  },
  {
    "url": "fr/about.html",
    "revision": "90e5c60d36d4545dc46efd62c49076df"
  },
  {
    "url": "fr/index.html",
    "revision": "9a28e00a13b99ac668a2b79929d8e573"
  },
  {
    "url": "fr/vocaloid/index.html",
    "revision": "ded6447b13269d800835eeba77dc196d"
  },
  {
    "url": "fr/vocaloid/kagamine.html",
    "revision": "688c44e513d1d22be212a1a868a6aaac"
  },
  {
    "url": "fr/vocaloid/luka.html",
    "revision": "1c6a9b34d4cca4e96433cad85e8da68f"
  },
  {
    "url": "fr/vocaloid/miku.html",
    "revision": "2e7f5b0509fdf1a4cfc57bb3967067f8"
  },
  {
    "url": "index.html",
    "revision": "30e5d250ea20218ee670e244c4ef77a1"
  },
  {
    "url": "vocaloid/index.html",
    "revision": "747f58ba162b130bdebd439a48047527"
  },
  {
    "url": "vocaloid/kagamine.html",
    "revision": "17cca5b6dcc26bbc847ebe81ccae47ea"
  },
  {
    "url": "vocaloid/luka.html",
    "revision": "2b40e1f5e6aa723bce2a5b9574744fbd"
  },
  {
    "url": "vocaloid/miku.html",
    "revision": "1b982b823ca970e489ec27a882a9989e"
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
