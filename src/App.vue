<template>
	<div id="app" class="container">
		<h1 class="text-center">Gundik Watch</h1>
		<Watch class="watch" />
		<Inputs class="mt-5" />
		<List class="mt-5" />
	</div>
</template>

<script>
import { mapActions } from 'vuex';

import Watch from './components/Watch.vue';
import Inputs from './components/Inputs.vue';
import List from './components/List.vue';

export default {
	name: 'App',
	components: {
		Watch,
		Inputs,
		List,
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
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin-top: 20px;
}
.watch {
	height: 400px;
}
</style>
