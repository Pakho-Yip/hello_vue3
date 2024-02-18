<template>
    <div class="person">
      <h2>一辆{{car.brand}}车，价值{{car.price}}万</h2>
      <button @click="changePrice">修改价格</button>
      <ul>
        <li v-for="i in game" :key="i.id">{{i.name}}</li>
      </ul>
      <button @click="changeGame">修改第一个游戏名称</button>
      <h2>测试：{{obj.a.b.c}}</h2>
      <button @click="changeObj">修改测试值</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {reactive} from 'vue'
    let car = reactive({brand: 'Benz',price: 100})
    let game = reactive([{
      id:'game01',
      name:'王者荣耀'
    },{
      id:'game02',
      name:'刺客信条'
    },{
      id:'game03',
      name:'原神'
    }])
    let obj = reactive({
      a:{
        b:{
          c: 666 
        }
      }
    })

    function changePrice(){
      car.price += 10
      console.log(car.price)
    }
    function changeGame(){
      game[0].name = '梦幻西游'
      console.log(game)
    }
    function changeObj(){
      obj.a.b.c = 999
      console.log(obj.a.b.c)
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