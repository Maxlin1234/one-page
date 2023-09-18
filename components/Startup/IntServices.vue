<template>
  <div>
    <div class="container ontop">
      <div class="row">
        <div class="col-lg-4">
          <h6><span class="fz-14">02 . </span> Services</h6>
        </div>
        <div class="col-lg-6 offset-lg-1">
          <div class="text">
            <h3>We create <span class="sub-font">experiences</span> and turn ideas into reality.</h3>
          </div>
          <div class="row mt-40">
            <div class="col-md-9 offset-md-2">
              <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud. Wiusmod tempor incididunt.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="metro mt-80 ontop">
      <div class="items">
        <div class="item" v-for="(item, index) in data" :key="item.id">
          <span :class="`icon icon-img-80 ${index !== data.length - 1 ? 'mb-40' : ''}`">
            <img :src="`/${lightMode ? 'light' : 'dark'}/${item.image}`" alt="" />
          </span>
          <h5 class="mb-20 fw-700">
            <NuxtLink to="/dark/page-services">{{ item.title }}</NuxtLink>
          </h5>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { onMounted, onUnmounted } from 'vue';
//= Data
import data from '@/data/Startup/services.json';

const { lightMode } = defineProps(['lightMode']);

onMounted(() => {
  if (window.innerWidth > 991) {
    let gallery = document.querySelector('.metro .items')
    let wrapper = document.querySelector('.metro')
    let moveVal = 0;
    let dragging = false, mouseLocation, galleryLocation;

    const easeOutQuad = t => {
      return t * (2 - t)
    }

    const moveGallery = () => {
      moveVal = easeOutQuad(window.scrollY * .003);
      gallery.style.transform = `translateX(${moveVal}%)`;

      requestAnimationFrame(moveGallery);
    }

    requestAnimationFrame(moveGallery);

    const dragStart = e => {
      dragging = true;
      mouseLocation = e.pageX;
      galleryLocation = wrapper.scrollLeft;
    }

    const dragActive = e => {
      if (!dragging) return;

      let offset = e.pageX - mouseLocation;
      wrapper.scrollLeft = galleryLocation - offset;
    }

    const dragStop = e => {
      dragging = false;
      mouseLocation = e.pageX;
      galleryLocation = wrapper.scrollLeft;
    }

    gallery.addEventListener('mousedown', dragStart);
    gallery.addEventListener('mousemove', dragActive);
    gallery.addEventListener('mouseup', dragStop);
  }

  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

function handleResize() {
  if (window.innerWidth < 991 && document.querySelector('.metro .items').style.transform) {
    location.reload();
  } else if (window.innerWidth > 991 && !document.querySelector('.metro .items').style.transform) {
    let gallery = document.querySelector('.metro .items')
    let wrapper = document.querySelector('.metro')
    let moveVal = 0;
    let dragging = false, mouseLocation, galleryLocation;

    const easeOutQuad = t => {
      return t * (2 - t)
    }

    const moveGallery = () => {
      moveVal = easeOutQuad(window.scrollY * .003);
      gallery.style.transform = `translateX(${moveVal}%)`;

      requestAnimationFrame(moveGallery);
    }

    requestAnimationFrame(moveGallery);

    const dragStart = e => {
      dragging = true;
      mouseLocation = e.pageX;
      galleryLocation = wrapper.scrollLeft;
    }

    const dragActive = e => {
      if (!dragging) return;

      let offset = e.pageX - mouseLocation;
      wrapper.scrollLeft = galleryLocation - offset;
    }

    const dragStop = e => {
      dragging = false;
      mouseLocation = e.pageX;
      galleryLocation = wrapper.scrollLeft;
    }

    gallery.addEventListener('mousedown', dragStart);
    gallery.addEventListener('mousemove', dragActive);
    gallery.addEventListener('mouseup', dragStop);

  }
}
</script>