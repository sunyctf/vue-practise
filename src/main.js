// 导入Vue构造函数
import Vue from 'vue'
import App from './App.vue';
// 导入路由VueRouter构造函数
import VueRouter from 'vue-router';
// 导入路由文件
//导入router文件夹中的index.js中的router实例化对象 
//一个文件夹里面只有一个index.js文件在脚手架中可以把./router/index.js简写为./router
import router from './router'

// 生产提示 
// 改成false是用来关闭开发者提示
Vue.config.productionTip = false

// 注册全局VueRouter
//调用构造函数Vue的use方法 传入VueRouter构造函数
//作用是把VueRouter作为一个插件 全局插入到Vue中
Vue.use(VueRouter)

// 挂载
/**
 * 在Vue的对象参数里面配置 el:"#app" 等于 .$mount('#app')
 * 都是用来挂载到id为#app的div上的
 * 把路由实例化对象router配置在Vue中，作用是保证项目中
 * 所有的vue文件都可以使用router路由的属性和方法
 */ 
new Vue({
  router, // 注入路由对象
  // render函数渲染DOM结构，创建虚拟节点VNode。会把所有vue文件渲染到App组件上件上
  render: h => h(App),
}).$mount('#app') // 若没有配置el属性，就需要使用$mount()函数手动挂载，等同于el:"#app""#app" 