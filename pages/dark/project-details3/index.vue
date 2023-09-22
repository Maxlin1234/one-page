<template>
  <div>
    <CommonNavbar :mainBg="true" />
    <main class="main-bg">
      <InnerPagesProjectDetailsHeader />
      <InnerPagesProjectDetailsContent />
      <InnerPagesProjectDetailsCallToAction />
    </main>
    <StartupFooter />
  </div>
</template>

<script setup>
//= Page Head
useHead({
  titleTemplate: `%s - Project Details`,
  bodyAttrs: {
    class: 'main-bg'
  }
})
</script>
