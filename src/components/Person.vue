<template>
    <div class="person">
      <h2>和为：{{sum}}</h2>
      <button @click="changeSum">点我sum+1</button>
    </div>
</template>

<script lang="ts" setup name="Person">
  import {ref,watch} from 'vue'

  let sum = ref(0)

  function changeSum(){
    sum.value += 1
  }
  // 监视，情况一：监视【ref】定义的【基本类型】数据
  let stopWatch = watch(sum,(newValue,oldCalue) => {
    console.log('watch')
    console.log(newValue,oldCalue)
    if(newValue >= 10){
      stopWatch()
    }
  })
</script>



<style scoped>
  .person{
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button{
    margin: 0 5px;
  }
</style>