<template>
    <div class="person">
      <h2>一辆{{car.brand}}车，价值{{car.price}}万</h2>
      <button @click="changePrice">修改价格</button>
      <ul>
        <li v-for="i in game" :key="i.id">{{i.name}}</li>
      </ul>
      <button @click="changeGame">修改第一个游戏名称</button>
      <h2>{{obj.a.b.c}}</h2>
      <button @click="changeObj">修改值</button>
      <h2>{{hh}}</h2>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {ref,reactive} from 'vue'
    let car = ref({brand: 'Benz',price: 100})
    let game = ref([{
      id:'game01',
      name:'王者荣耀'
    },{
      id:'game02',
      name:'刺客信条'
    },{
      id:'game03',
      name:'原神'
    }])
    let obj = ref({
      a:{
        b:{
          c:666
        }
      }
    })

    function changePrice(){
      console.log(car)
      car.value.price += 10
      console.log(car.value.price)
    }
    function changeGame(){
      game.value[0].name = '梦幻西游'
    }
    function changeObj(){
      obj.value.a.b.c = 999
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