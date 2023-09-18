<template>
  <section class="intro-corp section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 valign md-mb50">
          <div class="imgs mb-80">
            <div class="img1">
              <img src="/dark/assets/imgs/arch/intro/sq1.jpg" alt="" />
            </div>
            <div class="img2">
              <img src="/dark/assets/imgs/arch/intro/sq2.jpg" alt="" />
            </div>
          </div>
        </div>
        <div class="col-lg-6 offset-lg-1 valign">
          <div class="cont">
            <div class="text">
              <h3>四大類別</h3>
            </div>
            <div class="accordion bord mt-40">
              <div class="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                <div class="title" @click="openAccordion">
                  <h6 class="fz-18">策劃邀請 單元</h6>
                  <span class="ico"></span>
                </div>
                <div class="accordion-info">
                  <p class="fz-14">Taken possession of my entire soul, like these sweet mornings of spring which i enjoy
                    with my whole.</p>
                </div>
              </div>
              <div class="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                <div class="title" @click="openAccordion">
                  <h6 class="fz-18">SAT FEST 單元</h6>
                  <span class="ico"></span>
                </div>
                <div class="accordion-info">
                  <p class="fz-14">Taken possession of my entire soul, like these sweet mornings of spring which i enjoy
                    with my whole.</p>
                </div>
              </div>
              <div class="item wow fadeInUp" data-wow-delay=".5s">
                <div class="title" @click="openAccordion">
                  <h6 class="fz-18"> TAICCA Spotligh 單元</h6>
                  <span class="ico"></span>
                </div>
                <div class="accordion-info">
                  <p class="fz-14">Taken possession of my entire soul, like these sweet mornings of spring which i enjoy
                    with my whole.</p>
                </div>
              </div>
              <div class="item wow fadeInUp" data-wow-delay=".5s">
                <div class="title" @click="openAccordion">
                  <h6 class="fz-18">徵件作品 單元</h6>
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