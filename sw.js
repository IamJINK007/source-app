/* SOURCE — Service Worker.
   Cacht die App-Shell, damit die App offline startet.
   Die eigentlichen Daten liegen in IndexedDB, nicht hier. */
const CACHE = "source-v13";
const SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-180.png",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-512-maskable.png"
];

self.addEventListener("install", e => {
  // Bewusst kein skipWaiting: die App fragt nach, bevor sie neu lädt.
  e.waitUntil(
    caches.open(CACHE).then(c => Promise.all(SHELL.map(u => c.add(u).catch(() => {}))))
  );
});

self.addEventListener("message", e => {
  if(e.data && e.data.type === "skipWaiting") self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if(req.method !== "GET") return;
  const url = new URL(req.url);

  // Kursabrufe nie cachen — lieber sauber scheitern als einen falschen Kurs liefern.
  if(url.origin !== location.origin){
    e.respondWith(fetch(req).catch(() => new Response("", {status: 503})));
    return;
  }

  // App-Shell: erst aus dem Cache (offline zuverlässig), im Hintergrund auffrischen.
  e.respondWith(
    caches.match(req).then(hit => {
      const net = fetch(req).then(res => {
        if(res && res.ok){
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy));
        }
        return res;
      }).catch(() => hit || caches.match("./index.html"));
      return hit || net;
    })
  );
});
