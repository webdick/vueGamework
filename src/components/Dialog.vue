<script setup>
    import {ref} from 'vue'
    const conf = {
        // 显示上一步
        showLast:false
    }

    const current = ref(0)
    
    const props = defineProps({
        chat: Array
    })

    const next = ()=>{
        if(current.value < (props.chat.length-1)){
            current.value+=1
        }
    }

    const last = ()=>{
        if(current.value > 0){
            current.value-=1
        }
    }
</script>
<template>
    <div class="chat-main flex flex-column justify-end" onselectstart="return false"
    @click="next()">
        <img v-if="chat[current].cg" class="cg animated" :class="chat[current].cgAnimate" :src="chat[current].cg" alt="">
        <div class="flex justify-between align-end">
            <div class="role flex-1 flex align-end justify-start">
                <img v-if="chat[current].avatar"
                :src="chat[current].avatar" alt="" style="height: 200px;" :style="chat[current].highlight=='all'||chat[current].highlight=='a'?'':'opacity:0.7'"
                class="animated" :class="chat[current].animate">
                <div class="chat-box role-a-title" v-if="chat[current].name">
                    <span :style="chat[current].highlight=='all'||chat[current].highlight=='a'?'color:#fff':'color:#666'">{{chat[current].name}}</span>
                </div>
            </div>
            <div class="role flex-1 flex align-end justify-end">
                <img v-if="chat[current].objAvatar"
                :src="chat[current].objAvatar" alt="" style="height: 200px;" :style="chat[current].highlight=='all'||chat[current].highlight=='b'?'':'opacity:0.7'"
                class="animated" :class="chat[current].objAnimate">
                <div class="chat-box role-b-title" v-if="chat[current].ojbName">
                    <span :style="chat[current].highlight=='all'||chat[current].highlight=='b'?'color:#fff':'color:#666'">{{chat[current].ojbName}}</span>
                </div>
            </div>
        </div>
        <div v-if="chat[current].msg" class="chat-box flex flex-column justify-between" @click.stop="next()" style="cursor: pointer;height: 80px;color: #fff;">
            <p>{{chat[current].msg}}</p>
            <div class="flex justify-end">
                <!-- 当前显示索引未到底则显示next -->
                <span @click.stop="last()" v-if="current!=0&&conf.showLast" >LAST&nbsp;</span>
                <span @click.stop="next()" v-if="current < (chat.length-1)" >NEXT&nbsp;></span>
            </div>
        </div>
    </div>
</template>

<style>
.role{
    position: relative;
}
.role-a-title{
    position: absolute;
    bottom: 0;
    left: 0;
    display:inline-block;
    width: auto;
    max-width: 200px;
    border-bottom: none;
}
.role-b-title{
    position: absolute;
    bottom: 0;
    right: 0;
    display:inline-block;
    width: auto;
    max-width: 200px;
    border-bottom: none;
}
.chat-box{
    padding: 10px;
    background-color: rgba(0, 0, 0, .8);
    border-radius: 5px;
    border: 2px solid rgb(231, 145, 47);
    z-index: 99999;
}
.chat-main{
    width: 100%;
    height: 100%;
    position: relative;
    padding: 0 10px;
    box-sizing:border-box;
    overflow: hidden;
}
.cg{
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}
</style>
    