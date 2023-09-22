import { _ as __nuxt_component_0 } from "./Navbar-76f6d3e1.js";
import { _ as __nuxt_component_1, a as __nuxt_component_2$1 } from "./Services-1258f68f.js";
import { _ as __nuxt_component_2, a as __nuxt_component_4, b as __nuxt_component_5 } from "./Clients-99503473.js";
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
    const headerMetadata = {
      subTitle: "WHO WE ARE ?",
      title: "We're a digital agency based in Valencia.",
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
      const _component_DigitalAgencyTestimonials = resolveComponent("DigitalAgencyTestimonials");
      const _component_StartupTeam = resolveComponent("StartupTeam");
      const _component_InnerPagesAboutClients = __nuxt_component_5;
      const _component_StartupCallToAction = resolveComponent("StartupCallToAction");
      const _component_StartupFooter = resolveComponent("StartupFooter");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CommonNavbar, { lightMode: true }, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_InnerPagesHeader, { data: headerMetadata }, null, _parent));
      _push(ssrRenderComponent(_component_InnerPagesAboutStory, null, null, _parent));
      _push(ssrRenderComponent(_component_InnerPagesAboutServices, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_InnerPagesAboutIntro, null, null, _parent));
      _push(ssrRenderComponent(_component_DigitalAgencyTestimonials, { mainColor: true }, null, _parent));
      _push(ssrRenderComponent(_component_StartupTeam, null, null, _parent));
      _push(ssrRenderComponent(_component_InnerPagesAboutClients, { lightMode: true }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/light/page-about/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-e875d97e.js.map
