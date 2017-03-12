import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueRouter from 'vue-router';
import Goods from './components/goods/goods.vue';
import Ratings from './components/ratings/ratings.vue';
import Seller from './components/sellers/sellers.vue';
Vue.prototype.$http = axios;
Vue.use(VueRouter);
const routes = [
	{
		path:'/goods',
		component:Goods,
	},
	{
		path:'/ratings',
		component:Ratings,
	},
	{
		path:'/sellers',
		component:Seller,
	}
];
const router = new VueRouter({
	routes
})
const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
