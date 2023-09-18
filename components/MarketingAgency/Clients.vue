<template>
  <section class="clients-carso section-padding pt-0">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <div class="text-center mb-50">
            <h6 class="fz-14 fw-400">More than <span class="fw-600">200+ companies</span> trusted us
              worldwide</h6>
          </div>
        </div>
      </div>
      <div class="swiper5">
        <ClientOnly>
          <Swiper v-bind="swiperOptions" id="content-carousel-container-unq-clients" class="swiper-container">
            <SwiperSlide v-for="(item) in data" :key="item.id">
              <div class="item">
                <div class="img icon-img-100">
                  <img :src="`/${lightMode ? 'light' : 'dark'}${item}`" alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>
  
<script setup>
import { onMounted } from 'vue';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay } from 'swiper';
//= Data
import data from '@/data/MarketingAgency/clients.json';

const swiperOptions = {
  modules: [Navigation, Autoplay],
  slidesPerView: 5,
  speed: 1000,
  loop: true,
  spaceBetween: 40,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  }
}

const { lightMode } = defineProps(['lightMode']);
</script>