<template>
	<div id="app" class="con">
		<div class="main">
			<h1 class="text-center">Gundik Watch</h1>
			<Watch class="watch" />
		</div>
		<Inputs />
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
.main {
	height: 100vh;
}
.con {
	width: 97%;
	margin: 0 auto;
}
.watch {
	height: 200px;
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
