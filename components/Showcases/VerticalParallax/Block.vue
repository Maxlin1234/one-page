<template>
  <section class="block-sec section-padding pt-0">
    <div class="container">
      <div class="row lg-marg">
        <div class="col-lg-6 valign">
          <div class="md-mb50">
            <div class="item-flex d-flex align-items-center mb-50">
              <div>
                <div class="icon-img-60">
                  <img :src="`/${lightMode ? 'light' : 'dark'}/assets/imgs/serv-icons/0.png`" alt="" />
                </div>
              </div>
              <div class="cont ml-50">
                <h6>High Standerd</h6>
                <p class="fz-15">Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div class="item-flex d-flex align-items-center">
              <div>
                <div class="icon-img-60">
                  <img :src="`/${lightMode ? 'light' : 'dark'}/assets/imgs/serv-icons/1.png`" alt="" />
                </div>
              </div>
              <div class="cont ml-50">
                <h6>Ease of Communication</h6>
                <p class="fz-15">Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="cont">
            <h6 class="sub-title mb-15">Our Value</h6>
            <h3 class="mb-15">Watch the creative process behind our <span class="stroke fw-700 opacity-7">digital
                marketing</span>.</h3>
            <div class="skills mt-50">
              <div class="skills-box">
                <div class="skill-item mb-40">
                  <h5 class="fz-14 mb-15">UI / UX Design</h5>
                  <div class="skill-progress">
                    <div class="progres" data-value="90%"></div>
                  </div>
                </div>
                <div class="skill-item">
                  <h5 class="fz-14 mb-15">Apps Development</h5>
                  <div class="skill-progress">
                    <div class="progres" data-value="80%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script setup>
import { onMounted, onUnmounted } from 'vue';
//= Scripts
import isInView from '@/common/isInView';

const { lightMode } = defineProps(['lightMode']);

onMounted(() => {
  window.addEventListener('scroll', handleShowProgressValues);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleShowProgressValues);
});

function handleShowProgressValues() {
  isInView({
    selector: ".skill-progress .progres",
    isElements: true,
    callback: (element) => {
      element.style.width = element.getAttribute('data-value');
    }
  });
}
</script>