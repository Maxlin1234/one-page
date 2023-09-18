<template>
  <div>
    <CommonNavbar />
    <main class="main-bg">
      <InnerPagesBlogDetails />
    </main>
    <StartupFooter />
  </div>
</template>

<script setup>
//= Page Head
useHead({
  titleTemplate: `%s - Blog Details`,
  bodyAttrs: {
    class: 'main-bg'
  }
})
</script>
