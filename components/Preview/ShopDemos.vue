<template>
  <section class="shop-demos section-padding sub-bg">
    <div class="container">
      <div class="sec-lg-head text-center mb-50">
        <h2 class="fz-50 d-rotate wow">
          <span class="rotate-text">Carefully crafted.</span>
          <span class="rotate-text">Woocommerce Demos.</span>
        </h2>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-3 col-md-6" v-for="item in data" :key="item.id">
          <div class="item">
            <div class="img">
              <img :src="item.image" alt="" />
            </div>
            <h6>{{ item.title }}</h6>
            <NuxtLink :to="item.link" target="_blank"></NuxtLink>
            <span class="new" v-if="item.new">New</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
//= Data
import data from '@/data/Preview/shop-demos.json';
</script>