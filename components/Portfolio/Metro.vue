<template>
  <section class="portfolio section-padding pb-100">
    <div class="container-xxl">
      <div class="row">
        <div class="filtering col-12 mb-80 text-center">
          <div class="filter">
            <span class="text">Filter By :</span>
            <span v-for="(item, index) in data.filters" :data-filter="item.filter" :class="index === 0 ? 'active' : ''"
              :data-count="item.count" :key="item.id">{{ item.title }}</span>
          </div>
        </div>
      </div>
      <div class="gallery metro text-center">
        <div class="row">
          <div v-for="(item) in data.gallery"
            :class="`col-lg-${item.width} col-md-6 items ${item.filter} info-overlay height-${item.height} mb-30`"
            :key="item.id">
            <div class="item-img o-hidden">
              <NuxtLink to="/dark/project-details1" class="imago wow">
                <div class="inner wow">
                  <img :src="item.image" alt="image" />
                </div>
              </NuxtLink>
              <div class="info">
                <h6>
                  <NuxtLink to="/dark/project-details1">{{ item.title }}</NuxtLink>
                </h6>
                <span class="sub-title tag">
                  <NuxtLink to="/dark/project-details1">© {{ item.year }} <br /> {{ item.type }}</NuxtLink>
                </span>
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
import initIsotope from '@/common/initIsotope';
//= Data
import data from '@/data/Portfolio/metro.json'

onMounted(() => {
  setTimeout(() => {
    initIsotope();
  }, 100);
});
</script>