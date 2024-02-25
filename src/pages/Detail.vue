<template>
    <ul class="new-list">
        <li>编号：{{route.params.id}}</li>
        <li>标题：{{route.params.title}}</li>
        <li>内容：{{route.params.content}}</li>
    </ul>
  </template>
  
  <script setup lang="ts" name="Detail">
    import {useRoute} from 'vue-router'
    
    let route = useRoute()
    console.log(route)
    
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