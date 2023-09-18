import { _ as __nuxt_component_0 } from "./Navbar-86353f14.js";
import { _ as __nuxt_component_1, a as __nuxt_component_2, b as __nuxt_component_3, c as __nuxt_component_4, d as __nuxt_component_5, e as __nuxt_component_6, f as __nuxt_component_8, g as __nuxt_component_9 } from "./Blog-cb6ae24c.js";
import { _ as __nuxt_component_6$1 } from "./Team-e84209ad.js";
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
import "./sq1-e08776a9.js";
import "./1-645454db.js";
import "./ModalVideo-2460fa41.js";
import "./client-only-29ef7f45.js";
import "destr";
import "devalue";
import "klona";
import "swiper";
import "./app-data-475c97b4.js";
import "unhead";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "h3";
import "@unhead/ssr";
import "@unhead/shared";
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
      const _component_StartupHeader = __nuxt_component_1;
      const _component_StartupIntro = __nuxt_component_2;
      const _component_StartupMarq = __nuxt_component_3;
      const _component_StartupServices = __nuxt_component_4;
      const _component_StartupPortfolio = __nuxt_component_5;
      const _component_StartupTestimonials = __nuxt_component_6;
      const _component_StartupTeam = __nuxt_component_6$1;
      const _component_StartupClients = __nuxt_component_8;
      const _component_StartupBlog = __nuxt_component_9;
      const _component_StartupCallToAction = __nuxt_component_4$1;
      const _component_StartupFooter = __nuxt_component_2$1;
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
//# sourceMappingURL=index-cbf106f9.js.map
