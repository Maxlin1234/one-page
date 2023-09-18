<template>
  <section class="portfolio section-padding">
    <div class="container">
      <div class="sec-head md-mb80">
        <div class="row">
          <div class="col-lg-4">
            <h6><span class="fz-14">04 . </span> Our Portfolio</h6>
          </div>
          <div class="col-lg-5 offset-lg-3">
            <div class="text">
              <h3 class="lg-text text-u">Case Studies</h3>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <div class="item md-mb80">
            <div class="o-hidden">
              <div class="img imago wow">
                <img :src="data[0].image" alt="" />
              </div>
            </div>
            <div class="cont mt-30 d-flex">
              <div>
                <h6 class="line-height-1">From our gallery</h6>
                <p>{{ data[0].type }}</p>
              </div>
              <div class="ml-auto">
                <p class="fz-14">© {{ data[0].year }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 valign">
          <div class="item full-width">
            <div class="row justify-content-center">
              <div class="col-lg-8">
                <div class="o-hidden">
                  <div class="img imago wow">
                    <img :src="data[1].image" alt="" />
                  </div>
                </div>
                <div class="cont mt-30 d-flex">
                  <div>
                    <h6 class="line-height-1">From our gallery</h6>
                    <p>{{ data[1].type }}</p>
                  </div>
                  <div class="ml-auto">
                    <p class="fz-14">© {{ data[1].year }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 valign">
          <div class="item mt-80 full-width">
            <div class="row justify-content-center">
              <div class="col-lg-9">
                <div class="o-hidden">
                  <div class="img imago wow">
                    <img :src="data[2].image" alt="" />
                  </div>
                </div>
                <div class="cont mt-30 d-flex">
                  <div>
                    <h6 class="line-height-1">From our gallery</h6>
                    <p>{{ data[2].type }}</p>
                  </div>
                  <div class="ml-auto">
                    <p class="fz-14">© {{ data[2].year }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="item mt-80">
            <div class="row justify-content-center">
              <div class="col-lg-9">
                <div class="o-hidden">
                  <div class="img imago wow">
                    <img :src="data[3].image" alt="" />
                  </div>
                </div>
                <div class="cont mt-30 d-flex">
                  <div>
                    <h6 class="line-height-1">From our gallery</h6>
                    <p>{{ data[3].type }}</p>
                  </div>
                  <div class="ml-auto">
                    <p class="fz-14">© {{ data[3].year }}</p>
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
import data from '@/data/Startup/portfolio.json';
</script>