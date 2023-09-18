<template>
  <div>
    <div id="smooth-wrapper">
      <CommonNavbar :mainBg="true" :noStatic="true" />
      <div id="smooth-content">
        <main class="main-bg">
          <ShopHeader :data="metadata" />
          <ShopCheckout />
        </main>
        <StartupFooter :subBg="true" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

const metadata = {
  subTitle: "SHOPPING",
  title: "checkout."
}
//= Page Head
useHead({
  titleTemplate: `%s - Shop Checkout`,
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
