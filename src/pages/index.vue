<script setup>

</script>

<template>
    <p>欢迎使用</p>
    <div class="flex">
        <router-link to="/config">
            <button>配置</button>
        </router-link>
        <router-link to="/chat" style="margin-left: 10px;">
            <button>对话</button>
        </router-link>
        <router-link to="/maps" style="margin-left: 10px;">
            <button>地图</button>
        </router-link>
    </div>
</template>

<style>

</style>
