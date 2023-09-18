<template>
  <div class="slideshow">
    <div class="slides slides--images">
      <div v-for="(item, index) in data" :class="`slide ${index === 0 ? 'slide--current' : ''}`" :key="item.id">
        <div class="slide__img bg-img" :data-background="item.background"></div>
      </div>
    </div>
    <div class="slides slides--titles">
      <div v-for="(item, index) in data" :class="`slide ${index === 0 ? 'slide--current' : ''}`" :key="item.id">
        <h1 class="slide__title text-center">
          <span class="sub-title mb-15">© {{ item.year }} {{ item.type }}</span> <br />
          <span>
            <NuxtLink to="/dark/project-details1">{{ item.title }}</NuxtLink>
          </span>
        </h1>
      </div>
    </div>
    <nav class="slidenav">
      <div class="container">
        <button class="slidenav__item slidenav__item--prev cursor-pointer">
          <span><i class="fas fa-chevron-left"></i></span>
          <span><span>Prev</span></span>
        </button>
        <button class="slidenav__item slidenav__item--next cursor-pointer">
          <span><span>Next</span></span>
          <span><i class="fas fa-chevron-right"></i></span>
        </button>
      </div>
    </nav>
  </div>
</template>
  
<script setup>
import { onMounted } from 'vue';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';
import customScript from '@/common/marketing-agency-customjs';
import showcaseScript from '@/common/showcase-script';
//= Data
import data from '@/data/Showcases/frame-slider.json';

onMounted(() => {
  loadBackgroudImages();
  customScript();
  showcaseScript.demo();
});
</script>