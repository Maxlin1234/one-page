import { _ as __nuxt_component_0 } from "./Navbar-76f6d3e1.js";
import { _ as __nuxt_component_1 } from "./Header-ffb5524f.js";
import { _ as __nuxt_component_2 } from "./3Col-47da5553.js";
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
    const metadata = {
      subTitle: "Our Works",
      title: "Classic Grid 3."
    };
    useHead({
      titleTemplate: `%s - Portfolio Classic 3 Col`,
      bodyAttrs: {
        class: "main-bg"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonNavbar = __nuxt_component_0;
      const _component_PortfolioHeader = __nuxt_component_1;
      const _component_PortfolioClassicGrid3Col = __nuxt_component_2;
      const _component_StartupFooter = resolveComponent("StartupFooter");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CommonNavbar, { lightMode: true }, null, _parent));
      _push(`<main class="main-bg">`);
      _push(ssrRenderComponent(_component_PortfolioHeader, { data: metadata }, null, _parent));
      _push(ssrRenderComponent(_component_PortfolioClassicGrid3Col, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_StartupFooter, {
        subBg: true,
        lightMode: true
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/light/portfolio-grid-3/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-0d799a16.js.map
