<template>
  <div>
    <CommonNavbar :lightMode="true" />
    <main class="main-bg">
      <InnerPagesBlogHeader :data="metadata" />
      <InnerPagesBlogImageOutFrame />
    </main>
    <StartupFooter :lightMode="true" />
  </div>
</template>

<script setup>
const metadata = {
  subTitle: "OUR BLOG",
  title: "Latest News."
}
//= Page Metadata
definePageMeta({
  layout: 'default-light'
});
//= Page Head
useHead({
  titleTemplate: `%s - Blog Image Out Frame`,
  bodyAttrs: {
    class: 'main-bg'
  }
})
</script>
