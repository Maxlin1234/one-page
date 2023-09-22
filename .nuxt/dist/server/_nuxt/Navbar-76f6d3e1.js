import { _ as __nuxt_component_0$1 } from "./nuxt-link-6bdec6f5.js";
import { onUnmounted, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderComponent } from "vue/server-renderer";
const _imports_0 = "" + __publicAssetsURL("dark/assets/imgs/LOGO.png");
const _imports_1 = "" + __publicAssetsURL("dark/assets/imgs/LOGOwhite.png");
const _sfc_main = {
  __name: "Navbar",
  __ssrInlineRender: true,
  props: ["lightMode", "mainBg", "subBg", "noStatic", "curve"],
  setup(__props) {
    function handleScroll() {
      const bodyScroll = window.scrollY;
      const navbar = document.querySelector(".navbar");
      if (bodyScroll > 300)
        navbar.classList.add("nav-scroll");
      else
        navbar.classList.remove("nav-scroll");
    }
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: `navbar navbar-expand-lg ${__props.curve ? "nav-crev" : ""} ${__props.noStatic ? "" : "static"} ${__props.mainBg ? "main-bg" : ""} ${__props.subBg ? "sub-bg" : ""}`
      }, _attrs))}><div class="container"><a class="logo icon-img-100" href="#">`);
      if (__props.lightMode) {
        _push(`<img${ssrRenderAttr("src", _imports_0)} alt="logo">`);
      } else {
        _push(`<img${ssrRenderAttr("src", _imports_1)} style="${ssrRenderStyle({ "width": "160px", "height": "24px" })}" alt="logo">`);
      }
      _push(`</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="icon-bar"><i class="fas fa-bars"></i></span></button><div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent"><ul class="navbar-nav"><li class="nav-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        to: "/dark/home-onepage"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="rolling-text"${_scopeId}>首頁</span>`);
          } else {
            return [
              createVNode("span", { class: "rolling-text" }, "首頁")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        to: `/${__props.lightMode ? "light" : "dark"}/page-about`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="rolling-text"${_scopeId}>關於我們</span>`);
          } else {
            return [
              createVNode("span", { class: "rolling-text" }, "關於我們")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="nav-item">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link",
        to: `/${__props.lightMode ? "light" : "dark"}/portfolio-grid-2`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="rolling-text"${_scopeId}>作品分類</span>`);
          } else {
            return [
              createVNode("span", { class: "rolling-text" }, "作品分類")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="search-form"><div class="form-group"><input type="text" name="search" placeholder="Search"><button><span class="pe-7s-search"></span></button></div><div class="search-icon"><span class="pe-7s-search open-search"></span><span class="pe-7s-close close-search"></span></div></div></div></nav>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Common/Navbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=Navbar-76f6d3e1.js.map
