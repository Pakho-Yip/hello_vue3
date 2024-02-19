<template>
    <div class="person">
      <h2>姓：<input v-model="firstName"></h2>
      <h2>名：<input v-model="lastName"></h2>
      <button @click="changeFullName">修改全名</button>
      <h2>全名：{{fullName}}</h2>
      <h2>全名：{{fullName}}</h2>
      <h2>全名：{{fullName}}</h2>
      <h2>全名：{{fullName}}</h2>
      <h2>全名：{{fullName}}</h2>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {ref,computed} from 'vue'

    let firstName = ref('zhang')
    let lastName = ref('san')

    // 这么定义的fullName是一个计算属性，且是只读的
    // let fullName = computed(() => {
    //     console.log(1)
    //     return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
    // })

    // 这么定义的fullName是一个计算属性，可读可写
    let fullName = computed({
      get(){
        console.log('get')
        return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
      },
      set(val){
        console.log(val)
        console.log('set')
        const [str1,str2] = val.split('-')
        firstName.value = str1
        lastName.value = str2
      }
    })

    function changeFullName(){
      console.log('changeFullName')
      fullName.value = 'li-si'
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