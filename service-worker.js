"use strict";var precacheConfig=[["/profile/index.html","f3a62c97520b99a78dab243404a51029"],["/profile/static/css/main.30d456fc.css","b15ff5ca6f737d2180b9d351e544198b"],["/profile/static/js/main.9308f804.js","c02fbd3047ad192fcace142c12708296"],["/profile/static/media/Final_Canopy.f4cd1758.jpg","f4cd17580fdc951756254bcafb21ed58"],["/profile/static/media/alufabindia.6df9e7bc.jpg","6df9e7bcfbab14f8d4b7f9a8a8a8a92e"],["/profile/static/media/alufabindia.77f8706c.jpg","77f8706caf5d5c01c521e8d15aeb3f55"],["/profile/static/media/apple.ae588676.jpg","ae588676daf107cf94f773ec2edef6fb"],["/profile/static/media/autosist.2fd52feb.jpg","2fd52feb12d7fc2a8d1babc00776fcb9"],["/profile/static/media/autosist.b1dbc65f.jpg","b1dbc65f9d68cba07fdcf6d6341ead6d"],["/profile/static/media/bar.1e4c18eb.png","1e4c18eb71dd4cca4fe330f294ebbee2"],["/profile/static/media/bg_center.26b44b46.jpg","26b44b46d9618031f29eef2aafd15787"],["/profile/static/media/fontawesome-webfont.1dc35d25.ttf","1dc35d25e61d819a9c357074014867ab"],["/profile/static/media/fontawesome-webfont.25a32416.eot","25a32416abee198dd821b0b17a198a8f"],["/profile/static/media/fontawesome-webfont.c8ddf1e5.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["/profile/static/media/fontawesome-webfont.d7c63908.svg","d7c639084f684d66a1bc66855d193ed8"],["/profile/static/media/fontawesome-webfont.e6cf7c6e.woff2","e6cf7c6ec7c2d6f670ae9d762604cb0b"],["/profile/static/media/gunprice.5d7492ba.jpg","5d7492ba4cfee69e9ffd037998ba1e10"],["/profile/static/media/jumpsurvival.ac897eef.jpg","ac897eef86e670cf0686ba169c5b6554"],["/profile/static/media/logicjump.9e5243b1.jpg","9e5243b1bf1ae4b0b30fcb20cd888672"],["/profile/static/media/logicjump.b59177a8.jpg","b59177a8be152ccd0e92b020ad6f9e91"],["/profile/static/media/mintfry.146aa55f.jpg","146aa55fed6dff379b22dd55f10f9ea1"],["/profile/static/media/mintfry.e29d3070.jpg","e29d307054c1e0d62b2720c7bd09d871"],["/profile/static/media/mintfryOrder.6bb1d0b8.jpg","6bb1d0b80744ce8d3576d70a30daaecc"],["/profile/static/media/noorbyaastha.0b71d7f2.png","0b71d7f2124a5f3002d94e1da540443e"],["/profile/static/media/noorbyaastha.ba3b4a96.png","ba3b4a96ac297f658ea8d33b071e5331"],["/profile/static/media/ojas.540dbc35.jpg","540dbc3520fcdc6430e8e5904053a261"],["/profile/static/media/ojas.5b0c20f7.jpg","5b0c20f7d00e4e79e64ebcef9c1be642"],["/profile/static/media/ojas.ac02933d.jpg","ac02933d20a693ad91b143e801314457"],["/profile/static/media/ojas2.d3e60fd0.jpg","d3e60fd031cf0b964f467dd1e8d207e3"],["/profile/static/media/service+history_report.8aeea93a.jpg","8aeea93a139318e19b9d00c014effe2e"],["/profile/static/media/service_history_report.e23ec3b7.jpg","e23ec3b793add63165f07e854fbd8bb8"],["/profile/static/media/tenUp.1c0277ab.jpg","1c0277abab78fef8fe3111b3d0c786b5"],["/profile/static/media/tenUp_screen.a7edeeb7.jpg","a7edeeb70abc632762f15dfd407658ce"],["/profile/static/media/wtp.c6b12654.jpg","c6b126540c43dc1d7868d647a8c37a64"],["/profile/static/media/zareou.c82bd0d8.jpg","c82bd0d81c18edebb82bd3e989c1a5e6"],["/profile/static/media/zareoudriver.54b48fb9.jpg","54b48fb924046f04076a87fc54a402c0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),r=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var r="/profile/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});