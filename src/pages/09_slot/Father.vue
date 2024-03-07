<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Category title="热门游戏列表">
        <ul>
          <li v-for="item in games" :key="item.id">{{ item.name }}</li>
        </ul>
      </Category>
      <Category title="今日美食城市">
        <img :src="imgUrl" alt=""/>
      </Category>
      <Category title="今日影视推荐">
        <video :src="videoUrl" controls></video>
      </Category>
    </div>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Category from './Category.vue'
  import {ref,reactive} from 'vue'

  let games = reactive([
    {id:'hfjkh01',name:'英雄联盟'},
    {id:'hfjkh02',name:'梦幻西游'},
    {id:'hfjkh03',name:'红色警戒'},
    {id:'hfjkh04',name:'芒刺在背'}
  ])
  let imgUrl = ref('https://z1.ax1x.com/2023/11/19/piNxLo4.jpg')
  let videoUrl = ref('https://v.youku.com/v_show/id_XNjM3MzEyOTgzMg==.html?spm=a2hja.14919748_WEBHOME_NEW.drawer3.d_zj1_1&scm=20140719.rcmd.37023.video_XNjM3MzEyOTgzMg%3D%3D')
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