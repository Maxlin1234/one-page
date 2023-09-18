<template>
  <div>
    <CommonNavbar :lightMode="true" />
    <main class="main-bg">
      <PortfolioHeader :data="metadata" />
      <PortfolioClassicGrid3Col />
    </main>
    <StartupFooter :subBg="true" :lightMode="true" />
  </div>
</template>

<script setup>
const metadata = {
  subTitle: "Our Works",
  title: "Classic Grid 3."
}

//= Page Metadata
definePageMeta({
  layout: 'default-light'
});
//= Page Head
useHead({
  titleTemplate: `%s - Portfolio Classic 3 Col`,
  bodyAttrs: {
    class: 'main-bg'
  }
})
</script>
