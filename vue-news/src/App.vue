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
body{
  padding: 0;
  margin: 0;
}
</style>
