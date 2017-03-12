import Vue from 'vue';
import VueRouter from 'vue-router';

const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' }

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: First
    }
  ]
})

export default {
	router
}