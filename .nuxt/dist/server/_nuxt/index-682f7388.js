import { _ as __nuxt_component_0 } from "./LinesTwo-5c84844d.js";
import { _ as __nuxt_component_0$1 } from "./Navbar-86353f14.js";
import { _ as __nuxt_component_2, a as __nuxt_component_3, b as __nuxt_component_4, c as __nuxt_component_5, d as __nuxt_component_6, e as __nuxt_component_7, f as __nuxt_component_8, g as __nuxt_component_9, h as __nuxt_component_10, i as __nuxt_component_11, j as __nuxt_component_12 } from "./Footer-b69072a0.js";
import { useSSRContext } from "vue";
import "vue-router";
import "./index-e12b288f.js";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useHead } from "../server.mjs";
import "./nuxt-link-6bdec6f5.js";
import "ufo";
import "hookable";
import "./client-only-29ef7f45.js";
import "swiper";
import "./sq1-e08776a9.js";
import "./sq2-ad2949fc.js";
import "./ModalVideo-2460fa41.js";
import "destr";
import "devalue";
import "klona";
import "./1-645454db.js";
import "./app-data-475c97b4.js";
import "./isInView-318b554b.js";
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
      titleTemplate: `%s - Corporate`,
      bodyAttrs: {
        class: "home-corp"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonLinesTwo = __nuxt_component_0;
      const _component_CommonNavbar = __nuxt_component_0$1;
      const _component_CorporateHeader = __nuxt_component_2;
      const _component_CorporateServices = __nuxt_component_3;
      const _component_CorporateAbout = __nuxt_component_4;
      const _component_CorporateMarq = __nuxt_component_5;
      const _component_CorporatePortfolio = __nuxt_component_6;
      const _component_CorporateNumbers = __nuxt_component_7;
      const _component_CorporateTestimonials = __nuxt_component_8;
      const _component_CorporateBlock = __nuxt_component_9;
      const _component_CorporatePricing = __nuxt_component_10;
      const _component_CorporateBlog = __nuxt_component_11;
      const _component_CorporateFooter = __nuxt_component_12;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CommonLinesTwo, null, null, _parent));
      _push(ssrRenderComponent(_component_CommonNavbar, { lightMode: true }, null, _parent));
      _push(`<main class="main-bg">`);
      _push(ssrRenderComponent(_component_CorporateHeader, null, null, _parent));
      _push(ssrRenderComponent(_component_CorporateServices, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_CorporateAbout, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_CorporateMarq, null, null, _parent));
      _push(ssrRenderComponent(_component_CorporatePortfolio, null, null, _parent));
      _push(ssrRenderComponent(_component_CorporateNumbers, null, null, _parent));
      _push(ssrRenderComponent(_component_CorporateTestimonials, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_CorporateBlock, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_CorporatePricing, null, null, _parent));
      _push(ssrRenderComponent(_component_CorporateBlog, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_CorporateFooter, { lightMode: true }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/light/home-corporate/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-682f7388.js.map
