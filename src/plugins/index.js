export default {
  install(app) {
    const plugins = import.meta.glob("./*/index.js", { eager: true });
  
    Object.values(plugins).forEach((plugin) => plugin.default.init(app));
  }
}
