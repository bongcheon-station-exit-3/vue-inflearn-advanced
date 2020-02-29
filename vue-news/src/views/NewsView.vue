<template>
  <div id="news-views">
      <div v-for="element in newsElements" :key="element.id">
        <a :href="element.url">
          {{element.title}}
        </a>
        <small>{{element.user}} by {{element.by}}</small>
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'NewsView',
    computed: {
      ...mapGetters(['newsItems', 'newsElements'])
    },
    created() {
      this.$store.dispatch('FETCH_NEWS_ITMES').then(() => {
          const params = {};
          params.type = 'news';
          params.items = this.newsItems;
          this.$store.dispatch('FETCH_ELEMENT_BY_ITEM', params);
      });
    }
}
</script>

<style>

</style>