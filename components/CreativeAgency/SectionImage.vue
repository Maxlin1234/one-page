<template>
  <div class="back-image bg-img parallaxie" data-background="/dark/assets/imgs/background/17.jpg" data-overlay-dark="5" />
</template>
  
<script setup>
import { onMounted } from 'vue';
import parallaxie from '@/common/parallaxie';

onMounted(() => {
  parallaxie('.back-image.parallaxie', 0.35);
});
</script>