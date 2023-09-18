import { _ as __nuxt_component_0 } from "./Navbar-86353f14.js";
import { _ as __nuxt_component_1 } from "./Header-18017113.js";
import { _ as __nuxt_component_2 } from "./Cart-55037515.js";
import { _ as __nuxt_component_2$1 } from "./Footer-d5f7be9e.js";
import "./index-e12b288f.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useHead } from "../server.mjs";
import "./nuxt-link-6bdec6f5.js";
import "ufo";
import "hookable";
import "./3-a59dc05e.js";
import "./app-data-475c97b4.js";
import "unhead";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "devalue";
import "h3";
import "@unhead/ssr";
import "@unhead/shared";
import "vue-router";
import "destr";
import "defu";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const metadata = {
      subTitle: "SHOPPING",
      title: "Cart."
    };
    useHead({
      titleTemplate: `%s - Shop Cart`,
      bodyAttrs: {
        class: "main-bg"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonNavbar = __nuxt_component_0;
      const _component_ShopHeader = __nuxt_component_1;
      const _component_ShopCart = __nuxt_component_2;
      const _component_StartupFooter = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div id="smooth-wrapper">`);
      _push(ssrRenderComponent(_component_CommonNavbar, {
        mainBg: true,
        noStatic: true
      }, null, _parent));
      _push(`<div id="smooth-content"><main class="main-bg">`);
      _push(ssrRenderComponent(_component_ShopHeader, { data: metadata }, null, _parent));
      _push(ssrRenderComponent(_component_ShopCart, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_StartupFooter, { subBg: true }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dark/shop-cart/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-d97a94b2.js.map
