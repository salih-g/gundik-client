<template>
	<div>
		<div class="list-group mb-5">
			<a
				href="#"
				class="list-group-item list-group-item-action"
				v-for="(element, key) in list"
				:key="key"
			>
				<div class="d-flex justify-content-between align-items-center">
					<h5 class="mb-1">{{ element.title }}</h5>
					<img
						:src="`https://img.youtube.com/vi/${element.watchId}/hqdefault.jpg`"
						:alt="element.title"
						class="list-image"
					/>
				</div>
				<small class="text-muted">3 days ago</small>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	name: 'List',
	props: {},
	data() {
		return {
			list: [
				{
					title: 'Başlik 1',
					watchId: 'uHiSY-PmXQE',
				},
				{
					title: 'Başlik 2',
					watchId: 'uHiSY-PmXQE',
				},
				{
					title: 'Başlik 3',
					watchId: 'uHiSY-PmXQE',
				},
			],
		};
	},
};
</script>

<style scoped>
.list-image {
	width: 150px;
}
</style>
