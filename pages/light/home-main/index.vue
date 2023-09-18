<template>
  <div id="smooth-wrapper">
    <CommonNavbar :mainBg="true" :noStatic="true" :lightMode="true" />
    <div id="smooth-content">
      <main class="main-bg">
        <HomeMainHeader />
        <HomeMainAbout />
        <HomeMainMarq />
        <HomeMainClients :lightMode="true" />
        <HomeMainServices :lightMode="true" />
        <HomeMainWorks />
        <HomeMainServicesTabs :lightMode="true" />
        <HomeMainTestimonials :lightMode="true" />
        <HomeMainBlog />
      </main>
      <HomeMainFooter :lightMode="true" />
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
  titleTemplate: `%s - Main`,
  bodyAttrs: {
    class: 'home-main-crev main-bg'
  }
});

function handleResize() {
  if (window.innerWidth < 991 && document.querySelector('.thecontainer').style.maxHeight) {
    location.reload();
  }
  if (window.innerWidth > 991 && !document.querySelector('.thecontainer').style.maxHeight) {
    gsap.registerPlugin(ScrollTrigger);
    let sections = gsap.utils.toArray(".panel");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".thecontainer",
        pin: true,
        scrub: 1,
        end: () => "+=" + document.querySelector(".thecontainer").offsetWidth
      }
    });
  }
}

onMounted(() => {
  // Smooth Scroll of Page
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  ScrollTrigger.normalizeScroll(true)
  ScrollSmoother.create({
    smooth: 2,
    effects: true,
  });
  // Horizontal Scroll
  if (window.innerWidth > 991) {
    gsap.registerPlugin(ScrollTrigger);
    let sections = gsap.utils.toArray(".panel");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".thecontainer",
        pin: true,
        scrub: 1,
        end: () => "+=" + document.querySelector(".thecontainer")?.offsetWidth
      }
    });
  }
  // Footer Animation
  if (window.innerWidth > 991) {
    gsap.set('.footer-container', { yPercent: -50 });
    const uncover = gsap.timeline({ paused: true });
    uncover.to('.footer-container', { yPercent: 0, ease: 'none' });
    ScrollTrigger.create({
      trigger: 'main',
      start: 'bottom bottom',
      end: '+=50%',
      animation: uncover,
      scrub: true,
    });
  }

  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>
