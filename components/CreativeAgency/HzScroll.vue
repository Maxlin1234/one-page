<template>
  <section class="thecontainer ontop">
    <Intro />
    <Awards :lightMode="lightMode" />
    <CallToAction :lightMode="lightMode" />
  </section>
</template>
  
<script setup>
import { onMounted, onUnmounted } from 'vue';
//= Components
import Intro from './HzIntro';
import Awards from './HzAwards';
import CallToAction from './HzCallToAction';

const { lightMode } = defineProps(['lightMode']);

onMounted(() => {
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
        end: () => "+=" + document.querySelector(".thecontainer").offsetWidth
      }
    });
  }

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

function handleResize() {
  if (window.innerWidth < 991 && document.querySelector('.thecontainer').style.maxHeight) {
    location.reload();
  } else if (window.innerWidth > 991 && !document.querySelector('.thecontainer').style.maxHeight) {
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
}
</script>