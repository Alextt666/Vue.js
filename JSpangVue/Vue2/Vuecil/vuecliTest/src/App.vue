<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
    <router-link to="/">首页</router-link>|
    <router-link :to="{name:'hi',params:{username:'TianHi',id:'Good job!'}}">Hi页面</router-link>|
    <router-link :to="{name:'hi1',params:{username:'Tiantian',id:666}}">Hi1页面</router-link>|
    <router-link :to="{name:'hi2',params:{username:'Tiantian',id:'good'}}">Hi2页面</router-link>
    </div>
     <router-view/>
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
</style>
