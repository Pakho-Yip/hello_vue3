<template>
    <div class="talk">
        <button @click="getTalk">获取一句土味情话</button>
        <ul>
            <li v-for="item in talkList" :key="item.id">{{item.title}}</li>
        </ul>
    </div>
</template>

<script setup lang="ts" name="LoveTalk">
    import {useTalkStore} from '@/store/loveTalk'
    import {storeToRefs} from 'pinia'

    const talkStore = useTalkStore()
    const {talkList} = storeToRefs(talkStore)

    talkStore.$subscribe((mutate,state)=>{
        console.log('talkStore里面保存的数据发生了变化')
        console.log(mutate)
        console.log(state)
        localStorage.setItem('talkList',JSON.stringify(state.talkList))
    })

    async function getTalk() {
        talkStore.getATalk()
    }
</script>

<style>
.talk {
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}</style>