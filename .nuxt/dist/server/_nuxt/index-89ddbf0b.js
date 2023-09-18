import { _ as __nuxt_component_0 } from "./Navbar-86353f14.js";
import { _ as __nuxt_component_1, a as __nuxt_component_2$1 } from "./Services-a87834ca.js";
import { _ as __nuxt_component_2, a as __nuxt_component_4, b as __nuxt_component_7 } from "./Clients-75cbaefe.js";
import { _ as __nuxt_component_5 } from "./Testimonials-ebf335cd.js";
import { _ as __nuxt_component_6 } from "./Team-e84209ad.js";
import { _ as __nuxt_component_4$1 } from "./CallToAction-9f22715c.js";
import { _ as __nuxt_component_2$2 } from "./Footer-d5f7be9e.js";
import "./index-e12b288f.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useHead } from "../server.mjs";
import "./nuxt-link-6bdec6f5.js";
import "ufo";
import "hookable";
import "./StatementSplitter-e87ceb66.js";
import "./app-data-475c97b4.js";
import "./client-only-29ef7f45.js";
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
      subTitle: "About us",
      title: "關於我們",
      text: "About Us"
    };
    useHead({
      titleTemplate: `%s - About`,
      bodyAttrs: {
        class: "main-bg"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonNavbar = __nuxt_component_0;
      const _component_InnerPagesHeader = __nuxt_component_1;
      const _component_InnerPagesAboutStory = __nuxt_component_2;
      const _component_InnerPagesAboutServices = __nuxt_component_2$1;
      const _component_InnerPagesAboutIntro = __nuxt_component_4;
      const _component_DigitalAgencyTestimonials = __nuxt_component_5;
      const _component_StartupTeam = __nuxt_component_6;
      const _component_InnerPagesAboutClients = __nuxt_component_7;
      const _component_StartupCallToAction = __nuxt_component_4$1;
      const _component_StartupFooter = __nuxt_component_2$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CommonNavbar, null, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_InnerPagesHeader, { data: headerMetadata }, null, _parent));
      _push(ssrRenderComponent(_component_InnerPagesAboutStory, null, null, _parent));
      _push(ssrRenderComponent(_component_InnerPagesAboutServices, null, null, _parent));
      _push(ssrRenderComponent(_component_InnerPagesAboutIntro, null, null, _parent));
      _push(ssrRenderComponent(_component_DigitalAgencyTestimonials, { mainColor: true }, null, _parent));
      _push(ssrRenderComponent(_component_StartupTeam, null, null, _parent));
      _push(ssrRenderComponent(_component_InnerPagesAboutClients, null, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dark/page-about/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-89ddbf0b.js.map
