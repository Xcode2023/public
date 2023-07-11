import i18n from "@/config/i18n";

export default {
  init(app, ...options) {
    app.use(i18n, ...options);
  }
}