<template>
	<div class="inputs">
		<div class="mb-3">
			<label for="titleInput" class="form-label">Title:</label>
			<input
				id="titleInput"
				type="text"
				class="form-control"
				placeholder="My beautiful video"
				v-model="content.title"
			/>
		</div>
		<div class="mb-3">
			<label for="urlInput" class="form-label">Video Url:</label>
			<input
				id="urlInput"
				type="url"
				class="form-control"
				placeholder="My video link"
				v-model="content.videoUrl"
			/>
		</div>
		<button type="button" class="btn btn-dark" @click="createHandler">
			Add Video
		</button>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	name: 'Inputs',
	props: {},
	data() {
		return {
			content: {
				title: '',
				videoUrl: '',
			},
		};
	},

	methods: {
		...mapActions(['createContent']),

		async createHandler() {
			this.createContent(this.content);
		},
	},
};
</script>

<style scoped>
.inputs {
	max-width: 500px;
	margin: 0 auto;
}
</style>
