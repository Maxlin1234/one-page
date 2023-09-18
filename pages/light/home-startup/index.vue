<template>
  <div>
    <CommonNavbar :mainBg="true" :noStatic="true" :lightMode="true" />
    <main>
      <StartupHeader :lightMode="true" />
      <StartupIntro />
      <StartupMarq />
      <StartupServices />
      <StartupPortfolio />
      <StartupTestimonials :lightMode="true" />
      <StartupTeam />
      <StartupClients :lightMode="true" />
      <StartupBlog />
      <StartupCallToAction />
    </main>
    <StartupFooter :lightMode="true" />
  </div>
</template>

<script setup>
//= Page Metadata
definePageMeta({
  layout: 'default-light'
});
//= Page Head
useHead({
  titleTemplate: `%s - Startup`,
  bodyAttrs: {
    class: 'home-startup main-bg'
  }
});
</script>
