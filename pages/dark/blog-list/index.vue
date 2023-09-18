<template>
  <div>
    <CommonNavbar />
    <main class="main-bg">
      <InnerPagesBlogHeader :data="metadata" />
      <InnerPagesBlogList />
    </main>
    <StartupFooter />
  </div>
</template>

<script setup>
const metadata = {
  subTitle: "OUR BLOG",
  title: "Latest News."
}
//= Page Head
useHead({
  titleTemplate: `%s - Blog List`,
  bodyAttrs: {
    class: 'main-bg'
  }
})
</script>
