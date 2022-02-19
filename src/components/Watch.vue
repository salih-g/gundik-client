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
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
	name: 'Watch',

	methods: {
		...mapActions(['changeWatchId']),

		playing() {
			this.$socket.emit('play', {});
		},
		paused() {
			this.$socket.emit('pause', {});
		},
	},
	computed: {
		player() {
			return this.$refs.youtube.player;
		},

		...mapState(['watchId']),
	},

	sockets: {
		start_playing() {
			this.player.playVideo();
		},

		stop_playing() {
			this.player.pauseVideo();
		},

		watchId(watchId) {
			this.changeWatchId(watchId);
		},
	},
};
</script>
