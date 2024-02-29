<template>
    <div class="count">
        <h2>当前和为：{{countStore.sum}}</h2>
        <h3>欢迎来到：{{countStore.school}}，坐落于：{{countStore.address}}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="minus">减</button>
    </div>
</template>

<script setup lang="ts" name="Count">
    import {ref,reactive} from 'vue'
    // 引入useCountStore
    import {useCountStore} from '@/store/count'
    // 使用useCountStore，得到一个专门保存count相关的store
    const countStore = useCountStore()

    // 以下两种方式都可以拿到state中的数据
    // console.log(countStore.sum)
    // console.log(countStore.$state.sum)


    /* let obj = reactive({
        a:1,
        b:2,
        c:ref(3)
    })
    let x = ref(9)
    console.log(obj.a)
    console.log(obj.b)
    console.log(obj.c)
    console.log(x.value) */


    let n = ref(1)


    function add(){
        // 第一种修改方式
        // countStore.sum += 1

        // 第二种修改方式
        /* countStore.$patch({
            sum: 5555,
            school: '111',
            address: '222'
        }) */

        // 第三种修改方式
        countStore.increment(n.value)

    }
    function minus(){
    }
</script>

<style>
.count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
select,button {
    margin: 0 5px;
    height: 25px;
}
</style>