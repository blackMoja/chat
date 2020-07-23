<template>
	<div class="container">
		<div class="list-container">
			<div class="img-container">
				<img src="@/assets/images/dump.jpeg" alt="dump" class="img-view" />
			</div>
			<div class="info-container">
				<p class="info-name">채팅방 이름</p>
				<p class="info-contents">마지막내용</p>
			</div>
			<div class="time-container">
				<p class="time">14:00</p>
			</div>
		</div>
		<div class="list-container">
			<div class="img-container">
				<img src="@/assets/images/dump.jpeg" alt="dump" class="img-view" />
			</div>
			<div class="info-container">
				<p class="info-name">채팅방 이름</p>
				<p class="info-contents">마지막내용</p>
			</div>
			<div class="time-container">
				<p class="time">14:00</p>
			</div>
		</div>
		<div class="list-container">
			<div class="img-container">
				<img src="@/assets/images/dump.jpeg" alt="dump" class="img-view" />
			</div>
			<div class="info-container">
				<p class="info-name">채팅방 이름</p>
				<p class="info-contents">마지막내용</p>
			</div>
			<div class="time-container">
				<p class="time">14:00</p>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'chatList',
	components: {},
	filters: {},
	mixins: [],
	extends: {},
	props: {},
	data() {
		return {};
	},
	computed: {},
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
.container {
	padding-top: 40px;
	width: 100%;
	height: calc(100% - 40px);
}
.list-container {
	padding: 0 10px;
	margin: 10px 0;
}
.img-container {
	display: inline-block;
}
.img-view {
	width: 40px;
	height: 40px;
	border-radius: 15px;
}
.info-container {
	display: inline-block;
	vertical-align: top;
	padding: 0 0 0 5px;
}
.info-name {
	font-size: 12px;
}
.info-contents {
	font-size: 14px;
	line-height: 1.8;
}
.time-container {
	float: right;
}
.time {
	font-size: 12px;
	padding-right: 20px;
}
</style>
