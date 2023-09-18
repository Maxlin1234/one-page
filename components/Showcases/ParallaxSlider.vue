<template>
  <header class="slider showcase-full">
    <ClientOnly>
      <Swiper v-bind="swiperOptions" class="swiper-container parallax-slider">
        <SwiperSlide v-for="(item) in data" :key="item.id">
          <div class="bg-img valign" :data-background="item.background" data-overlay-dark="3">
            <div class="container">
              <div class="row">
                <div class="col-lg-11 offset-lg-1">
                  <div class="caption">
                    <h6 class="sub-title mb-30" data-swiper-parallax="-1000">© {{ item.year }} <br /> {{ item.type }}</h6>
                    <h1>
                      <NuxtLink to="/dark/project-details1">
                        <span data-swiper-parallax="-2000">{{ item.title }}</span>
                      </NuxtLink>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </ClientOnly>
    <div class="slider-contro">
      <div class="swiper-button-next swiper-nav-ctrl cursor-pointer">
        <div>
          <span>Next Slide</span>
        </div>
        <div><i class="fas fa-chevron-right"></i></div>
      </div>
      <div class="swiper-button-prev swiper-nav-ctrl cursor-pointer">
        <div><i class="fas fa-chevron-left"></i></div>
        <div>
          <span>Prev Slide</span>
        </div>
      </div>
    </div>
    <div class="swiper-pagination dots"></div>
  </header>
</template>
  
<script setup>
import { onMounted } from 'vue';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Autoplay, Pagination, Parallax } from 'swiper';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';
//= Data
import data from '@/data/Showcases/parallax-slider.json';

const swiperOptions = {
  modules: [Navigation, Autoplay, Pagination, Parallax],
  speed: 1500,
  autoplay: {
    delay: 5000,
  },
  parallax: true,
  loop: true,
  onSwiper: function (swiper) {
    for (var i = 0; i < swiper.slides.length; i++) {
      swiper.slides[i].querySelector('.bg-img').setAttribute('data-swiper-parallax', 0.75 * swiper.width);
    }
  },
  onResize: function (swiper) {
    swiper.update();
  },
  pagination: {
    el: '.showcase-full .swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.showcase-full .swiper-button-next',
    prevEl: '.showcase-full .swiper-button-prev'
  }
}

onMounted(() => {
  setTimeout(() => {
    loadBackgroudImages();
  }, 100);
});
</script>