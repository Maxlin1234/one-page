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
      titleTemplate: `%s - Startup`,
      bodyAttrs: {
        class: "home-startup main-bg"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonNavbar = __nuxt_component_0;
      const _component_StartupHeader = resolveComponent("StartupHeader");
      const _component_StartupIntro = resolveComponent("StartupIntro");
      const _component_StartupMarq = resolveComponent("StartupMarq");
      const _component_StartupServices = resolveComponent("StartupServices");
      const _component_StartupPortfolio = resolveComponent("StartupPortfolio");
      const _component_StartupTestimonials = resolveComponent("StartupTestimonials");
      const _component_StartupTeam = resolveComponent("StartupTeam");
      const _component_StartupClients = resolveComponent("StartupClients");
      const _component_StartupBlog = resolveComponent("StartupBlog");
      const _component_StartupCallToAction = resolveComponent("StartupCallToAction");
      const _component_StartupFooter = resolveComponent("StartupFooter");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CommonNavbar, {
        mainBg: true,
        noStatic: true,
        lightMode: true
      }, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_StartupHeader, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_StartupIntro, null, null, _parent));
      _push(ssrRenderComponent(_component_StartupMarq, null, null, _parent));
      _push(ssrRenderComponent(_component_StartupServices, null, null, _parent));
      _push(ssrRenderComponent(_component_StartupPortfolio, null, null, _parent));
      _push(ssrRenderComponent(_component_StartupTestimonials, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_StartupTeam, null, null, _parent));
      _push(ssrRenderComponent(_component_StartupClients, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_StartupBlog, null, null, _parent));
      _push(ssrRenderComponent(_component_StartupCallToAction, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_StartupFooter, { lightMode: true }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/light/home-startup/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-1afd80d6.js.map
