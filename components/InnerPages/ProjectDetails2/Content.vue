<template>
  <div class="section-padding pt-0">
    <div class="container-fluid rest">
      <div class="swiper4">
        <ClientOnly>
          <Swiper div id="content-carousel-container-unq-img" class="swiper-container" v-bind="swiperOptions">
            <SwiperSlide>
              <div class="img">
                <img src="/dark/assets/imgs/works/projects/2/3.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="img">
                <img src="/dark/assets/imgs/works/projects/2/4.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="img">
                <img src="/dark/assets/imgs/works/projects/2/5.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="img">
                <img src="/dark/assets/imgs/works/projects/2/6.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="img">
                <img src="/dark/assets/imgs/works/projects/2/4.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="img">
                <img src="/dark/assets/imgs/works/projects/2/5.jpg" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </ClientOnly>
      </div>
    </div>
    <div class="container mt-100">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="text-center">
            <h5 class="fw-300">
              Visual hierarchy is the principle of arranging elements to show their order of importance. Designers
              structure visual characteristics—e.g., menu icons—so users can understand information easily. By laying out
              elements logically and strategically, designers influence users’ perceptions and guide them to desired
              actions. Users notice larger elements more easily can convert.
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

const swiperOptions = {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 80,
  centeredSlides: true,
  speed: 1000,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  }
}
</script>