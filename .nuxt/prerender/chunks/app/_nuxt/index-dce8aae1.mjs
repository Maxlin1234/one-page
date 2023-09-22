import { _ as __nuxt_component_0 } from './Navbar-76f6d3e1.mjs';
import { resolveComponent, useSSRContext } from 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/vue/index.mjs';
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
        noStatic: true
      }, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_StartupHeader, null, null, _parent));
      _push(ssrRenderComponent(_component_StartupIntro, null, null, _parent));
      _push(ssrRenderComponent(_component_StartupMarq, null, null, _parent));
      _push(ssrRenderComponent(_component_StartupServices, null, null, _parent));
      _push(ssrRenderComponent(_component_StartupPortfolio, null, null, _parent));
      _push(ssrRenderComponent(_component_StartupTestimonials, null, null, _parent));
      _push(ssrRenderComponent(_component_StartupTeam, null, null, _parent));
      _push(ssrRenderComponent(_component_StartupClients, null, null, _parent));
      _push(ssrRenderComponent(_component_StartupBlog, null, null, _parent));
      _push(ssrRenderComponent(_component_StartupCallToAction, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_StartupFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dark/home-startup/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-dce8aae1.mjs.map
