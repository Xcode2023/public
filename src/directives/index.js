
function getAllDirectives() {
  const directives = import.meta.glob("./src/*.js", { eager: true });
  const orders = {};
  for (let [u, di] of Object.entries(directives)) {
    const key = u.slice(6, -3);
    orders[key] = di.default;
  }
  return orders;
}

export default {
  install(app) {
    const directives = getAllDirectives();
    for (let [name, directive] of Object.entries(directives)) {
      app.directive(name, directive);
    }
  }
}
