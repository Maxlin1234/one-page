import { _ as __nuxt_component_0 } from "./Navbar-86353f14.js";
import { _ as __nuxt_component_1 } from "./Header-ffb5524f.js";
import { _ as __nuxt_component_2 } from "./4Col-1ace234f.js";
import { _ as __nuxt_component_2$1 } from "./Footer-d5f7be9e.js";
import "./index-e12b288f.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useHead } from "../server.mjs";
import "./nuxt-link-6bdec6f5.js";
import "ufo";
import "hookable";
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
    const metadata = {
      subTitle: "Our Works",
      title: "作品介紹"
    };
    useHead({
      titleTemplate: `%s - Portfolio Masonry 4 Col`,
      bodyAttrs: {
        class: "main-bg"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonNavbar = __nuxt_component_0;
      const _component_PortfolioHeader = __nuxt_component_1;
      const _component_PortfolioMasonry4Col = __nuxt_component_2;
      const _component_StartupFooter = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CommonNavbar, null, null, _parent));
      _push(`<main class="main-bg">`);
      _push(ssrRenderComponent(_component_PortfolioHeader, { data: metadata }, null, _parent));
      _push(ssrRenderComponent(_component_PortfolioMasonry4Col, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_StartupFooter, { subBg: true }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dark/portfolio-masonry-4/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-ebed9ca3.js.map
