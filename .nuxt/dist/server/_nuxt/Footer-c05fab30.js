import { _ as __nuxt_component_0 } from "./client-only-29ef7f45.js";
import { mergeProps, useSSRContext, unref, withCtx, createTextVNode, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import "swiper";
import { _ as _export_sfc } from "../server.mjs";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-6bdec6f5.js";
import { d as data$3 } from "./app-data-475c97b4.js";
const _sfc_main$a = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "slider arch-slider slider-prlx" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<div class="setting"><div class="controls"><div class="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"><i class="ion-chevron-right"></i></div><div class="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"><i class="ion-chevron-left"></i></div></div></div></header>`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Architecture/Header.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$a;
const _sfc_main$9 = {
  __name: "BgPattern",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "bg-pattern bg-img",
        "data-background": `/${__props.lightMode ? "light" : "dark"}/assets/imgs/patterns/bg-lines-1.svg`
      }, _attrs))}></div>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Architecture/BgPattern.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$9;
const _imports_0$1 = "" + __publicAssetsURL("dark/assets/imgs/arch/intro/1.jpg");
const _imports_1$1 = "" + __publicAssetsURL("dark/assets/imgs/arch/intro/2.jpg");
const _sfc_main$8 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "intro-imgs section-padding" }, _attrs))}><div class="container"><div class="sec-leter-head mb-80"><div class="d-flex align-items-center"><div class="leter"><h4>A</h4></div><div class="line"></div></div><div class="title"><h6 class="sub-title">關於我們</h6></div></div><div class="row"><div class="col-lg-3 valign"><div class="img1 to-up full-width md-mb50"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div></div><div class="col-lg-5 valign"><div class="cont full-width md-mb50"><h3 class="mb-15">FUTURE VISION LAB 2023<br></h3><p>臺灣當代文化實驗場（C-LAB）自 2020 年正式啟動「科技媒體實驗平台」，著重於媒體實驗創新與社會鏈結，以跨域、共創、協作方式，打造文化與科技的實驗平台。</p></div></div><div class="col-lg-4"><div class="img1"><img${ssrRenderAttr("src", _imports_1$1)} alt=""></div></div></div></div></section>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Architecture/Intro.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$7 = {
  __name: "Clients",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "clients-carso section-padding pt-0" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-lg-11"><div class="swiper5"><div id="content-carousel-container-unq-clients" class="swiper-container" data-swiper="container">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Architecture/Clients.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$7;
const data$2 = [
  {
    id: 1,
    image: "/assets/imgs/serv-icons/0.png",
    title: "最近活動",
    text: "Praesent faucibus nisl sit amet nulla pretium a sed purus."
  },
  {
    id: 2,
    image: "/assets/imgs/serv-icons/1.png",
    title: "最近活動",
    text: "Praesent faucibus nisl sit amet nulla pretium a sed purus."
  },
  {
    id: 3,
    image: "/assets/imgs/serv-icons/2.png",
    title: "最近活動",
    text: "Praesent faucibus nisl sit amet nulla pretium a sed purus."
  },
  {
    id: 4,
    image: "/assets/imgs/serv-icons/0.png",
    title: "最近活動",
    text: "Praesent faucibus nisl sit amet nulla pretium a sed purus."
  }
];
const _sfc_main$6 = {
  __name: "Services",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "serv-box section-padding pt-0" }, _attrs))}><div class="container"><div class="sec-leter-head mb-80"><div class="d-flex align-items-center"><div class="leter"><h4>N</h4></div><div class="line"></div></div><div class="title"><h6 class="sub-title">最新消息</h6></div></div><div class="row"><!--[-->`);
      ssrRenderList(unref(data$2), (item) => {
        _push(`<div class="col-lg-3 col-md-6"><div class="serv-item md-mb50"><div class="icon-img-60 mb-40"></div><h5 class="mb-20">${ssrInterpolate(item.title)}</h5><p>${ssrInterpolate(item.text)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Architecture/Services.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$6;
const data$1 = [
  {
    id: 1,
    image: "/dark/assets/imgs/arch/works/1.jpg",
    year: "2023",
    type: "Branding",
    width: 5
  },
  {
    id: 2,
    image: "/dark/assets/imgs/arch/works/3.jpg",
    year: "2023",
    type: "Branding",
    width: 6
  },
  {
    id: 3,
    image: "/dark/assets/imgs/arch/works/2.jpg",
    year: "2023",
    type: "Branding",
    width: 6
  },
  {
    id: 4,
    image: "/dark/assets/imgs/arch/works/4.jpg",
    year: "2023",
    type: "Branding",
    width: 6
  }
];
const _sfc_main$5 = {
  __name: "Portfolio",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "portfolio sub-bg section-padding" }, _attrs))}><div class="container"><div class="sec-leter-head mb-80"><div class="d-flex align-items-center"><div class="leter"><h4>P</h4></div><div class="line"></div></div><div class="title"><h6 class="sub-title">作品介紹</h6></div></div><div class="row justify-content-center"><div class="col-lg-5"><div class="item md-mb80"><div class="o-hidden"><div class="img imago wow"><a href="http://localhost:3000/dark/project-details1"><img${ssrRenderAttr("src", unref(data$1)[0].image)} alt=""></a></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">◉ 謝爾蓋·普羅科菲耶夫《迷宮》（德國）◉ </h6></div><div class="ml-auto"></div></div></div></div><div class="col-lg-6 valign"><div class="item full-width"><div class="row justify-content-center"><div class="col-lg-8"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data$1)[1].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1" style="${ssrRenderStyle({ "line-height": "2rem" })}">◉ 弗朗西斯·阿代爾·麥肯齊《蘭花與蜜蜂》（加拿大）◉ </h6></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6 valign"><div class="item mt-80 full-width"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data$1)[2].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">◉ 馬爾滕·艾薩克·德希爾《蜂湧》 (德國) ◉</h6></div><div class="ml-auto"></div></div></div></div></div></div><div class="col-lg-6"><div class="item mt-80"><div class="row justify-content-center"><div class="col-lg-9"><div class="o-hidden"><div class="img imago wow"><img${ssrRenderAttr("src", unref(data$1)[3].image)} alt=""></div></div><div class="cont mt-30 d-flex"><div><h6 class="line-height-1">◉ 大衛·加德納《奶奶的房子》（加拿大） ◉ </h6></div><div class="ml-auto"></div></div></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Architecture/Portfolio.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_6 = _sfc_main$5;
const _imports_0 = "" + __publicAssetsURL("dark/assets/imgs/arch/intro/sq1.jpg");
const _imports_1 = "" + __publicAssetsURL("dark/assets/imgs/arch/intro/sq2.jpg");
const _sfc_main$4 = {
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "intro-corp section-padding" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-5 valign md-mb50"><div class="imgs mb-80"><div class="img1"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="img2"><img${ssrRenderAttr("src", _imports_1)} alt=""></div></div></div><div class="col-lg-6 offset-lg-1 valign"><div class="cont"><div class="text"><h3>四大類別</h3></div><div class="accordion bord mt-40"><div class="item mb-15 wow fadeInUp" data-wow-delay=".1s"><div class="title"><h6 class="fz-18">策劃邀請 單元</h6><span class="ico"></span></div><div class="accordion-info"><p class="fz-14">Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole.</p></div></div><div class="item mb-15 wow fadeInUp" data-wow-delay=".3s"><div class="title"><h6 class="fz-18">SAT FEST 單元</h6><span class="ico"></span></div><div class="accordion-info"><p class="fz-14">Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole.</p></div></div><div class="item wow fadeInUp" data-wow-delay=".5s"><div class="title"><h6 class="fz-18"> TAICCA Spotligh 單元</h6><span class="ico"></span></div><div class="accordion-info"><p class="fz-14">Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole.</p></div></div><div class="item wow fadeInUp" data-wow-delay=".5s"><div class="title"><h6 class="fz-18">徵件作品 單元</h6><span class="ico"></span></div><div class="accordion-info"><p class="fz-14">Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole.</p></div></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Architecture/About.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_7 = _sfc_main$4;
const _sfc_main$3 = {
  __name: "SectionImage",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: "sec-img section-padding bg-img",
        "data-background": "/dark/assets/imgs/arch/slid/2.jpg",
        "data-overlay-dark": "2"
      }, _attrs))}><div class="container"><div class="row"><div class="col-lg-4"><div class="expr-box md-mb50"><h6 class="text-u fz-16 mb-40"><br> Architectural</h6><div><p class="fz-14 fw-600 line-height-1 mb-15">Years <br> Experience</p><h2 class="fz-80 line-height-1">25</h2></div></div></div><div class="col-lg-4 offset-lg-1"><div class="cont"><h3 class="text-u"><span class="main-color"></span> <br></h3></div></div></div><div class="row mt-100"><div class="col-lg-7 offset-lg-5"><div class="numbers"><div class="row"><div class="col-md-3 col-6"><div class="item sm-mb50"></div></div><div class="col-md-3 col-6"><div class="item sm-mb50"></div></div><div class="col-md-3 col-6"><div class="item"></div></div><div class="col-md-3 col-6"><div class="item"></div></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Architecture/SectionImage.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_8 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "Testimonials",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: `testim-clasic section-padding ${__props.lightMode ? "light" : ""}`
      }, _attrs))}><div class="container"><div class="row"><div class="col-lg-12"><div class="testim"><div class="testim-swiper">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div><div class="swiper-controls"><div class="row"><div class="col-md-8 offset-md-4"><div class="arrows-carsouel testim-controls"><div class="swiper-controls"><div class="swiper-button-prev"><span class="left"></span></div><div class="swiper-pagination"></div><div class="swiper-button-next"><span class="right"></span></div></div></div></div></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Architecture/Testimonials.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_9 = _sfc_main$2;
const data = [
  {
    id: 1,
    title: "Free advertising for your online business.",
    cover: "/dark/assets/imgs/arch/blog/1.jpg",
    date: "august 6, 2021",
    tags: [
      "Marketing",
      "Design"
    ]
  },
  {
    id: 2,
    title: "Business meeting 2023 in San Francisco.",
    cover: "/dark/assets/imgs/arch/blog/2.jpg",
    date: "august 6, 2021",
    tags: [
      "Marketing",
      "Design"
    ]
  }
];
const _sfc_main$1 = {
  __name: "Blog",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "blog-list-half crev section-padding sub-bg" }, _attrs))}><div class="container mb-30"><div class="sec-leter-head mb-80"><div class="d-flex align-items-center"><div class="leter"><h4>B</h4></div><div class="line"></div></div><div class="title"><h6 class="sub-title">近期活動</h6></div></div><div class="row"><!--[-->`);
      ssrRenderList(unref(data), (item) => {
        _push(`<div class="col-lg-6"><div class="item md-mb80"><div class="row rest"><div class="col-md-6"><div class="img"><img${ssrRenderAttr("src", item.cover)} alt=""></div></div><div class="col-md-6 valign"><div class="cont"><span class="date fz-12 ls1 text-u opacity-7 mb-15">${ssrInterpolate(item.date)}</span><h5>`);
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
        _push(`</h5><div class="tags colorbg mt-15"><!--[-->`);
        ssrRenderList(item.tags, (tag) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/dark/blog-half-img",
            key: tag
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
        _push(`<!--]--></div></div></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Architecture/Blog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_10 = _sfc_main$1;
const _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(_attrs)}><div class="footer-container"><div class="container pb-80 pt-80 ontop"><div class="row"><div class="col-lg-3"><div class="colum md-mb50"><div class="tit mb-20"><h6>地址</h6></div><div class="text"><p> 106台北市大安區建國南路一段177號</p></div></div></div><div class="col-lg-3 offset-lg-1"><div class="colum md-mb50"><div class="tit mb-20"><h6>Gmail</h6></div><div class="text"><p class="mb-10"><a href="#0">info@clab.org.tw</a></p><h5 class="main-color underline"><a href="#">+886 2 87735087</a></h5></div></div></div><div class="col-lg-2 md-mb50"><div class="tit mb-20"><h6>官方帳號</h6></div><ul class="rest social-text"><li><a href="#0">Facebook</a></li><li><a href="#0">LinkedIn</a></li><li><a href="#0">Instagram</a></li></ul></div><div class="col-lg-3"><div class="tit mb-20"><h6>Newsletter</h6></div><div class="subscribe"><form action="contact.php"><div class="form-group rest"><input type="email" placeholder="Type Your Email"><button type="submit"><i class="fas fa-arrow-right"></i></button></div></form></div></div></div></div><div class="sub-footer pt-40 pb-40 bord-thin-top ontop"><div class="container"><div class="row"><div class="col-lg-4"><div class="logo"><a href="#0"><img${ssrRenderAttr("src", `/dark/assets/imgs/logo-${__props.lightMode ? "dark" : "light"}.png`)} alt=""></a></div></div><div class="col-lg-8"><div class="copyright d-flex"><div class="ml-auto"><p class="fz-13">© 2023 Geekfolio is Proudly Powered by <span class="underline"><a${ssrRenderAttr("href", unref(data$3).author_link)} target="_blank">${ssrInterpolate(unref(data$3).author)}</a></span></p></div></div></div></div></div></div></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Architecture/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_11 = _sfc_main;
export {
  __nuxt_component_1 as _,
  __nuxt_component_2 as a,
  __nuxt_component_3 as b,
  __nuxt_component_4 as c,
  __nuxt_component_5 as d,
  __nuxt_component_6 as e,
  __nuxt_component_7 as f,
  __nuxt_component_8 as g,
  __nuxt_component_9 as h,
  __nuxt_component_10 as i,
  __nuxt_component_11 as j
};
//# sourceMappingURL=Footer-c05fab30.js.map
