<template>
  <section class="serv-box section-padding">
    <div class="container">
      <div class="sec-lg-head mb-80">
        <div class="row">
          <div class="col-lg-8">
            <div class="position-re">
              <h6 class="dot-titl-non colorbg-3 mb-10">Youtube</h6>
              <h2 class="fz-60 fw-700">宣傳影片</h2>
            </div>
          </div>
          <div class="col-lg-4 d-flex align-items-center">
            <div class="text">
              <!-- <p>Nemo enim ipsam voluptatem quia voluptas sit odit aut fugit, sed quia.</p> -->
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="row">
        <div v-for="item in data" class="col-lg-4" :key="item.id">
          <div class="serv-item md-mb50 radius-10">
            <div class="icon-img-60 mb-40">
              <img :src="`/${lightMode ? 'light' : 'dark'}/${item.image}`" alt="" />
            </div>
            <h5 class="mb-30 pb-30 bord-thin-bottom">
              <StatementSplitter :statement="item.title" />
            </h5>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </div> -->
    </div>
  </section>
</template>
  
<script setup>
//= Components
import StatementSplitter from '@/components/Common/StatementSplitter';
//= Data
import data from '@/data/InnerPages/About/services.json';

const { lightMode } = defineProps(['lightMode']);
</script>