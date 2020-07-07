<template>
	<div class="container">
		<div class="contents"></div>
		<div class="bottom-container">
			<div class="chat-etc-box"><a href="#" @click.prevent>버튼</a></div>
			<div class="chat-textarea-box">
				<textarea class="shadow" ref="chatBox" tabindex="0" :style="chatBoxStyle" :value="msg" @input="typingMessage"></textarea>
			</div>
			<div class="chat-btn-box"><a href="#" @click.prevent>전송</a></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'chat',
	components: {},
	filters: {},
	mixins: [],
	extends: {},
	props: {},
	data() {
		return {
			msg: '',
			chatBoxHeight: 0
		};
	},
	computed: {
		chatBoxStyle() {
			return { 'min-height': this.chatBoxHeight };
		}
	},
	watch: {
		msg() {
			this.resize();
		}
	},
	methods: {
		typingMessage(e) {
			this.msg = e.target.value;
		},
		resize() {
			this.chatBoxHeight = `${this.$refs.chatBox.scrollHeight}px`;
			console.log(this.chatBoxHeight);
		}
	},

	beforeCreate() {},
	created() {},
	beforeMount() {},
	mounted() {
		this.resize();
	},
	beforeUpdate() {},
	updated() {},
	beforeDestroy() {},
	destroyed() {}
};
</script>

<style scoped>
.contents {
	height: calc(100% - 80px);
	width: 100%;
	background-color: #000;
}
.bottom-container {
	height: 80px;
	width: 100%;
	background-color: #fff;
	text-align: center;
}
.chat-etc-box {
	width: 15%;
	float: left;
}
.chat-textarea-box {
	width: 70%;
	float: left;
}
.chat-textarea {
	width: 100%;
	height: 25px;
	font-size: 15px;
}
.chat-textarea > textarea {
	box-sizing: border-box;
	padding: 8px;
	border: 1px solid #aeaeae;
	resize: none;
	overflow: hidden;
	font-size: 16px;
	height: 0;
}
.chat-textarea .shadow {
	max-height: 0;
	pointer-events: none;
	opacity: 0;
	margin: 0;
}
.chat-btn-box {
	width: 15%;
	float: right;
}
</style>
