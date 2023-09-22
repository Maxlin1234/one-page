<template>
  <div>
    <CommonNavbar :curve="true" :noStatic="true" />
    <main class="main-bg">
      <OnePageHeader />
      <OnePageAbout />
      <OnePageMarq />
      <OnePageServices />
      <OnePagePortfolio />
      <OnePageIntro />
      <OnePageTestimonials />
      <OnePageImageSection />
      <OnePageTeam />
      <OnePageBlog />
      <OnePageContact />
    </main>
    <OnePageFooter />
  </div>
</template>

<script setup>
//= Page Head
useHead({
  titleTemplate: `%s - One Page`,
  bodyAttrs: {
    class: 'sub-bg'
  }
})
</script>

<!-- <template>
  <div>
    <PreviewNavbar />
    <PreviewOverlay />
    <main>
      <PreviewHeader />
      <PreviewDemos />
      <PreviewMarq />
      <PreviewPages />
      <PreviewShopDemos />
      <PreviewCallToAction />
      <PreviewFooter />
    </main>
  </div>
</template>

<script setup>
//= Page Metadata
definePageMeta({
  layout: 'preview'
});
//= Page Head
useHead({
  titleTemplate: `%s - Preview`,
  bodyAttrs: {
    class: 'sub-bg'
  }
})
</script> -->

