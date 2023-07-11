import router from "@/config/router";

export default {
  init(app, ...options) {
    app.use(router);
  }
}