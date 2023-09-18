<template>
  <div>
    <FreelancerNavbar />
    <FreelancerHeader />
    <main class="position-re">
      <FreelancerMarq />
      <FreelancerServices />
      <FreelancerIntro />
      <FreelancerPortfolio />
      <FreelancerSkills />
      <FreelancerTestimonials />
      <FreelancerBlog />
      <FreelancerContact />
    </main>
    <FreelancerFooter />
  </div>
</template>

<script setup>
//= Page Head
useHead({
  titleTemplate: `%s - Freelancer`,
  bodyAttrs: {
    class: 'home-freelancer main-bg'
  }
})
</script>
