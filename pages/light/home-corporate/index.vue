<template>
  <div>
    <CommonLinesTwo />
    <CommonNavbar :lightMode="true" />
    <main class="main-bg">
      <CorporateHeader />
      <CorporateServices :lightMode="true" />
      <CorporateAbout :lightMode="true" />
      <CorporateMarq />
      <CorporatePortfolio />
      <CorporateNumbers />
      <CorporateTestimonials :lightMode="true" />
      <CorporateBlock :lightMode="true" />
      <CorporatePricing />
      <CorporateBlog />
    </main>
    <CorporateFooter :lightMode="true" />
  </div>
</template>

<script setup>
//= Page Metadata
definePageMeta({
  layout: 'default-light'
});
//= Page Head
useHead({
  titleTemplate: `%s - Corporate`,
  bodyAttrs: {
    class: 'home-corp'
  }
})
</script>
