import { mergeProps, useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { d as data$1 } from "./app-data-475c97b4.js";
const _sfc_main$2 = {
  __name: "Story",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "pg-about section-padding sub-bg" }, _attrs))}><div class="container"><div class="row"><div class="col-lg-4"><div class="bg-img radius-10 md-mb50" data-background="/dark/assets/imgs/about/sq1.jpg"></div></div><div class="col-lg-8"><div class="bg-img radius-10" data-background="/dark/assets/imgs/about/sq2.jpg"></div></div><div class="col-lg-4"><div class="sec-head mt-80"><h6 class="sub-title">FUTURE VISION LAB 2023</h6></div></div><div class="col-lg-8"><div class="cont mt-80"><h5>臺灣當代文化實驗場（C-LAB）自 2020 年正式啟動「科技媒體實驗平台」，著重於媒體實驗創新與社會鏈結，以跨域、共創、協作方式，打造文化與科技的實驗平台。 整合臺灣文化與科技的資源，媒合文化與科技領域共創，其中「未來視覺實驗室」探索科技媒體的視覺極限為實驗目標，以臺灣光電技術與產業為基礎，輔以影像的運算、創作與軟硬體整合，企圖勾勒出未來視覺的跨域願景。<br><br> 自計畫開創，科技媒體實驗平台便持續推動實驗展演計畫「FUTURE VISION LAB」，以數位實驗建築著手打造 DOME 型態場域，培育跨域實驗人才，打造國內年輕創作者展演內容創造力的舞台，同步引介國外精彩作品。 本展演計畫以探索科技媒體的視覺極限為目標，其開發涉及球形曲面投影的校正、融接、對位、播放控制與影像前製等多項複雜技術，過去三年已進行近百件作品展演。<br><br> 「FUTURE VISION LAB 2023」實驗展演計畫，今年突破過往尺度，開啟「DOME 2.0」升級計畫，重新打造升級版的戶外穹頂劇場（DOME），延續多元及實驗精神，以數位建築發展更具演算特色之外型，尺寸突破過往直徑 12 公尺之尺度， 重新研發打造直徑 15公尺移動式戶外穹頂劇場及更包覆式聲場配置，並研發新型態投影膜片及超高解析沉浸影像環境，總運算解析達 22 K，打造接軌國際規格的創作環境，讓觀眾全天候享受更高品質的沉浸式感官內容，感受臺灣的創造力。<br><br> 「FUTURE VISION LAB 2023」於臺灣文博會展期結束後，將重新規劃第二階段的展演，展期為 10 月 14 日至 12 月 24 日，內容除文博會期間展出之節目內容， 更將新增扶植培育創作者參與的實驗計畫，作品精彩可期，節目內容將於文博會展期後公布，敬請期待。 </h5></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InnerPages/About/Story.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "Intro",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "intro-corp section-padding pt-0" }, _attrs))}><div class="container"><div class="row justify-content-around"></div></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InnerPages/About/Intro.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$1;
const data = [
  "/assets/imgs/brands/01.png",
  "/assets/imgs/brands/02.png",
  "/assets/imgs/brands/03.png",
  "/assets/imgs/brands/04.png",
  "/assets/imgs/brands/05.png",
  "/assets/imgs/brands/03.png"
];
const _sfc_main = {
  __name: "Clients",
  __ssrInlineRender: true,
  props: ["lightMode"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "clients section-padding pb-100 position-re" }, _attrs))}><div class="container"><div class="row justify-content-center mb-80"><div class="col-lg-6 text-center"><div class="text"><h3>We create experiences and turn ideas into reality.</h3></div></div></div></div><div class="container"><div class="row justify-content-center"><div class="col-lg-11"><div class="row md-marg"><!--[-->`);
      ssrRenderList(unref(data), (item) => {
        _push(`<div class="col-md-4 col-6 brand box-bg"><div class="item mb-30 wow fadeIn" data-wow-delay=".6s"><div class="img"><img${ssrRenderAttr("src", `/${__props.lightMode ? "light" : "dark"}${item}`)} alt=""></div><a${ssrRenderAttr("href", unref(data$1).author_link)} class="link" data-splitting> www.GeekFolio.com </a></div></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="bg-pattern patrn1 bg-img opacity-5"${ssrRenderAttr("data-background", `/${__props.lightMode ? "light" : "dark"}/assets/imgs/patterns/pattern.svg`)}></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InnerPages/About/Clients.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_7 = _sfc_main;
export {
  __nuxt_component_2 as _,
  __nuxt_component_4 as a,
  __nuxt_component_7 as b
};
//# sourceMappingURL=Clients-75cbaefe.js.map
