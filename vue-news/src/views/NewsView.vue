<template>
  <div id="news-views">
      <div v-for="item in this.$store.state.newsItems">{{item}}</div>
  </div>
</template>

<script>

export default {
    name: 'NewsView',
    data() {
      return {
      }
    },
    created() {
      this.$store.dispatch('FETCH_NEWS_ITMES');
    }
}
</script>

<style>

</style>