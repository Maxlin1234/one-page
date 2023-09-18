<template>
  <div>
    <ShowcasesNavigation />
    <ShowcasesMenu />
    <main>
      <ShowcasesCarousel />
    </main>
  </div>
</template>

<script setup>
//= Page Metadata
definePageMeta({
  layout: 'showcases'
});
//= Page Head
useHead({
  titleTemplate: `%s - Carousel`,
  bodyAttrs: {
    class: "main-bg"
  }
})
</script>
