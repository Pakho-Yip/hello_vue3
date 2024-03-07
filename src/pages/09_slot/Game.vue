<template>
    <div class="game">
      <h2>游戏列表</h2>
      <slot :youxi="games" x="哈哈" y="你好">默认内容1</slot>
    </div>
</template>
  
<script setup lang="ts" name="Game">
  import {reactive} from 'vue'
  let games = reactive([
    {id:'hfjkh01',name:'英雄联盟'},
    {id:'hfjkh02',name:'梦幻西游'},
    {id:'hfjkh03',name:'红色警戒'},
    {id:'hfjkh04',name:'芒刺在背'}
  ])
</script>

<style scoped>
  .game {
    width: 200px;
    height: 300px;
    background-color: skyblue;
    border-radius: 10px;
    box-shadow: 0 0 10px;
    padding: 10px;
  }
  h2 {
    background-color: orange;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
  }
</style>