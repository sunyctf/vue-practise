<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HellWold></HellWold>
    <hr>
    <div id="nav">
      <!--使用 router-link 组件进行导航 -->
      <!--通过传递 `to` 来指定链接 -->
      <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
      <router-link to="/find">发现音乐</router-link>
      <router-link to="/my">我的音乐</router-link>
      <router-link to="/part">我的朋友</router-link>
    </div>
    <hr>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
import HellWold from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    HellWold,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  display: flex;
  justify-content: space-around;
}
a {
  text-decoration: none;
}
</style>
