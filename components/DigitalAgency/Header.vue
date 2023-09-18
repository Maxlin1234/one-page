<template>
  <header class="header-digital full-height valign bord-thin-bottom">
    <div class="container ontop">
      <div class="row">
        <div class="col-lg-6">
          <div class="caption">
            <h1>Better design for your digital products.</h1>
            <div class="text mt-30">
              <p>We are a creative studio specializing in UI/UX design, <br /> development and strategy.</p>
            </div>
            <NuxtLink to="/dark/page-services" class="butn butn-md butn-bg main-colorbg2 text-dark radius-30 mt-30">
              <span>Explore More</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="half-img-right bg-img ontop md-hide"
      :data-background="`/${lightMode ? 'light' : 'dark'}/assets/imgs/sass-img/header1.png`"></div>
    <div class="bg-pattern bg-img" :data-background="`/${lightMode ? 'light' : 'dark'}/assets/imgs/patterns/graph.png`">
    </div>
  </header>
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