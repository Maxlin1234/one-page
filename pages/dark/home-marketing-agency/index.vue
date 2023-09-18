<template>
  <div>
    <CommonNavbar :noStatic="true" :subBg="true" />
    <main class="main-bg">
      <MarketingAgencyHeader />
      <MarketingAgencyMarq />
      <MarketingAgencyAbout />
      <MarketingAgencyClients />
      <MarketingAgencySideImage />
      <MarketingAgencyServices />
      <MarketingAgencyPortfolio />
      <MarketingAgencyIntro />
      <MarketingAgencyTestimonials />
      <MarketingAgencyBlog />
      <MarketingAgencyCallToAction />
      <MarketingAgencyMarq2 />
    </main>
    <MarketingAgencyFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
//= Scripts
import customScript from '@/common/marketing-agency-customjs';

//= Page Head
useHead({
  titleTemplate: `%s - Marketing Agency`,
  bodyAttrs: {
    class: 'digital-marketing sub-bg'
  }
});

onMounted(() => {
  customScript();
});
</script>
