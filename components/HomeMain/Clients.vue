<template>
  <div class="clients-carso2">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-11">
          <div class="swiper5">
            <ClientOnly>
              <Swiper v-bind="swiperOptions" id="content-carousel-container-unq-clients" class="swiper-container">
                <SwiperSlide v-for="(item, index) in data" :key="index">
                  <div class="item">
                    <div class="img icon-img-100">
                      <a href="#0">
                        <img :src="`/${lightMode ? 'light' : 'dark'}/${item}`" alt="" />
                      </a>
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
</template>

<script setup>
//= Packages
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Keyboard } from 'swiper';
//= Data
import data from '@/data/HomeMain/clients.json';

const { lightMode } = defineProps(['lightMode']);

const swiperOptions = {
  slidesPerView: 5,
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
</script>