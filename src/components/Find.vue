<template>
  <div class="find">我是发现页
    <!-- 用于展示二级路由默认路由Recom -->
    <!-- 进入根路径，自动重定向到Find组件页面，然后有重定向到二级默认路由组件Recom -->
    <router-view></router-view>
  </div>
</template>

<script>
export default{
  name:"Find"
};
</script>

<style scoped>
.find{
  color: blue;
  font: italic 700 25px Arial;
}
</style>
