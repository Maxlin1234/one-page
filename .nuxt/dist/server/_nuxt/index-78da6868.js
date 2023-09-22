import { _ as __nuxt_component_0 } from "./Navbar-76f6d3e1.js";
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
      titleTemplate: `%s - Creative Agency`,
      bodyAttrs: {
        class: "sub-bg"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonNavbar = __nuxt_component_0;
      const _component_CreativeAgencyHeader = resolveComponent("CreativeAgencyHeader");
      const _component_CreativeAgencyMarq = resolveComponent("CreativeAgencyMarq");
      const _component_CreativeAgencyIntro = resolveComponent("CreativeAgencyIntro");
      const _component_CreativeAgencySectionImage = resolveComponent("CreativeAgencySectionImage");
      const _component_CreativeAgencyServices = resolveComponent("CreativeAgencyServices");
      const _component_CreativeAgencyPortfolio = resolveComponent("CreativeAgencyPortfolio");
      const _component_CreativeAgencyTestimonials = resolveComponent("CreativeAgencyTestimonials");
      const _component_CreativeAgencyTeam = resolveComponent("CreativeAgencyTeam");
      const _component_CreativeAgencyHzScroll = resolveComponent("CreativeAgencyHzScroll");
      const _component_CreativeAgencyBlog = resolveComponent("CreativeAgencyBlog");
      const _component_CreativeAgencyFooter = resolveComponent("CreativeAgencyFooter");
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
//# sourceMappingURL=index-78da6868.js.map
