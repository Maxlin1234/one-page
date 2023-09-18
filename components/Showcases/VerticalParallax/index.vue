<template>
  <section class="parallax-show">
    <div class="bg-img inner parallaxie valign" data-background="/dark/assets/imgs/works/full/1.jpg"
      data-overlay-dark="3">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="caption text-center">
              <h6 class="sub-title mb-30" data-swiper-parallax="-1000">© 2023 Branding</h6>
              <h1>
                <NuxtLink to="/project-details1">Snack Midnight</NuxtLink>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-img inner parallaxie valign" data-background="/dark/assets/imgs/works/full/2.jpg"
      data-overlay-dark="3">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="caption text-center">
              <h6 class="sub-title mb-30" data-swiper-parallax="-1000">© 2023 Branding</h6>
              <h1>
                <NuxtLink to="/project-details1">Fisherman Portrait</NuxtLink>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-img inner parallaxie valign" data-background="/dark/assets/imgs/works/full/3.jpg"
      data-overlay-dark="3">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="caption text-center">
              <h6 class="sub-title mb-30" data-swiper-parallax="-1000">© 2023 Branding</h6>
              <h1>
                <NuxtLink to="/project-details1">Tribos Urbanas</NuxtLink>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-img inner parallaxie valign" data-background="/dark/assets/imgs/works/full/4.jpg"
      data-overlay-dark="3">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="caption text-center">
              <h6 class="sub-title mb-30" data-swiper-parallax="-1000">© 2023 Branding</h6>
              <h1>
                <NuxtLink to="/project-details1">Monsoon in the city</NuxtLink>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script setup>
import { onMounted } from 'vue';
//= Scripts
import parallaxieGroup from '@/common/parallaxieGroup';

onMounted(() => {
  parallaxieGroup(`.bg-img.parallaxie`, 0.2);
});
</script>