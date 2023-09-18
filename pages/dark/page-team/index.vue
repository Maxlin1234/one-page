<template>
  <div>
    <CommonNavbar />
    <main>
      <InnerPagesTeamHeader />
      <InnerPagesTeamMembers />
      <InnerPagesTeamTestimonials />
      <StartupCallToAction :innerPageStyle="true" />
    </main>
    <StartupFooter />
  </div>
</template>

<script setup>
//= Page Head
useHead({
  titleTemplate: `%s - Team`,
  bodyAttrs: {
    class: 'main-bg'
  }
})
</script>
