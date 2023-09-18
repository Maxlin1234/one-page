import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2, c as __nuxt_component_3, d as __nuxt_component_4, e as __nuxt_component_5, f as __nuxt_component_6, g as __nuxt_component_7, h as __nuxt_component_8, i as __nuxt_component_9, j as __nuxt_component_10 } from "./Footer-bf433149.js";
import { useSSRContext } from "vue";
import "vue-router";
import "./index-e12b288f.js";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { u as useHead } from "../server.mjs";
import "./logo-light-8117e658.js";
import "./nuxt-link-6bdec6f5.js";
import "ufo";
import "hookable";
import "./circle-star-379b5691.js";
import "./StatementSplitter-e87ceb66.js";
import "./client-only-29ef7f45.js";
import "swiper";
import "./app-data-475c97b4.js";
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
    useHead({
      titleTemplate: `%s - Freelancer`,
      bodyAttrs: {
        class: "home-freelancer main-bg"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FreelancerNavbar = __nuxt_component_0;
      const _component_FreelancerHeader = __nuxt_component_1;
      const _component_FreelancerMarq = __nuxt_component_2;
      const _component_FreelancerServices = __nuxt_component_3;
      const _component_FreelancerIntro = __nuxt_component_4;
      const _component_FreelancerPortfolio = __nuxt_component_5;
      const _component_FreelancerSkills = __nuxt_component_6;
      const _component_FreelancerTestimonials = __nuxt_component_7;
      const _component_FreelancerBlog = __nuxt_component_8;
      const _component_FreelancerContact = __nuxt_component_9;
      const _component_FreelancerFooter = __nuxt_component_10;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_FreelancerNavbar, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_FreelancerHeader, null, null, _parent));
      _push(`<main class="position-re">`);
      _push(ssrRenderComponent(_component_FreelancerMarq, null, null, _parent));
      _push(ssrRenderComponent(_component_FreelancerServices, { lightMode: true }, null, _parent));
      _push(ssrRenderComponent(_component_FreelancerIntro, null, null, _parent));
      _push(ssrRenderComponent(_component_FreelancerPortfolio, null, null, _parent));
      _push(ssrRenderComponent(_component_FreelancerSkills, null, null, _parent));
      _push(ssrRenderComponent(_component_FreelancerTestimonials, null, null, _parent));
      _push(ssrRenderComponent(_component_FreelancerBlog, null, null, _parent));
      _push(ssrRenderComponent(_component_FreelancerContact, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_FreelancerFooter, { lightMode: true }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/light/home-freelancer/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-7434dfa9.js.map
