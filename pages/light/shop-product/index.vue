<template>
  <div>
    <div id="smooth-wrapper">
      <CommonNavbar :mainBg="true" :noStatic="true" :lightMode="true" />
      <div id="smooth-content">
        <main class="main-bg">
          <ShopProduct />
        </main>
        <StartupFooter :subBg="true" :lightMode="true" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
//= Page Metadata
definePageMeta({
  layout: 'default-light'
});
//= Page Head
useHead({
  titleTemplate: `%s - Shop Product`,
  bodyAttrs: {
    class: 'main-bg'
  }
});

onMounted(() => {
  // Smooth Scroll of Page
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  ScrollTrigger.normalizeScroll(true)
  ScrollSmoother.create({
    smooth: 2,
    effects: true,
  });
});
</script>
