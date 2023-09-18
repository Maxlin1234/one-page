<template>
  <div>
    <ShowcasesNavigation :alwaysDark="true" />
    <ShowcasesMenu :lightMode="true" />
    <main>
      <ShowcasesInteractiveCenter />
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
  titleTemplate: `%s - Interactive`,
  bodyAttrs: {
    class: "main-bg inter-center"
  }
})
</script>
