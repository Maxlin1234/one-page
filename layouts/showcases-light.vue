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
    { rel: 'stylesheet', href: '/light/assets/css/base.css' },
    { rel: 'stylesheet', href: '/light/showcase/assets/css/showcases.css' },
  ]
});

onMounted(() => {
  setTimeout(() => {
    correctStylesheetsOrder({ lightMode: true, showcases: true });
  }, 10);
});
</script>
