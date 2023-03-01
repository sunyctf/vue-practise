<template>
  <div class="hello">如果我被App.vue导入，那么我就是App.vue的子组件</div>
</template>
<script>

export default {
  name: "HelloWorld",
  created() {},
};
</script>

<style scoped>
.hello{
  color:cornflowerblue;
  font: 700 25px Arial;
}
</style>