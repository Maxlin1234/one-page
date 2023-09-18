import { _ as __nuxt_component_0 } from "./Navbar-86353f14.js";
import { _ as __nuxt_component_1, a as __nuxt_component_2, b as __nuxt_component_3 } from "./Testimonials-f53e4b1f.js";
import { _ as __nuxt_component_4 } from "./CallToAction-9f22715c.js";
import { _ as __nuxt_component_2$1 } from "./Footer-d5f7be9e.js";
import "./index-e12b288f.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useHead } from "../server.mjs";
import "./nuxt-link-6bdec6f5.js";
import "ufo";
import "hookable";
import "./client-only-29ef7f45.js";
import "swiper";
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
      titleTemplate: `%s - Team`,
      bodyAttrs: {
        class: "main-bg"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonNavbar = __nuxt_component_0;
      const _component_InnerPagesTeamHeader = __nuxt_component_1;
      const _component_InnerPagesTeamMembers = __nuxt_component_2;
      const _component_InnerPagesTeamTestimonials = __nuxt_component_3;
      const _component_StartupCallToAction = __nuxt_component_4;
      const _component_StartupFooter = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CommonNavbar, null, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_InnerPagesTeamHeader, null, null, _parent));
      _push(ssrRenderComponent(_component_InnerPagesTeamMembers, null, null, _parent));
      _push(ssrRenderComponent(_component_InnerPagesTeamTestimonials, null, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dark/page-team/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-549e974c.js.map
