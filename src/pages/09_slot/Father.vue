<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <!-- 数据在子组件那边，但根据数据生成的结构，却由父亲决定
      压岁钱在孩子那边，但根据压岁钱买的东西，却由父亲决定 -->
      <Game>
        <template v-slot="{youxi}">
          <ul>
            <li v-for="g in youxi" :key="g.id">{{ g.name }}</li>
          </ul>
        </template>
      </Game>
      <Game>
        <template v-slot="{youxi}">
          <ol>
            <li v-for="item in youxi" :key="item.id">{{ item.name }}</li>
          </ol>
        </template>
      </Game>
      <Game>
        <template #default="{youxi}">
            <h3 v-for="g in youxi" :key="g.id">{{ g.name }}</h3>
        </template>
      </Game>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Game from './Game.vue'
</script>

<style scoped>
.father {
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
}
.content {
    display: flex;
    justify-content: space-evenly;
}
img,video {
    width: 100%;
}
</style>