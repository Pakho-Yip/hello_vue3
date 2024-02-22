<template>
    <div class="person">
      <h2>当前和为：{{sum}}，放大10倍后：{{bigSum}}</h2>
      <button @click="add">点我sum+1</button>
      <hr>
      <img v-for="(item,index) in dogList" :key="index" :src="item" alt="">
      <br>
      <button @click="getDog">点我+狗子</button>
    </div>
</template>

<script lang="ts" setup name="Person">
  import useDog from '@/hooks/useDog'
  import useSum from '@/hooks/useSum'

  const {dogList,getDog} = useDog()
  const {sum,add,bigSum} = useSum()

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
  img{
    height: 100px;
    margin-right: 5px;
  }
</style>