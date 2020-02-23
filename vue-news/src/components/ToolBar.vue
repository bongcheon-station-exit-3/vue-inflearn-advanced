<template>
  <div id="tool-bar">
      <router-link to="/news">News</router-link> |
      <router-link to="/ask">Ask</router-link> |
      <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

#tool-bar {
  color: white;
  background-color: darkslateblue;
  display: flex;
  padding: 8px;
}

#tool-bar .router-link-exact-active {
  color: yellow;
}

#tool-bar a {
  color: white;
}
</style>