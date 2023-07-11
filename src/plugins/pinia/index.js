import pinia from "@/config/pinia";

export default {
  init(app, ...options) {
    app.use(pinia);
  },
};
