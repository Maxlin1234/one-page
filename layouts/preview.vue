<template>
  <CommonLoader />
  <CommonCursor />
  <CommonProgressScroll />
  <slot />
</template>

<script setup>
//= Vue
import { onMounted } from 'vue';
//= Scripts
import correctStylesheetsOrder from '@/common/correctStylesheetsOrder';

useHead({
  link: [
    { rel: 'stylesheet', href: '/landing-preview/css/preview-style.css' },
  ]
});

onMounted(() => {
  setTimeout(() => {
    correctStylesheetsOrder({ preview: true });
  }, 10);
});
</script>
