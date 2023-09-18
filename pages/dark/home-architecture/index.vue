<template>
  <div>
    <CommonNavbar :mainBg="true" />
    <main class="position-re">
      <ArchitectureHeader />
      <div class="block-pattern">
        <ArchitectureBgPattern />
        <ArchitectureIntro />
        <ArchitectureClients />
        <ArchitectureServices />
      </div>
      <ArchitecturePortfolio />
      <ArchitectureAbout />
      <ArchitectureSectionImage />
      <ArchitectureTestimonials />
      <ArchitectureBlog />
    </main>
    <ArchitectureFooter />
  </div>
</template>

<script setup>
//= Page Head
useHead({
  titleTemplate: `%s - Architecture`,
  bodyAttrs: {
    class: 'home-arch main-bg'
  }
});
</script>
