<template>
  <section class="block-img sub-bg">
    <div class="container section-padding position-re">
      <div class="half-img-left bg-img md-hide"
        :data-background="`/${lightMode ? 'light' : 'dark'}/assets/imgs/sass-img/a1.svg`"></div>
      <div class="row justify-content-around">
        <div class="col-lg-5 offset-lg-6">
          <div class="cont">
            <div class="vid-circle main-bg mb-40">
              <a href="https://youtu.be/AzwC6umvd1s" class="vid" @click="openVideo">
                <span class="icon">
                  <svg class="default" width="13" height="20" viewBox="0 0 13 20" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 20L13 10L0 0V20Z"></path>
                  </svg>
                </span>
              </a>
            </div>
            <div class="text">
              <h3>We grow brands through bold & strategic creative</h3>
            </div>
            <div class="accordion bord mt-40">

              <div class="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                <div class="title" @click="openAccordion">
                  <h6 class="fz-18">Website & Mobile App Design</h6>
                  <span class="ico"></span>
                </div>
                <div class="accordion-info">
                  <p class="fz-14">Taken possession of my entire soul, like these sweet mornings of spring which i enjoy
                    with my whole.</p>
                </div>
              </div>

              <div class="item mb-15 active wow fadeInUp" data-wow-delay=".3s">
                <div class="title" @click="openAccordion">
                  <h6 class="fz-18">Motion Graphics & Animation</h6>
                  <span class="ico"></span>
                </div>
                <div class="accordion-info active">
                  <p class="fz-14">Taken possession of my entire soul, like these sweet mornings of spring which i enjoy
                    with my whole.</p>
                </div>
              </div>

              <div class="item wow fadeInUp" data-wow-delay=".5s">
                <div class="title" @click="openAccordion">
                  <h6 class="fz-18">User Experience</h6>
                  <span class="ico"></span>
                </div>
                <div class="accordion-info">
                  <p class="fz-14">Taken possession of my entire soul, like these sweet mornings of spring which i enjoy
                    with my whole.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="shap1 opacity-4">
      <img :src="`/${lightMode ? 'light' : 'dark'}/assets/imgs/sass-img/shap1.png`" alt="" />
    </div>
    <div class="shap2 opacity-4">
      <img :src="`/${lightMode ? 'light' : 'dark'}/assets/imgs/sass-img/shap2.png`" alt="" />
    </div>
  </section>
  <ModalVideo channel="youtube" videoId="AzwC6umvd1s" :isOpen="isOpen" :onClose="closeVideo" />
</template>

<script setup>
import { onMounted } from 'vue';
//= Components
import ModalVideo from '@/components/Common/ModalVideo';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

const isOpen = useState('isOpen', () => false);

const { lightMode } = defineProps(['lightMode']);

function openAccordion(event) {
  document.querySelectorAll('.accordion-info').forEach(element => {
    element.classList.remove('active');
    element.style.maxHeight = 0;
    element.parentElement.classList.remove('active');
  })
  event.currentTarget.parentElement.classList.add('active');
  event.currentTarget.nextElementSibling.style.maxHeight = '300px';
  event.currentTarget.nextElementSibling.classList.add('active');
}

function openVideo(event) {
  event.preventDefault();
  isOpen.value = true;
}

function closeVideo() {
  isOpen.value = false;
}

onMounted(() => {
  loadBackgroudImages();
});
</script>