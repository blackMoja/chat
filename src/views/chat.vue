<template>
	<div class="container">
		<div class="contents">
			<div v-for="(v, i) in msgList" :key="i" class="contents-line" :class="setMessageClass(v.name)">
				<div>
					<p class="contents-member">
						<span :class="`${setMessageClass(v.name)} ${setMessageClass(v.name)}-member`">{{ v.name }}</span>
					</p>
					<p class="contents-msg" :class="`${setMessageClass(v.name)} ${setMessageClass(v.name)}-msg`">{{ v.msg }}</p>
				</div>
			</div>
		</div>
		<div class="bottom-container" :style="setBottomStyle">
			<div class="chat-textarea-box" id="chatBox">
				<ResizableTextarea>
					<textarea
						class="chat-textarea"
						ref="chatBox"
						rows="1"
						:value="send"
						@input="typingMessage"
						@keypress.enter.prevent
						@keyup.enter="sendMessage"
					></textarea>
				</ResizableTextarea>
			</div>
			<div class="chat-btn-box">
				<a href="#" class="chat-btn" @click.prevent="sendMessage">&#8629;</a>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import { mapGetters, mapMutations } from 'vuex';
import io from 'socket.io-client';

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
			connect: null,
			msgList: [],
			send: '',

			bottomHeight: 52 // TODO 값 받아오는 걸로 변경하기.
		};
	},
	computed: {
		...mapGetters({
			id: 'login/checkId'
		}),
		setBottomStyle() {
			return { height: `${this.bottomHeight < 52 ? 52 : this.bottomHeight}px` };
		}
	},
	watch: {},
	methods: {
		enterChatRoom() {
			// this.connect = io.connect(`http://192.168.0.7:3000/${this.$route.params.room}`);
			this.connect = io.connect(`http://172.20.10.3:3000/${this.$route.params.room}`);

			this.connect.emit('welcome', JSON.stringify({ type: 'ALL', name: this.id }));

			this.connect.on('chat', this.receiveMessage);
			this.connect.on('welcome', this.receiveMessage);
		},
		sendMessage() {
			if (!this.send) return;

			this.connect.emit('chat', JSON.stringify({ type: 'MESSAGE', name: this.id, msg: this.send }));
			this.send = '';
		},

		moveBottom() {
			const el = document.querySelector('.contents');

			this.$nextTick(() => el.scrollTo(0, el.scrollHeight));
		},

		setMessageClass(v) {
			return v === this.id ? 'send' : 'receive';
		},
		receiveMessage(v) {
			this.msgList.push(JSON.parse(v));
			this.moveBottom();
		},
		typingMessage(e) {
			this.send = e.target.value;
		}
	},

	beforeCreate() {},
	created() {
		this.enterChatRoom();
	},
	beforeMount() {},
	mounted() {
		document.addEventListener('input', e => (this.bottomHeight = e.target.scrollHeight));
	},
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
	height: calc(100% - 52px);
	width: 100%;
	padding: 10px;
	padding-top: 40px;
	overflow: scroll;
}
.contents-line {
	width: 100%;
	height: 50px;
}
.contents-member {
	font-size: 13px;
	padding: 3px 0;
}
.contents-msg {
	border-radius: 10px;
	padding: 3px;
}
.send {
	clear: both;
	float: right;
}
.send-member {
	padding: 3px 0;
}
.send-msg {
	border: 1px solid rgb(0, 123, 255);
	background-color: rgb(0, 123, 255);
	color: #fff;
}
.receive {
	clear: both;
	float: left;
}
.receive .receive-member {
	padding: 3px 0;
}
.receive .receive-msg {
	border: 1px solid rgb(130, 130, 130);
	background-color: rgb(130, 130, 130);
	color: #fff;
}
.bottom-container {
	padding: 0 0 0 10px;
	height: 52px;
	width: 100%;
	background-color: #fff;
	text-align: center;
	line-height: 3.3;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: 9;
}
.chat-etc-box {
	width: 15%;
	float: left;
}
.chat-textarea-box {
	width: 85%;
	float: left;
}
.chat-textarea {
	width: 100%;
	border: 1px solid #ababab;
	border-radius: 15px;
	max-height: 80px;
	overflow: scroll;
	font-size: 15px;
	line-height: 1.7;
	height: 40px;
	padding: 4px;
}
.chat-btn-box {
	width: 15%;
	float: right;
}
.chat-btn {
	line-height: 3.5;
}
</style>
