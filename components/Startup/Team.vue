<template>
  <section class="team-crev section-padding pb-0 bord-thin-bottom">
    <div class="container-fluid rest">
      <div class="row">
        <div class="col-12" style="position: relative">
          <div class="sec-head-lg text-center text-u mb-80" id="sticky_item">
            <h2>Team</h2>
          </div>
          <div class="swiper4">
            <ClientOnly>
              <Swiper v-bind="swiperOptions" id="content-carousel-container-unq-team" class="swiper-container">
                <SwiperSlide v-for="(item) in data" :key="item.id">
                  <div class="item">
                    <div class="img">
                      <img :src="item.image" alt="" />
                    </div>
                    <div class="info">
                      <div class="main-marq team-position">
                        <div class="slide-har st1 non-strok">
                          <div class="box">
                            <div class="item" v-for="(_, i) in new Array(5).fill()" :key="i">
                              <h4>{{ item.position }}</h4>
                            </div>
                          </div>
                          <div class="box">
                            <div class="item" v-for="(_, i) in new Array(5).fill()" :key="i">
                              <h4>{{ item.position }}</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="main-marq team-name">
                        <div class="slide-har st1 non-strok">
                          <div class="box">
                            <div class="item" v-for="(_, i) in new Array(5).fill()" :key="i">
                              <h4>{{ item.position }}</h4>
                            </div>
                          </div>
                          <div class="box">
                            <div class="item" v-for="(_, i) in new Array(5).fill()" :key="i">
                              <h4>{{ item.position }}</h4>
                            </div>
                          </div>
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
  </section>
</template>
  
<script setup>
import { onMounted, onUnmounted } from 'vue';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/vue';
//= Data
import data from '@/data/Startup/team.json';

const swiperOptions = {
  slidesPerView: 4,
  loop: 1000,
  spaceBetween: 60,
  loop: true,
  centeredSlides: true,
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

onMounted(() => {
  window.addEventListener('scroll', handleStickyScroll);
  return () => window.removeEventListener('scroll', handleStickyScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleStickyScroll);
});

function handleStickyScroll() {
  const sticky_item = document.getElementById('sticky_item');
  if (!sticky_item) return;
  const width = sticky_item.getBoundingClientRect().width;
  const height = sticky_item.getBoundingClientRect().height;
  const parent = document.querySelector('.team-crev').getBoundingClientRect();

  if (parent.top < -30 && parent.height / 2 < parent.bottom) {
    sticky_item.style.position = 'fixed';
    sticky_item.style.top = '0px';
    sticky_item.style.width = width + 'px';
    sticky_item.classList.add('is_stuck');
    if (sticky_item.nextElementSibling.id !== "placeholder") {
      const placeholderElement = document.createElement('div');
      placeholderElement.id = "placeholder";
      placeholderElement.style.height = height + 'px';
      placeholderElement.style.width = width + 'px';
      sticky_item.after(placeholderElement);
    }
  } else if (parent.height / 2 > parent.bottom) {
    sticky_item.style.position = 'absolute';
    sticky_item.style.top = 'auto';
    sticky_item.style.bottom = '0';
    sticky_item.style.width = width + 'px';
  } else {
    sticky_item.style.position = 'unset';
    sticky_item.style.top = 'unset';
    sticky_item.style.bottom = 'unset';
    sticky_item.style.width = 'auto';
    sticky_item.classList.remove('is_stuck');
    if (sticky_item.nextElementSibling.id === "placeholder") sticky_item.nextElementSibling.remove();
  }
}
</script>