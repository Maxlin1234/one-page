<template>
  <section class="services-tab revers section-padding pt-0">
    <div class="container">
      <div class="row mb-80">
        <div class="col-lg-12">
          <div class="full-width">
            <div class="main-marq o-hidden pt-40 pb-40 bord-thin-top bord-thin-bottom">
              <div class="slide-har st1">
                <div class="box">
                  <div class="item">
                    <h4 class="d-flex align-items-center fz-70"><span>Amazing Design</span>
                      <span class="fz-50 ml-50 stroke icon">*</span>
                    </h4>
                  </div>
                  <div class="item">
                    <h4 class="d-flex align-items-center fz-70"><span>Amazing Design</span>
                      <span class="fz-50 ml-50 stroke icon">*</span>
                    </h4>
                  </div>
                  <div class="item">
                    <h4 class="d-flex align-items-center fz-70"><span>Amazing Design</span>
                      <span class="fz-50 ml-50 stroke icon">*</span>
                    </h4>
                  </div>
                  <div class="item">
                    <h4 class="d-flex align-items-center fz-70"><span>Amazing Design</span>
                      <span class="fz-50 ml-50 stroke icon">*</span>
                    </h4>
                  </div>
                  <div class="item">
                    <h4 class="d-flex align-items-center fz-70"><span>Amazing Design</span>
                      <span class="fz-50 ml-50 stroke icon">*</span>
                    </h4>
                  </div>
                </div>
                <div class="box">
                  <div class="item">
                    <h4 class="d-flex align-items-center fz-70"><span>Amazing Design</span>
                      <span class="fz-50 ml-50 stroke icon">*</span>
                    </h4>
                  </div>
                  <div class="item">
                    <h4 class="d-flex align-items-center fz-70"><span>Amazing Design</span>
                      <span class="fz-50 ml-50 stroke icon">*</span>
                    </h4>
                  </div>
                  <div class="item">
                    <h4 class="d-flex align-items-center fz-70"><span>Amazing Design</span>
                      <span class="fz-50 ml-50 stroke icon">*</span>
                    </h4>
                  </div>
                  <div class="item">
                    <h4 class="d-flex align-items-center fz-70"><span>Amazing Design</span>
                      <span class="fz-50 ml-50 stroke icon">*</span>
                    </h4>
                  </div>
                  <div class="item">
                    <h4 class="d-flex align-items-center fz-70"><span>Amazing Design</span>
                      <span class="fz-50 ml-50 stroke icon">*</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center" id="tabs">
        <div class="col-lg-5 valign">
          <div class="serv-tab-link tab-links full-width md-mb50">
            <div class="sec-lg-head mb-80 wow fadeIn">
              <h6 class="dot-titl-non mb-15">Services</h6>
              <p>We help you to go online and increase your conversion rate Better design for your digital products. </p>
            </div>
            <div class="row">
              <div class="col-lg-10">
                <ul class="rest">
                  <li class="item-link current mb-15 pb-15 bord-thin-bottom" data-tab="tabs-1" @click="openTab">
                    <span>01</span> UI/UX Design
                  </li>
                  <li class="item-link mb-15 pb-15 bord-thin-bottom" data-tab="tabs-2" @click="openTab"><span>02</span>
                    Branding</li>
                  <li class="item-link mb-15 pb-15 bord-thin-bottom" data-tab="tabs-3" @click="openTab"><span>03</span>
                    Development</li>
                  <li class="item-link" data-tab="tabs-4" @click="openTab"><span>04</span> Marketing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="serv-tab-cont">
            <div class="tab-content current" id="tabs-1">
              <div class="item">
                <div class="img">
                  <img :src="`/${lightMode ? 'light' : 'dark'}/assets/imgs/sass-img/serv/4.jpg`" alt="" />
                </div>
                <div class="cont sub-bg">
                  <div class="icon-img-60 mb-40">
                    <img :src="`/${lightMode ? 'light' : 'dark'}/assets/imgs/serv-icons/0.png`" alt="" />
                  </div>
                  <div class="text">
                    <p>We are a creative studio specializing in design, development and strategy many different skills and
                      disciplines in the production of all web.</p>
                  </div>
                  <NuxtLink :to="`/${lightMode ? 'light' : 'dark'}/page-services`" class="mt-30">
                    <span class="mr-15">Read More</span>
                    <i class="fas fa-long-arrow-alt-right"></i>
                  </NuxtLink>
                  <div class="bg-pattern bg-img"
                    :data-background="`/${lightMode ? 'light' : 'dark'}/assets/imgs/patterns/abstact-BG.png`"></div>
                </div>
              </div>
            </div>
            <div class="tab-content" id="tabs-2">
              <div class="item">
                <div class="img">
                  <img :src="`/${lightMode ? 'light' : 'dark'}/assets/imgs/sass-img/serv/2.jpg`" alt="" />
                </div>
                <div class="cont sub-bg">
                  <div class="icon-img-60 mb-40">
                    <img :src="`/${lightMode ? 'light' : 'dark'}/assets/imgs/serv-icons/1.png`" alt="" />
                  </div>
                  <div class="text">
                    <p>We are a creative studio specializing in design, development and strategy many different skills and
                      disciplines in the production of all web.</p>
                  </div>
                  <NuxtLink :to="`/${lightMode ? 'light' : 'dark'}/page-services`" class="mt-30">
                    <span class="mr-15">Read More</span>
                    <i class="fas fa-long-arrow-alt-right"></i>
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div class="tab-content" id="tabs-3">
              <div class="item">
                <div class="img">
                  <img :src="`/${lightMode ? 'light' : 'dark'}/assets/imgs/sass-img/serv/3.jpg`" alt="" />
                </div>
                <div class="cont sub-bg">
                  <div class="icon-img-60 mb-40">
                    <img :src="`/${lightMode ? 'light' : 'dark'}/assets/imgs/serv-icons/2.png`" alt="" />
                  </div>
                  <div class="text">
                    <p>We are a creative studio specializing in design, development and strategy many different skills and
                      disciplines in the production of all web.</p>
                  </div>
                  <NuxtLink :to="`/${lightMode ? 'light' : 'dark'}/page-services`" class="mt-30">
                    <span class="mr-15">Read More</span>
                    <i class="fas fa-long-arrow-alt-right"></i>
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div class="tab-content" id="tabs-4">
              <div class="item">
                <div class="img">
                  <img :src="`/${lightMode ? 'light' : 'dark'}/assets/imgs/sass-img/serv/1.jpg`" alt="" />
                </div>
                <div class="cont sub-bg">
                  <div class="icon-img-60 mb-40">
                    <img :src="`/${lightMode ? 'light' : 'dark'}/assets/imgs/serv-icons/0.png`" alt="" />
                  </div>
                  <div class="text">
                    <p>We are a creative studio specializing in design, development and strategy many different skills and
                      disciplines in the production of all web.</p>
                  </div>
                  <NuxtLink :to="`/${lightMode ? 'light' : 'dark'}/page-services`" class="mt-30">
                    <span class="mr-15">Read More</span>
                    <i class="fas fa-long-arrow-alt-right"></i>
                  </NuxtLink>
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
import { onMounted } from 'vue';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

const { lightMode } = defineProps(['lightMode']);

function openTab(event) {
  document.querySelectorAll('.tab-content').forEach(element => element.style.display = 'none');
  const tabId = event.currentTarget.getAttribute('data-tab');
  document.querySelector(`.tab-content#${tabId}`).style.display = 'block';
}

onMounted(() => {
  loadBackgroudImages();
});
</script>