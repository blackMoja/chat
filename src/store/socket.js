export default {
	namespaced: true,
	state: () => ({
		msg: []
	}),
	getters: {
		msg: state => state.msg
	},
	mutations: {
		sendMessage: (state, v) => state.msg.push(v)
	},
	actions: {}
};
