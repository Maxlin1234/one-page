<template>
  <div>
    <CommonLinesTwo />
    <CommonNavbar :lightMode="true" />
    <DigitalAgencyHeader :lightMode="true" />
    <main class="position-re">
      <DigitalAgencyServices :lightMode="true" />
      <DigitalAgencyBlock :lightMode="true" />
      <DigitalAgencyPortfolio />
      <DigitalAgencyPrice />
      <DigitalAgencyServicesTab :lightMode="true" />
      <DigitalAgencyClients :lightMode="true" />
      <DigitalAgencyTestimonials />
      <DigitalAgencyApproach />
      <DigitalAgencyCallToAction :lightMode="true" />
      <DigitalAgencyBlog />
    </main>
    <DigitalAgencyFooter :lightMode="true" />
  </div>
</template>

<script setup>
//= Page Metadata
definePageMeta({
  layout: 'default-light'
});
//= Page Head
useHead({
  titleTemplate: `%s - Digital Agency`,
  bodyAttrs: {
    class: 'home-digital sub-bg'
  }
})
</script>
