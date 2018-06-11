// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from './components/Layout'
import vueroutes from './router.config'
import Resource from 'vue-resource'
import BMap from './pages/BaiduMap'
import axios from 'axios'
import VeeValidate,{ Validator } from 'vee-validate'
import qs from 'querystring'
import store from './vuex/store'
import Toast from '@/toast/toast'


//导入css
import './assets/fonts/iconfont.css'
import './assets/fonts/iconfont.js';
import './assets/js/jquery-3.2.1.js';

Vue.config.productionTip = false
var $axios = axios.create({
  headers: { "content-type": "application/x-www-form-urlencoded" }
});
Vue.prototype.$axios=$axios;

Vue.use(Resource);
Vue.use(VueRouter);
Vue.use(VeeValidate);
Vue.use(store);
Vue.use(Toast);

Validator.extend('uname',{
  validate:(value)=>{
    const reg=/^[a-zA-Z0-9]{3,8}$/;
    return reg.test(value);
  }
});
Validator.extend('upwd',{
  validate:(value)=>{
    const reg=/^[0-9a-zA-Z!@#$%^&*']{6,18}$/;
    return reg.test(value);
  }
});
Validator.extend('phone',{
  validate:(value)=>{
    const reg=/^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
    return reg.test(value);
  }
});
Validator.extend('email',{
  validate:(value)=>{
    const reg=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(value);
  }
});

var router =new VueRouter({
   routes:vueroutes
})

Vue.component('baidu-map-component',BMap);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { Layout },
  template: '<Layout/>'
})
