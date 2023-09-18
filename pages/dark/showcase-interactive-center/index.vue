<template>
  <div>
    <ShowcasesNavigation />
    <ShowcasesMenu />
    <main>
      <ShowcasesInteractiveCenter />
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
  titleTemplate: `%s - Interactive`,
  bodyAttrs: {
    class: "main-bg inter-center"
  }
})
</script>
