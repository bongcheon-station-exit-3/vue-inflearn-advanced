<template>
  <div id="app">
    <!-- 라우터에 맞는 컴포넌트가 뷰에 나옴 -->
    <tool-bar />
    <router-view></router-view>
  </div>
</template>

<script>

import ToolBar from './components/ToolBar.vue';

export default {
  name: 'App',
  components: {ToolBar}
}
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
</style>
