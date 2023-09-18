<template>
  <div class="back-image states bg-img parallaxie" data-background="/dark/assets/imgs/background/13.jpg"
    data-overlay-dark="3">
    <div class="container box position-re">
      <ul class="rest">
        <li class="sd-dark">
          <span class="numb">5920</span>
          <h5>Succeeded <br /> Projects</h5>
        </li>
        <li class="blur">
          <h5>
            Huge template <br /> collection.</h5>
          <span class="icon pe-7s-paper-plane"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
//= Scripts
import parallaxie from '@/common/parallaxie';

onMounted(() => {
  parallaxie('.back-image.parallaxie');
});
</script>