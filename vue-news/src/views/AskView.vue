<template>
    <div id="ask-views">
        <div v-for="item in asksItems">{{item}}</div>
    </div>  
</template>

<script>

import {
    mapState,
    mapGetters,
} from 'vuex';

export default {
    name: 'AskView',
    computed: {
        ...mapGetters(['asksItems'])
        // ...mapState({
        //     ask: state => state.askItems
        // })
        // ask() {
        //     return this.$store.state;
        // },
    },
    created() {
        this.$store.dispatch('FETCH_ASKS_ITEMS');
    }
}
</script>

<style>

</style>