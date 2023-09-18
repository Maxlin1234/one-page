<template>
  <header class="proj-header2 bg-img valign parallaxie" data-background="/dark/assets/imgs/works/projects/2/1.jpg"
    data-overlay-dark="5">
    <div class="container mt-80">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="caption text-center">
            <h1>Sinzere The Mission</h1>
            <h6 class="sub-title">Digital Marketing</h6>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
  
<script setup>
import { onMounted } from 'vue';
//= Scripts
import parallaxie from '@/common/parallaxie';

onMounted(() => {
  parallaxie('.proj-header2.parallaxie', 0.3, 0);
});
</script>