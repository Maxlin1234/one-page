<template>
  <section class="intro-corp section-padding pt-0">
    <div class="container">
      <div class="row justify-content-around">
        <!-- ---------------------------------------------------------------- -->
        <!-- <div class="col-lg-5 valign md-mb50">
          <div class="imgs mb-80">
            <div class="img1 wow fadeInUp">
              <img src="/dark/assets/imgs/about/sq1.jpg" alt="" class="radius-10" />
            </div>
            <div class="img2 wow fadeInLeft">
              <img src="/dark/assets/imgs/about/sq2.jpg" alt="" class="radius-10" />
            </div>
          </div>
        </div> -->
        <!-- <div class="col-lg-5 valign"> -->
          <!-- <div class="cont"> -->
            <!-- <div class="text">
              <h2 class="d-slideup wow">
                <span class="sideup-text">
                  <span class="up-text">Watch the creative</span>
                </span>
                <span class="sideup-text">
                  <span class="up-text">process behind our</span>
                </span>
                <span class="sideup-text">
                  <span class="up-text">digital marketing.</span>
                </span>
              </h2>
            </div> -->
            <!-- <div class="accordion bord mt-40">
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
            </div> -->
          <!-- </div> -->
        <!-- </div> -->
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