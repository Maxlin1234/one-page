<template>
  <section class="section-padding">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="cont">
            <h3 class="mb-15">About the Project.</h3>
            <p>Won’t seasons, appear days them stars replenish divided. All second forth. Him place was seas man and
              gathering creepeth called fly. Them sea place lights, midst bearing fourth above.</p>
            <div class="info d-flex mt-50">
              <div class="item mr-50">
                <h6 class="fz-16">Category</h6>
                <span class="sub-title ls1">Digital Design</span>
              </div>
              <div class="item mr-50">
                <h6 class="fz-16">Customer</h6>
                <span class="sub-title ls1">ThemesCamp</span>
              </div>
              <div class="item">
                <h6 class="fz-16">Date</h6>
                <span class="sub-title ls1">August 6, 2020</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="back-image bg-img parallaxie mt-100" data-background="/dark/assets/imgs/works/projects/2/2.jpg"></div>
  </section>
</template>
  
<script setup>
import { onMounted } from 'vue';
//= Scripts
import parallaxie from '@/common/parallaxie';

onMounted(() => {
  parallaxie('.back-image.parallaxie', 0.4);
});
</script>