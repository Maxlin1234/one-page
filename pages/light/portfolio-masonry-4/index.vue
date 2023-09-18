<template>
  <div>
    <CommonNavbar :lightMode="true" />
    <main class="main-bg">
      <PortfolioHeader :data="metadata" />
      <PortfolioMasonry4Col />
    </main>
    <StartupFooter :subBg="true" :lightMode="true" />
  </div>
</template>

<script setup>
const metadata = {
  subTitle: "Our Works",
  title: "Masonry 4."
}

//= Page Metadata
definePageMeta({
  layout: 'default-light'
});
//= Page Head
useHead({
  titleTemplate: `%s - Portfolio Masonry 4 Col`,
  bodyAttrs: {
    class: 'main-bg'
  }
})
</script>
