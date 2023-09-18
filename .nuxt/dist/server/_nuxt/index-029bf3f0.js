import { _ as __nuxt_component_0 } from "./Navbar-86353f14.js";
import { _ as __nuxt_component_1, a as __nuxt_component_2 } from "./Services-a87834ca.js";
import { _ as __nuxt_component_3, a as __nuxt_component_5 } from "./FAQ-a25d8afd.js";
import { _ as __nuxt_component_4 } from "./ServicesTab-227ade59.js";
import { _ as __nuxt_component_4$1 } from "./CallToAction-9f22715c.js";
import { _ as __nuxt_component_2$1 } from "./Footer-d5f7be9e.js";
import { useSSRContext } from "vue";
import "vue-router";
import "./index-e12b288f.js";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useHead } from "../server.mjs";
import "./nuxt-link-6bdec6f5.js";
import "ufo";
import "hookable";
import "./StatementSplitter-e87ceb66.js";
import "./isInView-318b554b.js";
import "./components-bd5aef6c.js";
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
      const _component_DigitalAgencyServicesTab = __nuxt_component_4;
      const _component_InnerPagesServicesFAQ = __nuxt_component_5;
      const _component_StartupCallToAction = __nuxt_component_4$1;
      const _component_StartupFooter = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CommonNavbar, { lightMode: true }, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_InnerPagesHeader, { data: headerMetadata }, null, _parent));
      _push(ssrRenderComponent(_component_InnerPagesAboutServices, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_InnerPagesServicesPortfolio, null, null, _parent));
      _push(ssrRenderComponent(_component_DigitalAgencyServicesTab, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_InnerPagesServicesFAQ, null, null, _parent));
      _push(ssrRenderComponent(_component_StartupCallToAction, { innerPageStyle: true }, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_StartupFooter, { lightMode: true }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/light/page-services/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-029bf3f0.js.map
