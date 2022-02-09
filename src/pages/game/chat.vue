<script setup>
import {ref} from 'vue'

const current = ref(0)
const conf = {
    // 显示上一步
    showLast:false
}
const chat = [
    {
        avatar:'role/0.png',
        objAvatar:'',
        highlight:'a',
        // 高亮立绘 分别为 a,b,all
        name:'你',
        ojbName:'',
        msg:'这是个什么东西...',
        animate:'fadeIn',
        objAnimate:'',
    },
    {
        avatar:'role/0.png',
        objAvatar:'role/2.png',
        highlight:'b',
        // 高亮立绘 分别为 a,b,all
        name:'你',
        ojbName:'老板娘',
        msg:'啊啦...  这位客人,这里是对话组件调试页面哦',
        animate:'',
        objAnimate:'fadeIn',
    },
    {
        avatar:'role/0.png',
        objAvatar:'role/2.png',
        highlight:'b',
        // 高亮立绘 分别为 a,b,all
        name:'你',
        ojbName:'老板娘',
        msg:'在这里客人您可以随意调试自己喜欢的剧本',
        animate:'',
        objAnimate:'',
    },
    {
        avatar:'role/0.png',
        objAvatar:'role/2.png',
        highlight:'a',
        // 高亮立绘 分别为 a,b,all
        name:'你',
        ojbName:'老板娘',
        msg:'喔喔!~原来如此,我可以随意编辑是吗',
        animate:'',
        objAnimate:'',
    },
    {
        avatar:'role/0.png',
        objAvatar:'role/2.png',
        highlight:'b',
        // 高亮立绘 分别为 a,b,all
        name:'',
        ojbName:'老板娘',
        msg:'当然~客人您随意',
        animate:'',
        objAnimate:'',
    },
    {
        avatar:'role/0.png',
        objAvatar:'role/2.png',
        highlight:'all',
        // 高亮立绘 分别为 a,b,all
        name:'',
        ojbName:'',
        msg:'可以开始编辑剧本了',
        animate:'fadeOutLeft',
        objAnimate:'fadeOutRight',
    },
];

const next = ()=>{
    if(current.value < (chat.length-1)){
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
    <p>对话</p>
    
    <div class="chat-main flex flex-column justify-end" onselectstart="return false">
        <div class="flex justify-between align-end">
            <div class="role">
                <img v-if="chat[current].avatar"
                :src="chat[current].avatar" alt="" style="height: 200px;" :style="chat[current].highlight=='all'||chat[current].highlight=='a'?'':'opacity:0.7'"
                class="animated" :class="chat[current].animate">
                <div class="chat-box role-a-title" v-if="chat[current].name">
                    <span :style="chat[current].highlight=='all'||chat[current].highlight=='a'?'color:#fff':'color:#666'">{{chat[current].name}}</span>
                </div>
            </div>
            <div class="role">
                <img v-if="chat[current].objAvatar"
                :src="chat[current].objAvatar" alt="" style="height: 200px;" :style="chat[current].highlight=='all'||chat[current].highlight=='b'?'':'opacity:0.7'"
                class="animated" :class="chat[current].objAnimate">
                <div class="chat-box role-b-title" v-if="chat[current].ojbName">
                    <span :style="chat[current].highlight=='all'||chat[current].highlight=='b'?'color:#fff':'color:#666'">{{chat[current].ojbName}}</span>
                </div>
            </div>
        </div>
        <div class="chat-box flex flex-column justify-between" @click="next()"  style="cursor: pointer;height: 80px;color: #fff;">
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
}
.chat-main{
    width: 500px;
    height: 350px;
    padding: 10px;
    background-image: url('bg/0.jpg');
    background-size: 100% 100%;
    overflow: hidden;
}
</style>
