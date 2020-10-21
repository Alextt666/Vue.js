import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


const state = {
    count:1
};
const mutations = {
    add(state,n){
        state.count+=n;
    },
    reduce(state){
        state.count--;
    }
}
const getters = {
    count : state=>state.count+=100
}
export default new Vuex.Store({
    state,
    mutations,
    getters
})