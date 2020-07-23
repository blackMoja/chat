<template>
	<div class="header-container" v-if="isShowHeader">
		<div class="btn-back"><span v-if="isShowBackButton">&#60;</span></div>
		<div class="room-name">{{ setTitle }}</div>
		<div class="etc"></div>
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'header-component',
	components: {},
	filters: {},
	mixins: [],
	extends: {},
	props: {},
	data() {
		return {};
	},
	computed: {
		isShowHeader() {
			return this.$route.name !== 'Login';
		},
		isShowBackButton() {
			return this.$route.name === 'Chat';
		},
		setTitle() {
			const m = {
				List: '채팅방',
				Chat: '상대방 이름'
			};
			return m[this.$route.name];
		}
	},
	watch: {},
	methods: {},

	beforeCreate() {},
	created() {},
	beforeMount() {},
	mounted() {},
	beforeUpdate() {},
	updated() {},
	beforeDestroy() {},
	destroyed() {}
};
</script>

<style scoped>
.header-container {
	position: fixed;
	width: 100%;
	height: 40px;
	line-height: 2.5;
	/* background: rgba(244, 244, 244, 0.7); */
	background: rgba(244, 244, 244);
	top: 0;
	right: 0;
	left: 0;
	z-index: 9;
}
.btn-back {
	display: inline-block;
	text-align: center;
	width: 15%;
}
.room-name {
	display: inline-block;
	width: 70%;
	text-align: center;
}
.etc {
	display: inline-block;
	width: 15%;
}
</style>
