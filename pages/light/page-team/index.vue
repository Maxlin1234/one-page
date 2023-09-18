<template>
  <div>
    <CommonNavbar :lightMode="true" />
    <main>
      <InnerPagesTeamHeader />
      <InnerPagesTeamMembers />
      <InnerPagesTeamTestimonials />
      <StartupCallToAction :innerPageStyle="true" />
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
  titleTemplate: `%s - Team`,
  bodyAttrs: {
    class: 'main-bg'
  }
})
</script>
