// Offline cache. Change VERSION whenever you upload a new index.html so phones pick it up.
const VERSION='ko-nawin-v4';
const ASSETS=["./", "index.html", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-512.png", "icons/apple-touch-icon.png", "fonts/marcellus-latin-400-normal.woff2", "fonts/marcellus-latin-ext-400-normal.woff2", "fonts/padauk-latin-400-normal.woff2", "fonts/padauk-latin-700-normal.woff2", "fonts/padauk-latin-ext-400-normal.woff2", "fonts/padauk-latin-ext-700-normal.woff2", "fonts/padauk-myanmar-400-normal.woff2", "fonts/padauk-myanmar-700-normal.woff2"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  // Network first for the page (so updates arrive), cache first for everything else.
  if(e.request.mode==='navigate'){
    e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(VERSION).then(c=>c.put('index.html',cp));return r;}).catch(()=>caches.match('index.html')));
    return;
  }
  e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request)));
});
