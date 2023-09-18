<template>
  <div>
    <CommonLinesTwo />
    <CommonNavbar />
    <DigitalAgencyHeader />
    <main class="position-re">
      <DigitalAgencyServices />
      <DigitalAgencyBlock />
      <DigitalAgencyPortfolio />
      <DigitalAgencyPrice />
      <DigitalAgencyServicesTab />
      <DigitalAgencyClients />
      <DigitalAgencyTestimonials />
      <DigitalAgencyApproach />
      <DigitalAgencyCallToAction />
      <DigitalAgencyBlog />
    </main>
    <DigitalAgencyFooter />
  </div>
</template>

<script setup>
//= Page Head
useHead({
  titleTemplate: `%s - Digital Agency`,
  bodyAttrs: {
    class: 'home-digital sub-bg'
  }
})
</script>
