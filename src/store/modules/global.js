import { defineStore } from "pinia";

import { GLOBAL } from "./CONST";

export default defineStore({
	id: GLOBAL,
	state: () => ({
		token: ""
	}),
	getters: {},
	actions: {
		setToken(payload) {
      this.token = payload;
    }
	},
	persist: true
});