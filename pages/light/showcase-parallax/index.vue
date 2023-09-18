<template>
  <div>
    <ShowcasesNavigation :lightMode="true" />
    <ShowcasesMenu :lightMode="true" />
    <main class="main-bg">
      <ShowcasesVerticalParallax />
      <ShowcasesVerticalParallaxNumbers />
      <ShowcasesVerticalParallaxBlock :lightMode="true" />
    </main>
    <ShowcasesVerticalParallaxFooter :lightMode="true" />
  </div>
</template>

<script setup>
//= Page Metadata
definePageMeta({
  layout: 'showcases-light'
});
//= Page Head
useHead({
  titleTemplate: `%s - Parallax`,
  bodyAttrs: {
    class: "main-bg"
  }
})
</script>
