<template>
  <section :class="`testim-clasic section-padding sub-bg ${lightMode ? 'light' : ''}`">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="testim">
            <div class="testim-swiper">
              <ClientOnly>
                <Swiper v-bind="swiperOptions" id="content-carousel-container-unq-testim" class="swiper-container">
                  <SwiperSlide v-for="(item) in data" :key="item.id">
                    <div class="item">
                      <div class="row">
                        <div class="col-md-4">
                          <div class="author-info valign">
                            <div class="full-width">
                              <div class="img circle-120 m-auto mb-30">
                                <img :src="item.picture" alt="" class="circle-img" />
                              </div>
                              <div class="info">
                                <h6>{{ item.name }}</h6>
                                <p class="sub-title">{{ item.position }}</p>
                              </div>
                              <div class="arrow sub-bg"></div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-8">
                          <div class="cont">
                            <div class="mb-30 icon-img-80 opacity-1">
                              <img src="/dark/assets/imgs/svg-assets/quote.png" alt="" />
                            </div>
                            <h4 class="fw-300">{{ item.content }}</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </ClientOnly>
            </div>
            <div class="swiper-controls">
              <div class="row">
                <div class="col-md-8 offset-md-4">
                  <div class="arrows-carsouel testim-controls">
                    <div class="swiper-controls">
                      <div class="swiper-button-prev">
                        <span class="left">
                          <img :src="`/${lightMode ? 'light' : 'dark'}/assets/imgs/svg-assets/arrow-right-top.svg`"
                            alt="" />
                        </span>
                      </div>
                      <div class="swiper-pagination"></div>
                      <div class="swiper-button-next">
                        <span class="right">
                          <img :src="`/${lightMode ? 'light' : 'dark'}/assets/imgs/svg-assets/arrow-right-top.svg`"
                            alt="" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
import data from '@/data/Startup/testimonials.json';

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