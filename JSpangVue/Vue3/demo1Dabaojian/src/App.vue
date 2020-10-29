<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="欢迎来到KDA洗浴中心" />
    <div>
      <h2>请在下方选择您喜欢的技师:</h2>
      <button
        v-for="(girl, index) in girls"
        :key="index"
        @click="selectGirlsFun(index)"
      >
        {{ index }}号技师-{{ girl }}
      </button>
      <p>你已经选择了{{ selectGirls }}号技师服务</p>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive, toRef, toRefs } from "vue";
interface DataProps {
  girls: string[];
  selectGirls: string;
  selectGirlsFun: (index: number) => void;
}
export default {
  name: "app",
  setup() {
    const data: DataProps = reactive({
      girls: ["阿卡丽", "卡瑟琳", "蕾欧娜"],
      selectGirls: "",
      selectGirlsFun: (index: number) => {
        data.selectGirls = data.girls[index];
      },
    });
    const refData = toRefs(data);
    // const girls = ref(["阿卡丽", "卡瑟琳", "蕾欧娜"]);
    // const selectGirls = ref("");
    // const selectGirlsFun = (index: number) => {
    //   selectGirls.value = girls.value[index];
    // };
    return {
      // girls,
      // selectGirls,
      // selectGirlsFun,
      ...refData,
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
