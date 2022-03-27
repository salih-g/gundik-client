<template>
	<div class="list">
		<div class="list-group mb-5">
			<div class="card mb-5" v-for="(element, key) in list" :key="key">
				<img
					class="card-img-top click"
					:src="`https://img.youtube.com/vi/${element.watchId}/maxresdefault.jpg`"
					@click="handleVideoChange(element.watchId)"
				/>
				<div class="card-body">
					<p class="card-text">
						{{ element.title }}
					</p>
					<div class="d-flex justify-content-between mt-2">
						<small class="text-muted">3 days ago</small>
						<button
							type="button"
							class="btn btn-danger"
							@click="deleteHandler(element._id)"
						>
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
	name: 'List',
	computed: {
		...mapState(['list']),
	},
	methods: {
		...mapActions(['deleteContent', 'changeWatchId']),

		async deleteHandler(id) {
			this.deleteContent(id);
		},

		handleVideoChange(watchId) {
			this.$socket.emit('video_change', watchId);
			this.changeWatchId(watchId);
		},
	},
};
</script>

<style scoped>
.list {
	width: 70%;
	margin: 0 auto;
}
.card {
	background-color: var(--second-background-color);
	color: var(--main-text-color);
}
.click {
	cursor: pointer;
}
</style>
