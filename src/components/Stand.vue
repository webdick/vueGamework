<script setup>
const props = defineProps({
    stand: Object
})
</script>

<template>
    <div class="stand">
        <img class="role-img" :src="'./stand/late_hair/'+stand.late_hair+'.png'" alt="">
        <img class="role-img" :src="'./stand/body/'+stand.body+'.png'" alt="">
        <img class="role-img" :src="'./stand/head/'+stand.head+'.png'" alt="">
        <img class="role-img" :src="'./stand/face/'+stand.face+'.png'" alt="">
        <img class="role-img" :src="'./stand/cheek/'+stand.cheek+'.png'" alt="">
        <img class="role-img" :src="'./stand/clothes/'+stand.clothes+'.png'" alt="">
    </div>
</template>

<style>
.stand{
    position: relative;
    width: 200px;
    height: 400px;
    overflow: hidden;
}
.role-img{
    position:absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, 0); 
    width: 300px;
    
}
</style>
