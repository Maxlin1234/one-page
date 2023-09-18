<template>
  <div class="overlay bg-img" data-background="/landing-preview/img/header/overlay.webp"></div>
</template>

<script setup>
import { onMounted } from 'vue';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

onMounted(() => {
  loadBackgroudImages();
});
</script>