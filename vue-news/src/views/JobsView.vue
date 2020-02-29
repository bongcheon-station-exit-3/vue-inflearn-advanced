<template>
    <div id="jobs-view">
        <div v-for="element in jobsElements" v-bind:key="element.id">
            <a v-bind:href="element.url">
                {{element.title}}
            </a>
            <small>{{element.user}} by {{element.by}}</small>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'JobsView',
    computed: {
        ...mapGetters(['jobsItems', 'jobsElements'])
    },
    created() {
        this.$store.dispatch('FETCH_JOBS_ITEMS').then(() => {
            const params = {};
            params.type = 'jobs';
            params.items = this.jobsItems;
            this.$store.dispatch('FETCH_ELEMENT_BY_ITEM', params);
        });
    }
}
</script>

<style>

</style>