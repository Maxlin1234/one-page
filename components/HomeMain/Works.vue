<template>
  <section class="works thecontainer">
    <div class="panel mt-30" v-for="item in data" :key="item.id" Vfor>
      <div class="item">
        <div class="img">
          <img :src="item.image" alt="" />
        </div>
        <div class="cont d-flex align-items-end">
          <div>
            <span>{{ item.tag }}</span>
            <h5>{{ item.title }}</h5>
          </div>
          <div class="ml-auto">
            <h6>{{ item.date }}</h6>
          </div>
        </div>
        <a href="#0" class="link-overlay"></a>
      </div>
    </div>
  </section>
</template>

<script setup>
//= Data
import data from '@/data/HomeMain/works.json';
</script>