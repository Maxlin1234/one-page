<template>
  <section class="demos section-padding pt-80">
    <div class="container-xxl">
      <div class="row">
        <div class="col-lg-4 col-md-6" v-for="item in data" :key="item.id">
          <div class="item text-center">
            <NuxtLink :to="item.link" target="_blank">
              <div class="img">
                <img :src="item.image" alt="" />
              </div>
              <h6 class="mt-15">{{ item.title }} <span v-if="item.mode === 'light'">(Light)</span></h6>
            </NuxtLink>
            <span class="new" v-if="item.new">New</span>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="item text-center">
            <div class="img">
              <img src="/landing-preview/img/demos/more.jpg" alt="" />
            </div>
            <h6 class="mt-15">Coming More</h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
//= Data
import data from '@/data/Preview/demos.json';
</script>