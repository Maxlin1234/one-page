<template>
  <div>
    <ShowcasesNavigation />
    <ShowcasesMenu />
    <main>
      <ShowcasesFrameSlider />
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
  titleTemplate: `%s - Frame Slider`
})
</script>
