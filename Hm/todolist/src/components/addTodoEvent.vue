<template>
  <div class="inputEvent">
    <input type="text" placeholder="请输入待完成事件" />
    <button>
      <i id="addBtn"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "inputEvent",
};
</script>

<style>
/* 事件添加组件部分 */
.inputEvent {
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
}
.inputEvent input {
  width: 60%;
  color: #626262;
  border-radius: 20px;
  outline: none;
  border: 1px solid #ccc;
  font-size: 1rem;
  margin-right: 6rem;
}
input[placeholder] {
  font-size: 18px;
  padding-left: 10px;
}
.inputEvent button {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  outline: none;
  border: 1px solid #ccc;
  background: linear-gradient(#c0a5f3, #7f95f7);
  margin-left: -3rem;
  cursor: pointer;
}
.inputEvent button i {
  display: block;
  width: 100%;
  height: 100%;
  background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff);
  background-size: 50% 2px, 2px 50%;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
