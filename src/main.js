// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import App from './App';
import Index from './components/index/index';
import Table from './components/table/table';
import Form from './components/form/form';
import other from './components/other/other';
import 'font-awesome/css/font-awesome.min.css';
import Mock from './mock/mock';
Mock.mockData();
Vue.use(VueRouter);// 安装路由功能
/* eslint-disable no-new */
Vue.use(VueRouter);
Vue.prototype.$http = axios;
Vue.use(ElementUI);

// 后端对比cookies判断是否登录，凡接口response的header带有x-auth-token的即未登录，跳转首页。
// Vue.http.interceptors.push((request, next) => {
//   request.credentials = true;
//   next((response) => {
//     let messageHeader;
//     /* global IS_PRODUCTION:true */
//     if (IS_PRODUCTION) {
//       messageHeader = "X-Auth-Token";
//     } else {
//       messageHeader = "x-auth-token";
//     }
//     if (messageHeader in response.headers.map) {
//       router.push({path: '/login'});
//     }
//     return response
//   });
// });

let routes = [
  {
    path: '/',
    component: App,
    children: [
      {path: '/index', component: Index, name: 'index', class: 'fa-line-chart'},
      {path: '/table', component: Table, name: 'table', class: 'fa-table'},
      {path: '/form', component: Form, name: 'form', class: 'fa-newspaper-o'},
      {path: '/other', component: other, name: 'other', class: 'fa-plug'}
    ]
  }
];
let router = new VueRouter({
  // 'mode': 'history', 去掉URL的#号，需要配置服务器http://router.vuejs.org/zh-cn/essentials/history-mode.html
  'linkActiveClass': 'active',
  routes
});
let app = new Vue({
  router
}).$mount('#app');
export default app;
