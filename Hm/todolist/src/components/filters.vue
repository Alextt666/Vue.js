<template>
  <div class="filters">
    <span class="filter active">全部</span>
    <span class="filter">未完成</span>
    <span class="filter">已完成</span>
  </div>
</template>

<script>
export default {
  name: "filters",
};
</script>

<style>
/* filters部分 */
.filters {
  width: 100%;
  height: 3rem;
  color: #c0c2ce;
  margin: 2rem 0;
  font-size: 1.5rem;
  padding-left: 2.5rem;
  display: flex;
  align-items: center;
}
.filters .filter {
  padding-right: 1.5rem;
  font-size: 1em;
}
.filters .filter.active {
  color: #6b729c;
  transform: scale(1.2);
}
</style>
