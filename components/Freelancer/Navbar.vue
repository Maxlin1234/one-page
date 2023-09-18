<template>
  <nav class="navbar navbar-expand-lg static main-bg">
    <div class="container">
      <a class="logo icon-img-100" href="#">
        <img src="/dark/assets/imgs/logo-dark.png" alt="logo" v-if="lightMode" />
        <img src="/dark/assets/imgs/logo-light.png" alt="logo" v-else />
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" @click="toggleNavbar">
        <span class="icon-bar"><i class="fas fa-bars"></i></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#0" data-scroll-nav="0" @click="scrollToSection(0)"><span
                class="rolling-text">Home</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#0" data-scroll-nav="1" @click="scrollToSection(1)"><span
                class="rolling-text">Services</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#0" data-scroll-nav="2" @click="scrollToSection(2)"><span
                class="rolling-text">About</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#0" data-scroll-nav="3" @click="scrollToSection(3)"><span
                class="rolling-text">Portfolio</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#0" data-scroll-nav="4" @click="scrollToSection(4)"><span
                class="rolling-text">Resume</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#0" data-scroll-nav="6" @click="scrollToSection(6)"><span
                class="rolling-text">Blog</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#0" data-scroll-nav="7" @click="scrollToSection(7)"><span
                class="rolling-text">Contact</span></a>
          </li>
        </ul>
      </div>

      <div class="search-form">
        <div class="form-group">
          <input type="text" name="search" placeholder="Search" />
          <button><span class="pe-7s-search"></span></button>
        </div>
        <div class="search-icon" @click="toggleSearch">
          <span class="pe-7s-search open-search"></span>
          <span class="pe-7s-close close-search"></span>
        </div>
      </div>
    </div>
  </nav>
</template>
  
<script setup>
import { onMounted, onUnmounted } from 'vue';

const { lightMode } = defineProps(['lightMode']);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

function handleScroll() {
  const bodyScroll = window.scrollY;
  const navbar = document.querySelector(".navbar");

  if (bodyScroll > 300) navbar.classList.add("nav-scroll");
  else navbar.classList.remove("nav-scroll");
}

function toggleNavbar() {
  document.querySelector(".navbar .navbar-collapse").classList.toggle("show");
}

function toggleSearch() {
  let form = document.querySelector(".navbar .search-form");
  let closeBtn = document.querySelector(".search-form .close-search");

  form.classList.toggle("open");
  if (form.classList.contains('open')) closeBtn.style.display = 'block';
  else closeBtn.style.display = 'none';
}

function scrollToSection(id) {
  setTimeout(() => document.querySelector(`[data-scroll-index="${id}"]`)?.scrollIntoView({ smooth: true }), 700);
}
</script>