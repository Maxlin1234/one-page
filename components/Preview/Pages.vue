<template>
  <section class="pages section-padding position-re ontop">
    <div class="container-fluid">
      <div class="swiper3">
        <ClientOnly>
          <Swiper v-bind="swiperOptions">
            <SwiperSlide v-for="item in data" :key="item.id">
              <div class="item">
                <NuxtLink :to="item.link">
                  <img :src="item.image" alt="" />
                </NuxtLink>
              </div>
            </SwiperSlide>
          </Swiper>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<script setup>
//= Packages
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper';
//= Data
import data from '@/data/Preview/pages.json';

const swiperOptions = {
  modules: [Autoplay],
  slidesPerView: 3,
  loop: true,
  autoplay: true,
  spaceBetween: 60,
  speed: 1000
}
</script>