<template>
  <section class="intro-corp section-padding">
    <div class="container">
      <div class="row justify-content-around">
        <div class="col-lg-5 valign md-mb50">
          <div class="imgs mb-80">
            <div class="img1 wow fadeInUp">
              <img src="/dark/assets/imgs/about/sq1.jpg" alt="" />
            </div>
            <div class="img2 wow fadeInLeft">
              <img src="/dark/assets/imgs/about/sq2.jpg" alt="" />
            </div>
          </div>
        </div>
        <div class="col-lg-5 valign">
          <div class="cont">
            <div class="text">
              <h2 class="d-slideup wow">
                <span class="sideup-text">
                  <span class="up-text">四大類別</span>
                </span>
                <span class="sideup-text">
                  <!-- <span class="up-text">process behind our</span> -->
                </span>
                <span class="sideup-text">
                  <!-- <span class="up-text"><span class="sub-font">digital marketing</span>.</span> -->
                </span>
              </h2>
            </div>
            <div class="accordion bord mt-40">
              <div class="item mb-15 wow fadeInUp" data-wow-delay=".1s">
                <div class="title" @click="openAccordion">
                  <h6 class="fz-18">TAICCA Spotlight</h6>
                  <span class="ico"></span>
                </div>
                <div class="accordion-info">
                  <p class="fz-14">2023 臺灣文博會，FUTURE VISION LAB 2023與文策院攜手，合作策劃「TAICCA Spotlight單元」，並在初登場的 Dome 2.0 將 4 支優秀的台灣原生作品帶給觀眾。
                    從結合臺灣插畫的互動兒童劇場、獲得國際影展大獎肯定的VR作品轉譯、在地繪本與動畫團隊的跨域共創、到傳統藝術與臺灣地景的結合，「TAICCA Spotlight」單元希望能夠帶領觀眾踏入不一樣的視覺與聲音饗宴，在全新打造的穹頂劇場中，沉浸於臺灣文化與豐盛的創作力帶來的感動。
                  </p>
                </div>
              </div>
              <div class="item mb-15 wow fadeInUp" data-wow-delay=".3s">
                <div class="title" @click="openAccordion">
                  <h6 class="fz-18">徵件作品</h6>
                  <span class="ico"></span>
                </div>
                <div class="accordion-info">
                  <p class="fz-14">伴隨硬體全面升級後，「FUTURE VISION LAB 2023」針對個人或團隊開放徵件，徵集沉浸影音與跨域展演之作品，展現臺灣蓬勃的創作動能。</p>
                </div>
              </div>
              <div class="item wow fadeInUp" data-wow-delay=".5s">
                <div class="title" @click="openAccordion">
                  <h6 class="fz-18">SAT Fest</h6>
                  <span class="ico"></span>
                </div>
                <div class="accordion-info">
                  <p class="fz-14">今年「科技媒體實驗平台」與加拿大 SAT 科技藝術中心（The Society for Arts and Technology）合作，展出 SAT Fest 藝術節的精選作品共 7 件。自 2012 年首屆以來，SAT Fest 已成為沈浸式創作的重要活動，為實驗和藝術的實踐提供了充足的創作與展演空間。
                    SAT Fest 集結了多元且風格各異的穹頂投影精選短片，激發了數千名觀眾的想像力，並展現了一百多名來自加拿大和國際的視覺和聲音藝術家的創作宇宙和創意視野。</p>
                </div>
              </div>
              <div class="item wow fadeInUp" data-wow-delay=".7s">
                <div class="title" @click="openAccordion">
                  <h6 class="fz-18">策劃邀請</h6>
                  <span class="ico"></span>
                </div>
                <div class="accordion-info">
                  <p class="fz-14">「FUTURE VISION LAB 2023」邀請曾參與FUTURE VISION LAB實驗計畫的台灣藝術家和創作團隊，以其豐富的沉浸內容製作經驗和創新的視角，融合今年新場域的規格，進行全新製作和原作改製。
                      在文博會期間，將展出共計十件令人驚艷的作品，涵蓋多種表現形式，如演算生成、實驗動畫、電影短片以及實驗性展演，呈現多元而豐富的藝術風貌，展現台灣藝術家和創作團隊的創意能量。
                  </p>
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