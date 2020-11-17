<template>
  <div class="todoList">
    <ul class="todoListUl">
      <todo-item></todo-item>
    </ul>
  </div>
</template>

<script>
import todoItem from "./todoItem.vue";
export default {
  components: { todoItem } /* eslint-disable */,
  name: "todoList",
};
</script>

<style>
/* 列表整体部分 */
.todoList {
  width: 100%;
  margin-top: 1rem;
}
.todoListUl {
  display: flex;
  flex-direction: column;
  align-items: left;
  padding-left: 2rem;
}
</style>
