<template>
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
</script>
