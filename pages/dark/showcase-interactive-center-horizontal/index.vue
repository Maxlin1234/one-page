<template>
  <div>
    <ShowcasesNavigation />
    <ShowcasesMenu />
    <main>
      <ShowcasesInteractiveCenterHorizontal />
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
  titleTemplate: `%s - Interactive Horizontal`,
  bodyAttrs: {
    class: "main-bg inter-center"
  }
})
</script>
