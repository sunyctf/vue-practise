<template>
  <div class="recom">
    <router-link to="/details">recom...</router-link>
    <div>
      <button @click="goTo">我是一个按钮</button>
    </div>  
  </div>
</template>

<script>
export default {
  name: "Recom",
  methods: {
    goTo() {
      // 1、$router.push()可直接实现从当前页面打开链接，不能实现新标签页面打开链接。返回一个Promise对象
      // this.$router.push({ path: "/details"})

      // 2.$router.resolve()配合window全局对象中的打开链接的方法，实现链接跳转
      let routeData = this.$router.resolve({
        path: "/details"
        // name: "details"
      });
      console.log(routeData)
      window.open(routeData.href, "_blank");
    },
  },
};
</script>

<style scoped>
</style>