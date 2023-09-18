<template>
  <div>
    <CommonNavbar :mainBg="true" :lightMode="true" />
    <main class="main-bg">
      <InnerPagesProjectDetailsHeader />
      <InnerPagesProjectDetailsContent />
      <InnerPagesProjectDetailsCallToAction />
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
  titleTemplate: `%s - Project Details`,
  bodyAttrs: {
    class: 'main-bg'
  }
})
</script>
