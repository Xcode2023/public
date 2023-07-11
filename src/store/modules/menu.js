import { defineStore } from "pinia";

import { MENU } from "./CONST";

export default defineStore({
	id: MENU,
	state: () => ({
		defaultMenu: []
	}),
	getters: {},
	actions: {
		setMenu(payload) {
      const routes_length = payload.length;
      this.defaultMenu = payload;
      return !!routes_length;
    }
	}
});