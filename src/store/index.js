import Vue from 'vue';
import Vuex from 'vuex';
import axios from '../axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		list: [],
	},
	actions: {
		async createContent({ state }, data) {
			return await axios()
				.post('/list', { title: data.title, videoUrl: data.videoUrl })
				.then((response) => {
					state.list = response.data;
				});
		},

		async getContents({ state }) {
			return await axios()
				.get('/list')
				.then((response) => {
					state.list = response.data;
				});
		},

		async deleteContent({ state }, _id) {
			return await axios()
				.delete(`/list/${_id}`)
				.then((response) => {
					state.list = response.data;
				});
		},
	},
});
