<template>
  <div class="row lg-marg">
    <div class="col-lg-7 valign">
      <div class="clients md-mb50">
        <div class="mb-20">
          <h6 class="sub-title mb-15">Check Out All</h6>
          <h3>Successful Our Reputation</h3>
        </div>
        <div class="row">
          <div class="col-md-4 col-6">
            <div class="item mt-30 wow fadeIn" data-wow-delay=".6s">
              <div class="img">
                <a :href="data.author_link">
                  <img :src="`${lightMode ? '/light' : '/dark'}/assets/imgs/brands/01.png`" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-6">
            <div class="item mt-30 wow fadeIn" data-wow-delay=".6s">
              <div class="img">
                <a :href="data.author_link">
                  <img :src="`${lightMode ? '/light' : '/dark'}/assets/imgs/brands/02.png`" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-6">
            <div class="item mt-30 wow fadeIn" data-wow-delay=".8s">
              <div class="img">
                <a :href="data.author_link">
                  <img :src="`${lightMode ? '/light' : '/dark'}/assets/imgs/brands/03.png`" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-6">
            <div class="item mt-30 wow fadeIn" data-wow-delay=".3s">
              <div class="img">
                <a :href="data.author_link">
                  <img :src="`${lightMode ? '/light' : '/dark'}/assets/imgs/brands/04.png`" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-6">
            <div class="item mt-30 wow fadeIn" data-wow-delay=".4s">
              <div class="img">
                <a :href="data.author_link">
                  <img :src="`${lightMode ? '/light' : '/dark'}/assets/imgs/brands/05.png`" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-6">
            <div class="item mt-30 wow fadeIn" data-wow-delay=".7s">
              <div class="img">
                <a :href="data.author_link">
                  <img :src="`${lightMode ? '/light' : '/dark'}/assets/imgs/brands/06.png`" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-5">
      <div class="img-vid">
        <img src="/dark/assets/imgs/about/1.jpg" alt="" />
        <div class="rota-vid">
          <a href="https://youtu.be/AzwC6umvd1s" class="vid" @click="openVideo">
            <div class="circle-button in-bord">
              <div class="rotate-circle fz-30 text-u">
                <svg class="textcircle" viewBox="0 0 500 500">
                  <defs>
                    <path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z">
                    </path>
                  </defs>
                  <text>
                    <textPath xlinkHref="#textcircle" textLength="900">Explore More - Explore More -</textPath>
                  </text>
                </svg>
              </div>
              <div class="arrow text-dark">
                <i class="fas fa-play"></i>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <CommonModalVideo channel="youtube" videoId="AzwC6umvd1s" :isOpen="isOpen" :onClose="closeVideo" />
</template>

<script setup>
//= Data
import data from '@/data/app-data.json';

const { lightMode } = defineProps(['lightMode']);
const isOpen = useState('isOpen', () => false);

function openVideo(event) {
  event.preventDefault();
  isOpen.value = true;
}

function closeVideo() {
  isOpen.value = false;
}
</script>