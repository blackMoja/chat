<template>
	<div class="container">
		<div class="login-container">
			<div class="input-container">
				<p>
					<input type="text" class="input-id" placeholder="닉네임을 입력해주세요." :value="id" @input="typingId" />
				</p>
				<!-- <p class="input-pwd">
					<input type="password" />
				</p> -->
			</div>

			<div class="btn-container">
				<a href="#" class="btn-login" @click.prevent="doLogin">시작</a>
				<!-- <a href="#" class="btn-login">로그인</a> -->
				<!-- <a href="#" class="btn-register">회원가입</a> -->
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import { mapMutations } from 'vuex';

export default {
	name: 'login',
	components: {},
	filters: {},
	mixins: [],
	extends: {},
	props: {},
	data() {
		return {
			id: ''
		};
	},
	computed: {
		isEmptyId() {
			return this.id === '';
		}
	},
	watch: {},
	methods: {
		...mapMutations({
			saveId: 'login/saveId'
		}),

		login() {
			this.saveId(this.id);
			this.$router.push({ name: 'List' });
		},
		doLogin() {
			this.validate() && this.login();
		},

		validate() {
			return !(this.isEmptyId && this.validMessage('id'));
		},
		validMessage(k) {
			const m = {
				id: '아이디를 입력해주세요.',
				pwd: '패스워드를 입력해주세요.'
			};

			alert(m[k]);
			return true;
		},

		typingId(e) {
			this.id = e.target.value;
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
	position: relative;
}
.login-container {
	position: absolute;
	width: 200px;
	height: 110px;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin-left: auto;
	margin-right: auto;
	margin-top: auto;
	margin-bottom: auto;
}
.input-container {
	text-align: center;
	padding: 5px 0;
}
.btn-container {
	text-align: center;
	padding: 5px 0;
}
.input-id {
	padding: 5px;
	width: 70%;
	border-radius: 10px;
}
.input-pwd {
}
.btn-login {
	display: inline-block;
	width: 150px;
}
.btn-register {
	display: inline-block;
}
</style>
