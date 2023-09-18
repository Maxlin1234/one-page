<template>
  <CommonLoader />
  <CommonCursor />
  <CommonProgressScroll />
  <slot />
</template>

<script setup>
import { onMounted } from 'vue';
//= Scripts
import correctStylesheetsOrder from '@/common/correctStylesheetsOrder';

useHead({
  link: [
    { rel: 'stylesheet', href: '/light/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/light/assets/css/style.css' },
  ]
});

onMounted(() => {
  setTimeout(() => {
    correctStylesheetsOrder({ lightMode: true });
  }, 10);
});
</script>
