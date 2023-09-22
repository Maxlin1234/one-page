import { _ as __nuxt_component_0, a as __nuxt_component_1 } from './Menu-300ddcd2.mjs';
import { _ as __nuxt_component_2 } from './InteractiveCenter-ccffbf54.mjs';
import { useSSRContext } from 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/vue/server-renderer/index.mjs';
import { u as useHead } from '../server.mjs';
import './nuxt-link-6bdec6f5.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/ufo/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/hookable/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/unctx/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/h3/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/unhead/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/destr/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/scule/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/klona/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/ohash/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/radix3/dist/index.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      titleTemplate: `%s - Interactive`,
      bodyAttrs: {
        class: "main-bg inter-center"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ShowcasesNavigation = __nuxt_component_0;
      const _component_ShowcasesMenu = __nuxt_component_1;
      const _component_ShowcasesInteractiveCenter = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_ShowcasesNavigation, { alwaysDark: true }, null, _parent));
      _push(ssrRenderComponent(_component_ShowcasesMenu, { lightMode: true }, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_ShowcasesInteractiveCenter, null, null, _parent));
      _push(`</main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/light/showcase-interactive-center/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-eb396cbb.mjs.map
