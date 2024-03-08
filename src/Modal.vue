<template>
    <button @click="isShow = true">展示弹窗</button>
    <Teleport to="body">
	    <div class="modal-style" v-show="isShow">
	    	<h2>我是弹窗的标题</h2>
            <p>我是弹窗的内容</p>
	    	<button @click="isShow = false">关闭弹窗</button>
	    </div>
    </Teleport>
</template>

<script setup lang="ts" name="Modal">
    import { ref  } from 'vue';
    let isShow = ref(false)
</script>

<style>
	.modal-style{
        width: 250px;
        height: 180px;
		background-color: skyblue;
		border-radius: 10px;
		padding: 5px;
		box-shadow: 0 0 5px;
        text-align: center;
        position: fixed;
        top: 20px;
        left: 50%;
        margin-left: -125px;
	}
</style>