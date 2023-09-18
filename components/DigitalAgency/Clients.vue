<template>
  <section class="clients-carso section-padding pt-0">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <div class="text-center mb-80">
            <h6 class="fz-14 fw-400">
              More than <span class="fw-600">200+ companies</span> trusted us worldwide
            </h6>
          </div>
        </div>
      </div>
      <div class="swiper5">
        <div id="content-carousel-container-unq-clients" class="swiper-container" data-swiper="container">
          <ClientOnly>
            <Swiper v-bind="swiperOptions" class="swiper-container" id="content-carousel-container-unq-clients">
              <SwiperSlide v-for="item in data" :key="item">
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
  </section>
</template>

<script setup>
//= Modules
import { Swiper, SwiperSlide } from 'swiper/vue';
//= Data
import data from '@/data/DigitalAgency/clients.json';

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