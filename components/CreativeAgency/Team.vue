<template>
  <section class="team-box section-padding">
    <div class="container">
      <div class="sec-lg-head mb-80">
        <div class="row">
          <div class="col-lg-8">
            <div class="position-re">
              <h6 class="dot-titl mb-10">Selected Projects</h6>
              <h2 class="fz-70 fw-700">Featured Works</h2>
            </div>
          </div>
          <div class="col-lg-4 d-flex align-items-center">
            <div class="text">
              <p>Nemo enim ipsam voluptatem quia voluptas sit odit aut fugit, sed quia.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row md-marg">
        <div class="col-lg-4" v-for="(member, index) in data" :key="member.id">
          <div :class="`item ${index !== data.length - 1 ? 'md-mb50' : ''}`">
            <div class="img">
              <img :src="member.picture" alt="" />
            </div>
            <div class="info d-flex align-items-center">
              <div>
                <div class="circle-50">
                  <img :src="member.picture" alt="" class="circle-img" />
                </div>
              </div>
              <div class="cont ml-20">
                <span class="fz-12 opacity-8">{{ member.position }}</span>
                <h6 class="fz-16">{{ member.name }}</h6>
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
import data from '@/data/CreativeAgency/team.json';
</script>