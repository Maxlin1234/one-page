<template>
  <div>
    <FreelancerNavbar :lightMode="true" />
    <FreelancerHeader />
    <main class="position-re">
      <FreelancerMarq />
      <FreelancerServices :lightMode="true" />
      <FreelancerIntro />
      <FreelancerPortfolio />
      <FreelancerSkills />
      <FreelancerTestimonials />
      <FreelancerBlog />
      <FreelancerContact />
    </main>
    <FreelancerFooter :lightMode="true" />
  </div>
</template>

<script setup>
//= Page Metadata
definePageMeta({
  layout: 'default-light'
});
//= Page Head
useHead({
  titleTemplate: `%s - Freelancer`,
  bodyAttrs: {
    class: 'home-freelancer main-bg'
  }
})
</script>
