<template>
  <section class="main-shop section-padding">
    <div class="container">
      <div class="row md-marg">
        <SideMenu />
        <Products />
      </div>
    </div>
  </section>
</template>
  
<script setup>
//= Components
import SideMenu from './SideMenu';
import Products from './Products';
</script>