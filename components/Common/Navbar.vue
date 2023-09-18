<template>
  <nav
    :class="`navbar navbar-expand-lg ${curve ? 'nav-crev' : ''} ${noStatic ? '' : 'static'} ${mainBg ? 'main-bg' : ''} ${subBg ? 'sub-bg' : ''}`">
    <div class="container">
      <a class="logo icon-img-100" href="#">
        <img src="/dark/assets/imgs/LOGO.png" alt="logo" v-if="lightMode" />
        <img src="/dark/assets/imgs/LOGOwhite.png" style="width:160px;height:24px;" alt="logo" v-else />
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="icon-bar"><i class="fas fa-bars"></i></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent" @click="toggleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item dropdown" @mousemove="handleDropdownMouseMove" @mouseleave="handleDropdownMouseLeave">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
              aria-expanded="false">
              <span class="rolling-text">首頁</span>
            </a>
            <div class="dropdown-menu mega-menu">
              <div class="container">
                <div class="row">
                  <div class="col-lg-3">
                    <div class="clumn">
                      <div class="title">
                        <h6 class="sub-title ls1">Home Dark</h6>
                      </div>
                      <div class="links">
                        <!-- <NuxtLink class="dropdown-item" to="/dark/home-main">Main Home</NuxtLink> -->
                        <NuxtLink class="dropdown-item" to="/dark/home-corporate">Corporate Business</NuxtLink>
                        <NuxtLink class="dropdown-item" to="/dark/home-onepage">Home One page</NuxtLink>
                        <!-- <NuxtLink class="dropdown-item" to="/dark/home-digital-agency">Digital Agency</NuxtLink> -->
                        <!-- <NuxtLink class="dropdown-item" to="/dark/home-freelancer">Freelancer</NuxtLink> -->
                        <!-- <NuxtLink class="dropdown-item" to="/dark/home-marketing-agency">Marketing Agency</NuxtLink> -->
                        <!-- <NuxtLink class="dropdown-item" to="/dark/home-creative-agency">Creative Agency</NuxtLink> -->
                        <!-- <NuxtLink class="dropdown-item" to="/dark/home-startup">Startup Bussines</NuxtLink> -->
                        <NuxtLink class="dropdown-item" to="/dark/home-architecture">Architecture</NuxtLink>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="col-lg-3">
                    <div class="clumn">
                      <div class="title">
                        <h6 class="sub-title ls1">Home Light</h6>
                      </div>
                      <div class="links">
                        <NuxtLink class="dropdown-item" to="/light/home-main">Main Home</NuxtLink>
                        <NuxtLink class="dropdown-item" to="/light/home-corporate">Corporate Business</NuxtLink>
                        <NuxtLink class="dropdown-item" to="/light/home-onepage">Home One page</NuxtLink>
                        <NuxtLink class="dropdown-item" to="/light/home-digital-agency">Digital Agency</NuxtLink>
                        <NuxtLink class="dropdown-item" to="/light/home-freelancer">Freelancer</NuxtLink>
                        <NuxtLink class="dropdown-item" to="/light/home-marketing-agency">Marketing Agency</NuxtLink>
                        <NuxtLink class="dropdown-item" to="/light/home-creative-agency">Creative Agency</NuxtLink>
                        <NuxtLink class="dropdown-item" to="/light/home-startup">Startup Bussines</NuxtLink>
                        <NuxtLink class="dropdown-item" to="/light/home-architecture">Architecture</NuxtLink>
                      </div>
                    </div>
                  </div> -->
                  <div class="col-lg-3">
                    <div class="clumn">
                      <div class="title">
                        <h6 class="sub-title ls1">Showcases</h6>
                      </div>
                      <div class="links">
                        <NuxtLink class="dropdown-item" to="/dark/showcase-parallax-slider">Parallax Slider</NuxtLink>
                        <NuxtLink class="dropdown-item" to="/dark/showcase-frame-slider">Frame Slider</NuxtLink>
                        <NuxtLink class="dropdown-item" to="/dark/showcase-circle-slider">Circle Slider</NuxtLink>
                        <NuxtLink class="dropdown-item" to="/dark/showcase-carousel">Showcase Carousel</NuxtLink>
                        <NuxtLink class="dropdown-item" to="/dark/showcase-interactive-center-horizontal">Interactive
                          Links1</NuxtLink>
                        <NuxtLink class="dropdown-item" to="/dark/showcase-interactive-center">Interactive Links2
                        </NuxtLink>
                        <NuxtLink class="dropdown-item" to="/dark/showcase-parallax">Vertical Parallax</NuxtLink>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3">
                    <div class="clumn">
                      <div class="title">
                        <h6 class="sub-title ls1">Showcases Light</h6>
                      </div>
                      <div class="links">
                        <NuxtLink class="dropdown-item" to="/light/showcase-parallax-slider">Parallax Slider</NuxtLink>
                        <NuxtLink class="dropdown-item" to="/light/showcase-carousel">Showcase Carousel</NuxtLink>
                        <NuxtLink class="dropdown-item" to="/light/showcase-frame-slider">Frame Slider</NuxtLink>
                        <NuxtLink class="dropdown-item" to="/light/showcase-circle-slider">Circle Slider</NuxtLink>
                        <NuxtLink class="dropdown-item" to="/light/showcase-interactive-center-horizontal">Interactive
                          Links1</NuxtLink>
                        <NuxtLink class="dropdown-item" to="/light/showcase-interactive-center">Interactive Links2
                        </NuxtLink>
                        <NuxtLink class="dropdown-item" to="/light/showcase-parallax">Vertical Parallax</NuxtLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown" @mousemove="handleDropdownMouseMove" @mouseleave="handleDropdownMouseLeave">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
              aria-expanded="false"><span class="rolling-text">關於我們</span></a>
            <div class="dropdown-menu">
              <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/page-about`">About</NuxtLink>
              <!-- <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/page-services`">Services</NuxtLink> -->
              <!-- <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/page-team`">Our Team</NuxtLink> -->
              <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/page-contact`">Contact Us</NuxtLink>
            </div>
          </li>

          <li class="nav-item">
            <NuxtLink class="nav-link" :to="`/${lightMode ? 'light' : 'dark'}/portfolio-grid-2`"><span
                class="rolling-text">作品介紹</span></NuxtLink>
          </li>

