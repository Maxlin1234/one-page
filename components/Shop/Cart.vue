<template>
  <section :class="`shop-cart ${lightMode ? 'light' : ''} section-padding`">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-11">
          <div>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-column="Product">
                    <div class="d-flex align-items-center">
                      <div>
                        <div class="img icon-img-80">
                          <img src="/dark/assets/imgs/shop/5.jpg" alt="" />
                        </div>
                      </div>
                      <div class="ml-30">
                        <h6>Men Hooded</h6>
                      </div>
                    </div>
                  </td>
                  <td data-column="price">
                    <h5 class="main-color4 fz-18">$130.00</h5>
                  </td>
                  <td data-column="	Quantity">
                    <div class="counter">
                      <span class="down" @click="decreaseCount">-</span>
                      <input type="text" value="1" />
                      <span class="up" @click="increaseCount">+</span>
                    </div>
                  </td>
                  <td data-column="Subtotal">
                    <h5 class="main-color4 fz-18">$130.00</h5>
                  </td>
                  <td class="remove">
                    <a href="#0">
                      <span class="pe-7s-close"></span>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td data-column="Product">
                    <div class="d-flex align-items-center">
                      <div>
                        <div class="img icon-img-80">
                          <img src="/dark/assets/imgs/shop/3.jpg" alt="" />
                        </div>
                      </div>
                      <div class="ml-30">
                        <h6>Men Hooded</h6>
                      </div>
                    </div>
                  </td>
                  <td data-column="price">
                    <h5 class="main-color4 fz-18">$130.00</h5>
                  </td>
                  <td data-column="	Quantity">
                    <div class="counter">
                      <span class="down" @click="decreaseCount">-</span>
                      <input type="text" value="1" />
                      <span class="up" @click="increaseCount">+</span>
                    </div>
                  </td>
                  <td data-column="Subtotal">
                    <h5 class="main-color4 fz-18">$130.00</h5>
                  </td>
                  <td class="remove">
                    <a href="#0">
                      <span class="pe-7s-close"></span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="row mt-80">
            <div class="col-lg-6">
              <div class="coupon mt-40">
                <h4>Discount</h4>
                <p class="fz-13">Enter your coupon code if you have one.</p>
                <form action="contact.php">
                  <div class="form-group d-flex mt-30">
                    <input type="text" name="coupon_code" />
                    <button type="submit" class="butn butn-md butn-bord">
                      <span>Apply</span>
                    </button>
                  </div>
                  <span class="fz-13 opacity-7 mt-10">Coupon code</span>
                </form>
              </div>
            </div>
            <div class="col-lg-4 offset-lg-2">
              <div class="total mt-40">
                <h4>Cart totals</h4>
                <ul class="rest mt-30">
                  <li class="mb-5">
                    <h6>Subtotal : <span class="fz-16 main-color4 ml-10">$130.00</span></h6>
                  </li>
                  <li>
                    <h6>Total : <span class="fz-16 main-color4 ml-10">$260.00</span></h6>
                  </li>
                </ul>
                <NuxtLink to="/dark/shop-checkout"
                  :class="`${lightMode ? 'main-colorbg4' : 'bg-white'} butn butn-md butn-bg text-dark mt-30`">
                  <span class="text-u fz-13 fw-600">Proceed to checkout</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script setup>
const { lightMode } = defineProps(['lightMode']);

function decreaseCount(event) {
  let input = event.currentTarget.parentElement.querySelector('input');
  if (parseInt(input.value) === 1) return;
  input.value = parseInt(input.value) - 1;
}

function increaseCount(event) {
  let input = event.currentTarget.parentElement.querySelector('input');
  input.value = parseInt(input.value) + 1;
}
</script>