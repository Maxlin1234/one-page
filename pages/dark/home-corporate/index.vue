<template>
  <div>
    <CommonLinesTwo />
    <CommonNavbar />
    <main class="main-bg">
      <CorporateHeader />
      <CorporateServices />
      <CorporateAbout />
      <CorporateMarq />
      <CorporatePortfolio />
      <CorporateNumbers />
      <CorporateTestimonials />
      <CorporateBlock />
      <CorporatePricing />
      <CorporateBlog />
    </main>
    <CorporateFooter />
  </div>
</template>

<script setup>
//= Page Head
useHead({
  titleTemplate: `%s - Corporate`,
  bodyAttrs: {
    class: 'home-corp'
  }
})
</script>
