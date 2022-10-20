<template>
	<div id="app">
		<Watch class="watch" />
		<div class="con" v-if="isLoggedIn">
			<Inputs class="inputs mt-5" />
			<List class="mt-5" />
		</div>

		<Login class="inputs mt-5" v-if="!isLoggedIn" />
	</div>
</template>

<script>
	import { mapState, mapActions } from 'vuex';

	import Watch from './components/Watch.vue';
	import Inputs from './components/Inputs.vue';
	import List from './components/List.vue';
	import Login from './components/Login.vue';

	export default {
		name: 'App',
		components: {
			Watch,
			Inputs,
			List,
			Login,
		},

		computed: {
			...mapState(['isLoggedIn']),
		},

		async created() {
			await this.getContents();
			this.$socket.emit('get_watchId');
		},

		methods: {
			...mapActions(['getContents', 'changeWatchId']),
		},

		sockets: {
			watchId(watchId) {
				this.changeWatchId(watchId);
			},
		},
	};
</script>

<style>
	:root {
		--main-text-color: #eeeeee;
		--main-background-color: #212121;
		--second-background-color: #323232;
		--main-button-color: #ff9999;
		--main-button-hover-color: #da8686;
	}
	body {
		background-color: var(--main-background-color);
	}
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: var(--main-text-color);
	}
	.inputs {
		margin-top: 300px;
	}
	.con {
		width: 97%;
		margin: 0 auto;
	}
	.watch {
		height: 200px;
	}

	.main-button {
		background-color: var(--main-button-color);
		border-color: var(--main-button-color);
	}

	.main-button:hover {
		background-color: var(--main-button-hover-color);
	}
	@media only screen and (min-width: 500px) {
		.watch {
			height: 450px;
		}
	}
	@media only screen and (min-width: 1000px) {
		.watch {
			height: 800px;
		}
	}
</style>
