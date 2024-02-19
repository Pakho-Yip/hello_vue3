<template>
    <div class="person">
      <h2>姓名：{{person.name}}</h2>
      <h2>年龄：{{person.age}}</h2>
      <button @click="changeName">修改姓名</button>
      <button @click="changeAge">修改年龄</button>
      <button @click="changePerson">修改整个人</button>
      <hr>
      <h2>测试：{{obj.a.b.c}}</h2>
      <button @click="changeObj">修改值</button>
    </div>
</template>

<script lang="ts" setup name="Person">
  import {reactive,watch} from 'vue'

  let person = reactive({
    name: '张三',
    age: 18
  })
  let obj = reactive({
    a:{
      b:{
        c:666
      }
    }
  })

  // 监视，情况三：监视【reactive】定义的【对象类型】数据，且默认是开启深度监视的
  watch(person,(newValue,oldValue)=>{
    console.log('watch',newValue,oldValue)
  })
  watch(obj,(newValue,oldValue)=>{
    console.log('watch',newValue,oldValue)
  })

  function changeName(){
    person.name += '~'
  }
  function changeAge(){
    person.age += 1
  }
  function changePerson(){
    // person = {name: '李四', age: 90}
    Object.assign(person,{name: '李四', age: 90})
  }
  function changeObj(){
    obj.a.b.c = 888
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