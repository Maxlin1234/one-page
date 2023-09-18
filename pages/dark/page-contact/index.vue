<template>
  <div>
    <CommonNavbar />
    <main>
      <InnerPagesContactHeader />
      <InnerPagesContactForm />
      <StartupCallToAction :innerPageStyle="true" />
    </main>
    <StartupFooter />
  </div>
</template>

<script setup>
//= Page Head
useHead({
  titleTemplate: `%s - Contact`,
  bodyAttrs: {
    class: 'main-bg'
  }
})
</script>
