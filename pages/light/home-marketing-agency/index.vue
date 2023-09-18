<template>
  <div>
    <CommonNavbar :noStatic="true" :subBg="true" :lightMode="true" />
    <main class="main-bg">
      <MarketingAgencyHeader :lightMode="true" />
      <MarketingAgencyMarq />
      <MarketingAgencyAbout :lightMode="true" />
      <MarketingAgencyClients :lightMode="true" />
      <MarketingAgencySideImage />
      <MarketingAgencyServices :lightMode="true" />
      <MarketingAgencyPortfolio :lightMode="true" />
      <MarketingAgencyIntro />
      <MarketingAgencyTestimonials :lightMode="true" />
      <MarketingAgencyBlog :lightMode="true" />
      <MarketingAgencyCallToAction :lightMode="true" />
      <MarketingAgencyMarq2 />
    </main>
    <MarketingAgencyFooter :lightMode="true" />
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
  titleTemplate: `%s - Marketing Agency`,
  bodyAttrs: {
    class: 'digital-marketing sub-bg'
  }
});

onMounted(() => {
  customScript();
});
</script>
