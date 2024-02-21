<template>
    <!-- 务必看懂下面这一行代码 -->
    <!-- <h2 a="1+1" :b="1+1" c="x" :d="x" ref="qwe"></h2> -->
    <Person :list="personList"/>
</template>

<script lang="ts" setup name="App">
  import Person from './components/Person.vue'
  import {type Persons} from '@/types'
  import {reactive} from 'vue'

  let x=9

  let personList = reactive<Persons>([
    {id:'fjhjhkjhf01',name:'zhangsan',age:18},
    {id:'fjhjhkjhf02',name:'lisi',age:19,},
    {id:'fjhjhkjhf03',name:'wangwu',age:8}
  ])
</script>

<style>
  .app{
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
</style>