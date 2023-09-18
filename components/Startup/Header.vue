<template>
  <header class="header-startup full-height valign bord-thin-bottom">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-11">
          <div class="caption text-center mt-50">
            <div class="sec-lg-head">
              <h6 class="dot-titl-non mb-15">Business Startup</h6>
            </div>
            <h1 class="fw-700 fz-80">We’re <span class="img-in-text icon-img-120 radius-30 bg-img"
                :data-background="`/${lightMode ? 'light' : 'dark'}/assets/imgs/about/1.jpg`"></span> sharp brands <span
                class="sub-font">creators</span> open for any <span class="icon-img-60"><img
                  :src="`/${lightMode ? 'light' : 'dark'}/assets/imgs/svg-assets/star.png`" alt="" /></span> kind of <span
                class="stroke fw-800">new</span> works
            </h1>
          </div>
        </div>
      </div>
    </div>
    <div class="arrow-down main-bg">
      <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg"
        class="svg-for-tablet">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M0.835489 6.51022L15.5607 6.51022L10.9081 1.85764C10.5179 1.46747 10.9555 1.24491 11.3626 0.837776C11.7697 0.430646 11.9923 -0.00687319 12.3825 0.383293L18.7406 6.74141C19.1307 7.13158 19.117 7.77791 18.7099 8.18504L12.0753 14.8196C11.6682 15.2267 11.371 14.7053 11.0739 14.4081C10.7767 14.111 10.2553 13.8138 10.6624 13.4067L15.5173 8.55182L0.792051 8.55182L0.835489 6.51022Z"
          fill="currentColor"></path>
      </svg>
    </div>
    <div class="bg-pattern-half bg-img opacity-5"
      :data-background="`/${lightMode ? 'light' : 'dark'}/assets/imgs/svg-assets/patern-bg.png`"></div>
    <div class="bg-pattern-half bg-img opacity-5"
      :data-background="`/${lightMode ? 'light' : 'dark'}/assets/imgs/svg-assets/patern-bg.png`"></div>
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