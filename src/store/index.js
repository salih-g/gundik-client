import Vue from 'vue';
import Vuex from 'vuex';
import axios from '../axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		list: [],
	},
	actions: {
		getContents({ state }) {
			return axios()
				.get('/list')
				.then((response) => {
					console.log(response.data);
					state.list = response.data;
				});
		},
	},
});
