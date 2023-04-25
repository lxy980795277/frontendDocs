<template>
    <div class="sider">
        <Menu :menu-list="menuList" />
    </div>
</template>

<script setup lang="ts">
import Menu from '@/components/menu/index.vue';
import { menuList } from '@/common/menu';
</script>

<style lang="less" scoped>
@import './index.less';
</style>