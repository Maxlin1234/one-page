<template>
  <div>
    <ShowcasesNavigation />
    <ShowcasesMenu />
    <main class="main-bg">
      <InnerPagesProjectDetails2Header />
      <InnerPagesProjectDetails2About />
      <InnerPagesProjectDetails2Content />
      <InnerPagesProjectDetails2CallToAction />
    </main>
    <StartupFooter />
  </div>
</template>

<script setup>
//= Page Head
useHead({
  titleTemplate: `%s - Project Details 2`,
  bodyAttrs: {
    class: 'main-bg'
  }
})
</script>
