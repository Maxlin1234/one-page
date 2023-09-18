<template>
  <section class="blog-list section-padding sub-bg">
    <div class="container">
      <div class="sec-head mb-80">
        <div class="row">
          <div class="col-lg-8">
            <h6 class="sub-title wow fadeInUp">Featured Stories</h6>
            <h2 class="d-rotate wow">
              <span class="rotate-text">Latest News</span>
            </h2>
          </div>
          <div class="col-lg-4 d-flex align-items-center">
            <div class="full-width d-flex justify-content-end justify-end">
              <div class="vew-all wow fadeIn">
                <NuxtLink to="/dark/blog-classic">View All Our News
                  <span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                        fill="currentColor"></path>
                    </svg>
                  </span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :class="`item bord-thin-top ${index === data.length - 1 ? 'bord-thin-bottom' : ''} wow fadeInUp`"
        :data-wow-delay="`${index * 0.1 + 0.2}s`" v-for="(item, index) in data" :key="item.id">
        <div class="row">
          <div class="col-lg-3">
            <div class="info md-mb30">
              <div class="d-flex align-items-center">
                <div class="author">
                  <div class="img">
                    <img :src="item.author.picture" alt="" />
                  </div>
                </div>
                <div class="author-info">
                  <span class="fz-13 opacity-8 mb-5">Posted by</span>
                  <h6 class="fz-18">{{ item.author.name }}</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="cont">
              <h5 class="mb-10 underline">
                <NuxtLink to="/dark/blog-details">{{ item.title }}</NuxtLink>
              </h5>
              <div class="tags">
                <NuxtLink to="/dark/blog-classic" v-for="(tag, idx) in item.tags" :key="idx">{{ tag }}</NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-lg-3 d-flex align-items-center justify-end">
            <div class="ml-auto">
              <span class="date sub-title fz-13 opacity-8 mb-30">{{ item.date }}</span>
            </div>
          </div>
        </div>
        <div class="background bg-img valign text-center" :data-background="item.image" data-overlay-dark="4">
          <div class="more ontop full-width">
            <NuxtLink to="/dark/blog-details">
              <span>Read More <i class="fas fa-arrow-right ml-10"></i></span>
            </NuxtLink>
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
//= Data
import data from '@/data/OnePage/blog.json';

onMounted(() => {
  loadBackgroudImages();
});
</script>