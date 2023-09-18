<template>
  <div>
    <CommonNavbar :mainBg="true" :lightMode="true" />
    <main class="main-bg position-re">
      <CreativeAgencyHeader :lightMode="true" />
      <CreativeAgencyMarq />
      <CreativeAgencyIntro />
      <CreativeAgencySectionImage />
      <CreativeAgencyServices :lightMode="true" />
      <CreativeAgencyPortfolio />
      <CreativeAgencyTestimonials :lightMode="true" />
      <CreativeAgencyTeam />
      <CreativeAgencyHzScroll />
      <CreativeAgencyBlog />
    </main>
    <CreativeAgencyFooter :lightMode="true" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
//= Scripts
import customScript from '@/common/marketing-agency-customjs';

//= Page Metadata
definePageMeta({
  layout: 'default-light'
});
//= Page Head
useHead({
  titleTemplate: `%s - Creative Agency`,
  bodyAttrs: {
    class: 'sub-bg'
  }
});

onMounted(() => {
  customScript();
});
</script>
