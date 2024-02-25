<template>
    <ul class="new-list">
        <li>编号：{{query.id}}</li>
        <li>标题：{{query.title}}</li>
        <li>内容：{{query.content}}</li>
    </ul>
  </template>
  
  <script setup lang="ts" name="Detail">
    import {useRoute} from 'vue-router'
    import { toRefs } from 'vue'
    
    let route = useRoute()
    let {query} = toRefs(route)
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