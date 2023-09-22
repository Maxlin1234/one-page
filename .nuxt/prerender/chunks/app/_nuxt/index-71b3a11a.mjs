import { _ as __nuxt_component_0 } from './Navbar-76f6d3e1.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_2, b as __nuxt_component_3, c as __nuxt_component_4, d as __nuxt_component_5, e as __nuxt_component_6, f as __nuxt_component_7, g as __nuxt_component_8, h as __nuxt_component_9, i as __nuxt_component_10 } from './Footer-41dbe6a0.mjs';
import { onUnmounted, mergeProps, useSSRContext } from 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/vue/server-renderer/index.mjs';
import { u as useHead } from '../server.mjs';
import '../../renderer.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/h3/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/devalue/index.js';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/ufo/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/destr/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/hookable/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/scule/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/klona/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/defu/dist/defu.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/ohash/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/radix3/dist/index.mjs';
import './nuxt-link-6bdec6f5.mjs';
import './client-only-29ef7f45.mjs';
import './app-data-475c97b4.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/unctx/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/unhead/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/vue-router/dist/vue-router.node.mjs';

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
        noStatic: true
      }, null, _parent));
      _push(`<div id="smooth-content"><main class="main-bg">`);
      _push(ssrRenderComponent(_component_HomeMainHeader, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeMainAbout, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeMainMarq, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeMainClients, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeMainServices, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeMainWorks, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeMainServicesTabs, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeMainTestimonials, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeMainBlog, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_HomeMainFooter, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dark/home-main/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-71b3a11a.mjs.map
