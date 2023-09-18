<template>
  <section class="skills-exp section-padding sub-bg" data-scroll-index="4">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="sec-lg-head mb-80">
            <div class="position-re">
              <h6 class="dot-titl-non mb-10">Skills & Experience</h6>
              <h2 class="fz-50">My Experience</h2>
            </div>
          </div>
          <div class="skill-item d-flex justify-content-between md-mb50">
            <div class="item text-center">
              <div class="icon-img-60 m-auto">
                <img :src="`/${lightMode ? 'light' : 'dark'}/assets/imgs/freelancer/skills/figma.png`" alt="" />
              </div>
              <span class="mt-15">Figma</span>
            </div>
            <div class="item text-center">
              <div class="icon-img-60 m-auto">
                <img :src="`/${lightMode ? 'light' : 'dark'}/assets/imgs/freelancer/skills/wordpress.png`" alt="" />
              </div>
              <span class="mt-15">WordPress</span>
            </div>
            <div class="item text-center">
              <div class="icon-img-60 m-auto">
                <img :src="`/${lightMode ? 'light' : 'dark'}/assets/imgs/freelancer/skills/angular.png`" alt="" />
              </div>
              <span class="mt-15">Angular</span>
            </div>
            <div class="item text-center">
              <div class="icon-img-60 m-auto">
                <img :src="`/${lightMode ? 'light' : 'dark'}/assets/imgs/freelancer/skills/webflow.png`" alt="" />
              </div>
              <span class="mt-15">Webflow</span>
            </div>
          </div>
        </div>
        <div class="col-lg-5 offset-lg-1 valign">
          <div class="exp-items full-width">
            <div class="item d-flex pb-30 pt-30 mb-30 bord-thin-top bord-thin-bottom">
              <div class="title">
                <h6>Android Studio</h6>
                <p class="fz-12">Junior Product Designer</p>
              </div>
              <div class="date ml-auto text-right">
                <span class="icon">
                  <NuxtLink to="/dark/page-about">
                    <i class="fas fa-arrow-right"></i>
                  </NuxtLink>
                </span>
                <p class="fz-12">2014 - 2015</p>
              </div>
            </div>
            <div class="item d-flex pb-30 mb-30 bord-thin-bottom">
              <div class="title">
                <h6>Slack</h6>
                <p class="fz-12">UI/UX Designer & Developer</p>
              </div>
              <div class="date ml-auto text-right">
                <span class="icon">
                  <NuxtLink to="/dark/page-about">
                    <i class="fas fa-arrow-right"></i>
                  </NuxtLink>
                </span>
                <p class="fz-12">2015 - 2019</p>
              </div>
            </div>
            <div class="item d-flex pb-30 bord-thin-bottom">
              <div class="title">
                <h6>Apple</h6>
                <p class="fz-12">ios Developer</p>
              </div>
              <div class="date ml-auto text-right">
                <span class="icon">
                  <NuxtLink to="/dark/page-about">
                    <i class="fas fa-arrow-right"></i>
                  </NuxtLink>
                </span>
                <p class="fz-12">2019 - 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script setup>
const { lightMode } = defineProps(['lightMode']);
</script>