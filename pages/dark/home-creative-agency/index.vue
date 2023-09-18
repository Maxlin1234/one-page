<template>
  <div>
    <CommonNavbar :mainBg="true" />
    <main class="main-bg position-re">
      <CreativeAgencyHeader />
      <CreativeAgencyMarq />
      <CreativeAgencyIntro />
      <CreativeAgencySectionImage />
      <CreativeAgencyServices />
      <CreativeAgencyPortfolio />
      <CreativeAgencyTestimonials />
      <CreativeAgencyTeam />
      <CreativeAgencyHzScroll />
      <CreativeAgencyBlog />
    </main>
    <CreativeAgencyFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
//= Scripts
import customScript from '@/common/marketing-agency-customjs';

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
