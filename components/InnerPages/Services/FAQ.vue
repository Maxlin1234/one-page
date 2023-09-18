<template>
  <section class="intro-corp section-padding pt-0">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="sec-head mb-40">
            <h6 class="sub-title">FAQ.</h6>
          </div>
        </div>
        <div class="col-lg-7">
          <div class="cont">
            <div class="text">
              <h2 class="d-slideup wow">
                <span class="sideup-text">
                  <span class="up-text">Watch the creative process</span>
                </span>
                <span class="sideup-text">
                  <span class="up-text"><span>behind our digital marketing</span>.</span>
                </span>
              </h2>
            </div>
            <div class="accordion bord mt-40">
              <div class="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                <div class="title" @click="openAccordion">
                  <h6 class="fz-18">The Power of Influencer Marketing</h6>
                  <span class="ico"></span>
                </div>
                <div class="accordion-info">
                  <p class="fz-14">Taken possession of my entire soul, like these sweet mornings of spring which i enjoy
                    with my whole.</p>
                </div>
              </div>
              <div class="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                <div class="title" @click="openAccordion">
                  <h6 class="fz-18">Unique and Influential Design</h6>
                  <span class="ico"></span>
                </div>
                <div class="accordion-info">
                  <p class="fz-14">Taken possession of my entire soul, like these sweet mornings of spring which i enjoy
                    with my whole.</p>
                </div>
              </div>
              <div class="item wow fadeInUp" data-wow-delay=".5s">
                <div class="title" @click="openAccordion">
                  <h6 class="fz-18">We Build and Activate Brands</h6>
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
  </section>
</template>
  
<script setup>
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
</script>