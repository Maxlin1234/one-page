<template>
  <nav class="navbar nav-crev navbar-expand-lg">
    <div class="container">
      <a class="logo icon-img-100" href="#">
        <img src="/dark/assets/imgs/logo-light.png" alt="logo" />
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" @click="toggleNavbar">
        <span class="icon-bar"><i class="fas fa-bars"></i></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item dropdown" @mousemove="handleDropdownMouseMove" @mouseleave="handleDropdownMouseLeave">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
              aria-expanded="false"><span class="rolling-text">Home</span></a>
            <div class="dropdown-menu">
              <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/home-corporate`">Home Corporate
              </NuxtLink>
              <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/home-onepage`">Home One page
              </NuxtLink>
              <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/home-digital-agency`">Digital Agency
              </NuxtLink>
              <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/home-freelancer`">Freelancer
              </NuxtLink>
              <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/home-marketing-agency`">Marketing
                Agency</NuxtLink>
              <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/home-creative-agency`">Creative
                Agency</NuxtLink>
              <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/home-startup`">Startup Bussines
              </NuxtLink>
              <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/home-architecture`">Architecture
              </NuxtLink>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" :to="`/${lightMode ? 'light' : 'dark'}/page-about`"><span
                class="rolling-text">About</span></a>
          </li>
          <li class="nav-item dropdown" @mousemove="handleDropdownMouseMove" @mouseleave="handleDropdownMouseLeave">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
              aria-expanded="false"><span class="rolling-text">Pages</span></a>
            <div class="dropdown-menu">
              <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/page-services`">Services</NuxtLink>
              <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/page-team`">Our Team</NuxtLink>
              <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/page-contact`">Contact Us</NuxtLink>
            </div>
          </li>
          <li class="nav-item dropdown" @mousemove="handleDropdownMouseMove" @mouseleave="handleDropdownMouseLeave">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
              aria-expanded="false"><span class="rolling-text">Portfolio</span></a>
            <div class="dropdown-menu mega-menu">
              <div class="container">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="clumn">
                      <div class="title">
                        <h6 class="sub-title ls1">Showcases</h6>
                      </div>
                      <div class="links">
                        <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/showcase-parallax-slider`">
                          Parallax Slider</NuxtLink>
                        <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/showcase-frame-slider`">
                          Frame Slider</NuxtLink>
                        <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/showcase-circle-slider`">
                          Circle Slider</NuxtLink>
                        <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/showcase-carousel`">
                          Showcase Carousel</NuxtLink>
                        <NuxtLink class="dropdown-item"
                          :to="`/${lightMode ? 'light' : 'dark'}/showcase-interactive-center-horizontal`">Interactive
                          NuxtLinks1</NuxtLink>
                        <NuxtLink class="dropdown-item"
                          :to="`/${lightMode ? 'light' : 'dark'}/showcase-interactive-center`">Interactive NuxtLinks2
                        </NuxtLink>
                        <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/showcase-parallax`">
                          Vertical Parallax</NuxtLink>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="clumn">
                      <div class="title">
                        <h6 class="sub-title ls1">Portfolio Works</h6>
                      </div>
                      <div class="links">
                        <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/portfolio-classic-grid`">
                          Classic Grid</NuxtLink>
                        <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/portfolio-grid`">Modern
                          Grid</NuxtLink>
                        <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/portfolio-metro`">Portfolio
                          Metro</NuxtLink>
                        <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/project-details1`">Project
                          Details 1</NuxtLink>
                        <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/project-details2`">Project
                          Details 2</NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown" @mousemove="handleDropdownMouseMove" @mouseleave="handleDropdownMouseLeave">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
              aria-expanded="false"><span class="rolling-text">Blogs</span></a>
            <div class="dropdown-menu">
              <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/blog-classic`">Blog Standerd
              </NuxtLink>
              <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/blog-list`">Blog List</NuxtLink>
              <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/blog-half-img`">Image Out Frame
              </NuxtLink>
              <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/blog-details`">Blog Details
              </NuxtLink>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" :to="`/${lightMode ? 'light' : 'dark'}/page-contact`"><span
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

const { lightMode, mainBg, subBg, noStatic } = defineProps(['lightMode', 'mainBg', 'subBg', 'noStatic']);

function handleScroll() {
  const bodyScroll = window.scrollY;
  const navbar = document.querySelector(".navbar");

  if (bodyScroll > 300) navbar.classList.add("nav-scroll");
  else navbar.classList.remove("nav-scroll");
}

function handleDropdownMouseMove(event) {
  event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
}

function handleDropdownMouseLeave(event) {
  event.currentTarget.querySelector('.dropdown-menu').classList.remove('show');
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

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>