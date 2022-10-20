import Vue from 'vue';
import Vuex from 'vuex';
import axios from '../axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		list: [],
		watchId: '',
		isLoggedIn: false,
	},
	actions: {
		async createContent({ state }, data) {
			if (!data.title) {
				data.title = randomWord();
			}

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

		changeWatchId({ state }, watchId) {
			state.watchId = watchId;
		},
	},
});

const randomWord = () => {
	const words = ['Gundik', 'Anka', 'Gundik Gunsayan', 'Gukuk kuslari oter'];
	return words[Math.floor(Math.random() * words.length)];
};
