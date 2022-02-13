<script setup>
import * as PIXI from 'pixi.js'

// let app = new PIXI.Application({width: 256, height: 256});
// document.body.appendChild(app.view);

// let Loader = new PIXI.Loader();

// Loader.add([
//     '/role/0.png'
// ]).load(setup)

// function setup() {
//     var cat = new PIXI.Sprite(Loader.resources["/role/0.png"].texture);
//     console.log('加载完成')
//     //Add the cat to the stage
//     app.stage.addChild(cat);
//     cat.width = 50;
//     cat.height = 64;
//     cat.x = 100
//     cat.y = 100
//     app.ticker.add(delta => gameLoop(delta,cat));
// }
// function gameLoop(delta,cat){

//     //Move the cat 1 pixel 
//     cat.x += 1;
// }

</script>

<template>
    <div class="flex flex-column align-center justify-center" style="padding: 10px;">
        <p style="margin-bottom: 20px;line-height: 20px;background-color: black; color: #fff; padding: 10px;">这是一个
            <span style="color: red;">正在开发</span>
        的JS游戏框架,计划使即使没有编程技术的小白也可以根据该游戏框架制作自己的RPG/SLG类型的游戏,下面为演示案例</p>
        <router-link to="/chat" style="margin-bottom: 10px;">
            <button class="btn">对话CG组件</button>
        </router-link>
        <router-link to="/role" style="margin-bottom: 10px;">
            <button class="btn">动态立绘组件</button>
        </router-link>
        <router-link to="/maps" style="margin-bottom: 10px;">
            <button class="btn">大地图组件</button>
        </router-link>
    </div>
</template>

<style>
.btn{
    padding: 5px;
}
</style>
