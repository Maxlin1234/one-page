import { _ as __nuxt_component_0 } from "./Navbar-86353f14.js";
import { _ as __nuxt_component_1, a as __nuxt_component_2, b as __nuxt_component_3, c as __nuxt_component_4, d as __nuxt_component_5, e as __nuxt_component_6, f as __nuxt_component_7, g as __nuxt_component_8, h as __nuxt_component_9, i as __nuxt_component_10, j as __nuxt_component_11, k as __nuxt_component_12, l as __nuxt_component_13 } from "./Footer-d3e70d50.js";
import "./index-e12b288f.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useHead } from "../server.mjs";
import "./nuxt-link-6bdec6f5.js";
import "ufo";
import "hookable";
import "./client-only-29ef7f45.js";
import "swiper";
import "destr";
import "devalue";
import "klona";
import "./ModalVideo-2460fa41.js";
import "./sq1-e08776a9.js";
import "./sq2-ad2949fc.js";
import "./app-data-475c97b4.js";
import "unhead";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "h3";
import "@unhead/ssr";
import "@unhead/shared";
import "vue-router";
import "defu";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: `%s - Marketing Agency`,
      bodyAttrs: {
        class: "digital-marketing sub-bg"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonNavbar = __nuxt_component_0;
      const _component_MarketingAgencyHeader = __nuxt_component_1;
      const _component_MarketingAgencyMarq = __nuxt_component_2;
      const _component_MarketingAgencyAbout = __nuxt_component_3;
      const _component_MarketingAgencyClients = __nuxt_component_4;
      const _component_MarketingAgencySideImage = __nuxt_component_5;
      const _component_MarketingAgencyServices = __nuxt_component_6;
      const _component_MarketingAgencyPortfolio = __nuxt_component_7;
      const _component_MarketingAgencyIntro = __nuxt_component_8;
      const _component_MarketingAgencyTestimonials = __nuxt_component_9;
      const _component_MarketingAgencyBlog = __nuxt_component_10;
      const _component_MarketingAgencyCallToAction = __nuxt_component_11;
      const _component_MarketingAgencyMarq2 = __nuxt_component_12;
      const _component_MarketingAgencyFooter = __nuxt_component_13;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CommonNavbar, {
        noStatic: true,
        subBg: true
      }, null, _parent));
      _push(`<main class="main-bg">`);
      _push(ssrRenderComponent(_component_MarketingAgencyHeader, null, null, _parent));
      _push(ssrRenderComponent(_component_MarketingAgencyMarq, null, null, _parent));
      _push(ssrRenderComponent(_component_MarketingAgencyAbout, null, null, _parent));
      _push(ssrRenderComponent(_component_MarketingAgencyClients, null, null, _parent));
      _push(ssrRenderComponent(_component_MarketingAgencySideImage, null, null, _parent));
      _push(ssrRenderComponent(_component_MarketingAgencyServices, null, null, _parent));
      _push(ssrRenderComponent(_component_MarketingAgencyPortfolio, null, null, _parent));
      _push(ssrRenderComponent(_component_MarketingAgencyIntro, null, null, _parent));
      _push(ssrRenderComponent(_component_MarketingAgencyTestimonials, null, null, _parent));
      _push(ssrRenderComponent(_component_MarketingAgencyBlog, null, null, _parent));
      _push(ssrRenderComponent(_component_MarketingAgencyCallToAction, null, null, _parent));
      _push(ssrRenderComponent(_component_MarketingAgencyMarq2, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_MarketingAgencyFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dark/home-marketing-agency/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-005c1146.js.map
