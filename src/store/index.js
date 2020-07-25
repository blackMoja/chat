import Vue from 'vue';
import Vuex from 'vuex';

import Login from './login';
import Socket from './socket';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		login: Login,
		socket: Socket
	}
});
