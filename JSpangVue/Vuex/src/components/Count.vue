<template>
    <div>
        <h2>{{ msg }}</h2>
        <hr>
        <h3>{{ $store.state.count }}</h3>
        <hr>
        <h3>{{ count }}</h3>
        <p>
            <button @click="$store.commit('add',10)">ADD</button>
            <button @click="reduce">reduce</button>
        </p>
    </div>
</template>

<script>
    import store from '@/vuex/store';
    import {mapState,mapMutations, mapGetters} from 'vuex';
    export default {
        data(){
            return {
                msg:'Hello vux'
            }
        },
        computed:{
            ...mapState(['count']),
            // count(){
            //     return this.$store.getters.count;
            // }
            ...mapGetters(['count'])
        },
        methods:mapMutations(['add','reduce']),
        store
    }
</script>