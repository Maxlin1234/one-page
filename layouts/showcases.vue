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
    { rel: 'stylesheet', href: '/dark/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/style.css' },
    { rel: 'stylesheet', href: '/dark/assets/css/base.css' },
    { rel: 'stylesheet', href: '/dark/showcase/assets/css/showcases.css' },
  ]
});

onMounted(() => {
  setTimeout(() => {
    correctStylesheetsOrder({ lightMode: false });
  }, 10);
});
</script>
