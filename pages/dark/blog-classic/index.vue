<template>
  <div>
    <CommonNavbar />
    <main class="main-bg">
      <InnerPagesBlogHeader :data="metadata" />
      <InnerPagesBlogClassic />
    </main>
    <StartupFooter />
  </div>
</template>

<script setup>
const metadata = {
  subTitle: "Latest News",
  title: "最新消息"
}
//= Page Head
useHead({
  titleTemplate: `%s - Blog Classic`,
  bodyAttrs: {
    class: 'main-bg'
  }
})
</script>
