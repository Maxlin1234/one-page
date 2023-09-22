import { _ as __nuxt_component_0 } from "./LinesTwo-5c84844d.js";
import { _ as __nuxt_component_0$1 } from "./Navbar-76f6d3e1.js";
import { resolveComponent, useSSRContext } from "vue";
import "vue-router";
import "./index-e12b288f.js";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useHead } from "../server.mjs";
import "./nuxt-link-6bdec6f5.js";
import "ufo";
import "hookable";
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
      titleTemplate: `%s - Corporate`,
      bodyAttrs: {
        class: "home-corp"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonLinesTwo = __nuxt_component_0;
      const _component_CommonNavbar = __nuxt_component_0$1;
      const _component_CorporateHeader = resolveComponent("CorporateHeader");
      const _component_CorporateServices = resolveComponent("CorporateServices");
      const _component_CorporateAbout = resolveComponent("CorporateAbout");
      const _component_CorporateMarq = resolveComponent("CorporateMarq");
      const _component_CorporatePortfolio = resolveComponent("CorporatePortfolio");
      const _component_CorporateNumbers = resolveComponent("CorporateNumbers");
      const _component_CorporateTestimonials = resolveComponent("CorporateTestimonials");
      const _component_CorporateBlock = resolveComponent("CorporateBlock");
      const _component_CorporatePricing = resolveComponent("CorporatePricing");
      const _component_CorporateBlog = resolveComponent("CorporateBlog");
      const _component_CorporateFooter = resolveComponent("CorporateFooter");
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
//# sourceMappingURL=index-8ec69276.js.map
