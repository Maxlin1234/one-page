<template>
  <section class="team-crev section-padding sub-bg">
    <div class="container">
      <div class="row md-marg">
        <div v-for="(item) in data" class="col-lg-4" :key="item.id">
          <div class="swiper-slide mb-50">
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
                        <h4>{{ item.name }}</h4>
                      </div>
                    </div>
                    <div class="box">
                      <div class="item" v-for="(_, i) in new Array(5).fill()" :key="i">
                        <h4>{{ item.name }}</h4>
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
import data from '@/data/InnerPages/Team/team.json';
</script>