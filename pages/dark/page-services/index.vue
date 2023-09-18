<template>
  <div>
    <CommonNavbar />
    <main>
      <InnerPagesHeader :data="headerMetadata" />
      <InnerPagesAboutServices />
      <InnerPagesServicesPortfolio />
      <DigitalAgencyServicesTab />
      <InnerPagesServicesFAQ />
      <StartupCallToAction :innerPageStyle="true" />
    </main>
    <StartupFooter />
  </div>
</template>

<script setup>
const headerMetadata = {
  subTitle: "WHAT CAN WE DO ?",
  title: "We combine our passion for design and code.",
  text: "SERVICES"
}
//= Page Head
useHead({
  titleTemplate: `%s - Services`,
  bodyAttrs: {
    class: 'main-bg'
  }
})
</script>
