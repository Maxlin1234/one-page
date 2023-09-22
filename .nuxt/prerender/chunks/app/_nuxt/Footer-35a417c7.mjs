import { p as publicAssetsURL } from '../../renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-6bdec6f5.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, openBlock, createBlock, onUnmounted, unref, createTextVNode, toDisplayString } from 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'file:///Users/linhankuan/Main_Files%E6%8B%B7%E8%B2%9D/geekfolio_nuxtjs/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { i as isInView } from './isInView-318b554b.mjs';
import { _ as __nuxt_component_0$1 } from './client-only-29ef7f45.mjs';
import { d as data$2 } from './portfolio-5847a98a.mjs';

const _imports_0$2 = "" + publicAssetsURL("dark/assets/imgs/background/font.png");
const _sfc_main$b = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: "header-main full-height valign bg-img parallaxie",
        "data-background": "/dark/assets/imgs/background/14.jpg",
        "data-overlay-dark": "2"
      }, _attrs))}><div class="container ontop"><div class="row"><div class="col-lg-8"><div class="caption" style="${ssrRenderStyle({ "margin-bottom": "150px" })}"><div class="fonts"><img${ssrRenderAttr("src", _imports_0$2)}></div></div></div><div class="col-lg-4 d-flex align-items-end justify-content-end justify-end"><div class="d-flex align-items-center"><div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/dark/portfolio-grid",
        class: "hover-this"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="circle-button hover-anim"${_scopeId}><div class="rotate-circle fz-30 text-u"${_scopeId}><svg class="textcircle" viewBox="0 0 500 500"${_scopeId}><defs${_scopeId}><path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"${_scopeId}></path></defs><text${_scopeId}><textPath xlink:href="#textcircle" textLength="900"${_scopeId}>DOME 3.0 - DOME 3.0 -</textPath></text></svg></div><div class="arrow"${_scopeId}><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z" fill="currentColor"${_scopeId}></path></svg></div></div>`);
          } else {
            return [
              createVNode("div", { class: "circle-button hover-anim" }, [
                createVNode("div", { class: "rotate-circle fz-30 text-u" }, [
                  (openBlock(), createBlock("svg", {
                    class: "textcircle",
                    viewBox: "0 0 500 500"
                  }, [
                    createVNode("defs", null, [
                      createVNode("path", {
                        id: "textcircle",
                        d: "M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                      })
                    ]),
                    createVNode("text", null, [
                      createVNode("textPath", {
                        "xlink:href": "#textcircle",
                        textLength: "900"
                      }, "DOME 3.0 - DOME 3.0 -")
                    ])
                  ]))
                ]),
                createVNode("div", { class: "arrow" }, [
                  (openBlock(), createBlock("svg", {
                    width: "18",
                    height: "18",
                    viewBox: "0 0 18 18",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",
                      fill: "currentColor"
                    })
                  ]))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div><h6 class="sub-title">09.22 - 10.01<br>10.14 - 12.24</h6></div></div></div></div></div></header>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OnePage/Header.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$b;
const _imports_0$1 = "" + publicAssetsURL("dark/assets/imgs/about/\u9ED1\u5DDD.jpg");
const _sfc_main$a = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))}><div class="row md-marg"><div class="col-lg-6 valign"><div class="cont md-mb50"><h6 class="sub-title opacity-8 wow fadeInUp"></h6><h2 class="d-slideup wow"><span class="sideup-text"><span class="up-text">FUTURE VISION LAB 2023<span class="sub-font"></span></span></span><span class="sideup-text"><span class="up-text"></span></span></h2><div class="text mt-20 wow fadeIn" data-wow-delay=".5s"><p>\u81FA\u7063\u7576\u4EE3\u6587\u5316\u5BE6\u9A57\u5834\uFF08C-LAB\uFF09\u81EA 2020 \u5E74\u6B63\u5F0F\u555F\u52D5\u300C\u79D1\u6280\u5A92\u9AD4\u5BE6\u9A57\u5E73\u53F0\u300D\uFF0C\u8457\u91CD\u65BC\u5A92\u9AD4\u5BE6\u9A57\u5275\u65B0\u8207\u793E\u6703\u93C8\u7D50\uFF0C\u4EE5\u8DE8\u57DF\u3001\u5171\u5275\u3001\u5354\u4F5C\u65B9\u5F0F\uFF0C\u6253\u9020\u6587\u5316\u8207\u79D1\u6280\u7684\u5BE6\u9A57\u5E73\u53F0\u3002 \u6574\u5408\u81FA\u7063\u6587\u5316\u8207\u79D1\u6280\u7684\u8CC7\u6E90\uFF0C\u5A92\u5408\u6587\u5316\u8207\u79D1\u6280\u9818\u57DF\u5171\u5275\uFF0C\u5176\u4E2D\u300C\u672A\u4F86\u8996\u89BA\u5BE6\u9A57\u5BA4\u300D\u63A2\u7D22\u79D1\u6280\u5A92\u9AD4\u7684\u8996\u89BA\u6975\u9650\u70BA\u5BE6\u9A57\u76EE\u6A19\uFF0C\u4EE5\u81FA\u7063\u5149\u96FB\u6280\u8853\u8207\u7522\u696D\u70BA\u57FA\u790E\uFF0C\u8F14\u4EE5\u5F71\u50CF\u7684\u904B\u7B97\u3001\u5275\u4F5C\u8207\u8EDF\u786C\u9AD4\u6574\u5408\uFF0C\u4F01\u5716\u52FE\u52D2\u51FA\u672A\u4F86\u8996\u89BA\u7684\u8DE8\u57DF\u9858\u666F\u3002 </p></div></div></div><div class="col-lg-6"><div class="img"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div></div></div></div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OnePage/About.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$9 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OnePage/Marq.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$8 = {
  __name: "Services",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "services section-padding pb-0 block-pattern" }, _attrs))}><div class="container"><div class="sec-head mb-80"><div class="row"><div class="col-lg-5"><h6 class="sub-title opacity-8 wow fadeInUp"></h6><h2 class="d-rotate wow"></h2></div><div class="col-lg-4 d-flex align-items-center"><div class="text d-rotate wow md-mb30"><p class="rotate-text"></p></div></div></div></div></div><div class="container-fluid rest"><div class="serv-items-crev"></div></div><div class="bg-pattern bg-img"${ssrRenderAttr("data-background", `${__props.lightMode ? "/light/" : "/dark/"}assets/imgs/patterns/bg-line-1.svg`)}></div></section>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OnePage/Services.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$8;
