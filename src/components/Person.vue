<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<script lang="ts">
  export default {
    name: 'Person',
    beforeCreate(){
      console.log('beforeCreate')
    },
    setup(){
      console.log('setup',this)
      let name = 'zhangsan'
      let age = 18
      let tel = '13888888888'

      function changeName(){
        name = '张三'
        console.log(name)
      }
      function changeAge(){
        age += 1
        console.log(age)
      }
      function showTel(){
        alert(tel)
      }

      return {name,age,changeName,changeAge,showTel}
    }
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