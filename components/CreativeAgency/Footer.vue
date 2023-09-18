<template>
  <footer>
    <div class="footer-container">
      <div class="container pb-80 pt-80 ontop">
        <div class="row">
          <div class="col-lg-3">
            <div class="colum md-mb50">
              <div class="tit mb-20">
                <h6>Address</h6>
              </div>
              <div class="text">
                <p>Germany — 785 15h Street, Office 478 Berlin, De 81566</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 offset-lg-1">
            <div class="colum md-mb50">
              <div class="tit mb-20">
                <h6>Say Hello</h6>
              </div>
              <div class="text">
                <p class="mb-10">
                  <a href="#0">hello@design.com</a>
                </p>
                <h5>
                  <a href="#">+1 840 841 25 69</a>
                </h5>
              </div>
            </div>
          </div>
          <div class="col-lg-2 md-mb50">
            <div class="tit mb-20">
              <h6>Social</h6>
            </div>
            <ul class="rest social-text">
              <li>
                <a href="#0">Facebook</a>
              </li>
              <li>
                <a href="#0">Twitter</a>
              </li>
              <li>
                <a href="#0">LinkedIn</a>
              </li>
              <li>
                <a href="#0">Instagram</a>
              </li>
            </ul>
          </div>
          <div class="col-lg-3">
            <div class="tit mb-20">
              <h6>Newsletter</h6>
            </div>
            <div class="subscribe">
              <form action="contact.php">
                <div class="form-group rest">
                  <input type="email" placeholder="Type Your Email" />
                  <button type="submit">
                    <i class="fas fa-arrow-right"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="sub-footer pt-40 pb-40 bord-thin-top ontop">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="logo">
                <a href="#0">
                  <img :src="`/dark/assets/imgs/logo-${lightMode ? 'dark' : 'light'}.png`" alt="" />
                </a>
              </div>
            </div>
            <div class="col-lg-8">
              <div class="copyright d-flex">
                <div class="ml-auto">
                  <p class="fz-13">© 2023 Geekfolio is Proudly Powered by <span class="underline"><a
                        :href="data.author_link" target="_blank">{{ data.author }}</a></span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
  
<script setup>
import { onMounted } from 'vue';
//= Data
import data from '@/data/app-data.json';

const { lightMode } = defineProps(['lightMode']);

onMounted(() => {
  if (window.innerWidth > 991) {
    gsap.set('.footer-container', { yPercent: -50 })
    const uncover = gsap.timeline({ paused: true })
    uncover.to('.footer-container', { yPercent: 0, ease: 'none' });
    ScrollTrigger.create({
      trigger: 'main',
      start: 'bottom bottom',
      end: '+=50%',
      animation: uncover,
      scrub: true,
    });
  }
});
</script>