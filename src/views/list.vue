<template>
	<div class="container">
		<div class="list-container" id="all_1" @click.prevent="enterChatRoom">
			<div class="img-container">
				<img src="@/assets/images/dump.jpeg" alt="dump" class="img-view" />
			</div>
			<div class="info-container">
				<p class="info-name">자유 채팅방</p>
				<p class="info-contents">마지막내용</p>
			</div>
			<div class="time-container">
				<p class="time">14:00</p>
			</div>
		</div>
		<div class="list-container" id="all_2" @click.prevent="enterChatRoom">
			<div class="img-container">
				<img src="@/assets/images/dump.jpeg" alt="dump" class="img-view" />
			</div>
			<div class="info-container">
				<p class="info-name">자유 채팅방2</p>
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
	methods: {
		enterChatRoom(e) {
			if (!e.target.id) return;

			this.$router.push({ name: 'Chat', params: { room: e.target.id } });
		}
	},

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
	padding-top: 4px;
	margin: 10px 0;
	cursor: pointer;
}
.list-container:hover {
	background-color: #f4f4f4;
}
.list-container:active {
	background-color: #f4f4f4;
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
	/* padding-right: 20px; */
}
</style>
