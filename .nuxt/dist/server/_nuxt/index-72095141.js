import { _ as __nuxt_component_0 } from "./Navbar-86353f14.js";
import { _ as __nuxt_component_1, a as __nuxt_component_2, b as __nuxt_component_3, c as __nuxt_component_4, d as __nuxt_component_5, e as __nuxt_component_6, f as __nuxt_component_7, g as __nuxt_component_8, h as __nuxt_component_9, i as __nuxt_component_10, j as __nuxt_component_11 } from "./Footer-0455f186.js";
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
import "./app-data-475c97b4.js";
import "unhead";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "devalue";
import "h3";
import "@unhead/ssr";
import "@unhead/shared";
import "destr";
import "defu";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: `%s - Creative Agency`,
      bodyAttrs: {
        class: "sub-bg"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonNavbar = __nuxt_component_0;
      const _component_CreativeAgencyHeader = __nuxt_component_1;
      const _component_CreativeAgencyMarq = __nuxt_component_2;
      const _component_CreativeAgencyIntro = __nuxt_component_3;
      const _component_CreativeAgencySectionImage = __nuxt_component_4;
      const _component_CreativeAgencyServices = __nuxt_component_5;
      const _component_CreativeAgencyPortfolio = __nuxt_component_6;
      const _component_CreativeAgencyTestimonials = __nuxt_component_7;
      const _component_CreativeAgencyTeam = __nuxt_component_8;
      const _component_CreativeAgencyHzScroll = __nuxt_component_9;
      const _component_CreativeAgencyBlog = __nuxt_component_10;
      const _component_CreativeAgencyFooter = __nuxt_component_11;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CommonNavbar, {
        mainBg: true,
        lightMode: true
      }, null, _parent));
      _push(`<main class="main-bg position-re">`);
      _push(ssrRenderComponent(_component_CreativeAgencyHeader, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_CreativeAgencyMarq, null, null, _parent));
      _push(ssrRenderComponent(_component_CreativeAgencyIntro, null, null, _parent));
      _push(ssrRenderComponent(_component_CreativeAgencySectionImage, null, null, _parent));
      _push(ssrRenderComponent(_component_CreativeAgencyServices, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_CreativeAgencyPortfolio, null, null, _parent));
      _push(ssrRenderComponent(_component_CreativeAgencyTestimonials, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_CreativeAgencyTeam, null, null, _parent));
      _push(ssrRenderComponent(_component_CreativeAgencyHzScroll, null, null, _parent));
      _push(ssrRenderComponent(_component_CreativeAgencyBlog, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_CreativeAgencyFooter, { lightMode: true }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/light/home-creative-agency/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-72095141.js.map
