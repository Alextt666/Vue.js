<template>
  <div>
    <h2>{{ msg }}</h2>
    <div>请随机选择一位美女进行服务</div>
    <div v-if="loading">loading</div>
    <img :src="result.imgUrl" alt="图片" v-if="loaded" />
  </div>
</template>

<script lang="ts">
import useUrlAxios from "./hooks/useUrlAxios";
// import { ref } from "vue";
export default {
  name: "App",
  setup() {
    const msg = "欢迎来到KDA洗浴中心";
    const { result, loading, loaded } = useUrlAxios(
      "https://apiblog.jspang.com/default/getGirl"
    );
    return {
      msg,
      loading,
      loaded,
      result,
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
