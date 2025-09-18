const Ziggy = {"url":"http:\/\/localhost:8000","port":8000,"defaults":{},"routes":{"index":{"uri":"{uri}","methods":["GET","HEAD"],"wheres":{"uri":".*"},"parameters":["uri"]},"storage.local":{"uri":"storage\/{path}","methods":["GET","HEAD"],"wheres":{"path":".*"},"parameters":["path"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
