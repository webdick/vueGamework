<script setup>
import {reactive} from 'vue'
const stand = reactive({
    head:'0',
    late_hair:'0',
    face:'0',
    cheek:'',
    body:'0',
    clothes:'0',
})
import Stand from '@/components/Stand.vue'
</script>

<template>
    <div style="padding: 10px;height: 100%;overflow-x: auto;overflow-y: auto;">
        <p style="line-height: 20px;background-color: black; color: #fff; padding: 10px;">
            网页演示存在网络延迟图片可能加载较慢,但是实机静态资源经过打包后速度极快 不存在延迟问题</p>
        <div class="flex align-center justify-between" style="padding: 0 50px;height: 100%;">
            <div>
                <div class="flex align-center" style="margin-bottom: 10px;">
                    <span>表情:</span>
                    <button style="margin-left: 10px;" @click="stand.face='0'">正常</button>
                    <button style="margin-left: 10px;" @click="stand.face='1'">生气</button>
                    <button style="margin-left: 10px;" @click="stand.face='2'">发情</button>
                </div>
                <div class="flex align-center" style="margin-bottom: 10px;">
                    <span>脸颊:</span>
                    <button style="margin-left: 10px;" @click="stand.cheek=''">正常</button>
                    <button style="margin-left: 10px;" @click="stand.cheek='0'">腮红</button>
                    <button style="margin-left: 10px;" @click="stand.cheek='1'">脸红</button>
                </div>
                <div class="flex align-center" style="margin-bottom: 10px;">
                    <span>辫子:</span>
                    <button style="margin-left: 10px;" @click="stand.late_hair='0'">散开</button>
                    <button style="margin-left: 10px;" @click="stand.late_hair='1'">捆绑</button>
                </div>
                <div class="flex align-center" style="margin-bottom: 10px;">
                    <span>服装:</span>
                    <button style="margin-left: 10px;" @click="stand.clothes=''">不穿</button>
                    <button style="margin-left: 10px;" @click="stand.clothes='0'">日常</button>
                    <button style="margin-left: 10px;" @click="stand.clothes='1'">校服</button>
                    <button style="margin-left: 10px;" @click="stand.clothes='2'">女仆</button>
                </div>
            </div>
            <Stand :stand="stand"></Stand>
        </div>
    </div>
</template>

<style>

</style>
