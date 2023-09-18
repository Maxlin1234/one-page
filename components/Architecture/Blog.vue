<template>
  <section class="blog-list-half crev section-padding sub-bg">
    <div class="container mb-30">
      <div class="sec-leter-head mb-80">
        <div class="d-flex align-items-center">
          <div class="leter">
            <h4>B</h4>
          </div>
          <div class="line"></div>
        </div>
        <div class="title">
          <h6 class="sub-title">近期活動</h6>
        </div>
      </div> 
      <div class="row">
        <div v-for="(item) in data" class="col-lg-6" :key="item.id">
          <div class="item md-mb80">
            <div class="row rest">
              <div class="col-md-6">
                <div class="img">
                  <img :src="item.cover" alt="" />
                </div>
              </div>
              <div class="col-md-6 valign">
                <div class="cont">
                  <span class="date fz-12 ls1 text-u opacity-7 mb-15">{{ item.date }}</span>
                  <h5>
                    <NuxtLink to="/dark/blog-details">{{ item.title }}</NuxtLink>
                  </h5>
                  <div class="tags colorbg mt-15">
                    <NuxtLink to="/dark/blog-half-img" v-for="(tag) in item.tags" :key="tag">{{ tag }}</NuxtLink>
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
import data from '@/data/Architecture/blog.json';
</script>