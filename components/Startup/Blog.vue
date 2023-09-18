<template>
  <section class="blog-list2 section-padding">
    <div class="container">
      <div class="row mb-80">
        <div class="col-lg-4">
          <h6><span class="fz-14">08 . </span> Latest News</h6>
        </div>
        <div class="col-lg-6 offset-lg-1">
          <div class="text">
            <h3>We create <span class="sub-font">experiences</span> and turn ideas into reality.</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="items">
            <div class="item" v-for="item in data" :key="item.id">
              <div class="row">
                <div class="col-lg-2 d-flex align-items-center">
                  <div class="categ fz-13 md-mb30">
                    <NuxtLink to="/dark/blog-classic">{{ item.tag }}</NuxtLink>
                  </div>
                </div>
                <div class="col-lg-5">
                  <div class="title">
                    <h5>
                      <NuxtLink to="/dark/blog-details">{{ item.title }}</NuxtLink>
                    </h5>
                  </div>
                </div>
                <div class="col-lg-2 position-re">
                  <div class="img">
                    <img :src="item.cover" alt="" />
                  </div>
                </div>
                <div class="col-lg-3 d-flex align-items-center justify-end">
                  <div class="info fz-13 ml-auto opacity-7">
                    <span>{{ item.date }}</span>
                    <span class="ml-15 mr-15">/</span>
                    <span>By {{ item.author }}</span>
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
import data from '@/data/Startup/blog.json';
</script>