import { _ as __nuxt_component_0 } from "./Navbar-86353f14.js";
import { _ as __nuxt_component_1, a as __nuxt_component_2, b as __nuxt_component_3, c as __nuxt_component_4, d as __nuxt_component_5, e as __nuxt_component_6, f as __nuxt_component_7, g as __nuxt_component_8, h as __nuxt_component_9, i as __nuxt_component_10 } from "./Footer-fe3a2770.js";
import { onUnmounted, mergeProps, useSSRContext } from "vue";
import "vue-router";
import "./index-e12b288f.js";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useHead } from "../server.mjs";
import "./nuxt-link-6bdec6f5.js";
import "ufo";
import "hookable";
import "destr";
import "devalue";
import "klona";
import "./ModalVideo-2460fa41.js";
import "./client-only-29ef7f45.js";
import "./components-bd5aef6c.js";
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
      titleTemplate: `%s - Main`,
      bodyAttrs: {
        class: "home-main-crev main-bg"
      }
    });
    function handleResize() {
      if (window.innerWidth < 991 && document.querySelector(".thecontainer").style.maxHeight) {
        location.reload();
      }
      if (window.innerWidth > 991 && !document.querySelector(".thecontainer").style.maxHeight) {
        gsap.registerPlugin(ScrollTrigger);
        let sections = gsap.utils.toArray(".panel");
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".thecontainer",
            pin: true,
            scrub: 1,
            end: () => "+=" + document.querySelector(".thecontainer").offsetWidth
          }
        });
      }
    }
    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonNavbar = __nuxt_component_0;
      const _component_HomeMainHeader = __nuxt_component_1;
      const _component_HomeMainAbout = __nuxt_component_2;
      const _component_HomeMainMarq = __nuxt_component_3;
      const _component_HomeMainClients = __nuxt_component_4;
      const _component_HomeMainServices = __nuxt_component_5;
      const _component_HomeMainWorks = __nuxt_component_6;
      const _component_HomeMainServicesTabs = __nuxt_component_7;
      const _component_HomeMainTestimonials = __nuxt_component_8;
      const _component_HomeMainBlog = __nuxt_component_9;
      const _component_HomeMainFooter = __nuxt_component_10;
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "smooth-wrapper" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_CommonNavbar, {
        mainBg: true,
        noStatic: true,
        lightMode: true
      }, null, _parent));
      _push(`<div id="smooth-content"><main class="main-bg">`);
      _push(ssrRenderComponent(_component_HomeMainHeader, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeMainAbout, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeMainMarq, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeMainClients, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_HomeMainServices, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_HomeMainWorks, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeMainServicesTabs, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_HomeMainTestimonials, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_HomeMainBlog, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_HomeMainFooter, { lightMode: true }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/light/home-main/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-b37941e9.js.map
