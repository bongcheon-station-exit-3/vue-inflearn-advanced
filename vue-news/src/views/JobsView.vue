<template>
    <div id="jobs-view">
        <div v-for="item in this.$store.state.jobsItems">{{item}}</div>"
    </div>
</template>

<script>

export default {
    name: 'JobsView',
    data() {
        return {
        }
    },
    created() {
        this.$store.dispatch('FETCH_JOBS_ITEMS');
    }
}
</script>

<style>

</style>