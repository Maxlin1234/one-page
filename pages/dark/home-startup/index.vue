<template>
  <div>
    <CommonNavbar :mainBg="true" :noStatic="true" />
    <main>
      <StartupHeader />
      <StartupIntro />
      <StartupMarq />
      <StartupServices />
      <StartupPortfolio />
      <StartupTestimonials />
      <StartupTeam />
      <StartupClients />
      <StartupBlog />
      <StartupCallToAction />
    </main>
    <StartupFooter />
  </div>
</template>

<script setup>
//= Page Head
useHead({
  titleTemplate: `%s - Startup`,
  bodyAttrs: {
    class: 'home-startup main-bg'
  }
});
</script>
