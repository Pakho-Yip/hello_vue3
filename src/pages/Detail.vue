<template>
    <ul class="new-list">
        <li>编号：{{id}}</li>
        <li>标题：{{title}}</li>
        <li>内容：{{content}}</li>
    </ul>
  </template>
  
  <script setup lang="ts" name="Detail">
    defineProps(['id','title','content'])
    // defineProps(['a','b','c'])

    
  </script>
  
  <style scoped>
  /* 新闻 */
  .new-list {
    list-style: none;
    padding-left: 20px;
  }
  .new-list>li {
    line-height: 30px;
  }
  </style>