import { createApp } from "vue";
import "./style";
import "./router";
import "./langs";
import App from "./App.vue";
import Directives from "./directives";

import "bootstrap/dist/css/bootstrap.min.css";
import Plugins from "./plugins";

function bootstrap(root) {
  const app = createApp(root);

  app.use(Directives);

  app.use(Plugins);

  app.mount("#app");
}
bootstrap(App);
