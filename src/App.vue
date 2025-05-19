<template>
  <div class="min-h-screen bg-background text-foreground">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
import useSettingsStore from '@/store/modules/settings';
import { handleThemeStyle } from '@/utils/theme';
import useAppStore from '@/store/modules/app';

const appStore = useAppStore();

onMounted(() => {
    nextTick(() => {
    // 初始化主题样式
    handleThemeStyle(useSettingsStore().theme);
    });
});
</script> 
  