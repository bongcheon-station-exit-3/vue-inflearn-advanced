<template>
    <div id="ask-views">
        <div v-for="item in askItems">{{item}}</div>
    </div>  
</template>

<script>

import {fetchAsksList} from '../api/index.js'

export default {
    name: 'AskView',
    data() {
        return {
            askItems: []
        }
    },
    created() {
        fetchAsksList()
        .then((response) => {
            this.askItems = response.data;
        })  
        .catch((error) => {
            console.error(error);
        });

    }
}
</script>

<style>

</style>