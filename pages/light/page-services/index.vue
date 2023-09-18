<template>
  <div>
    <CommonNavbar :lightMode="true" />
    <main>
      <InnerPagesHeader :data="headerMetadata" />
      <InnerPagesAboutServices :lightMode="true" />
      <InnerPagesServicesPortfolio />
      <DigitalAgencyServicesTab :lightMode="true" />
      <InnerPagesServicesFAQ />
      <StartupCallToAction :innerPageStyle="true" />
    </main>
    <StartupFooter :lightMode="true" />
  </div>
</template>

<script setup>
const headerMetadata = {
  subTitle: "WHAT CAN WE DO ?",
  title: "We combine our passion for design and code.",
  text: "SERVICES"
}
//= Page Metadata
definePageMeta({
  layout: 'default-light'
});
//= Page Head
useHead({
  titleTemplate: `%s - Services`,
  bodyAttrs: {
    class: 'main-bg'
  }
})
</script>
