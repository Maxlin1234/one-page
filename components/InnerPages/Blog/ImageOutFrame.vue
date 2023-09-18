<template>
  <section class="blog-list-half crev section-padding sub-bg">
    <div class="container">
      <div class="row">
        <div v-for="(item, index) in data" class="col-lg-6" :key="item.id">
          <div :class="`item ${index !== data.length - 1 ? 'mb-80' : ''}`">
            <div class="row rest">
              <div class="col-md-6">
                <div class="img">
                  <img :src="item.image" alt="" />
                </div>
              </div>
              <div class="col-md-6 valign">
                <div class="cont">
                  <span class="date fz-12 ls1 text-u opacity-7 mb-15">{{ item.date }}</span>
                  <h5>
                    <NuxtLink to="/dark/blog-details">{{ item.title }}</NuxtLink>
                  </h5>
                  <div class="tags colorbg mt-15">
                    <NuxtLink to="/dark/blog-list" class="me-1" v-for="(tag, i) in item.tags" :key="i">{{ tag }}
                    </NuxtLink>
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
import data from '@/data/InnerPages/Blog/half-img.json';
</script>