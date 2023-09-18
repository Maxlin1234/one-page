import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2 } from "./ProgressScroll-ff17b6ef.js";
import "./index-e12b288f.js";
import { useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { u as useHead } from "../server.mjs";
import "unhead";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "devalue";
import "h3";
import "@unhead/ssr";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "destr";
import "defu";
const _sfc_main = {
  __name: "preview",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      link: [
        { rel: "stylesheet", href: "/landing-preview/css/preview-style.css" }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonLoader = __nuxt_component_0;
      const _component_CommonCursor = __nuxt_component_1;
      const _component_CommonProgressScroll = __nuxt_component_2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_CommonLoader, null, null, _parent));
      _push(ssrRenderComponent(_component_CommonCursor, null, null, _parent));
      _push(ssrRenderComponent(_component_CommonProgressScroll, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/preview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=preview-3f720312.js.map
