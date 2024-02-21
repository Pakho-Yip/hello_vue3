<template>
    <div class="person">
      ???
    </div>
</template>

<script lang="ts" setup name="Person">
  import {type PersonInter,type Persons} from '@/types'

  let person:PersonInter = {id:'fjhjhkjhf01',name:'zhangsan',age:18}

/*   let personList:Array<PersonInter> = [
    {id:'fjhjhkjhf01',name:'zhangsan',age:18},
    {id:'fjhjhkjhf02',name:'lisi',age:19,},
    {id:'fjhjhkjhf03',name:'wangwu',age:8,}
  ]
 */

 let personList:Persons = [
    {id:'fjhjhkjhf01',name:'zhangsan',age:18},
    {id:'fjhjhkjhf02',name:'lisi',age:19,},
    {id:'fjhjhkjhf03',name:'wangwu',age:8,}
  ]

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