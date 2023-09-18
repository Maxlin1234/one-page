<template>
  <section class="services section-padding pb-0 bg-gray1 position-re o-hidden radius-30">
    <Services :lightMode="lightMode" />
    <Process :lightMode="lightMode" />
    <div class="bg-pattern bg-img bg-repeat"
      :data-background="`/${lightMode ? 'light' : 'dark'}/assets/imgs/patterns/bg-pattern.png`"></div>
  </section>
</template>
  
<script setup>
//= Components
import Process from './Process';
import Services from './IntServices';

const { lightMode } = defineProps(['lightMode']);
</script>