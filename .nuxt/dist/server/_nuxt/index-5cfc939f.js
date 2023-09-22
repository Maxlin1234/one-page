import { _ as __nuxt_component_0 } from "./Navbar-76f6d3e1.js";
import { _ as __nuxt_component_1, a as __nuxt_component_2, b as __nuxt_component_3, c as __nuxt_component_4, d as __nuxt_component_5, e as __nuxt_component_6, f as __nuxt_component_7, g as __nuxt_component_8, h as __nuxt_component_9, i as __nuxt_component_10, j as __nuxt_component_11 } from "./Footer-9cd5c467.js";
import "./index-e12b288f.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useHead } from "../server.mjs";
import "./nuxt-link-6bdec6f5.js";
import "ufo";
import "hookable";
import "./client-only-29ef7f45.js";
import "swiper";
import "./portfolio-5847a98a.js";
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
    useHead({
      titleTemplate: `%s - Architecture`,
      bodyAttrs: {
        class: "home-arch main-bg"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonNavbar = __nuxt_component_0;
      const _component_ArchitectureHeader = __nuxt_component_1;
      const _component_ArchitectureBgPattern = __nuxt_component_2;
      const _component_ArchitectureIntro = __nuxt_component_3;
      const _component_ArchitectureClients = __nuxt_component_4;
      const _component_ArchitectureServices = __nuxt_component_5;
      const _component_ArchitecturePortfolio = __nuxt_component_6;
      const _component_ArchitectureAbout = __nuxt_component_7;
      const _component_ArchitectureSectionImage = __nuxt_component_8;
      const _component_ArchitectureTestimonials = __nuxt_component_9;
      const _component_ArchitectureBlog = __nuxt_component_10;
      const _component_ArchitectureFooter = __nuxt_component_11;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CommonNavbar, { mainBg: true }, null, _parent));
      _push(`<main class="position-re">`);
      _push(ssrRenderComponent(_component_ArchitectureHeader, null, null, _parent));
      _push(`<div class="block-pattern">`);
      _push(ssrRenderComponent(_component_ArchitectureBgPattern, null, null, _parent));
      _push(ssrRenderComponent(_component_ArchitectureIntro, null, null, _parent));
      _push(ssrRenderComponent(_component_ArchitectureClients, null, null, _parent));
      _push(ssrRenderComponent(_component_ArchitectureServices, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ArchitecturePortfolio, null, null, _parent));
      _push(ssrRenderComponent(_component_ArchitectureAbout, null, null, _parent));
      _push(ssrRenderComponent(_component_ArchitectureSectionImage, null, null, _parent));
      _push(ssrRenderComponent(_component_ArchitectureTestimonials, null, null, _parent));
      _push(ssrRenderComponent(_component_ArchitectureBlog, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_ArchitectureFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dark/home-architecture/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-5cfc939f.js.map
