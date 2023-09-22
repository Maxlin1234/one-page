<template>
  <section class="serv-box section-padding pt-0">
    <div class="container">
      <div class="sec-leter-head mb-80">
        <div class="d-flex align-items-center">
          <div class="leter">
            <h4>N</h4>
          </div>
          <div class="line"></div>
        </div>
        <div class="title">
          <h6 class="sub-title">近期活動</h6>
        </div>
      </div>
      <div class="row">
        <div v-for="item in data" class="col-lg-3 col-md-6" :key="item.id">
          <div class="serv-item md-mb50">
            <div class="icon-img-60 mb-40">
              <!-- <img :src="`/${lightMode ? 'light' : 'dark'}${item.image}`" alt="" /> -->
            </div>
            <h5 class="mb-20">{{ item.title }}</h5>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script setup>
//= Data
import data from '@/data/Architecture/services.json';

const { lightMode } = defineProps(['lightMode']);
</script>