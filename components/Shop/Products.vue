<template>
  <div class="col-lg-9">
    <div class="shop-products">
      <div class="top-side d-flex align-items-end mb-40">
        <div>
          <h6 class="fz-16 line-height-1">Showing 1–9 of 12 results</h6>
        </div>
        <div class="ml-auto">
          <div class="select">
            <select class="form-control select-hidden" @click="openList">
              <option value="Most Popular">Most Popular</option>
              <option value="Sort by average rating">Sort by average rating</option>
              <option value="Price [Lowest to Highest]">Price [Lowest to Highest]</option>
              <option value="Price [Highest to Lowest]">Price [Highest to Lowest]</option>
            </select>
            <div class="select-styled" @click="openList">Most Popular</div>
            <ul class="select-options">
              <li rel="Most Popular" @click="handleItemClick">Most Popular</li>
              <li rel="Sort by average rating" @click="handleItemClick">Sort by average rating</li>
              <li rel="Price [Lowest to Highest]" @click="handleItemClick">Price [Lowest to Highest]</li>
              <li rel="Price [Highest to Lowest]" @click="handleItemClick">Price [Highest to Lowest]</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="item in data" class="col-md-6 col-lg-4" :key="item.id">
          <div class="item mb-50">
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
      <div class="pagination d-flex justify-content-center mt-30">
        <ul class="rest">
          <li class="active"><a href="#0">1</a></li>
          <li><a href="#0">2</a></li>
          <li><a href="#0"><i class="fas fa-chevron-right"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
  
<script setup>
//= Data
import data from '@/data/Shop/list.json';

function openList(e) {
  e.stopPropagation();
  const options = document.querySelector('.select-options')
  if (options.style.display === 'none') options.style.display = 'block';
  else options.style.display = 'none'
  document.querySelector('.select-styled').classList.toggle('active');
}

function handleItemClick(e) {
  e.stopPropagation();
  document.querySelector('.select-styled').classList.remove('active');
  document.querySelector('.select-styled').innerHTML = e.currentTarget.innerHTML;
  document.querySelector('select').value = e.currentTarget.getAttribute('rel');
  document.querySelector('.select-options').style.display = 'none';
}
</script>