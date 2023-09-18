<template>
  <div>
    <CommonNavbar :lightMode="true" />
    <main class="main-bg">
      <PortfolioHeader :data="metadata" />
      <PortfolioModernGrid />
    </main>
    <StartupFooter :subBg="true" :lightMode="true" />
  </div>
</template>

<script setup>
const metadata = {
  subTitle: "Our Works",
  title: "Modern Grid."
}

//= Page Metadata
definePageMeta({
  layout: 'default-light'
});
//= Page Head
useHead({
  titleTemplate: `%s - Portfolio Modern`,
  bodyAttrs: {
    class: 'main-bg'
  }
})
</script>
