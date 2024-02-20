<template>
    <h2 class="person" ref="title2">你好</h2>
    <button @click="showLog">点我输出h2这个元素</button>
    <Person ref="ren" />
</template>

<script lang="ts" setup name="App">
  import Person from './components/Person.vue'
  import {ref} from 'vue'

  let title2 = ref()
  let ren = ref()

  function showLog(){
    // console.log(document.getElementById('title2'))
    // console.log(title2.value)
    console.log(ren.value)

  }
</script>

<style>
  .app{
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
</style>