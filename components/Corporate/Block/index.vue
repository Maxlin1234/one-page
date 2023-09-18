<template>
  <section class="block-sec section-padding">
    <div class="container">
      <Video :lightMode="lightMode" />
      <Values />
    </div>
  </section>
</template>

<script setup>
//= Components
import Video from './Video';
import Values from './Values';

const { lightMode } = defineProps(['lightMode']);
</script>