<template>
  <section class="services-tab section-padding">
    <div class="container">
      <div class="row" id="tabs">
        <div class="col-lg-6 order2">
          <div class="serv-tab-cont mb-80">
            <div class="tab-content current" id="tabs-1">
              <div class="item">
                <div class="img">
                  <img :src="`/${lightMode ? 'light' : 'dark'}/assets/imgs/sass-img/serv/1.jpg`" alt="" />
                </div>
                <div class="cont sub-bg">
                  <div class="icon-img-60 mb-40">
                    <img :src="`/${lightMode ? 'light' : 'dark'}/assets/imgs/serv-icons/0.png`" alt="" />
                  </div>
                  <div class="text">
                    <p>We are a creative studio specializing in design, development and strategy many different skills and
                      disciplines in the production of all web.</p>
                  </div>
                  <Link href="/dark/page-services" class="mt-30">
                  <span class="mr-15">Read More</span>
                  <i class="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div class="tab-content" id="tabs-2">
              <div class="item">
                <div class="img">
                  <img :src="`/${lightMode ? 'light' : 'dark'}/assets/imgs/sass-img/serv/2.jpg`" alt="" />
                </div>
                <div class="cont sub-bg">
                  <div class="icon-img-60 mb-40">
                    <img :src="`/${lightMode ? 'light' : 'dark'}/assets/imgs/serv-icons/1.png`" alt="" />
                  </div>
                  <div class="text">
                    <p>We are a creative studio specializing in design, development and strategy many different skills and
                      disciplines in the production of all web.</p>
                  </div>
                  <Link href="/dark/page-services" class="mt-30">
                  <span class="mr-15">Read More</span>
                  <i class="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div class="tab-content" id="tabs-3">
              <div class="item">
                <div class="img">
                  <img :src="`/${lightMode ? 'light' : 'dark'}/assets/imgs/sass-img/serv/3.jpg`" alt="" />
                </div>
                <div class="cont sub-bg">
                  <div class="icon-img-60 mb-40">
                    <img :src="`/${lightMode ? 'light' : 'dark'}/assets/imgs/serv-icons/2.png`" alt="" />
                  </div>
                  <div class="text">
                    <p>We are a creative studio specializing in design, development and strategy many different skills and
                      disciplines in the production of all web.</p>
                  </div>
                  <Link href="/dark/page-services" class="mt-30">
                  <span class="mr-15">Read More</span>
                  <i class="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div class="tab-content" id="tabs-4">
              <div class="item">
                <div class="img">
                  <img :src="`/${lightMode ? 'light' : 'dark'}/assets/imgs/sass-img/serv/1.jpg`" alt="" />
                </div>
                <div class="cont sub-bg">
                  <div class="icon-img-60 mb-40">
                    <img :src="`/${lightMode ? 'light' : 'dark'}/assets/imgs/serv-icons/0.png`" alt="" />
                  </div>
                  <div class="text">
                    <p>We are a creative studio specializing in design, development and strategy many different skills and
                      disciplines in the production of all web.</p>
                  </div>
                  <NuxtLink to="/dark/page-services" class="mt-30">
                    <span class="mr-15">Read More</span>
                    <i class="fas fa-long-arrow-alt-right"></i>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5 offset-lg-1 valign order1">
          <div class="serv-tab-link tab-links full-width md-mb50">
            <div class="sec-lg-head mb-80">
              <h6 class="dot-titl-non mb-15">Services</h6>
              <p>We help you to go online and increase your conversion rate Better design for your digital products. </p>
            </div>
            <ul class="rest">
              <li class="item-link current mb-15" data-tab="tabs-1" @click="openTab"><span>01</span> UI/UX Design</li>
              <li class="item-link mb-15" data-tab="tabs-2" @click="openTab"><span>02</span> Branding</li>
              <li class="item-link mb-15" data-tab="tabs-3" @click="openTab"><span>03</span> Development</li>
              <li class="item-link" data-tab="tabs-4" @click="openTab"><span>04</span> Marketing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { lightMode } = defineProps(['lightMode']);

function openTab(event) {
  document.querySelectorAll('.tab-content').forEach(element => element.style.display = 'none');
  const tabId = event.currentTarget.getAttribute('data-tab');
  document.querySelector(`.tab-content#${tabId}`).style.display = 'block';
}
</script>