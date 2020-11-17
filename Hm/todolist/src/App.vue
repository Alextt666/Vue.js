<template>
  <div class="main">
    <div class="container">
      <h1>欢迎使用TianTodoList</h1>
      <addTodoEvent></addTodoEvent>
      <filters></filters>
      <todoList></todoList>
    </div>
  </div>
</template>

<script>
import addTodoEvent from "./components/addTodoEvent.vue";
import filters from "./components/filters.vue";
import todoList from "./components/todoList.vue";
export default {
  name: "App" /* eslint-disable */,
  components: {
    addTodoEvent,
    filters,
    todoList,
  },
};
</script>

<style>
/* 整体背景的内容 */
:root {
  font-size: 10px;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.main {
  width: 100%;
  height: 100vh;
  background-color: rgb(203, 210, 240);
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  min-width: 300px;
  height: 500px;
  background-color: rgb(245, 246, 252);
  border-radius: 5%;
}
h1 {
  font-size: 3rem;
  color: #414873;
  margin: 1.5rem;
  padding-left: 1rem;
}
</style>
