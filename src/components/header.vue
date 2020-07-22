<template>
	<div class="header-container" v-if="isShowHeader">
		<div class="btn-back">&#60;</div>
		<div class="room-name">채팅방</div>
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
			return this.$route.name !== 'login';
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
	background: rgba(244, 244, 244, 0.7);
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
