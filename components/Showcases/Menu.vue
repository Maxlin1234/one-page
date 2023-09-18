<template>
  <div class="hamenu">
    <div class="container">
      <div class="row">
        <div class="col-lg-2">
          <div class="menu-text">
            <div class="text">
              <h2>Menu</h2>
            </div>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="menu-links">
            <ul class="main-menu rest">
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" @click="toggleSubMenu">
                <div class="o-hidden">
                  <div class="link cursor-pointer dmenu"><span class="fill-text" data-text="Home">Home</span> <i></i>
                  </div>
                </div>
                <div class="sub-menu">
                  <ul>
                    <li>
                      <NuxtLink :to="`/${lightMode ? 'light' : 'dark'}/home-main`" class="sub-link">Home Main
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="`/${lightMode ? 'light' : 'dark'}/home-corporate`" class="sub-link">Home Corporate
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="`/${lightMode ? 'light' : 'dark'}/home-onepage`" class="sub-link">Home One page
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="`/${lightMode ? 'light' : 'dark'}/home-digital-agency`" class="sub-link">Digital
                        Agency</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="`/${lightMode ? 'light' : 'dark'}/home-freelancer`" class="sub-link">Freelancer
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="`/${lightMode ? 'light' : 'dark'}/home-marketing-agency`" class="sub-link">Marketing
                        Agency</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="`/${lightMode ? 'light' : 'dark'}/home-creative-agency`" class="sub-link">Creative
                        Agency</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="`/${lightMode ? 'light' : 'dark'}/home-startup`" class="sub-link">Startup Bussines
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="`/${lightMode ? 'light' : 'dark'}/home-architecture`" class="sub-link">Architecture
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <NuxtLink :to="`/${lightMode ? 'light' : 'dark'}/page-about`" class="link"><span class="fill-text"
                      data-text="About Us">About Us</span></NuxtLink>
                </div>
              </li>
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" @click="toggleSubMenu">
                <div class="o-hidden">
                  <div class="link cursor-pointer dmenu"><span class="fill-text" data-text="Pages">Pages</span> <i></i>
                  </div>
                </div>
                <div class="sub-menu">
                  <ul>
                    <li>
                      <NuxtLink :to="`/${lightMode ? 'light' : 'dark'}/page-services`" class="sub-link">Services
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="`/${lightMode ? 'light' : 'dark'}/page-team`" class="sub-link">Our Team</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="`/${lightMode ? 'light' : 'dark'}/page-contact`" class="sub-link">Contact Us
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" @click="toggleSubMenu">
                <div class="o-hidden">
                  <div class="link cursor-pointer dmenu"><span class="fill-text" data-text="Showcases">Showcases</span>
                    <i></i>
                  </div>
                </div>
                <div class="sub-menu">
                  <ul>
                    <li>
                      <NuxtLink :to="`/${lightMode ? 'light' : 'dark'}/showcase-parallax-slider`" class="sub-link">
                        Parallax Slider</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="`/${lightMode ? 'light' : 'dark'}/showcase-frame-slider`" class="sub-link">Frame
                        Slider</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="`/${lightMode ? 'light' : 'dark'}/showcase-circle-slider`" class="sub-link">Circle
                        Slider</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="`/${lightMode ? 'light' : 'dark'}/showcase-carousel`" class="sub-link">Showcase
                        Carousel</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="`/${lightMode ? 'light' : 'dark'}/showcase-interactive-center-horizontal`"
                        class="sub-link">Interactive Links1</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="`/${lightMode ? 'light' : 'dark'}/showcase-interactive-center`" class="sub-link">
                        Interactive Links2</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="`/${lightMode ? 'light' : 'dark'}/showcase-parallax`" class="sub-link">Vertical
                        Parallax</NuxtLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" @click="toggleSubMenu">
                <div class="o-hidden">
                  <div class="link cursor-pointer dmenu"><span class="fill-text" data-text="Portfolio">Portfolio</span>
                    <i></i>
                  </div>
                </div>
                <div class="sub-menu">
                  <ul>
                    <li>
                      <NuxtLink :to="`/${lightMode ? 'light' : 'dark'}/portfolio-grid-2`" class="sub-link">Classic
                        Grid</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="`/${lightMode ? 'light' : 'dark'}/portfolio-modern`" class="sub-link">Modern Grid
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="`/${lightMode ? 'light' : 'dark'}/portfolio-metro`" class="sub-link">Portfolio Metro
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="`/${lightMode ? 'light' : 'dark'}/project-details1`" class="sub-link">Project Details
                        1</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="`/${lightMode ? 'light' : 'dark'}/project-details2`" class="sub-link">Project Details
                        2</NuxtLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" @click="toggleSubMenu">
                <div class="o-hidden">
                  <div class="link cursor-pointer dmenu"><span class="fill-text" data-text="Blogs">Blogs</span> <i></i>
                  </div>
                </div>
                <div class="sub-menu">
                  <ul>
                    <li>
                      <NuxtLink :to="`/${lightMode ? 'light' : 'dark'}/blog-classic`" class="sub-link">Blog Standerd
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="`/${lightMode ? 'light' : 'dark'}/blog-list`" class="sub-link">Blog List</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="`/${lightMode ? 'light' : 'dark'}/blog-half-img`" class="sub-link">Image Out Frame
                      </NuxtLink>
                    </li>
                    <li>
                      <NuxtLink :to="`/${lightMode ? 'light' : 'dark'}/blog-details`" class="sub-link">Blog Details
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
                <div class="o-hidden">
                  <NuxtLink :to="`/${lightMode ? 'light' : 'dark'}/page-contact`" class="link"><span class="fill-text"
                      data-text="Contact">Contact</span></NuxtLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 d-flex align-items-end">
          <div class="cont-info full-width">
            <div class="item">
              <h5 class="mb-15">Get In Touch</h5>
              <p>541 Melville Geek, Palo Alto, CA 94301</p>
              <p class="underline main-color mt-5 mb-5"><a href="#0">+1 840 841 25 69</a></p>
              <p><a href="#0">GeekFolio_website@gmail.com</a></p>
            </div>
            <div class="search-form">
              <div class="form-group">
                <input type="text" name="search" placeholder="Search" />
                <button><span class="pe-7s-search"></span></button>
              </div>
            </div>
            <ul class="rest social-text d-flex mt-50 fz-13">
              <li class="mr-20">
                <a href="#0" class="hover-this"><span class="hover-anim">Facebook</span></a>
              </li>
              <li class="mr-20">
                <a href="#0" class="hover-this"><span class="hover-anim">Twitter</span></a>
              </li>
              <li class="mr-20">
                <a href="#0" class="hover-this"><span class="hover-anim">LinkedIn</span></a>
              </li>
              <li>
                <a href="#0" class="hover-this"><span class="hover-anim">Instagram</span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
