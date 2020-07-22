export default {
	namespaced: true,
	state: () => ({
		id: ''
	}),
	getters: {
		checkId(state) {
			return state.id || false;
		}
	},
	mutations: {
		saveId(state, v) {
			state.id = v;
			console.log(state.id);
		}
	},
	actions: {}
};
