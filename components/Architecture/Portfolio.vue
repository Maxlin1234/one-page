<template>
  <section class="portfolio sub-bg section-padding">
    <div class="container">
      <div class="sec-leter-head mb-80">
        <div class="d-flex align-items-center">
          <div class="leter">
            <h4>P</h4>
          </div>
          <div class="line"></div>
        </div>
        <div class="title">
          <h6 class="sub-title">作品介紹</h6>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-5">
          <div class="item md-mb80">
            <div class="o-hidden">
              <div class="img imago wow">
            <a href="http://localhost:3000/dark/project-details1">  <img :src="data[0].image" alt=""/></a>
              </div>
            </div>
            <div class="cont mt-30 d-flex">
              <div>
                <h6 class="line-height-1">◉ 謝爾蓋·普羅科菲耶夫《迷宮》（德國）◉ </h6>
                <!-- <p>{{ data[0].type }}</p> -->
              </div>
              <div class="ml-auto">
                <!-- <p class="fz-14">© {{ data[0].year }}</p> -->
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
                    <h6 class="line-height-1" style="line-height: 2rem;">◉ 弗朗西斯·阿代爾·麥肯齊《蘭花與蜜蜂》（加拿大）◉ </h6>
                    <!-- <p>{{ data[1].type }}</p> -->
                  </div>
                  <div class="ml-auto">
                    <!-- <p class="fz-14">© {{ data[1].year }}</p> -->
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
                    <h6 class="line-height-1">◉ 馬爾滕·艾薩克·德希爾《蜂湧》 (德國) ◉</h6>
                    <!-- <p>{{ data[2].type }}</p> -->
                  </div>
                  <div class="ml-auto">
                    <!-- <p class="fz-14">© {{ data[2].year }}</p> -->
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
                    <h6 class="line-height-1">◉ 大衛·加德納《奶奶的房子》（加拿大） ◉ </h6>
                    <!-- <p>{{ data[3].type }}</p> -->
                  </div>
                  <div class="ml-auto">
                    <!-- <p class="fz-14">© {{ data[3].year }}</p> -->
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
import data from '@/data/Architecture/portfolio.json';
</script>