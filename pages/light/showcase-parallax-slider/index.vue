<template>
  <div>
    <ShowcasesNavigation :lightMode="true" />
    <ShowcasesMenu :lightMode="true" />
    <main>
      <ShowcasesParallaxSlider />
    </main>
  </div>
</template>

<script setup>
//= Page Metadata
definePageMeta({
  layout: 'default-light'
});
//= Page Head
useHead({
  titleTemplate: `%s - Parallax Slider`
})
</script>
