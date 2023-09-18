<template>
  <section class="call-action-center section-padding position-re">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="sec-lg-head text-center">
            <h2 class="fz-70 fw-700">
              <span>Have a project in mind?</span> <br />
              <span class="underline">
                <NuxtLink to="/dark/page-contact" class="main-color2">Let’s get to work.</NuxtLink>
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-pattern bg-img" :data-background="`/${lightMode ? 'light' : 'dark'}/assets/imgs/patterns/graph.png`">
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

const { lightMode } = defineProps(['lightMode']);

onMounted(() => {
  loadBackgroudImages();
});
</script>