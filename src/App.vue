<template>
	<div class="wrapper">
		<header-component></header-component>
		<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
import HeaderComponent from '@/components/header';

export default {
	name: 'App',
	components: {
		HeaderComponent
	},
	filters: {},
	mixins: [],
	extends: {},
	props: {},
	data() {
		return {
			connect: null
		};
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

<style src="@/assets/style/reset.css"></style>
<style src="@/assets/style/layout.css"></style>
