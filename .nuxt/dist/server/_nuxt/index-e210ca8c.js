import { _ as __nuxt_component_0 } from "./Navbar-76f6d3e1.js";
import "./index-e12b288f.js";
import { resolveComponent, useSSRContext } from "vue";
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
import "vue-router";
import "destr";
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
      const _component_MarketingAgencyHeader = resolveComponent("MarketingAgencyHeader");
      const _component_MarketingAgencyMarq = resolveComponent("MarketingAgencyMarq");
      const _component_MarketingAgencyAbout = resolveComponent("MarketingAgencyAbout");
      const _component_MarketingAgencyClients = resolveComponent("MarketingAgencyClients");
      const _component_MarketingAgencySideImage = resolveComponent("MarketingAgencySideImage");
      const _component_MarketingAgencyServices = resolveComponent("MarketingAgencyServices");
      const _component_MarketingAgencyPortfolio = resolveComponent("MarketingAgencyPortfolio");
      const _component_MarketingAgencyIntro = resolveComponent("MarketingAgencyIntro");
      const _component_MarketingAgencyTestimonials = resolveComponent("MarketingAgencyTestimonials");
      const _component_MarketingAgencyBlog = resolveComponent("MarketingAgencyBlog");
      const _component_MarketingAgencyCallToAction = resolveComponent("MarketingAgencyCallToAction");
      const _component_MarketingAgencyMarq2 = resolveComponent("MarketingAgencyMarq2");
      const _component_MarketingAgencyFooter = resolveComponent("MarketingAgencyFooter");
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
//# sourceMappingURL=index-e210ca8c.js.map
