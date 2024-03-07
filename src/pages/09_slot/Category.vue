<template>
    <div class="category">
      <slot name="s1">默认内容1</slot>
      <slot name="s2">默认内容2</slot>
    </div>
</template>
  
<script setup lang="ts" name="Category">
</script>

<style scoped>
  .category {
    width: 200px;
    height: 300px;
    background-color: skyblue;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    padding: 10px;
  }
</style>