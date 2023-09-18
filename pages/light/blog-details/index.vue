<template>
  <div>
    <CommonNavbar :lightMode="true" />
    <main class="main-bg">
      <InnerPagesBlogDetails />
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
  titleTemplate: `%s - Blog Details`,
  bodyAttrs: {
    class: 'main-bg'
  }
})
</script>
