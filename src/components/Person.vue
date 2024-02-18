<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <h2>地址：{{ addresss }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<!-- <script lang="ts">
  export default {
    name: 'Person234'
  }
</script> -->

<script lang="ts" setup name="Person">
    import {ref} from 'vue'
    // 数据，原来是写在data中的，此时的name、age、tel都不是响应式的数据
    let name = ref('zhangsan')
    let age = ref(18)
    let tel = '13888888888'
    let addresss = '浙江省杭州市余杭区天时科创园'

    console.log(1,name)
    console.log(2,age)
    console.log(3,tel)
    console.log(4,addresss)


    // 方法
    function changeName(){
      name.value = '张三'
      console.log(name.value)
    }
    function changeAge(){
      age.value += 1
      console.log(age.value)
    }
    function showTel(){
      alert(tel)
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