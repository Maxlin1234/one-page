<template>
  <header class="page-header section-padding pb-0">
    <div class="container mt-80">
      <div class="row">
        <div class="col-lg-8">
          <div class="caption">
            <h6 class="sub-title">{{ data.subTitle }}</h6>
            <h1 class="fz-80">{{ data.title }}</h1>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
  
<script setup>
const { data } = defineProps(['data']);
</script>