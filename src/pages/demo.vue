<script setup>
import Dialog from '@/components/Dialog.vue'
const chat = [
    {
        cg:'./map/bg/1.jpg',
        msg:'...'
    },{
        cg:'./map/bg/1.jpg',
        avatar:'./role/2.png',
        name:'尤娜',
        highlight:'a',
        msg:'唔姆...好困...',
        animate:'fadeIn',
        objAnimate:'',
    },{
        cg:'./map/bg/1.jpg',
        avatar:'./role/2.png',
        name:'尤娜',
        highlight:'a',
        msg:'几点了啊..',
    },{
        cg:'./map/bg/1.jpg',
        avatar:'./role/3.png',
        name:'尤娜',
        highlight:'a',
        msg:'...',
        animate:'fadeIn',
        objAnimate:'',
    },{
        cg:'./map/bg/1.jpg',
        avatar:'./role/3.png',
        name:'尤娜',
        highlight:'a',
        msg:'啊啊啊啊!!,图腾仪式要迟到了!!!',
        animate:'',
    }
]
</script>
<template>
    <div class="canvas animated fadeIn">
        <Dialog :chat="chat"></Dialog>
    </div>
</template>
<style>
.canvas{
    margin: 0 auto;
    width: 100%;
    max-width: 900px;
    height: 100%;
    max-height: 500px;
    background-color: black;
    color: #fff;
}
</style>
