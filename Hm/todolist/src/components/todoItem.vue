<template>
  <div>
    <li class="todoItem">
      <label>
        <input type="checkbox" />
        Todo 1
        <span class="check-button"></span>
      </label>
    </li>
    <li class="todoItem">
      <label>
        <input type="checkbox" />
        Todo 1
        <span class="check-button"></span>
      </label>
    </li>
    <li class="todoItem">
      <label>
        <input type="checkbox" />
        Todo 1
        <span class="check-button"></span>
      </label>
    </li>
  </div>
</template>

<script>
export default {
  name: "todoItem" /* eslint-disable */,
};
</script>

<style>
/* 列表内容部分 */
.todoItem {
  width: 90%;
  height: 5rem;
  font-size: 1.5em;
  margin-top: 1em;
  color: #626262;
  list-style-type: none;
  background-color: white;
  border-radius: 5%;
  text-align: left;
  display: flex;
  align-items: center;
}
.todoItem label {
  position: relative;
  display: flex;
  align-items: center;
}
.todoItem label span.check-button {
  position: absolute;
  top: 0;
}
.todoItem label span.check-button::before,
.todoItem label span.check-button::after {
  content: "";
  display: block;
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
}
.todoItem label span.check-button::before {
  border: 1px solid #b382f9;
}
.todoItem label span.check-button::after {
  transition: 0.4s;
  background-color: #b382f9;
  transform: translate(1px, 1px) scale(0.8);
  opacity: 0;
}
.todoItem input {
  margin-right: 16px;
  opacity: 0;
}
.todoItem input:checked + span.check-button::after {
  opacity: 1;
}
/* 圆的颜色为#b382f9 */
</style>
