<template>
  <div>
    <CommonNavbar :mainBg="true" :lightMode="true" />
    <main class="position-re">
      <ArchitectureHeader />
      <div class="block-pattern">
        <ArchitectureBgPattern />
        <ArchitectureIntro />
        <ArchitectureClients :lightMode="true" />
        <ArchitectureServices :lightMode="true" />
      </div>
      <ArchitecturePortfolio />
      <ArchitectureAbout />
      <ArchitectureSectionImage />
      <ArchitectureTestimonials :lightMode="true" />
      <ArchitectureBlog />
    </main>
    <ArchitectureFooter :lightMode="true" />
  </div>
</template>

<script setup>
//= Page Metadata
definePageMeta({
  layout: 'default-light'
});
//= Page Head
useHead({
  titleTemplate: `%s - Architecture`,
  bodyAttrs: {
    class: 'home-arch main-bg'
  }
});
</script>
