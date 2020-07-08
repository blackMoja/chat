<template>
	<div class="container">
		<div class="contents"></div>
		<div class="bottom-container">
			<div class="chat-etc-box">
				<a href="#" @click.prevent>버튼</a>
			</div>
			<div class="chat-textarea-box" id="chatBox">
				<ResizableTextarea>
					<textarea class="chat-textarea" ref="chatBox" rows="1" :value="msg" @input="typingMessage"></textarea>
				</ResizableTextarea>
			</div>
			<div class="chat-btn-box">
				<a href="#" @click.prevent>전송</a>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import ResizableTextarea from '@/assets/js/resize-textarea.js';
export default {
	name: 'chat',
	components: {
		ResizableTextarea
	},
	filters: {},
	mixins: [],
	extends: {},
	props: {},
	data() {
		return {
			msg: ''
		};
	},
	computed: {},
	watch: {},
	methods: {
		typingMessage(e) {
			this.msg = e.target.value;
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
* {
	box-sizing: border-box;
}

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
	font-size: 16px;
	max-height: 80px;
}
.chat-btn-box {
	width: 15%;
	float: right;
}
</style>
