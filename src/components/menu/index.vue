<template>
    <div class="menu">
        <Menu v-model:selectedKeys="selectedKeys" mode="inline" :theme="theme">
            <template v-for="item in menuList">
                <MenuItem v-if="!item?.children" :key="item.key">
                <template #icon>
                    <MailOutlined />
                </template>
                <span>{{ item.title }}</span>
                </MenuItem>
                <SubMenu v-else :key="item.subMenuKey">
                    <template #icon>
                        <AppstoreOutlined />
                    </template>
                    <template #title>{{ item.title }}</template>
                    <MenuItem v-for="subItem in item.children" :key="subItem.key">
                    <template #icon>
                        <MailOutlined />
                    </template>
                    <span>{{ subItem.title }}</span>
                    </MenuItem>
                </SubMenu>
            </template>
        </Menu>
    </div>
</template>

<script setup lang="ts">
import { Menu, MenuItem, SubMenu, type MenuTheme } from 'ant-design-vue';
import { MailOutlined, AppstoreOutlined } from '@ant-design/icons-vue';
import type { IMenuList } from '@/type/common';
import { ref, toRefs, type PropType } from 'vue';

const theme = 'dark' as MenuTheme;
const props = defineProps({
    menuList: Array as PropType<IMenuList[]>
});
const { menuList } = toRefs(props);
const selectedKeys = ref<string[]>([menuList?.value?.[0].key || '']);

</script>

<style lang="less" scoped>
@import './index.less';
</style>
