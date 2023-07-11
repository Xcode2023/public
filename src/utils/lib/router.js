import { isArray, isFunction, isString } from "../is";
import $router from "@/config/router";

export function parseDynamicRouter(payload) {
  const allPages = import.meta.glob("@/views/**/*.vue");

  const routes = [...payload];
  return routes.map((item) => {
    const { meta, path, component, name, redirect } = item;
    const route = {
      path,
      name,
      meta,
      redirect,
    };

    if (!component) return route;

    if (isString(component)) {
      route.component = allPages["/src/views" + component + ".vue"];
      return route;
    }

    if (isFunction(component)) {
      route.component = component;
      return route;
    }

    return route;
  });
}

export function flatRouter(payload) {
  const routes = [...payload];
  return routes.reduce((pre, cur) => {
    let curRoutes = [...pre, cur];
    const children = cur.children;
    isArray(children) &&
      children.length &&
      (curRoutes = [...curRoutes, ...flatRouter(children)]) &&
      delete cur.children;
    return curRoutes;
  }, []);
}

export async function setDynamicRouter(payload) {
  let isFlat = true;
  try {
    const flatRoutes = flatRouter(payload);
    const parsedRoutes = parseDynamicRouter(flatRoutes);

    parsedRoutes.forEach((route) => {
      if (route.meta?.isFull) {
        $router.addRoute(route);
        return;
      }
      $router.addRoute("layout", route);
    });
  } catch (err) {
    isFlat = false;
  }
  return isFlat;
}
