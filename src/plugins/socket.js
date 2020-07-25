import Vue from 'vue';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');
const socketPlugins = {
	install(vue) {
		vue.prototype.$sendMessage = $payload => socket.emit('chat', { name: $payload.name, msg: $payload.msg });
		vue.prototype.$socket = socket;
	}
};

Vue.use(socketPlugins);
