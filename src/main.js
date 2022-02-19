import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueYoutube from 'vue-youtube';
import VueSocketIO from 'vue-socket.io';

Vue.config.productionTip = false;
Vue.use(VueYoutube);
Vue.use(
	new VueSocketIO({
		connection: process.env.VUE_APP_SERVICE_URL,
	}),
);

new Vue({
	store,
	render: (h) => h(App),
}).$mount('#app');
