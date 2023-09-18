<template>
  <section class="product-details section-padding">
    <div class="container">
      <ProductInfo />
      <ProductDetails />
      <RelatedProducts />
    </div>
  </section>
</template>
  
<script setup>
//= Components
import ProductInfo from './ProductInfo';
import ProductDetails from './ProductDetails';
import RelatedProducts from './RelatedProducts';
</script>