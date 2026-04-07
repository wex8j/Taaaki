self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('fetch', () => {
  // اتركها فارغة حتى لا يتم حجز الروابط وتظهر رسالة لا يمكن الوصول
});
