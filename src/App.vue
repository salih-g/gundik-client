<template>
	<div id="app" class="container">
		<h1 class="text-center">Gundik Watch</h1>
		<Watch class="watch" />
	</div>
</template>

<script>
import Watch from './components/Watch.vue';

export default {
	name: 'App',
	components: {
		Watch,
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
