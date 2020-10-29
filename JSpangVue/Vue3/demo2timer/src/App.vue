<template>
  <div>
    <div>{{ nowTime }}</div>
    <button @click="getNowTime">显示时间</button>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { nowTime, getNowTime } from "./hooks/useNowTime";
export default {
  name: "App",
  setup() {
    return {
      nowTime,
      getNowTime,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
