<template>
  <div class="col-lg-3">
    <div class="sidebar md-mb80">

      <div class="item search mb-40">
        <form action="contact.php">
          <div class="form-group">
            <input type="text" name="shop_search" placeholder="Search" />
            <button type="submit">
              <span class="pe-7s-search"></span>
            </button>
          </div>
        </form>
      </div>

      <div class="item categories mb-40">
        <div class="title">
          <h6>Categories</h6>
        </div>
        <div class="dot-list">
          <ul class="rest">
            <li><a href="#0">Technology</a></li>
            <li><a href="#0">Accessories</a></li>
            <li><a href="#0">Furniture</a></li>
            <li><a href="#0">Clothes</a></li>
            <li><a href="#0">Jewellery</a></li>
          </ul>
        </div>
      </div>

      <div class="item price-range mb-40">
        <div class="title">
          <h6>Filter by Price</h6>
        </div>
        <div class="wrapper">
          <div class="slider-range">
            <div class="progress"></div>
          </div>
          <div class="range-input">
            <input type="range" class="range-min" min="10" max="10000" value="10" step="100" @input="handleRangeInput" />
            <input type="range" class="range-max" min="0" max="10000" value="7500" step="100" @input="handleRangeInput" />
          </div>
          <div class="price-input d-flex align-items-center mt-15">
            <div>
              <div class="field">
                <span>$</span>
                <input type="number" class="input-min" value="10" @input="handlePriceInput" />
              </div>
            </div>
            <div class="ml-auto">
              <div class="field">
                <span>$</span>
                <input type="number" class="input-max" value="7500" @input="handlePriceInput" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="item best-sale mb-40">
        <div class="title">
          <h6>Best Sellers</h6>
        </div>

        <div class="line-list d-flex align-items-center">
          <div>
            <div class="img">
              <img src="/dark/assets/imgs/shop/1.jpg" alt="" />
            </div>
          </div>
          <div>
            <div class="cont">
              <div class="rate">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <h6>Men Hooded</h6>
              <h5>$130.00</h5>
            </div>
          </div>
          <a href="#0" class="over-link"></a>
        </div>
        <div class="line-list d-flex align-items-center">
          <div>
            <div class="img">
              <img src="/dark/assets/imgs/shop/3.jpg" alt="" />
            </div>
          </div>
          <div>
            <div class="cont">
              <div class="rate">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <h6>Men Hooded</h6>
              <h5>$130.00</h5>
            </div>
          </div>
          <a href="#0" class="over-link"></a>
        </div>
        <div class="line-list d-flex align-items-center">
          <div>
            <div class="img">
              <img src="/dark/assets/imgs/shop/5.jpg" alt="" />
            </div>
          </div>
          <div>
            <div class="cont">
              <div class="rate">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <h6>Men Hooded</h6>
              <h5>$130.00</h5>
            </div>
          </div>
          <a href="#0" class="over-link"></a>
        </div>
      </div>

      <div class="item tags">
        <div class="title">
          <h6>Popular Tags</h6>
        </div>

        <div class="tags-links">
          <a href="#0">Design</a>
          <a href="#0">Development</a>
          <a href="#0">Tech</a>
          <a href="#0">Blog</a>
          <a href="#0">Branding</a>
          <a href="#0">Mobile</a>
          <a href="#0">ThemesCamp</a>
        </div>
      </div>

    </div>
  </div>
</template>
  
<script setup>
function handlePriceInput(e) {
  const priceInput = e.currentTarget;
  const priceGap = 1000;
  const minPrice = parseInt(priceInput[0].value);
  const maxPrice = parseInt(priceInput[1].value);
  const rangeInput = document.querySelectorAll(".range-input input")

  if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
    if (e.currentTarget.className === "input-min") {
      rangeInput[0].value = minPrice;
    } else {
      rangeInput[1].value = maxPrice;
    }
  }
}

function handleRangeInput(e) {
  const rangeInput = document.querySelectorAll(".range-input input");
  const priceInput = document.querySelectorAll(".price-input input");
  const range = document.querySelector(".slider-range .progress");
  const priceGap = 1000;

  let minVal = parseInt(rangeInput[0].value);
  let maxVal = parseInt(rangeInput[1].value);

  if (maxVal - minVal < priceGap) {
    if (e.currentTarget.className === "range-min") {
      rangeInput[0].value = maxVal - priceGap;
    } else {
      rangeInput[1].value = minVal + priceGap;
    }
  } else {
    priceInput[0].value = minVal;
    priceInput[1].value = maxVal;
    range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
    range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
  }
}
</script>