const { lightMode } = defineProps(['lightMode']);

function handleMouseEnter(event) {
  document.querySelectorAll('ul.main-menu li').forEach(item => {
    item.classList.add('hoverd');
  });
  event.currentTarget.classList.remove('hoverd');
}

function handleMouseLeave() {
  document.querySelectorAll('ul.main-menu li').forEach(item => item.classList.remove('hoverd'));
}

function toggleSubMenu(event) {
  const subMenu = event.currentTarget.querySelector('.sub-menu');
  if (subMenu) {
    if (subMenu.classList.contains('sub-open')) {
      document.querySelectorAll('.sub-menu').forEach(item => {
        item.classList.remove('sub-open');
        item.style.maxHeight = '0';
        item.previousElementSibling.children[0].classList.remove('dopen');
      });
      subMenu.classList.remove('sub-open');
      subMenu.style.maxHeight = '0';
      subMenu.previousElementSibling.children[0].classList.remove('dopen');
    } else if (!subMenu.classList.contains('sub-open')) {
      document.querySelectorAll('.sub-menu').forEach(item => {
        item.classList.remove('sub-open');
        item.style.maxHeight = '0';
        item.previousElementSibling.children[0].classList.remove('dopen');
      });
      subMenu.classList.add('sub-open');
      subMenu.style.maxHeight = '450px';
      subMenu.previousElementSibling.children[0].classList.add('dopen');
    }
  }
}
</script>