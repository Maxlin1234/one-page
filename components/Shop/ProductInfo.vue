<template>
  <div class="row justify-content-center">
    <div class="col-lg-4">
      <div class="img-preview md-mb50">
        <div class="gallery-top">
          <ClientOnly>
            <Swiper v-bind="galleryTopOptions" :thumbs="{ swiper: galleryThumbs }" v-if="galleryThumbs">
              <SwiperSlide>
                <div class="img">
                  <img src="/dark/assets/imgs/shop/1.jpg" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="img">
                  <img src="/dark/assets/imgs/shop/2.jpg" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="img">
                  <img src="/dark/assets/imgs/shop/3.jpg" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="img">
                  <img src="/dark/assets/imgs/shop/4.jpg" alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </ClientOnly>
        </div>
        <div class="gallery-thumb mt-10">
          <ClientOnly>
            <Swiper v-bind="galleryThumbsOptions">
              <SwiperSlide>
                <div class="img">
                  <img src="/dark/assets/imgs/shop/1.jpg" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="img">
                  <img src="/dark/assets/imgs/shop/2.jpg" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="img">
                  <img src="/dark/assets/imgs/shop/3.jpg" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="img">
                  <img src="/dark/assets/imgs/shop/4.jpg" alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </ClientOnly>
        </div>
      </div>
    </div>
    <div class="col-lg-6 offset-lg-1">
      <div class="product-info">
        <div class="top-info">
          <h6 class="main-color4">$130.00</h6>
          <div class="d-flex align-items-center">
            <div>
              <h4 class="line-height-1">Men Hooded</h4>
            </div>
            <div class="ml-auto">
              <div class="d-flex align-items-center">
                <div>
                  <div class="rate fz-12 opacity-7">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </div>
                </div>
                <div class="ml-10">
                  <p class="fz-13">(1 Review)</p>
                </div>
              </div>
            </div>
          </div>
          <div class="text mt-30">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut
              pellentesque ante. Quisque at viver neque. Duis consectetur nisl at
              vehicular.</p>
          </div>
          <div class="dot-list mt-30">
            <ul class="rest">
              <li class="mb-15">Adjustable drawstrings at the hood</li>
              <li>Welt pockets at waist</li>
            </ul>
          </div>
        </div>
        <div class="prod-order pt-30 pb-30 mt-50 bord-thin-top bord-thin-bottom">
          <div class="d-flex align-items-center">
            <div>
              <div class="counter">
                <span class="down" @click="decreaseCount">-</span>
                <input type="text" value="1" />
                <span class="up" @click="increaseCount">+</span>
              </div>
            </div>
            <div class="ml-auto">
              <a href="#0" class="butn butn-md butn-bord">
                <span class="text-u fz-13">Add To Cart</span>
              </a>
            </div>
          </div>
        </div>
        <div class="mt-40">
          <ul class="rest">
            <li class="d-flex align-items-center mb-15">
              <strong>SKU :</strong>
              <span class="ml-10">8552635</span>
            </li>
            <li class="d-flex align-items-center mb-15">
              <strong>CATEGORY :</strong>
              <span class="ml-10"><a href="#0">Clothes</a></span>
            </li>
            <li class="d-flex align-items-center">
              <strong>TAG :</strong>
              <span class="ml-10"><a href="#0">Men</a> , <a href="#0">Women</a> , <a href="#0">Jacket</a></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { Controller, EffectFade, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

const galleryThumbs = useState("galleryThumbs", () => null);

const galleryThumbsOptions = {
  modules: [Controller],
  spaceBetween: 10,
  slidesPerView: 4,
  touchRatio: 0.2,
  slideToClickedSlide: true,
  onSwiper: function (swiper) {
    galleryThumbs.value = swiper
  }
}

const galleryTopOptions = {
  modules: [EffectFade, Controller, Thumbs],
  spaceBetween: 0,
  effect: 'fade',
  speed: 1000
}

function decreaseCount(event) {
  let input = event.currentTarget.parentElement.querySelector('input');
  if (parseInt(input.value) === 1) return;
  input.value = parseInt(input.value) - 1;
}

function increaseCount(event) {
  let input = event.currentTarget.parentElement.querySelector('input');
  input.value = parseInt(input.value) + 1;
}
</script>