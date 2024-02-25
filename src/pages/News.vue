<template>
    <div class="news">
      <!-- 导航区 -->
      <ul>
        <li v-for="item in newsList" :key="item.id">
          <RouterLink to="/news/detail">{{ item.title }}</RouterLink>
        </li>
      </ul>
      <!-- 展示区 -->
      <div class="news-content">
        <RouterView></RouterView>
      </div>
    </div>
  </template>
  
  <script setup lang="ts" name="News">
    import {reactive} from 'vue'
    import {RouterView,RouterLink} from 'vue-router'

    let newsList = reactive([
      {id:'hjfjkd01',title:'很好的抗癌食物',content:'西兰花'},
      {id:'hjfjkd02',title:'如何一夜暴富',content:'学IT'},
      {id:'hjfjkd03',title:'震惊，万万没想到',content:'明天是周一'},
      {id:'hjfjkd04',title:'好消息！好消息！',content:'要过年了'}
    ])
    
  </script>
  
  <style scoped>
  /* 新闻 */
  .news {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    height: 100%;
  }
  .news ul {
    margin-top: 30px;
    list-style: none;
    padding-left: 10px;
  }
  .news li>a {
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color: #64967E;
    text-shadow: 0 0 1px rgb(0, 84, 0);
  }
  .news-content {
    width: 70%;
    height: 90%;
    border: 1px solid;
    margin-top: 20px;
    border-radius: 10px;
  }
  </style>