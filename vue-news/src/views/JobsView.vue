<template>
    <div id="jobs-view">
        <div v-for="item in jobItems">{{item}}</div>"
    </div>
</template>

<script>

import {fetchJobsList} from '../api/index.js'

export default {
    name: 'JobsView',
    data() {
        return {
            jobItems: []
        }
    },
    created() {
        fetchJobsList()
        .then((response) => {
            this.jobItems = response.data;
        })
        .catch((error) => {
            console.error(error);
        })
    }
}
</script>

<style>

</style>