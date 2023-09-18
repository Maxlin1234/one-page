<template>
  <div>
    <ShowcasesNavigation :light-mode="true" />
    <ShowcasesMenu :light-mode="true" />
    <main>
      <ShowcasesFrameSlider />
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
  titleTemplate: `%s - Frame Slider`
})
</script>