const data$1 = [
  {
    id: 1,
    image: "assets/imgs/portfolio/gallery/1.jpg",
    number: "01.",
    type: "TAICCA Spotlight",
    title: "\u79FB\u52D5\u6545\u4E8B\u5C4B\u300A\u6708\u7403\u5EA6\u5047\u6751\u300B",
    text: "\u79FB\u52D5\u6545\u4E8B\u5C4B\u662F\u4E00\u500B\u8DE8\u8D8A\u908A\u5883\u70BA\u6982\u5FF5\u5275\u4F5C\u7684\u89AA\u5B50\u5287\u5834\uFF0C\u91DD\u5C0D\u5152\u7AE5\u85DD\u8853\u53CA\u79D1\u6280\u4E92\u52D5\u767C\u5C55\u5275\u65B0\u9AD4\u9A57\uFF0C\u7D50\u5408\u81FA\u7063\u5E74\u8F15\u85DD\u8853\u5BB6\u5408\u4F5C\u767C\u5C55\u539F\u5275\u52D5\u756B\uFF0C\u4EE5\u5305\u570D\u89C0\u773E\u7684\u6C89\u6D78\u5F0F\u52D5\u756B\u70BA\u6F14\u51FA\u4E3B\u8EF8\uFF0C\u7531\u5287\u5834\u8AAA\u66F8\u4EBA\u5F15\u9818\u89C0\u773E\u5011\u9032\u5165\u6545\u4E8B\uFF0C\u85C9\u7531\u6A21\u64EC\u60C5\u5883\u914D\u5408\u5287\u5834\u8072\u5149\u7B49\u6578\u4F4D\u5A92\u9AD4\u88DD\u7F6E\uFF0C\u71DF\u9020\u4E00\u500B\u5B8C\u5168\u8EAB\u6B77\u5176\u5883\u3001\u5145\u6EFF\u8C50\u5BCC\u60F3\u50CF\u7684\u5275\u65B0\u5287\u5834\u4E92\u52D5\u9AD4\u9A57\u3002 "
  },
  {
    id: 2,
    image: "assets/imgs/portfolio/gallery/2.jpg",
    number: "02.",
    type: "SAT Fest",
    title: " \u99AC\u723E\u6ED5\u30FB\u827E\u85A9\u514B\u30FB\u5FB7\u5E0C\u723E\u300A\u8702\u6E67\u300B (\u5FB7\u570B) ",
    text: "\u7FA4\u9AD4\u7684\u8702\u6E67\u662F\u4E00\u7A2E\u70BA\u4E86\u751F\u5B58\u800C\u7522\u751F\u7684\u884C\u70BA\u73FE\u8C61\uFF0C\u4F46\u66F4\u591A\u6642\u5019\uFF0C\u5B83\u662F\u6EC5\u7D55\u7684\u524D\u594F\u3002 \u7D50\u7FA4\u98DB\u884C\uFF0C\u5F9E\u5FB7\u570B\u8DE8\u8D8A\u963F\u723E\u5351\u65AF\u5C71\uFF0C\u76F4\u5954\u5730\u4E2D\u6D77\u3002\u5C0F\u578B\u9CE5\u9077\u5F99\u7684\u904E\u7A0B\u4E2D\uFF0C\u8DEF\u7D93\u67AF\u7AED\u3001\u904E\u5EA6\u958B\u767C\u7684\u571F\u5730\u3002\u77E5\u66F4\u9CE5\u3001\u5C71\u96C0\u548C\u9EBB\u96C0\u901A\u5E38\u4E0D\u6703\u9077\u79FB\u5982\u6B64\u9059\u9060\u7684\u8DDD\u96E2\uFF0C\u4F46\u5728\u4E0D\u4E45\u7684\u5C07\u4F86\uFF0C\u9019\u6A23\u7684\u73FE\u8C61\u53EF\u80FD\u6703\u767C\u751F\u3002\u300A\u8702\u6E67\u300B\u9019\u4EF6\u4F5C\u54C1\u5448\u73FE\u7531\u4E09\u7DAD\u5716\u6240\u62FC\u8CBC\u51FA\u7684\u9CE5\u77B0\u8996\u89D2\uFF0C\u5C55\u793A\u6C23\u5019\u8B8A\u5316\u5F8C\u6B50\u6D32\u7684\u90E8\u5206\u6A23\u8C8C\u3002"
  },
  {
    id: 3,
    image: "assets/imgs/portfolio/gallery/3.jpg",
    number: "03.",
    type: "TAICCA Spotlight",
    title: "\u8B1D\u6587\u6BC5\u300A\u5F7C\u5CB8 in DOME\u300B",
    text: "\u8B1D\u6587\u6BC5\u662F\u4E00\u4F4D\u7814\u7A76\u7269\u7406\u8207\u6578\u4F4D\u865B\u64EC\u4E4B\u806F\u7E6B\u6027\u7684\u85DD\u8853\u5275\u4F5C\u8005\u3002\u4ED6\u60F3\u50CF\u51FA\u65B0\u7684\u4E16\u754C\uFF0C\u4E26\u5728\u85DD\u8853\u8A2D\u8A08\u3001\u5EFA\u7BC9\u7A7A\u9593\u3001\u96FB\u8166\u6A21\u64EC\u5716\u50CF\u9593\u5617\u8A66\u5275\u9020\u4E00\u500B\u80FD\u5920\u7522\u751F\u93C8\u7D50\u7684\u8A9E\u8A00\u8207\u7F8E\u5B78\u3002"
  }
];
const _sfc_main$7 = {
  __name: "Portfolio",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    function handleShowTabs() {
      isInView({
        selector: ".portfolio-fixed .sub-bg .cont",
        isElements: true,
        callback(element) {
          element.classList.add("current");
          document.querySelector("#" + element.getAttribute("data-tab")).classList.add("current");
        },
        whenOutOfView(element) {
          element.classList.remove("current");
          document.querySelector("#" + element.getAttribute("data-tab")).classList.remove("current");
        }
      });
      const leftSide = document.getElementById("sticky_item");
      if (!leftSide)
        return;
      const width = leftSide.getBoundingClientRect().width;
      const portfolio = document.querySelector(".portfolio-fixed").getBoundingClientRect();
      if (portfolio.top < 75 && portfolio.height / 2 < portfolio.bottom) {
        leftSide.style.position = "fixed";
        leftSide.style.top = "0px";
        leftSide.style.width = width + "px";
        leftSide.classList.remove("is_stuck");
      } else if (portfolio.height / 2 > portfolio.bottom) {
        leftSide.style.position = "absolute";
        leftSide.style.top = "auto";
        leftSide.style.bottom = "0";
        leftSide.style.width = width + "px";
        leftSide.classList.add("is_stuck");
        document.querySelector(`#tab-${document.querySelectorAll("[data-tab]").length}`).classList.add("current");
      } else {
        leftSide.style.position = "relative";
        leftSide.style.top = "unset";
        leftSide.style.bottom = "unset";
        leftSide.style.width = "auto";
      }
    }
    onUnmounted(() => {
      window.removeEventListener("scroll", handleShowTabs);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio-fixed" }, _attrs))}><div class="container-fluid rest"><div class="row"><div class="col-lg-6 rest" style="${ssrRenderStyle({ "position": "relative" })}"><div class="left" id="sticky_item"><!--[-->`);
      ssrRenderList(unref(data$1), (item, index) => {
        _push(`<div${ssrRenderAttr("id", `tab-${index + 1}`)} class="img bg-img"${ssrRenderAttr("data-background", `${__props.lightMode ? "/light/" : "/dark/"}${item.image}`)}></div>`);
      });
      _push(`<!--]--></div></div><div class="col-lg-6 sub-bg right"><!--[-->`);
      ssrRenderList(unref(data$1), (item, index) => {
        _push(`<div class="${ssrRenderClass(`cont ${index === 0 ? "active" : ""}`)}"${ssrRenderAttr("data-tab", `tab-${index + 1}`)}><div class="img-hiden"><img${ssrRenderAttr("src", `${__props.lightMode ? "/light/" : "/dark/"}${item.image}`)} alt=""></div><span class="sub-title mb-15">${ssrInterpolate(item.number)} ${ssrInterpolate(item.type)}</span><h2 class="mb-15">${ssrInterpolate(item.title)}.</h2><div class="row"><div class="col-md-9"><p>${ssrInterpolate(item.text)}.</p><div class="vew-all mt-50 ml-25"></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OnePage/Portfolio.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$7;
const _imports_0 = "" + publicAssetsURL("dark/assets/imgs/about/sq1.jpg");
const _imports_1 = "" + publicAssetsURL("dark/assets/imgs/about/sq2.jpg");
const _sfc_main$6 = {
  __name: "Intro",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "intro-corp section-padding" }, _attrs))}><div class="container"><div class="row justify-content-around"><div class="col-lg-5 valign md-mb50"><div class="imgs mb-80"><div class="img1 wow fadeInUp"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="img2 wow fadeInLeft"><img${ssrRenderAttr("src", _imports_1)} alt=""></div></div></div><div class="col-lg-5 valign"><div class="cont"><div class="text"><h2 class="d-slideup wow"><span class="sideup-text"><span class="up-text">\u56DB\u5927\u985E\u5225</span></span><span class="sideup-text"></span><span class="sideup-text"></span></h2></div><div class="accordion bord mt-40"><div class="item mb-15 wow fadeInUp" data-wow-delay=".1s"><div class="title"><h6 class="fz-18">TAICCA Spotlight</h6><span class="ico"></span></div><div class="accordion-info"><p class="fz-14">2023 \u81FA\u7063\u6587\u535A\u6703\uFF0CFUTURE VISION LAB 2023\u8207\u6587\u7B56\u9662\u651C\u624B\uFF0C\u5408\u4F5C\u7B56\u5283\u300CTAICCA Spotlight\u55AE\u5143\u300D\uFF0C\u4E26\u5728\u521D\u767B\u5834\u7684 Dome 2.0 \u5C07 4 \u652F\u512A\u79C0\u7684\u53F0\u7063\u539F\u751F\u4F5C\u54C1\u5E36\u7D66\u89C0\u773E\u3002 \u5F9E\u7D50\u5408\u81FA\u7063\u63D2\u756B\u7684\u4E92\u52D5\u5152\u7AE5\u5287\u5834\u3001\u7372\u5F97\u570B\u969B\u5F71\u5C55\u5927\u734E\u80AF\u5B9A\u7684VR\u4F5C\u54C1\u8F49\u8B6F\u3001\u5728\u5730\u7E6A\u672C\u8207\u52D5\u756B\u5718\u968A\u7684\u8DE8\u57DF\u5171\u5275\u3001\u5230\u50B3\u7D71\u85DD\u8853\u8207\u81FA\u7063\u5730\u666F\u7684\u7D50\u5408\uFF0C\u300CTAICCA Spotlight\u300D\u55AE\u5143\u5E0C\u671B\u80FD\u5920\u5E36\u9818\u89C0\u773E\u8E0F\u5165\u4E0D\u4E00\u6A23\u7684\u8996\u89BA\u8207\u8072\u97F3\u9957\u5BB4\uFF0C\u5728\u5168\u65B0\u6253\u9020\u7684\u7A79\u9802\u5287\u5834\u4E2D\uFF0C\u6C89\u6D78\u65BC\u81FA\u7063\u6587\u5316\u8207\u8C50\u76DB\u7684\u5275\u4F5C\u529B\u5E36\u4F86\u7684\u611F\u52D5\u3002 </p></div></div><div class="item mb-15 wow fadeInUp" data-wow-delay=".3s"><div class="title"><h6 class="fz-18">\u5FB5\u4EF6\u4F5C\u54C1</h6><span class="ico"></span></div><div class="accordion-info"><p class="fz-14">\u4F34\u96A8\u786C\u9AD4\u5168\u9762\u5347\u7D1A\u5F8C\uFF0C\u300CFUTURE VISION LAB 2023\u300D\u91DD\u5C0D\u500B\u4EBA\u6216\u5718\u968A\u958B\u653E\u5FB5\u4EF6\uFF0C\u5FB5\u96C6\u6C89\u6D78\u5F71\u97F3\u8207\u8DE8\u57DF\u5C55\u6F14\u4E4B\u4F5C\u54C1\uFF0C\u5C55\u73FE\u81FA\u7063\u84EC\u52C3\u7684\u5275\u4F5C\u52D5\u80FD\u3002</p></div></div><div class="item wow fadeInUp" data-wow-delay=".5s"><div class="title"><h6 class="fz-18">SAT Fest</h6><span class="ico"></span></div><div class="accordion-info"><p class="fz-14">\u4ECA\u5E74\u300C\u79D1\u6280\u5A92\u9AD4\u5BE6\u9A57\u5E73\u53F0\u300D\u8207\u52A0\u62FF\u5927 SAT \u79D1\u6280\u85DD\u8853\u4E2D\u5FC3\uFF08The Society for Arts and Technology\uFF09\u5408\u4F5C\uFF0C\u5C55\u51FA SAT Fest \u85DD\u8853\u7BC0\u7684\u7CBE\u9078\u4F5C\u54C1\u5171 7 \u4EF6\u3002\u81EA 2012 \u5E74\u9996\u5C46\u4EE5\u4F86\uFF0CSAT Fest \u5DF2\u6210\u70BA\u6C88\u6D78\u5F0F\u5275\u4F5C\u7684\u91CD\u8981\u6D3B\u52D5\uFF0C\u70BA\u5BE6\u9A57\u548C\u85DD\u8853\u7684\u5BE6\u8E10\u63D0\u4F9B\u4E86\u5145\u8DB3\u7684\u5275\u4F5C\u8207\u5C55\u6F14\u7A7A\u9593\u3002 SAT Fest \u96C6\u7D50\u4E86\u591A\u5143\u4E14\u98A8\u683C\u5404\u7570\u7684\u7A79\u9802\u6295\u5F71\u7CBE\u9078\u77ED\u7247\uFF0C\u6FC0\u767C\u4E86\u6578\u5343\u540D\u89C0\u773E\u7684\u60F3\u50CF\u529B\uFF0C\u4E26\u5C55\u73FE\u4E86\u4E00\u767E\u591A\u540D\u4F86\u81EA\u52A0\u62FF\u5927\u548C\u570B\u969B\u7684\u8996\u89BA\u548C\u8072\u97F3\u85DD\u8853\u5BB6\u7684\u5275\u4F5C\u5B87\u5B99\u548C\u5275\u610F\u8996\u91CE\u3002</p></div></div><div class="item wow fadeInUp" data-wow-delay=".7s"><div class="title"><h6 class="fz-18">\u7B56\u5283\u9080\u8ACB</h6><span class="ico"></span></div><div class="accordion-info"><p class="fz-14">\u300CFUTURE VISION LAB 2023\u300D\u9080\u8ACB\u66FE\u53C3\u8207FUTURE VISION LAB\u5BE6\u9A57\u8A08\u756B\u7684\u53F0\u7063\u85DD\u8853\u5BB6\u548C\u5275\u4F5C\u5718\u968A\uFF0C\u4EE5\u5176\u8C50\u5BCC\u7684\u6C89\u6D78\u5167\u5BB9\u88FD\u4F5C\u7D93\u9A57\u548C\u5275\u65B0\u7684\u8996\u89D2\uFF0C\u878D\u5408\u4ECA\u5E74\u65B0\u5834\u57DF\u7684\u898F\u683C\uFF0C\u9032\u884C\u5168\u65B0\u88FD\u4F5C\u548C\u539F\u4F5C\u6539\u88FD\u3002 \u5728\u6587\u535A\u6703\u671F\u9593\uFF0C\u5C07\u5C55\u51FA\u5171\u8A08\u5341\u4EF6\u4EE4\u4EBA\u9A5A\u8277\u7684\u4F5C\u54C1\uFF0C\u6DB5\u84CB\u591A\u7A2E\u8868\u73FE\u5F62\u5F0F\uFF0C\u5982\u6F14\u7B97\u751F\u6210\u3001\u5BE6\u9A57\u52D5\u756B\u3001\u96FB\u5F71\u77ED\u7247\u4EE5\u53CA\u5BE6\u9A57\u6027\u5C55\u6F14\uFF0C\u5448\u73FE\u591A\u5143\u800C\u8C50\u5BCC\u7684\u85DD\u8853\u98A8\u8C8C\uFF0C\u5C55\u73FE\u53F0\u7063\u85DD\u8853\u5BB6\u548C\u5275\u4F5C\u5718\u968A\u7684\u5275\u610F\u80FD\u91CF\u3002 </p></div></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OnePage/Intro.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_6 = _sfc_main$6;
const _sfc_main$5 = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "testim-crv section-padding main-colorbg text-dark position-re" }, _attrs))}><div class="container ontop"><div class="row"><div class="col-md-6"><div class="sec-head md-mb50"><h6 class="sub-title wow fadeInUp">ARTIST</h6><h2 class="d-rotate wow"><span class="rotate-text">\u85DD\u8853\u5BB6\u4ECB\u7D39</span></h2></div></div><div class="col-md-6 valign"><div class="swiper-controls testim-controls arrow-out d-flex justify-content-end justify-end-sm full-width"><div class="d-flex"><div class="swiper-button-prev"><span class="left"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z" fill="#1d1d1d"></path></svg></span></div><div class="swiper-button-next ml-50"><span class="right"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2031 10.3281L11.5781 15.9531C11.535 15.9961 11.4839 16.0303 11.4276 16.0536C11.3713 16.077 11.3109 16.089 11.25 16.089C11.1891 16.089 11.1287 16.077 11.0724 16.0536C11.0161 16.0303 10.965 15.9961 10.9219 15.9531C10.8788 15.91 10.8446 15.8588 10.8213 15.8025C10.798 15.7462 10.786 15.6859 10.786 15.6249C10.786 15.564 10.798 15.5036 10.8213 15.4473C10.8446 15.391 10.8788 15.3399 10.9219 15.2968L15.7422 10.4687H3.125C3.00068 10.4687 2.88145 10.4193 2.79354 10.3314C2.70564 10.2435 2.65625 10.1242 2.65625 9.99993C2.65625 9.87561 2.70564 9.75638 2.79354 9.66847C2.88145 9.58056 3.00068 9.53118 3.125 9.53118H15.7422L10.9219 4.70305C10.8349 4.61603 10.786 4.498 10.786 4.37493C10.786 4.25186 10.8349 4.13383 10.9219 4.0468C11.0089 3.95978 11.1269 3.91089 11.25 3.91089C11.3731 3.91089 11.4911 3.95978 11.5781 4.0468L17.2031 9.6718C17.2476 9.71412 17.2829 9.76503 17.3071 9.82143C17.3313 9.87784 17.3438 9.93856 17.3438 9.99993C17.3438 10.0613 17.3313 10.122 17.3071 10.1784C17.2829 10.2348 17.2476 10.2857 17.2031 10.3281Z" fill="#1d1d1d"></path></svg></span></div></div></div></div><div class="col-12 mt-80"><div class="testim-swiper testim-swiper3 to-out">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div></div></div><div class="bg-pattern bg-img bg-repeat" data-background="/dark/assets/imgs/patterns/noise.png"></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OnePage/Testimonials.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_7 = _sfc_main$5;
const _sfc_main$4 = {
  __name: "ImageSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "back-image states bg-img parallaxie",
        "data-background": "/dark/assets/imgs/background/13.jpg",
        "data-overlay-dark": "3"
      }, _attrs))}><div class="container box position-re"><ul class="rest"><li class="sd-dark"><span class="numb">DOME 3.0</span></li><li class="blur"><h5><br>\u6236\u5916\u7A79\u9802\u5287\u5834</h5><span class="icon pe-7s-paper-plane"></span></li></ul></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OnePage/ImageSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_8 = _sfc_main$4;
const _sfc_main$3 = {
  __name: "Team",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio sub-bg section-padding" }, _attrs))}><div class="container"><div class="sec-leter-head mb-80"><div class="d-flex align-items-center"><div class="leter"><h4>P</h4></div><div class="line"></div></div><div class="title"><h6 class="sub-title">\u4F5C\u54C1\u4ECB\u7D39</h6></div></div><div class="row justify-content-center"><div class="col-lg-5"><div class="item md-mb80"><div class="o-hidden"><div class="img imago wow"><a href="project-details1"><img${ssrRenderAttr("src", unref(data$2)[0].image)} alt="\u7121\u6CD5\u986F\u793A\u5716\u7247"></a></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">\u25C9 \u8B1D\u723E\u84CB\xB7\u666E\u7F85\u79D1\u83F2\u8036\u592B\u300A\u8FF7\u5BAE\u300B\uFF08\u5FB7\u570B\uFF09</h6><p>${ssrInterpolate(unref(data$2)[0].type)}</p></div><div class="ml-auto"></div></div></div></div><div class="col-lg-6 valign"><div class="item full-width"><div class="row justify-content-center"><div class="col-lg-8"><div class="o-hidden"><div class="img imago wow"><a href="project-details1"><img${ssrRenderAttr("src", unref(data$2)[1].image)} alt="\u7121\u6CD5\u986F\u793A\u5716\u7247"></a></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1" style="${ssrRenderStyle({ "line-height": "2rem" })}">\u25C9 \u5F17\u6717\u897F\u65AF\xB7\u963F\u4EE3\u723E\xB7\u9EA5\u80AF\u9F4A\u300A\u862D\u82B1\u8207\u871C\u8702\u300B\uFF08\u52A0\u62FF\u5927\uFF09</h6><p>${ssrInterpolate(unref(data$2)[1].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6 valign"><div class="item mt-80 full-width"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><a href="project-details1"><img${ssrRenderAttr("src", unref(data$2)[2].image)} alt=""></a></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">\u25C9 \u99AC\u723E\u6ED5\xB7\u827E\u85A9\u514B\xB7\u5FB7\u5E0C\u723E\u300A\u8702\u6E67\u300B (\u5FB7\u570B) </h6><p>${ssrInterpolate(unref(data$2)[2].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data$2)[3].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">\u25C9 \u5927\u885B\xB7\u52A0\u5FB7\u7D0D\u300A\u5976\u5976\u7684\u623F\u5B50\u300B\uFF08\u52A0\u62FF\u5927\uFF09 </h6><p>${ssrInterpolate(unref(data$2)[3].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data$2)[4].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">\u25C9 \u5F35\u5473\u8FEA\u3001\u6208\u7DAD\u7490\u3001\u8607\u5C11\u79B9\u300A\u661F\u969B\u300B </h6><p>${ssrInterpolate(unref(data$2)[4].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data$2)[5].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1" style="${ssrRenderStyle({ "line-height": "2rem" })}">\u25C9 \u585E\u5DF4\u65AF\u8482\u5B89\u30FB\u62C9\u5E03\u9B6F\u5C3C\u548C\u514B\u840A\u9580\u7279\u30FB\u666E\u6CF0\u683C\u7D0D\u300A\u5091\u8F9B\u7279.XYZ\u300B </h6><p>${ssrInterpolate(unref(data$2)[5].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data$2)[6].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">\u25C9 \u8389\u8FEA\u4E9E\u30FB\u96C5\u79D1\u8AFE\u592B\u65AF\u57FA\u300A\u5C0E\u8AD6\uFF1A\u8A08\u91CF\u7D93\u6FDF\u5B78\u300B</h6><p>${ssrInterpolate(unref(data$2)[6].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data$2)[7].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">\u25C9 \u79FB\u52D5\u6545\u4E8B\u5C4B\u300A\u6708\u7403\u5EA6\u5047\u6751\u300B</h6><p>${ssrInterpolate(unref(data$2)[7].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data$2)[8].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">\u25C9 \u5922\u60F3\u52D5\u756B\u300A\u690D\u7269\u60C5\u4EBA\u300B</h6><p>${ssrInterpolate(unref(data$2)[8].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data$2)[9].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">\u25C9 \u8B1D\u6587\u6BC5\u300A\u5F7C\u5CB8 in DOME\u300B</h6><p>${ssrInterpolate(unref(data$2)[9].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data$2)[10].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">\u25C9 \u8E8D\u754C\u65B0\u5A92\u9AD4\u300A\u5F9E\u5FC3\u58A8\u97FB\u300B</h6><p>${ssrInterpolate(unref(data$2)[10].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data$2)[11].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">\u25C9 \u5433\u79C9\u8056\u300A\u9748\u9B42\u7684\u526F\u7FFC\uFF1A\u7A79\u4E18\u300B</h6><p>${ssrInterpolate(unref(data$2)[11].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data$2)[12].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">\u25C9 Jeremy Oury\u300AEXO CORTEX 2.0\u300B</h6><p>${ssrInterpolate(unref(data$2)[12].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data$2)[13].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1" style="${ssrRenderStyle({ "line-height": "2rem" })}">\u25C9 Yan Breuleux\u300AMati\xE8re Premi\xE8re/Raw Materia\u300B</h6><p>${ssrInterpolate(unref(data$2)[13].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data$2)[14].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1" style="${ssrRenderStyle({ "line-height": "2rem" })}">\u25C9 \u7396\u683C\u8A2D\u8A08\u300A\u7E41\u300B</h6><p>${ssrInterpolate(unref(data$2)[14].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data$2)[15].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1" style="${ssrRenderStyle({ "line-height": "2rem" })}">\u25C9 NANONANO\u300Anarrative of landscape\u300B</h6><p>${ssrInterpolate(unref(data$2)[15].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data$2)[16].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1" style="${ssrRenderStyle({ "line-height": "2rem" })}">\u25C9 XTRUX x \u665FSHENG\u300A\u89C0\u300B</h6><p>${ssrInterpolate(unref(data$2)[16].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data$2)[17].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1" style="${ssrRenderStyle({ "line-height": "2rem" })}">\u25C9 \u9B4F\u5EF7\u5B87\u300A\u6C89\u6D78\u5834\u57DF\u4F5C\u54C1\u7CBE\u9078\uFF1A20-23\u300B</h6><p>${ssrInterpolate(unref(data$2)[17].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data$2)[18].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1" style="${ssrRenderStyle({ "line-height": "2rem" })}">\u25C9 \u838A\u79BE\u300A\u591C\u904A 2023\u300B</h6><p>${ssrInterpolate(unref(data$2)[18].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data$2)[19].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1" style="${ssrRenderStyle({ "line-height": "2rem" })}">\u25C9 \u9EC3\u5049\uFF38\u912D\u9053\u5143\u300AINNERSTAR 01 : Reddening\u300B</h6><p>${ssrInterpolate(unref(data$2)[19].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data$2)[20].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1" style="${ssrRenderStyle({ "line-height": "2rem" })}"> \u25C9 \u8521\u5947\u5B8F\u300A\u5C01\u5305\u5C0D\u649E\u6A5F\u300B</h6><p>${ssrInterpolate(unref(data$2)[20].type)}</p></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"></div></div><div class="cont mt-30 d-flex"><div></div><div class="ml-auto"></div></div></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OnePage/Team.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_9 = _sfc_main$3;
const data = [
  {
    id: 1,
    image: "/dark/assets/imgs/blog/b1.jpg",
    author: {
      name: "Olivia Rhye",
      picture: "/dark/assets/imgs/blog/author1.jpg"
    },
    title: "TAICCA Spotlight",
    date: "\u5834\u6B21\u6642\u9593 10:00",
    tags: [
      "45\u5206\u9418"
    ]
  },
  {
    id: 2,
    image: "/dark/assets/imgs/blog/b2.jpg",
    author: {
      name: "Olivia Rhye",
      picture: "/dark/assets/imgs/blog/author1.jpg"
    },
    title: "\u5FB5\u4EF6\u55AE\u5143",
    date: "\u5834\u6B21\u6642\u9593 10:45",
    tags: [
      "65\u5206\u9418"
    ]
  },
  {
    id: 3,
    image: "/dark/assets/imgs/blog/b3.jpg",
    author: {
      name: "Olivia Rhye",
      picture: "/dark/assets/imgs/blog/author1.jpg"
    },
    title: "SAT Fest",
    date: "\u5834\u6B21\u6642\u9593 11:50",
    tags: [
      "48\u5206\u9418"
    ]
  },
  {
    id: 4,
    image: "/dark/assets/imgs/blog/b4.jpg",
    author: {
      name: "Olivia Rhye",
      picture: "/dark/assets/imgs/blog/author1.jpg"
    },
    title: "\u7B56\u5283\u9080\u8ACB\u55AE\u5143",
    date: "\u5834\u6B21\u6642\u9593 12:40",
    tags: [
      "135\u5206\u9418"
    ]
  },
  {
    id: 5,
    image: "/dark/assets/imgs/blog/b5.jpg",
    author: {
      name: "TAICCA Spotlight",
      picture: "/dark/assets/imgs/blog/author1.jpg"
    },
    title: "TAICCA Spotlight",
    date: "\u5834\u6B21\u6642\u9593 14:55",
    tags: [
      "44\u5206\u9418"
    ]
  },
  {
    id: 6,
    image: "/dark/assets/imgs/blog/b6.jpg",
    author: {
      name: "\u5FB5\u4EF6\u55AE\u5143",
      picture: "/dark/assets/imgs/blog/author1.jpg"
    },
    title: "\u5FB5\u4EF6\u55AE\u5143",
    date: "\u5834\u6B21\u6642\u9593 15:40",
    tags: [
      "65\u5206\u9418"
    ]
  },
  {
    id: 7,
    image: "/dark/assets/imgs/blog/b7.jpg",
    author: {
      name: "\u7B56\u5283\u9080\u8ACB\u55AE\u5143",
      picture: "/dark/assets/imgs/blog/author1.jpg"
    },
    title: "\u7B56\u5283\u9080\u8ACB\u55AE\u5143",
    date: "\u5834\u6B21\u6642\u9593 16:45",
    tags: [
      "135\u5206\u9418"
    ]
  },
  {
    id: 8,
    image: "/dark/assets/imgs/blog/b8.jpg",
    author: {
      name: "TAICCA Spotlight",
      picture: "/dark/assets/imgs/blog/author1.jpg"
    },
    title: "TAICCA Spotlight",
    date: "\u5834\u6B21\u6642\u9593 19:00",
    tags: [
      "44\u5206\u9418"
    ]
  }
];
const _sfc_main$2 = {
  __name: "Blog",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-list section-padding sub-bg" }, _attrs))}><div class="container"><div class="sec-head mb-80"><div class="row"><div class="col-lg-8"><h6 class="sub-title wow fadeInUp">sessions</h6><h2 class="d-rotate wow"><span class="rotate-text">\u7BC0\u76EE\u5834\u6B21</span></h2></div><div class="col-lg-4 d-flex align-items-center"><div class="full-width d-flex justify-content-end justify-end"><div class="vew-all wow fadeIn"></div></div></div></div></div><!--[-->`);
      ssrRenderList(unref(data), (item, index) => {
        _push(`<div class="${ssrRenderClass(`item bord-thin-top ${index === unref(data).length - 1 ? "bord-thin-bottom" : ""} wow fadeInUp`)}"${ssrRenderAttr("data-wow-delay", `${index * 0.1 + 0.2}s`)}><div class="row"><div class="col-lg-3"><div class="info md-mb30"><div class="d-flex align-items-center"><div class="author"><div class="img"></div></div></div></div></div><div class="col-lg-6"><div class="cont"><h5 class="mb-10 underline">`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/dark/blog-details" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</h5><div class="tags"><!--[-->`);
        ssrRenderList(item.tags, (tag, idx) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/dark/blog-classic",
            key: idx
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(tag)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(tag), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div></div><div class="col-lg-3 d-flex align-items-center justify-end"><div class="ml-auto"><span class="date sub-title fz-13 opacity-8 mb-30">${ssrInterpolate(item.date)}</span></div></div></div><div class="background bg-img valign text-center"${ssrRenderAttr("data-background", item.image)} data-overlay-dark="4"><div class="more ontop full-width"></div></div></div>`);
      });
      _push(`<!--]--></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OnePage/Blog.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_10 = _sfc_main$2;
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OnePage/Contact.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_11 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(_attrs)}><div class="footer-container"><div class="container pb-80 pt-80 ontop"><div class="row"><div class="col-lg-3"><div class="colum md-mb50"><div class="tit mb-20"><h6>\u5730\u5740</h6></div><div class="text"><p>106\u81FA\u5317\u5E02\u5927\u5B89\u5340\u5EFA\u570B\u5357\u8DEF\u4E00\u6BB5177\u865F</p></div></div></div><div class="col-lg-3 offset-lg-1"><div class="colum md-mb50"><div class="tit mb-20"><h6>\u806F\u7D61\u65B9\u5F0F</h6></div><div class="text"><p class="mb-10"><a href="#0">info@clab.org.tw</a></p><h5><a href="#">+886 2 87735087</a></h5></div></div></div><div class="col-lg-2 md-mb50"><div class="tit mb-20"><h6>\u5B98\u65B9\u5E33\u865F</h6></div><ul class="rest social-text"><li><a href="https://www.facebook.com/profile.php?id=100079147550663">Facebook</a></li><li><a href="https://www.instagram.com/clab.futurevisionlab/">Instagram</a></li></ul></div><div class="col-lg-3"><div class="tit mb-20"></div><div class="subscribe"><form action="contact.php"><div class="form-group rest"><input type="email" placeholder="Type Your Email"><button type="submit"><i class="fas fa-arrow-right"></i></button></div></form></div></div></div></div><div class="sub-footer pt-40 pb-40 bord-thin-top ontop"><div class="container"><div class="row"><div class="col-lg-4"></div><div class="col-lg-8"><div class="copyright d-flex"><div class="ml-auto"></div></div></div></div></div></div></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OnePage/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_12 = _sfc_main;

export { __nuxt_component_1 as _, __nuxt_component_2 as a, __nuxt_component_3 as b, __nuxt_component_4 as c, __nuxt_component_5 as d, __nuxt_component_6 as e, __nuxt_component_7 as f, __nuxt_component_8 as g, __nuxt_component_9 as h, __nuxt_component_10 as i, __nuxt_component_11 as j, __nuxt_component_12 as k };
//# sourceMappingURL=Footer-35a417c7.mjs.map
