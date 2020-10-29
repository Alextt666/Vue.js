<template>
    <div>
        <h2>{{ msg }}--{{ $route.params.username }}--{{ $route.params.id }}</h2>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'Hi',
  data () {
    return {
      msg: 'I"m Hi page!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    *{
        font-size: 30px;
        font-weight: 600;
    }
</style>
