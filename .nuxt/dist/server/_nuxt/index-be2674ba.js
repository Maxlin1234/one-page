import { _ as __nuxt_component_0 } from "./Navbar-86353f14.js";
import { _ as __nuxt_component_1 } from "./Product-13fc4bf4.js";
import { _ as __nuxt_component_2 } from "./Footer-d5f7be9e.js";
import { useSSRContext } from "vue";
import "vue-router";
import "./index-e12b288f.js";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useHead } from "../server.mjs";
import "./nuxt-link-6bdec6f5.js";
import "ufo";
import "hookable";
import "./client-only-29ef7f45.js";
import "destr";
import "devalue";
import "klona";
import "swiper";
import "./app-data-475c97b4.js";
import "unhead";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "h3";
import "@unhead/ssr";
import "@unhead/shared";
import "defu";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: `%s - Shop Product`,
      bodyAttrs: {
        class: "main-bg"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonNavbar = __nuxt_component_0;
      const _component_ShopProduct = __nuxt_component_1;
      const _component_StartupFooter = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div id="smooth-wrapper">`);
      _push(ssrRenderComponent(_component_CommonNavbar, {
        mainBg: true,
        noStatic: true,
        lightMode: true
      }, null, _parent));
      _push(`<div id="smooth-content"><main class="main-bg">`);
      _push(ssrRenderComponent(_component_ShopProduct, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_StartupFooter, {
        subBg: true,
        lightMode: true
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/light/shop-product/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-be2674ba.js.map
