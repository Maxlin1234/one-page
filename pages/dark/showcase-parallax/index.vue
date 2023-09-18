<template>
  <div>
    <ShowcasesNavigation />
    <ShowcasesMenu />
    <main class="main-bg">
      <ShowcasesVerticalParallax />
      <ShowcasesVerticalParallaxNumbers />
      <ShowcasesVerticalParallaxBlock />
    </main>
    <ShowcasesVerticalParallaxFooter />
  </div>
</template>

<script setup>
//= Page Head
useHead({
  titleTemplate: `%s - Parallax`,
  bodyAttrs: {
    class: "main-bg"
  }
})
</script>
