<template>
  <div>
    <CommonNavbar />
    <main class="main-bg">
      <PortfolioHeader :data="metadata" />
      <PortfolioMetro />
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
  titleTemplate: `%s - Portfolio Metro`,
  bodyAttrs: {
    class: 'main-bg'
  }
})
</script>
