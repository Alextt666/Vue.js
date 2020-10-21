<template>
    <div>
        <p>{{ msg }}</p>
    </div>
</template>

<script>
export default {
  name: 'Hi2',
  data () {
    return {
      msg: 'I"m Hi2 page!'
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
