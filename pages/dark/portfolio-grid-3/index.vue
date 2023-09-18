<template>
  <div>
    <CommonNavbar />
    <main class="main-bg">
      <PortfolioHeader :data="metadata" />
      <PortfolioClassicGrid3Col />
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
  titleTemplate: `%s - Portfolio Classic 3 Col`,
  bodyAttrs: {
    class: 'main-bg'
  }
})
</script>
