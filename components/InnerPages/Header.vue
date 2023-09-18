<template>
  <header :class="`page-header section-padding pb-0 ${subBg ? 'sub-bg' : ''}`">
    <div class="container mt-80">
      <div class="row">
        <div class="col-lg-8">
          <div class="caption">
            <h6 class="sub-title">{{ data.subTitle }}</h6>
            <h1 class="fz-55">{{ data.title }}</h1>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-5 offset-lg-4">
          <div class="text mt-30">
            <!-- <p>We help our clients succeed by creating brand identities, digital experiences, and print materials that
              communicate clearly, achieve marketing goals, and look fantastic.</p> -->
          </div>
        </div>
      </div>
    </div>
    <div class="main-marq xlrg section-padding pb-0">
      <div class="slide-har st1">
        <div class="box">
          <div class="item" v-for="(_, i) in new Array(5).fill()" :key="i">
            <h4>{{ data.text }}</h4>
          </div>
        </div>
        <div class="box">
          <div class="item" v-for="(_, i) in new Array(5).fill()" :key="i">
            <h4>{{ data.text }}</h4>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
  
<script setup>
const { subBg, data } = defineProps(['subBg', 'data']);
</script>