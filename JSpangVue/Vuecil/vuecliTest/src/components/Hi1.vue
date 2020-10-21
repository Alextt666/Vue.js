<template>
    <div>
        <h2>{{ msg }}</h2>
    </div>
</template>

<script>
export default {
  name: 'Hi1',
  data () {
    return {
      msg: 'I"m Hi1 page!'
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
