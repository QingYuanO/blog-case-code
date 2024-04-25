<template>
  <div>
    <router-view v-slot="{ Component }">
      <keep-alive :include="cachedViews">
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { useCachedViewStoreHook } from '@/store/modules/cachedView';

import { computed } from 'vue';

const cachedViews = computed(() => {
  return useCachedViewStoreHook().cachedViewList;
});
</script>

<style scoped></style>
