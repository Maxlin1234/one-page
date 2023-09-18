<template>
  <section class="intro-corp section-padding sub-bg">
    <div class="container">
      <div class="row lg-marg">
        <div class="col-lg-6 md-mb50">
          <div class="imgs mb-80">
            <div class="img1 main-color3">
              <img src="/dark/assets/imgs/about/sq1.jpg" alt="" />
            </div>
            <div class="img2">
              <img src="/dark/assets/imgs/about/sq2.jpg" alt="" />
            </div>
          </div>
        </div>
        <div class="col-lg-6 valign">
          <div class="cont">
            <h6 class="sub-title mb-15">About our good good Company</h6>
            <h3 class="mb-15">
              Watch the creative process behind our <span class="stroke fw-700 opacity-7">digital marketing</span>.
            </h3>
            <p>We craft premium digital work for web, mobile and experiential with creative agencies and global brands
              alike – putting passion.</p>
            <div class="mt-50 pt-30 bord-thin-top">
              <div class="row">
                <div class="col-md-6">
                  <ul class="rest list-arrow">
                    <li class="mt-20">
                      <span class="icon">
                        <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd"
                            d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                            :fill="lightMode ? '#000' : '#fff'"></path>
                        </svg>
                      </span>
                      <span>Marketing Strategy</span>
                    </li>
                    <li class="mt-20">
                      <span class="icon">
                        <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd"
                            d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                            :fill="lightMode ? '#000' : '#fff'"></path>
                        </svg>
                      </span>
                      <span>Rebranding</span>
                    </li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul class="rest list-arrow">
                    <li class="mt-20">
                      <span class="icon">
                        <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd"
                            d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                            :fill="lightMode ? '#000' : '#fff'"></path>
                        </svg>
                      </span>
                      <span>Unique Production</span>
                    </li>
                    <li class="mt-20">
                      <span class="icon">
                        <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd"
                            d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z"
                            :fill="lightMode ? '#000' : '#fff'"></path>
                        </svg>
                      </span>
                      <span>Corporate Identity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <NuxtLink to="/dark/page-about" class="butn butn-md butn-bord radius-30 mt-50">
              <span>Explore More</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { lightMode } = defineProps(['lightMode']);
</script>