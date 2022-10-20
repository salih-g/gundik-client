<template>
	<form class="inputs" @submit.prevent="loginHandler">
		<div class="mb-3">
			<input
				id="titleInput"
				type="text"
				class="form-control"
				placeholder="username"
				v-model="user.username"
			/>
		</div>
		<div class="mb-3">
			<input
				id="password"
				type="password"
				class="form-control"
				placeholder="password"
				v-model="user.password"
			/>
		</div>
		<button type="submit" class="btn main-button">Login</button>
	</form>
</template>

<script>
	import { mapActions } from 'vuex';
	export default {
		name: 'Login',
		props: {},
		data() {
			return {
				user: {
					username: '',
					password: '',
				},
			};
		},

		methods: {
			...mapActions(['login']),

			async loginHandler() {
				this.login(this.user);
				this.user.username = '';
				this.user.password = '';
			},
		},
	};
</script>

<style scoped>
	.inputs {
		max-width: 350px;
		margin: 0 auto;
	}
</style>