<!-- 
          <li class="nav-item dropdown" @mousemove="handleDropdownMouseMove" @mouseleave="handleDropdownMouseLeave">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
              aria-expanded="false"> -->
              <!-- <span class="rolling-text" >作品介紹</span>
            </a>
            <ul class="dropdown-menu">
              <li class="dropdown-item" @mousemove="handleDropdownSideMouseMove"
                @mouseleave="handleDropdownSideMouseLeave">
                <a  href="#0">作品介紹 <i class="fas fa-angle-right icon-arrow"></i></a>
                <ul class="dropdown-side"> -->
                  <!-- <li>
                    <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/portfolio-grid-2`">Grid 2
                      Columns</NuxtLink>
                  </li> -->
                 <!-- <li>
                    <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/portfolio-grid-3`">Grid 3
                      Columns</NuxtLink>
                  </li>  -->
                  <!-- <li>
                    <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/portfolio-grid-4`">Grid 4
                      Columns</NuxtLink>
                  </li> -->
                <!-- </ul>
              </li> -->
              <!-- <li class="dropdown-item" @mousemove="handleDropdownSideMouseMove"
                @mouseleave="handleDropdownSideMouseLeave">
                <a href="#0">Masonry <i class="fas fa-angle-right icon-arrow"></i></a>
                <ul class="dropdown-side">
                  <li>
                    <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/portfolio-masonry-2`">Masonry 2
                      Columns</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/portfolio-masonry-3`">Masonry 3
                      Columns</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/portfolio-masonry-4`">Masonry 4
                      Columns</NuxtLink>
                  </li>
                </ul>
              </li> -->
              <!-- <li>
                <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/portfolio-metro`">Portfolio Metro
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/portfolio-modern`">Modern Grid
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/project-details1`">Project Details
                  1</NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/project-details2`">Project Details
                  2</NuxtLink>
              </li> -->
            <!-- </ul>
          </li> -->
          <li class="nav-item dropdown" @mousemove="handleDropdownMouseMove" @mouseleave="handleDropdownMouseLeave">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
              aria-expanded="false">
              <span class="rolling-text">最新消息</span>
            </a>
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
          <!-- <li class="nav-item dropdown" @mousemove="handleDropdownMouseMove" @mouseleave="handleDropdownMouseLeave">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true"
              aria-expanded="false">
              <span class="rolling-text">近期活動</span>
            </a> -->
            <!-- <div class="dropdown-menu"> -->
              <!-- <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/shop-list`">Shop List</NuxtLink> -->
              <!-- <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/shop-product`">Single Product -->
              <!-- </NuxtLink> -->
              <!-- <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/shop-cart`">Cart</NuxtLink> -->
              <!-- <NuxtLink class="dropdown-item" :to="`/${lightMode ? 'light' : 'dark'}/shop-checkout`">Checkout</NuxtLink> -->
            <!-- </div> -->
          <!-- </li> -->
          <li class="nav-item">
            <NuxtLink class="nav-link" :to="`/${lightMode ? 'light' : 'dark'}/page-contact`"><span
                class="rolling-text">聯絡我們</span></NuxtLink>
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

const { lightMode, mainBg, subBg, noStatic, curve } = defineProps(['lightMode', 'mainBg', 'subBg', 'noStatic', 'curve']);

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

function handleDropdownSideMouseMove(event) {
  event.currentTarget.querySelector('.dropdown-side').classList.add('show');
}

function handleDropdownSideMouseLeave(event) {
  event.currentTarget.querySelector('.dropdown-side').classList.remove('show');
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
})
</script>