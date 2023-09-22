import { resolveComponent, useSSRContext } from 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/vue/server-renderer/index.mjs';
import { u as useHead } from '../server.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/hookable/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/unctx/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/h3/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/unhead/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/ufo/dist/index.mjs';
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
      titleTemplate: `%s - Freelancer`,
      bodyAttrs: {
        class: "home-freelancer main-bg"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FreelancerNavbar = resolveComponent("FreelancerNavbar");
      const _component_FreelancerHeader = resolveComponent("FreelancerHeader");
      const _component_FreelancerMarq = resolveComponent("FreelancerMarq");
      const _component_FreelancerServices = resolveComponent("FreelancerServices");
      const _component_FreelancerIntro = resolveComponent("FreelancerIntro");
      const _component_FreelancerPortfolio = resolveComponent("FreelancerPortfolio");
      const _component_FreelancerSkills = resolveComponent("FreelancerSkills");
      const _component_FreelancerTestimonials = resolveComponent("FreelancerTestimonials");
      const _component_FreelancerBlog = resolveComponent("FreelancerBlog");
      const _component_FreelancerContact = resolveComponent("FreelancerContact");
      const _component_FreelancerFooter = resolveComponent("FreelancerFooter");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_FreelancerNavbar, null, null, _parent));
      _push(ssrRenderComponent(_component_FreelancerHeader, null, null, _parent));
      _push(`<main class="position-re">`);
      _push(ssrRenderComponent(_component_FreelancerMarq, null, null, _parent));
      _push(ssrRenderComponent(_component_FreelancerServices, null, null, _parent));
      _push(ssrRenderComponent(_component_FreelancerIntro, null, null, _parent));
      _push(ssrRenderComponent(_component_FreelancerPortfolio, null, null, _parent));
      _push(ssrRenderComponent(_component_FreelancerSkills, null, null, _parent));
      _push(ssrRenderComponent(_component_FreelancerTestimonials, null, null, _parent));
      _push(ssrRenderComponent(_component_FreelancerBlog, null, null, _parent));
      _push(ssrRenderComponent(_component_FreelancerContact, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_FreelancerFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dark/home-freelancer/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-d575c249.mjs.map
