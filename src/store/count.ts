import { defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
    // actions里面放置的是一个一个的方法，用于响应组件中的“动作”
    actions: {
        increment(val) {
            console.log('increment被调用了', val)
            if (this.sum < 10) {
                // 修改数据（this是当前的store）
                this.sum += val
            }
        }
    },
    // 真正存储数据的地方
    state() {
        return {
            sum: 6,
            school: '一中',
            address: '浙江'
        }
    }
})