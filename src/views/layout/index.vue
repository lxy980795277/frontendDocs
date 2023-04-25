<script setup lang="ts">
import Header from './header/index.vue';
import Sider from './sider/index.vue';
</script>

<template>
    <div class="layout">
        <Header />
        <div class="layoutContainer">
            <Sider />
            <div class="layoutContainerInner">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import './index.less';
</style>