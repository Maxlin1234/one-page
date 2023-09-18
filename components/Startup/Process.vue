<template>
  <div class="intro-feat section-padding ontop">
    <div class="container section-padding pb-0 bord-thin-top bord-dark">
      <div class="row justify-content-around">
        <div class="col-lg-6">
          <div class="cont md-mb50">
            <h6 class="mb-15"><span class="fz-14">03 . </span>Our Process</h6>
            <h3 class="mb-30">We help you to go online and increase your <span class="sub-font">Conversion rate.</span>
            </h3>
            <div class="row justify-content-center">
              <div class="col-md-10">
                <div class="text">
                  <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud. Wiusmod tempor incididunt.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5 offset-lg-1 valign">
          <div class="bg-img full-width d-flex align-items-center justify-content-center"
            data-background="/dark/assets/imgs/background/13.jpg">
            <div>
              <div class="play-button">
                <a href="https://youtu.be/AzwC6umvd1s" class="btn vid" @click="openVideo">
                  <div class="butn-ply">
                    <svg width="80px" height="80px" viewBox="0 0 80 80" preserveAspectRatio="none">
                      <circle class="circle" cx="40" cy="40" r="38" stroke="#c9f31d" strokeWidth="2" fill="none"></circle>
                    </svg>
                    <i class="fas fa-play"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="process-crev mt-100">
        <div class="row">
          <div class="item col-lg-3 col-md-6" v-for="item in data" :key="item.id">
            <h6 class="mb-10">{{ item.number }} .</h6>
            <h5 class="fw-600">{{ item.title }}</h5>
            <p>{{ item.text }}</p>
            <NuxtLink to="/dark/page-services" class="arrow mt-20">
              <span class="fz-12 text-u">Read More</span>
              <span class="circle">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z"
                    fill="currentColor"></path>
                </svg>
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <CommonModalVideo channel="youtube" videoId="AzwC6umvd1s" :isOpen="isOpen" :onClose="closeVideo" />
  </div>
</template>
  
<script setup>
//= Data
import data from '@/data/Startup/process.json';

const isOpen = useState('isOpen', () => false);

function openVideo(event) {
  event.preventDefault();
  isOpen.value = true;
}

function closeVideo() {
  isOpen.value = false;
}
</script>