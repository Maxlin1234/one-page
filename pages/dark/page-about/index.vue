<template>
  <div>
    <CommonNavbar />
    <main>
      <InnerPagesHeader :data="headerMetadata" />
      <InnerPagesAboutStory />
      <InnerPagesAboutServices />
      <InnerPagesAboutIntro />
      <DigitalAgencyTestimonials :mainColor="true" />
      <StartupTeam />
      <InnerPagesAboutClients />
      <StartupCallToAction :innerPageStyle="true" />
    </main>
    <StartupFooter />
  </div>
</template>

<script setup>
const headerMetadata = {
  subTitle: "About us",
  title: "關於我們",
  text: "About Us"
}
//= Page Head
useHead({
  titleTemplate: `%s - About`,
  bodyAttrs: {
    class: 'main-bg'
  }
})
</script>
