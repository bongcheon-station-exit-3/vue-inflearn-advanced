<template>
    <div id="ask-views">
        <div v-for="item in this.$store.state.asksItems">{{item}}</div>
    </div>  
</template>

<script>

export default {
    name: 'AskView',
    data() {
        return {
            askItems: []
        }
    },
    created() {
        this.$store.dispatch('FETCH_ASKS_ITEMS');
    }
}
</script>

<style>

</style>