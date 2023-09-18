<template>
  <section class="testim-creative sub-bg o-hidden">
    <div class="container">
      <div class="sec-lg-head section-padding pb-80 bord-thin-bottom o-hidden">
        <div class="row">
          <div class="col-lg-8">
            <div class="position-re inline">
              <h6 class="dot-titl mb-10">What's People Says?</h6>
              <h2 class="fz-70 fw-700">Our Clients</h2>
            </div>
          </div>
          <div class="col-lg-4 d-flex align-items-end">
            <div class="arrows-carsouel testim-controls">
              <div class="swiper-controls">
                <div class="swiper-button-prev">
                  <span class="left">
                    <img :src="`/${lightMode ? 'light' : 'dark'}/assets/imgs/svg-assets/arrow-right-top.svg`" alt="" />
                  </span>
                </div>
                <div class="swiper-button-next">
                  <span class="right">
                    <img :src="`/${lightMode ? 'light' : 'dark'}/assets/imgs/svg-assets/arrow-right-top.svg`" alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3">
          <div class="mt-80 md-hide" id="sticky_item">
            <NuxtLink to="/dark/page-contact" class="butn butn-md butn-bg main-colorbg2 radius-30 mb-80">
              <span>Become a Client</span>
              <span class="icon ml-10">
                <img :src="`/${lightMode ? 'light' : 'dark'}/assets/imgs/svg-assets/arrow-right-top.svg`" alt="" />
              </span>
            </NuxtLink>
          </div>
        </div>
        <div class="col-lg-9">
          <div class="testim-items section-padding">
            <div class="testim-swiper">
              <ClientOnly>
                <Swiper v-bind="swiperOptions" id="content-carousel-container-unq-testim" class="swiper-container">
                  <SwiperSlide v-for="(item) in data" :key="item.id">
                    <div class="item">
                      <div class="cont mb-40">
                        <div class="rate-stars mb-30 fz-12">
                          <span class="rate main-color2">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                          </span>
                        </div>
                        <h3 class="fw-400">{{ item.content }}</h3>
                      </div>
                      <div class="d-flex align-items-center">
                        <div>
                          <div class="img circle-80">
                            <img :src="item.picture" alt="" class="circle-img" />
                          </div>
                        </div>
                        <div class="ml-30">
                          <div class="info">
                            <h6>{{ item.author }}</h6>
                            <span class="main-color2 sub-title">{{ item.position }}</span>
                          </div>
                        </div>
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
import { Navigation, Pagination } from 'swiper';
//= Data
import data from '@/data/CreativeAgency/testimonials.json';

const swiperOptions = {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  loop: true,
  spaceBetween: 30,
  speed: 1000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.testim-controls .swiper-button-next',
    prevEl: '.testim-controls .swiper-button-prev'
  }
}

const { lightMode } = defineProps(['lightMode']);
</script>