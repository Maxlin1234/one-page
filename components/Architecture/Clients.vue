<template>
  <section class="clients-carso section-padding pt-0">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-11">
          <div class="swiper5">
            <div id="content-carousel-container-unq-clients" class="swiper-container" data-swiper="container">
              <ClientOnly>
                <Swiper v-bind="swiperOptions" class="swiper-container" id="content-carousel-container-unq-clients">
                  <SwiperSlide v-for="(item) in data" :key="Math.floor(Math.random() * 100000)">
                    <div class="item">
                      <div class="img icon-img-100">
                        <img :src="`${lightMode ? '/light' : '/dark'}/${item}`" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </ClientOnly>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script setup>
//= Modules
import { Swiper, SwiperSlide } from 'swiper/vue';
//= Data
// import data from '@/data/Architecture/clients.json';

const swiperOptions = {
  slidesPerView: 5,
  loop: true,
  spaceBetween: 40,
  speed: 1000,
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