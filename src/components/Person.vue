<template>
    <div class="person">
      <h2>姓名：{{person.name}}</h2>
      <h2>年龄：{{person.age}}</h2>
      <h2>汽车：{{person.car.car1}}、{{person.car.car2}}</h2>
      <button @click="changeName">修改姓名</button>
      <button @click="changeAge">修改年龄</button>
      <button @click="changeCar1">修改第一辆车</button>
      <button @click="changeCar2">修改第二辆车</button>
      <button @click="changeCar">修改整个车</button>
    </div>
</template>

<script lang="ts" setup name="Person">
  import {reactive,watch} from 'vue'

  let person = reactive({
    name: '张三',
    age: 18,
    car:{
      car1:'奔驰',
      car2:'宝马'
    }
  })

  // 监视，情况五：监视上述的多个数据
  watch([()=>person.name,()=>person.car.car1],(newValue,oldValue)=>{
    console.log('watch',newValue,oldValue)
  },{deep:true})

  function changeName(){
    person.name += '~'
  }
  function changeAge(){
    person.age += 1
  }
  function changeCar1(){
    person.car.car1 = '奥迪'
  }
  function changeCar2(){
    person.car.car2 = '路虎'
  }
  function changeCar(){
    person.car = {car1:'爱玛',car2:'雅迪'}
  }
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