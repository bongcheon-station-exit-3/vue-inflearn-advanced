<template>
  <div id="news-views">
      <div v-for="item in userItems">{{item}}</div>
  </div>
</template>

<script>

import {fetchNewsList} from '../api/index.js'

export default {
    name: 'NewsView',
    data() {
      return {
        userItems: []
      }
    },
    created() {
      fetchNewsList()
      .then((response) => {
        this.userItems = response.data;
      })
      .catch((error) => {
        console.error(error);
      })
    }
}
</script>

<style>

</style>