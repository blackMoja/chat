import Vue from 'vue';
import VueRouter from 'vue-router';
import Store from '@/store/index';

import Login from '@/views/login';
import List from '@/views/list';
import Chat from '@/views/chat';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Login',
		component: Login
	},
	{
		path: '/list',
		name: 'List',
		component: List,
		meta: { login: true }
	},
	{
		path: '/chat/:room',
		name: 'Chat',
		component: Chat,
		meta: { login: true }
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

router.beforeEach((to, from, next) => {
	const isLogin = Store.getters['login/checkId'];

	if (to.matched.some(v => v.meta.login)) {
		isLogin && next();
		!isLogin && next('/');
	}

	next();
});

export default router;
