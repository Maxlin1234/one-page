<template>
  <div>
    <CommonNavbar :lightMode="true" />
    <main>
      <InnerPagesHeader :data="headerMetadata" />
      <InnerPagesAboutStory />
      <InnerPagesAboutServices :lightMode="true" />
      <InnerPagesAboutIntro />
      <DigitalAgencyTestimonials :mainColor="true" />
      <StartupTeam />
      <InnerPagesAboutClients :lightMode="true" />
      <StartupCallToAction :innerPageStyle="true" />
    </main>
    <StartupFooter :lightMode="true" />
  </div>
</template>

<script setup>
const headerMetadata = {
  subTitle: "WHO WE ARE ?",
  title: "We're a digital agency based in Valencia.",
  text: "About Us"
}
//= Page Metadata
definePageMeta({
  layout: 'default-light'
});
//= Page Head
useHead({
  titleTemplate: `%s - About`,
  bodyAttrs: {
    class: 'main-bg'
  }
})
</script>
