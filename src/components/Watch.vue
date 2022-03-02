<template>
	<div>
		<youtube
			:video-id="watchId"
			ref="youtube"
			width="100%"
			height="100%"
			@playing="playing"
			@paused="paused"
		></youtube>
		Minutes:
		<input
			type="number"
			class="form-control d-inline"
			placeholder="10"
			v-model="moveTo"
		/>
		<button type="button" class="btn btn-primary d-inline" @click="goSecond()">
			Move To
		</button>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
	name: 'Watch',
	data() {
		return {
			moveTo: 0,
		};
	},

	methods: {
		...mapActions(['changeWatchId']),

		playing() {
			this.$socket.emit('play');
		},
		paused() {
			this.$socket.emit('pause');
		},
		async goSecond() {
			this.player.seekTo(this.moveTo * 60);
			this.$socket.emit('moveTo', this.moveTo * 60);
		},
	},
	computed: {
		player() {
			return this.$refs.youtube.player;
		},

		...mapState(['watchId']),
	},

	sockets: {
		async start_playing() {
			await this.player.playVideo();
		},

		async stop_playing() {
			await this.player.pauseVideo();
		},

		async goTo(second) {
			this.player.seekTo(second);
		},

		watchId(watchId) {
			this.changeWatchId(watchId);
		},
	},
};
</script>

<style scoped>
.form-control {
	width: 100px;
	margin-right: 14px;
}
</style>
