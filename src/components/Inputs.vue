<template>
	<div class="inputs">
		<div class="mb-3">
			<label for="titleInput" class="form-label">Title:</label>
			<input
				type="email"
				class="form-control"
				id="titleInput"
				placeholder="My beautiful video"
			/>
		</div>
		<div class="mb-3">
			<label for="urlInput" class="form-label">Video Url:</label>
			<input
				type="url"
				class="form-control"
				id="urlInput"
				placeholder="My video link"
			/>
		</div>
		<button type="button" class="btn btn-dark">Add Video</button>
	</div>
</template>

<script>
export default {
	name: 'Inputs',
	props: {},
};
</script>

<style scoped>
.inputs {
	max-width: 500px;
	margin: 0 auto;
}
</style>
