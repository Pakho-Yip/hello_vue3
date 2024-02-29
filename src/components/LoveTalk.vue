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

    const talkState = useTalkStore()
    const {talkList} = storeToRefs(talkState)

    async function getTalk() {
        talkState.getATalk()
    }
</script>

<style>
.talk {
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}</style>