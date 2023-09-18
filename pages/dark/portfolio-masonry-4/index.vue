<template>
  <div>
    <CommonNavbar />
    <main class="main-bg">
      <PortfolioHeader :data="metadata" />
      <PortfolioMasonry4Col />
    </main>
    <StartupFooter :subBg="true" />
  </div>
</template>

<script setup>
const metadata = {
  subTitle: "Our Works",
  title: "作品介紹"
}

//= Page Head
useHead({
  titleTemplate: `%s - Portfolio Masonry 4 Col`,
  bodyAttrs: {
    class: 'main-bg'
  }
})
</script>
