import Vue from 'vue'
import VueRouter from 'vue-router' //1.导入包
Vue.use(VueRouter) //2.安装路由功能
import router from '../src/router/router.js'//3.抽离路由到相应独立的js文档
import app from '../src/app.vue'
import '../src/css/style.css'

new Vue({
    el: '#app',
    render: c => c(app),
    router: router, //4.挂载
});