import { resolveComponent, useSSRContext } from "vue";
import "vue-router";
import "./index-e12b288f.js";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
import "ufo";
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
//# sourceMappingURL=index-fe684cc6.js.map
