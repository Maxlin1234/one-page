<template>
  <section class="portfolio section-padding">
    <div class="container">
      <div class="row justify-content-center">
        <div :class="`col-lg-${item.style.width} ${item.style.align ? item.style.align : ''}`" v-for="item in data"
          :key="item.id">
          <div
            :class="`item md-mb80 ${item.style.isFullWidth ? 'full-width' : ''} ${item.style.mt ? 'mt-' + item.style.mt : ''} ${item.style.mb ? 'mb-' + item.style.mb : ''}`">
            <div class="row justify-content-center" v-if="item.style.innerCol">
              <div :class="`col-lg-${item.style.innerCol}`">
                <div class="img">
                  <img :src="item.image" alt="" />
                </div>
                <div class="cont mt-30 d-flex">
                  <div>
                    <h6 class="line-height-1">
                      <NuxtLink to="/dark/project-details2">From our gallery</NuxtLink>
                    </h6>
                    <p>{{ item.type }}</p>
                  </div>
                  <div class="ml-auto">
                    <p class="fz-14">© {{ item.year }}</p>
                  </div>
                </div>
              </div>
            </div>
            <template v-else>
              <div class="img">
                <img :src="item.image" alt="" />
              </div>
              <div class="cont mt-30 d-flex">
                <div>
                  <h6 class="line-height-1">
                    <NuxtLink to="/dark/project-details2">From our gallery</NuxtLink>
                  </h6>
                  <p>{{ item.type }}</p>
                </div>
                <div class="ml-auto">
                  <p class="fz-14">© {{ item.year }}</p>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script setup>
//= Data
import data from '@/data/Portfolio/modern-grid.json'
</script>