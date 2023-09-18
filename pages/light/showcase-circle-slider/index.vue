<template>
  <div>
    <ShowcasesNavigation :lightMode="true" />
    <ShowcasesMenu :lightMode="true" />
    <main>
      <ShowcasesCircleSlider :lightMode="true" />
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
  titleTemplate: `%s - Circle Slider`
})
</script>
