<template>
  <section class="inter-links-center section-padding">
    <div class="container-xxl">
      <div class="row">
        <div class="col-12">
          <div class="links-text d-flex justify-content-center">
            <ul class="rest">
              <li v-for="item in data" :data-tab="`tab-${item.id}`" :key="item.id" @mouseenter="handleMouseEnter"
                @mouseleave="handleMouseLeave">
                <h2>
                  <span class="num">{{ item.number }}.</span>
                  <NuxtLink to="/dark/project-details1"><span class="tag sub-title">{{ item.type }}</span> <span
                      class="text">{{ item.title }}</span></NuxtLink>
                </h2>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="links-img">
      <div class="img" :id="`tab-${item.id}`" v-for="item in data" :key="item.id">
        <img :src="item.image" alt="" />
      </div>
    </div>
  </section>
</template>
  
<script setup>
//= Data
import data from '@/data/Showcases/interactive-center.json';

function handleMouseEnter(event) {
  var tab_id = event.currentTarget.getAttribute('data-tab');

  document.querySelectorAll('.links-text li').forEach(el => {
    el.classList.remove('current');
    el.classList.add('no-active');
  });
  event.currentTarget.classList.add('current');
  event.currentTarget.classList.remove('no-active')

  document.querySelectorAll('.links-img .img').forEach(el => el.classList.remove('current'));
  document.querySelector("#" + tab_id).classList.add('current');

  if (event.currentTarget.classList.contains('current')) return false;
}

function handleMouseLeave() {
  document.querySelectorAll('.links-text li').forEach(el => el.classList.remove('current'));
  document.querySelectorAll('.links-img .img').forEach(el => el.classList.remove('current'));
  document.querySelectorAll('.links-text li').forEach(el => el.classList.remove('no-active'));
}
</script>