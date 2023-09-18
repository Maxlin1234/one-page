<template>
  <div>
    <ShowcasesNavigation :alwaysDark="true" />
    <ShowcasesMenu :lightMode="true" />
    <main>
      <ShowcasesInteractiveCenterHorizontal />
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
  titleTemplate: `%s - Interactive Horizontal`,
  bodyAttrs: {
    class: "main-bg inter-center"
  }
})
</script>
