<template>
  <div>
    <div id="smooth-wrapper">
      <CommonNavbar :mainBg="true" :noStatic="true" />
      <div id="smooth-content">
        <main class="main-bg">
          <ShopProduct />
        </main>
        <StartupFooter :subBg="true" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
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
