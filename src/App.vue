<template>
	<div id="app" class="con">
		<h1 class="text-center">Gundik Watch</h1>
		<Watch class="watch" />
		<Inputs class="inputs mt-5" />
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
:root {
	--main-text-color: #eeeeee;
	--main-background-color: #212121;
	--second-background-color: #323232;
	--main-button-color: #14ffec;
}
body {
	background-color: var(--main-background-color);
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: var(--main-text-color);
	margin-top: 20px;
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
