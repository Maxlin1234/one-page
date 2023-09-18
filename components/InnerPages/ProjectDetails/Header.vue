<template>
  <header class="proj-header1">
    <div class="container mb-50">
      <div class="row">
        <div class="col-lg-6">
          <div class="caption md-mb50">
            <h2>移動故事屋《月球度假村》</h2>
          </div>
        </div>
        <div class="col-lg-6 d-flex justify-content-end align-items-end">
          <div class="info row">
            <div class="col-sm-6">
              <div class="item mb-30">
                <h6 class="fz-16">分類</h6>
                <span class="sub-title ls1">「TAICCA Spotlight」單元</span>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="item mb-30">
                <h6 class="fz-16">時間</h6>
                <span class="sub-title ls1">09.22(五) ____ 10.01(日) <br>
                  2023 .</span>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="item mb-30">
                <h6 class="fz-16">Date</h6>
                <span class="sub-title ls1">August 6, 2020</span>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="item mb-30">
                <h6 class="fz-16">地點</h6>
                <span class="sub-title ls1">東草坪</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-img" data-background="/dark/assets/imgs/works/projects/1/1.jpg"></div>
  </header>
</template>
  
<script setup>
import { onMounted } from 'vue';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

onMounted(() => {
  loadBackgroudImages();
});
</script>