<template>
  <div class="bg-pattern bg-img"
    :data-background="`/${lightMode ? 'light' : 'dark'}/assets/imgs/patterns/bg-lines-1.svg`"></div>
</template>
  
<script setup>
import { onMounted } from 'vue';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';
const { lightMode } = defineProps(['lightMode']);

onMounted(() => {
  loadBackgroudImages();
});
</script>