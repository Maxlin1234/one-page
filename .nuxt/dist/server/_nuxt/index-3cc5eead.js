import { _ as __nuxt_component_0 } from "./Navbar-76f6d3e1.js";
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from "./Services-1258f68f.js";
import { _ as __nuxt_component_3, a as __nuxt_component_4 } from "./FAQ-36896fcc.js";
import "./index-e12b288f.js";
import { resolveComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useHead } from "../server.mjs";
import "./nuxt-link-6bdec6f5.js";
import "ufo";
import "hookable";
import "./isInView-318b554b.js";
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
    const headerMetadata = {
      subTitle: "WHAT CAN WE DO ?",
      title: "We combine our passion for design and code.",
      text: "SERVICES"
    };
    useHead({
      titleTemplate: `%s - Services`,
      bodyAttrs: {
        class: "main-bg"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonNavbar = __nuxt_component_0;
      const _component_InnerPagesHeader = __nuxt_component_1;
      const _component_InnerPagesAboutServices = __nuxt_component_2;
      const _component_InnerPagesServicesPortfolio = __nuxt_component_3;
      const _component_DigitalAgencyServicesTab = resolveComponent("DigitalAgencyServicesTab");
      const _component_InnerPagesServicesFAQ = __nuxt_component_4;
      const _component_StartupCallToAction = resolveComponent("StartupCallToAction");
      const _component_StartupFooter = resolveComponent("StartupFooter");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CommonNavbar, null, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_InnerPagesHeader, { data: headerMetadata }, null, _parent));
      _push(ssrRenderComponent(_component_InnerPagesAboutServices, null, null, _parent));
      _push(ssrRenderComponent(_component_InnerPagesServicesPortfolio, null, null, _parent));
      _push(ssrRenderComponent(_component_DigitalAgencyServicesTab, null, null, _parent));
      _push(ssrRenderComponent(_component_InnerPagesServicesFAQ, null, null, _parent));
      _push(ssrRenderComponent(_component_StartupCallToAction, { innerPageStyle: true }, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_StartupFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dark/page-services/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-3cc5eead.js.map
