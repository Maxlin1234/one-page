<template>
  <div>
    <ShowcasesNavigation :lightMode="true" :alwaysDark="true" />
    <ShowcasesMenu :lightMode="true" />
    <main>
      <ShowcasesCarousel :lightMode="true" />
    </main>
  </div>
</template>

<script setup>
//= Page Metadata
definePageMeta({
  layout: 'showcases-light'
});
//= Page Head
useHead({
  titleTemplate: `%s - Carousel`,
  bodyAttrs: {
    class: "main-bg"
  }
})
</script>
