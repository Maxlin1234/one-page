<template>
  <section :class="`testim-crv2 sub-bg ${lightMode ? 'light' : 'dark'}`">
    <div class="container section-padding position-re">
      <div class="row">
        <div class="col-lg-5">
          <div class="testim-swiper mt-80">
            <ClientOnly>
              <Swiper v-bind="swiperOptions" id="content-carousel-container-unq-testim" class="swiper-container">
                <SwiperSlide>
                  <div class="item">
                    <div class="cont mb-40">
                      <div class="rate-stars mb-20 fz-16">
                        <span class="rate main-color2">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                        </span>
                      </div>
                      <h5 class="fw-400">I have been hiring people in this space for a number of years and I have never
                        seen this level of professionalism. It really feels like you are working with a team that can get
                        the job done.</h5>
                    </div>
                    <div class="line-icon mb-20 d-flex">
                      <div class="ml-auto">
                        <div class="img sub-bg">
                          <img :src="`/${lightMode ? 'light' : 'dark'}/assets/imgs/svg-assets/quote.png`" alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="d-flex align-items-center">
                      <div>
                        <div class="img circle-60">
                          <img :src="`/${lightMode ? 'light' : 'dark'}/assets/imgs/testim/1.jpg`" alt=""
                            class="circle-img" />
                        </div>
                      </div>
                      <div class="ml-30">
                        <div class="info">
                          <h6 class="fz-16">Leonard Heiser</h6>
                          <span class="opacity-7 sub-title">Ceo</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </ClientOnly>
          </div>
          <div class="swiper-controls testim-controls arrow-out d-flex mt-80">
            <div class="swiper-button-prev">
              <span class="left">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z"
                    fill="currentColor"></path>
                </svg>
              </span>
            </div>
            <div class="swiper-button-next ml-50">
              <span class="right">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z"
                    fill="currentColor"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="half-img-right bg-img ontop md-hide"
        :data-background="`/${lightMode ? 'light' : 'dark'}/assets/imgs/testim/01.png`"></div>
    </div>
  </section>
</template>
  
<script setup>
import { onMounted } from 'vue';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination } from 'swiper';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

const swiperOptions = {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 30,
  speed: 1000,
  loop: true,
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

onMounted(() => {
  loadBackgroudImages();
});
</script>