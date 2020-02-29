<template>
    <div id="ask-views">
        <div v-for="element in asksElements">
            {{element}}
        </div>
    </div>  
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: 'AskView',
    computed: {
        ...mapGetters(['asksItems', 'asksElements']),
    },
    created() {
        this.$store.dispatch('FETCH_ASKS_ITEMS').then(() => {
            const params = {};
            params.type = 'asks';
            params.items = this.asksItems;
            this.$store.dispatch('FETCH_ELEMENT_BY_ITEM', params);
        });
    }
}
</script>

<style>

</style>