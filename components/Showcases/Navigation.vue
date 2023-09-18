<template>
  <div id="navi" :class="`topnav ${alwaysDark && 'navlit'}`">
    <div class="container">
      <div class="logo icon-img-120">
        <a href="#"><img :src="`/dark/assets/imgs/logo-${alwaysDark ? 'dark' : 'light'}.png`" alt="" /></a>
      </div>
      <div class="menu-icon cursor-pointer" @click="toggleMenu">
        <span class="icon"><i></i><i></i></span>
        <span class="text"><span class="word">Menu</span></span>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { onMounted } from 'vue';

const { lightMode, alwaysDark, darkOnScroll } = defineProps(['lightMode', 'darkOnScroll', 'alwaysDark']);

onMounted(() => {
  if (darkOnScroll) {
    let nav = document.querySelector('#navi');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        nav.className = "topnav dark change nav-scroll";
        nav.querySelector('img').src = "/dark/assets/imgs/logo-dark.png";
      } else {
        nav.className = "topnav";
        nav.querySelector('img').src = "/dark/assets/imgs/logo-light.png";
      }
    })
  }
});

function toggleMenu(event) {
  let menu = document.querySelector('.hamenu');
  let nav = document.querySelector('#navi');

  if (event.currentTarget.classList.contains('open')) {
    event.currentTarget.classList.remove('open')
    menu?.classList.remove('open');
    menu.style.left = `-100%`;
    if (lightMode && !alwaysDark) {
      nav.classList.remove('navlit');
      nav.querySelector('img').src = "/dark/assets/imgs/logo-light.png";
    }
  } else {
    event.currentTarget.classList.add('open')
    menu?.classList.add('open');
    menu.style.left = 0;
    if (lightMode && !alwaysDark) {
      nav.classList.add('navlit');
      nav.querySelector('img').src = "/dark/assets/imgs/logo-dark.png";
    }
  }
}
</script>