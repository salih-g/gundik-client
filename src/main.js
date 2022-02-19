import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueYoutube from 'vue-youtube';

Vue.config.productionTip = false;
Vue.use(VueYoutube);

new Vue({
	store,
	render: (h) => h(App),
}).$mount('#app');
