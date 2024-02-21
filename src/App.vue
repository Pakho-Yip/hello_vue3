<template>
    <Person v-if="isShow"/>
</template>

<script lang="ts" setup name="App">
  import Person from './components/Person.vue'
  import {reactive,ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'
  let isShow = ref(true)

  console.log('父--创建')

  // 挂载前
  onBeforeMount(()=>{
    console.log('父--挂载前')
  })

  // 挂载完毕
  onMounted(()=>{
    console.log('父--挂载完毕')
  })
    // 更新前
    onBeforeUpdate(()=>{
    console.log('父--更新前')
  })

  // 更新完毕
  onUpdated(()=>{
    console.log('父--更新完毕')
  })

  // 卸载前
  onBeforeUnmount(()=>{
    console.log('父--卸载前')
  })

  // 卸载完毕
  onUnmounted(()=>{
    console.log('父--卸载完毕')
  })

</script>

<style>
  .app{
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
</style>