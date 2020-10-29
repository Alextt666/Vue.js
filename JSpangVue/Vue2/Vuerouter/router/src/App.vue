<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br>
    <router-link to="/">Home</router-link>
    <router-link to="/params/198/TianTianIsVeryGood">Params</router-link>
    <router-link to="/goHome">goHome</router-link>
    <router-link to="/goParams/999/hi">goParams</router-link>
    <router-link to="/hi2">gohi2</router-link>
    <router-link to="/124564556">点我会404</router-link>
    <transition name="fade" mode="out-in">
       <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  opacity: 1;
  transition: .5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  opacity: 0;
  transition: .5s;
}
</style>
