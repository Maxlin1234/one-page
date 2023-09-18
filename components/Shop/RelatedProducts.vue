<template>
  <div class="row justify-content-center mt-100">
    <div class="col-lg-11">
      <div class="main-shop">
        <div class="shop-products">
          <div>
            <h4>Related products</h4>
          </div>
          <div class="row">
            <div v-for="item in data" class="col-lg-3 col-md-6" :key="item.id">
              <div class="item mt-50">
                <div class="img">
                  <img :src="item.image" alt="" />
                  <a href="#0" class="add-cart">Add to Cart</a>
                  <span class="fav"><i class="far fa-heart"></i></span>
                </div>
                <div class="cont">
                  <div class="rate">
                    <i class="fas fa-star" v-for="(_, i) in new Array(item.stars).fill()" :key="i"></i>
                    <i class="far fa-star" v-for="(_, i) in new Array(5 - item.stars).fill()" :key="i"></i>
                  </div>
                  <h6>{{ item.name }}</h6>
                  <h5>${{ item.price }}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
//= Data
import data from '@/data/Shop/related-products.json';
</script>