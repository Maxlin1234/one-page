<template>
  <section class="sec-img section-padding bg-img" data-background="/dark/assets/imgs/arch/slid/2.jpg"
    data-overlay-dark="2">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="expr-box md-mb50">
            <h6 class="text-u fz-16 mb-40"> <br /> Architectural</h6>
            <div>
              <p class="fz-14 fw-600 line-height-1 mb-15">Years <br /> Experience</p>
              <h2 class="fz-80 line-height-1">25</h2>
            </div>
          </div>
        </div>
        <div class="col-lg-4 offset-lg-1">
          <div class="cont">
            <h3 class="text-u"> <span class="main-color"></span> <br /> </h3>
            <!-- <p>Through a unique combination of engineering, construction and design disciplines and expertise, Concor
              delivers world class infrastructure.</p> -->
          </div>
        </div>
      </div>
      <div class="row mt-100">
        <div class="col-lg-7 offset-lg-5">
          <div class="numbers">
            <div class="row">
              <div class="col-md-3 col-6">
                <div class="item sm-mb50">
                  <!-- <h4 class="fz-40">450</h4> -->
                  <!-- <h6 class="sub-title ls2">Projects</h6> -->
                </div>
              </div>
              <div class="col-md-3 col-6">
                <div class="item sm-mb50">
                  <!-- <h4 class="fz-40">70</h4> -->
                  <!-- <h6 class="sub-title ls2">Clients</h6> -->
                </div>
              </div>
              <div class="col-md-3 col-6">
                <div class="item">
                  <!-- <h4 class="fz-40">20</h4> -->
                  <!-- <h6 class="sub-title ls2">Countries</h6> -->
                </div>
              </div>
              <div class="col-md-3 col-6">
                <div class="item">
                  <!-- <h4 class="fz-40">7</h4> -->
                  <!-- <h6 class="sub-title ls2">Awards</h6> -->
                </div>
              </div>
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
import loadBackgroudImages from '@/common/loadBackgroudImages';

onMounted(() => {
  loadBackgroudImages();
});
</script>