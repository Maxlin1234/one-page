<template>
  <div>
    <ShowcasesNavigation :darkOnScroll="true" />
    <ShowcasesMenu :lightMode="true" />
    <main class="main-bg">
      <InnerPagesProjectDetails2Header />
      <InnerPagesProjectDetails2About />
      <InnerPagesProjectDetails2Content />
      <InnerPagesProjectDetails2CallToAction />
    </main>
    <StartupFooter :lightMode="true" />
  </div>
</template>

<script setup>
//= Page Metadata
definePageMeta({
  layout: 'default-light'
});
//= Page Head
useHead({
  titleTemplate: `%s - Project Details 2`,
  bodyAttrs: {
    class: 'main-bg'
  }
})
</script>
