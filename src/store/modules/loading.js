import { defineStore } from "pinia";

import { LOADING } from "./CONST";

export default defineStore({
	id: LOADING,
	state: () => ({
		fullLoading: false,
		localeLoading: false
	}),
	getters: {},
	actions: {
		setLoading(payload, state) {
      this[state] = payload;
    }
	}
});