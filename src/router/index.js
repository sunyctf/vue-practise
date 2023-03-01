import Vue from "vue";
// 导入路由VueRouter构造函数
import VueRouter from "vue-router";
import Details from "../components/Details.vue";
import HellWold from "../components/HelloWorld.vue";
import Find from "../components/Find.vue";
import My from "../components/My.vue";
import Part from "../components/Part.vue";
import NotFound from "../components/NotFound.vue";

import Recom from "../components/two/Recom.vue";
import Ranking from "../components/two/Ranking.vue";
import SongList from "../components/two/SongList.vue";

// 创建路由规则：定义一个路由数组对象
var routes = [
  /**
   *一个对象就对应了一个路由
   *path 就是路由的地址
   *name 给路由起的名字
   *component 具体跳转的是哪个组件页面
   */
  {
    path: "/",
    // 路由重定向：redirect意味着重定向，当浏览器访问'/'根路径时，将会自动重定向到'/find'
    redirect: "find", //默认显示推荐组件(路由的重定向)
  },
  {
    path: "/find",
    name: "find",
    component: Find,
    children: [
      {
        // Vue中如何实现路由跳转时单页面只含子路由的内容？
        // 子路由的组件必定在上一级路由中的 router-view 中显示，可以通过条件判断，将父组件的内容隐藏，或者导向新的页面
        path: "/",
        redirect: "recom", //默认显示推荐组件
      },
      {
        path: "recom",
        component: Recom,
      },
      {
        path: "ranking", //注意二级路由的路径千万不要加斜杠/
        component: Ranking,
      },
      {
        path: "songlist",
        component: SongList,
      },
    ],
  },
  {
    path: "/my",
    name: "my",
    component: My,
  },
  {
    path: "/part",
    name: "part",
    component: Part,
  },
  {
    path: "/helloworld",
    name: "helloworld",
    component: HellWold,
  },
  {
    path: "/details",
    name: "details",
    component: Details,
  },
  {
    // path:'*' 必须要放最后
    // path:'*' 表示上面的路由没有匹配到，则进入下面的页面
    path: "*", //也可以写为"/*"
    name: "NotFound",
    component: NotFound, //定义找不到已有组件时显示404
  },
];

// 创建路由器对象
// 实例化构造函数 VueRouter 产生一个实例化对象
// 并把上面的路由数组对象routes当作参数，以对象的方式传给构造函数 VueRouter
const router = new VueRouter({
  routes,
  mode: "history", //路由模式(默认为hash模式)
});
// 导出路由器对象
// 把实例化路由对象 router 默认导出
export default router;
