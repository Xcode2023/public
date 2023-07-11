import { defineStore } from "pinia";

import { USER } from "./CONST";

export default defineStore({
	id: USER,
	state: () => ({
		info: { account: "", nick_name: "" }
	}),
	getters: {},
	actions: {
    setUserInfo(payload) {
      for (let [key, value] of Object.entries(payload)) {
        this.info[key] = value ?? ""
      }
    }
	}
});