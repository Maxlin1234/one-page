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
      titleTemplate: `%s - Digital Agency`,
      bodyAttrs: {
        class: "home-digital sub-bg"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonLinesTwo = __nuxt_component_0;
      const _component_CommonNavbar = __nuxt_component_0$1;
      const _component_DigitalAgencyHeader = resolveComponent("DigitalAgencyHeader");
      const _component_DigitalAgencyServices = resolveComponent("DigitalAgencyServices");
      const _component_DigitalAgencyBlock = resolveComponent("DigitalAgencyBlock");
      const _component_DigitalAgencyPortfolio = resolveComponent("DigitalAgencyPortfolio");
      const _component_DigitalAgencyPrice = resolveComponent("DigitalAgencyPrice");
      const _component_DigitalAgencyServicesTab = resolveComponent("DigitalAgencyServicesTab");
      const _component_DigitalAgencyClients = resolveComponent("DigitalAgencyClients");
      const _component_DigitalAgencyTestimonials = resolveComponent("DigitalAgencyTestimonials");
      const _component_DigitalAgencyApproach = resolveComponent("DigitalAgencyApproach");
      const _component_DigitalAgencyCallToAction = resolveComponent("DigitalAgencyCallToAction");
      const _component_DigitalAgencyBlog = resolveComponent("DigitalAgencyBlog");
      const _component_DigitalAgencyFooter = resolveComponent("DigitalAgencyFooter");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CommonLinesTwo, null, null, _parent));
      _push(ssrRenderComponent(_component_CommonNavbar, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_DigitalAgencyHeader, { lightMode: true }, null, _parent));
      _push(`<main class="position-re">`);
      _push(ssrRenderComponent(_component_DigitalAgencyServices, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_DigitalAgencyBlock, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_DigitalAgencyPortfolio, null, null, _parent));
      _push(ssrRenderComponent(_component_DigitalAgencyPrice, null, null, _parent));
      _push(ssrRenderComponent(_component_DigitalAgencyServicesTab, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_DigitalAgencyClients, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_DigitalAgencyTestimonials, null, null, _parent));
      _push(ssrRenderComponent(_component_DigitalAgencyApproach, null, null, _parent));
      _push(ssrRenderComponent(_component_DigitalAgencyCallToAction, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_DigitalAgencyBlog, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_DigitalAgencyFooter, { lightMode: true }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/light/home-digital-agency/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-1a39f0ba.js.map
