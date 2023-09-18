<template>
  <footer>
    <div class="sub-footer pt-40 pb-40 ontop sub-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="logo">
              <a href="#0">
                <img src="/dark/assets/imgs/logo-light.png" alt="" />
              </a>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="copyright d-flex">
              <div class="ml-auto">
                <p class="fz-13">© 2023 Geekfolio is Proudly Powered by <span class="underline">
                    <a :href="data.author_link" target="_blank">{{ data.author }}</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
//= Data
import data from "@/data/app-data.json";
</script>