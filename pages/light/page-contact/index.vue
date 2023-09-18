<template>
  <div>
    <CommonNavbar :lightMode="true" />
    <main>
      <InnerPagesContactHeader />
      <InnerPagesContactForm />
      <StartupCallToAction :innerPageStyle="true" />
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
  titleTemplate: `%s - Contact`,
  bodyAttrs: {
    class: 'main-bg'
  }
})
</script>
