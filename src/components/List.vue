<template>
	<div>
		<div class="list-group mb-5">
			<div
				class="list-group-item list-group-item-action"
				v-for="(element, key) in list"
				:key="key"
			>
				<div class="d-flex justify-content-between align-items-center">
					<h5 class="mb-1">{{ element.title }}</h5>
					<img
						:src="`https://img.youtube.com/vi/${element.watchId}/maxresdefault.jpg`"
						:alt="element.title"
						class="list-image"
					/>
				</div>
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
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
	name: 'List',
	props: {},
	computed: {
		...mapState(['list']),
	},
	methods: {
		...mapActions(['deleteContent']),

		async deleteHandler(id) {
			this.deleteContent(id);
		},
	},
};
</script>

<style scoped>
.list-image {
	width: 150px;
}
</style>
