import { b as buildAssetsURL } from '../../renderer.mjs';
import { useSSRContext, mergeProps } from 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderStyle, ssrRenderAttr } from 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/vue/server-renderer/index.mjs';

const _sfc_main$1 = {
  __name: "Header",
  __ssrInlineRender: true,
  props: ["subBg", "data"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: `page-header section-padding pb-0 ${__props.subBg ? "sub-bg" : ""}`
      }, _attrs))}><div class="container mt-80"><div class="row"><div class="col-lg-8"><div class="caption"><h6 class="sub-title">${ssrInterpolate(__props.data.subTitle)}</h6><h1 class="fz-55">${ssrInterpolate(__props.data.title)}</h1></div></div></div><div class="row"><div class="col-lg-5 offset-lg-4"><div class="text mt-30"></div></div></div></div><div class="main-marq xlrg section-padding pb-0"><div class="slide-har st1"><div class="box"><!--[-->`);
      ssrRenderList(new Array(5).fill(), (_, i) => {
        _push(`<div class="item"><h4>${ssrInterpolate(__props.data.text)}</h4></div>`);
      });
      _push(`<!--]--></div><div class="box"><!--[-->`);
      ssrRenderList(new Array(5).fill(), (_, i) => {
        _push(`<div class="item"><h4>${ssrInterpolate(__props.data.text)}</h4></div>`);
      });
      _push(`<!--]--></div></div></div></header>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InnerPages/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _imports_0 = "" + buildAssetsURL("FVL2022.ebece56a.mp4");
const _sfc_main = {
  __name: "Services",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "serv-box section-padding" }, _attrs))}><div class="container"><div class="sec-lg-head mb-80"><div class="row"><div class="col-lg-8"><div class="position-re"><a href="https://www.youtube.com/@C-LAB"><h6 class="dot-titl-non colorbg-3 mb-10">Youtube</h6></a><h2 class="fz-60 fw-700">\u5BA3\u50B3\u5F71\u7247</h2></div></div></div></div><div class="video" style="${ssrRenderStyle({ "position": "relative", "padding-bottom": "56.25%", "height": "0" })}"><video${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle({ "position": "absolute", "top": "0", "left": "0", "width": "100%", "height": "100%" })}" controls></video></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InnerPages/About/Services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main;

export { __nuxt_component_1 as _, __nuxt_component_2 as a };
//# sourceMappingURL=Services-1258f68f.mjs.map
