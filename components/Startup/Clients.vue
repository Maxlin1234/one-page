<template>
  <div class="clients section-padding pb-100 position-re">
    <div class="container">
      <div class="row justify-content-center mb-80">
        <div class="col-lg-6 text-center">
          <h6><span class="fz-14">06 . </span> Clients</h6>
          <div class="text">
            <h3>We create <span class="sub-font">experiences</span> and turn ideas into reality.</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-11">
          <div class="row md-marg">
            <div class="col-md-4 col-6 brand box-bg" v-for="(item) in data" :key="Math.floor(Math.random() * 10000)">
              <div class="item mb-30 wow fadeIn" data-wow-delay=".6s">
                <div class="img">
                  <img :src="`/${lightMode ? 'light' : 'dark'}${item}`" alt="" />
                </div>
                <a :href="appData.author_link" class="link" data-splitting>
                  www.GeekFolio.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-pattern patrn1 bg-img opacity-5"
      :data-background="`/${lightMode ? 'light' : 'dark'}/assets/imgs/patterns/pattern.svg`"></div>
  </div>
</template>
  
<script setup>
import { onMounted } from 'vue';
//= Data
import data from '@/data/Startup/clients.json';
import appData from '@/data/app-data.json';

const { lightMode } = defineProps(['lightMode']);

onMounted(() => {
  if (Splitting) Splitting({ target: document.querySelectorAll('[data-splitting]') });
});
</script>