<template>
    <div class="person">
      <h2>一辆{{car.brand}}车，价值{{car.price}}万</h2>
      <button @click="changeBrand">修改品牌</button>
      <button @click="changePrice">修改价格</button>
      <button @click="changeCar">修改汽车</button>
      <br>
      <h2>{{sum}}</h2>
      <button @click="changeSum">点我sum+1</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {ref,reactive} from 'vue'
    let car = reactive({brand: 'Benz',price: 100})
    let sum = ref(0)

    function changeBrand(){
      // car.brand = 'BMW'
    }
    function changePrice(){
      // car.price += 10
    }
    function changeCar(){
      // car = {brand: '三轮',price: 1} // reactive这么写页面不更新的
      // car = reactive({brand: '三轮',price: 1}) // reactive这么写页面不更新的

      // 下面这个reactive写法页面可以更新
      Object.assign(car,{brand: '三轮',price: 1})

      // car.value = {brand: '三轮',price: 1} // ref写法页面可以更新
      console.log(car)
    }
    function changeSum(){
      sum.value += 1
      // sum = ref(9) // reactive这么写页面不更新的
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