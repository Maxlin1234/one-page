<template>
  <section class="testim-vrt sub-bg">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 valign">
          <div class="cont">
            <div>
              <h6 class="sub-title mb-15">Since From 2008</h6>
              <h3>Keep pushing forward. We've got your back.</h3>
              <div class="text mt-10 pb-30 bord-thin-bottom">
                <p>Things go wrong have questions. We’ve understand. So we have people</p>
              </div>
              <div class="stauts d-flex mt-20">
                <div class="item d-flex align-items-center mt-30">
                  <h2 class="mr-20">12k</h2>
                  <p class="fz-14">Happy Users <br /> Around World</p>
                </div>
                <div class="item d-flex align-items-center ml-auto mt-30">
                  <h2 class="mr-20">150k</h2>
                  <p class="fz-14">Projects <br /> Already Done</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 offset-lg-1">
          <div>
            <div class="main-marqv">
              <div class="slide-vertical st1">
                <div class="box">
                  <div class="item radius-30 mt-30" v-for="item in data" :key="item.id">
                    <div class="cont mb-40">
                      <div class="rate-stars mb-30 fz-12">
                        <span :class="`rate ${mainColor ? 'main-color' : 'main-color2'}`">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                        </span>
                      </div>
                      <p class="fw-400">{{ item.content }}</p>
                    </div>
                    <div class="d-flex align-items-center">
                      <div>
                        <div class="img circle-80">
                          <img :src="`/dark/${item.image}`" alt="" class="circle-img" />
                        </div>
                      </div>
                      <div class="ml-30">
                        <div class="info">
                          <h6>{{ item.author }}</h6>
                          <span :class="`${mainColor ? 'main-color' : 'main-color2'} sub-title`">{{ item.position }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="box">
                  <div class="item radius-30 mt-30" v-for="item in data" :key="item.id">
                    <div class="cont mb-40">
                      <div class="rate-stars mb-30 fz-12">
                        <span class="rate ${mainColor ? 'main-color' : 'main-color2'}">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                        </span>
                      </div>
                      <p class="fw-400">{item.content}</p>
                    </div>
                    <div class="d-flex align-items-center">
                      <div>
                        <div class="img circle-80">
                          <img :src="`/dark/${item.image}`" alt="" class="circle-img" />
                        </div>
                      </div>
                      <div class="ml-30">
                        <div class="info">
                          <h6>{item.author}</h6>
                          <span :class="`${mainColor ? 'main-color' : 'main-color2'} sub-title`">{{ item.position }}</span>
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
    </div>
  </section>
</template>

<script setup>
//= Data
import data from '@/data/DigitalAgency/testimonials.json';

const { mainColor } = defineProps(['mainColor']);
</script>