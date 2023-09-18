<template>
  <section class="blog-list-half section-padding sub-bg">
    <div class="container">
      <div class="row">
        <div v-for="(item, index) in data" class="col-lg-6" :key="item.id">
          <div :class="`item ${index !== data.length - 1 ? 'mb-50' : ''}`">
            <div class="row">
              <div class="col-md-6 img">
                <img :src="item.image" alt="" />
              </div>
              <div class="col-md-6 main-bg cont valign">
                <div class="full-width">
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
import data from '@/data/InnerPages/Blog/list.json';
</script>