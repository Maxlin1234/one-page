<template>
  <section :class="`numbers section-padding ${paddingTop ? '' : 'pt-0'}`">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6">
          <div class="item md-mb50">
            <h2 class="fw-800 stroke">16</h2>
            <h6>Years of Experience</h6>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 d-flex justify-content-around">
          <div class="item md-mb50">
            <h2 class="fw-800">4<span class="fz-80 fw-600">k</span></h2>
            <h6>Projects Complated</h6>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 d-flex justify-content-around">
          <div class="item sm-mb50">
            <h2 class="fw-800 stroke">9<span class="fz-80 fw-600">k</span></h2>
            <h6>Happy Customers</h6>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 d-flex">
          <div class="item ml-auto">
            <h2 class="fw-800">12</h2>
            <h6>Awards Winning</h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { paddingTop } = defineProps(['paddingTop']);
</script>