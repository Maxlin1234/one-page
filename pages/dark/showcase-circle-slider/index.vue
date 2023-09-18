<template>
  <div>
    <ShowcasesNavigation />
    <ShowcasesMenu />
    <main>
      <ShowcasesCircleSlider />
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
  titleTemplate: `%s - Circle Slider`
})
</script>
