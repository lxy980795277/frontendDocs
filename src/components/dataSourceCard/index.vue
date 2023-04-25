<template>
    <div class="card">
        <div class="cardContainer">
            <!-- <div class="before">
                <img class='cardContainerImage' :src='weiboImg' />
            </div>
            <div class="behind">
                <img class='cardContainerImage' :src='twitter' />
            </div> -->
            <div class="cardContainerTop">
                <img class='logo' :src='weiboImg' />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getDatasourceImages } from '@/utils/handleStaticResource';

const props = defineProps({
    title: String,
    likes: Number
});
console.log(props.title);

const weiboImg = getDatasourceImages('weibo.png');
const twitter = getDatasourceImages('twitter.png');
</script>

<style lang="less" scoped>
@import './index.less';
</style>