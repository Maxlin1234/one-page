import{_ as f}from"./nuxt-link.88ad0170.js";import{i as m}from"./initIsotope.c6ab8537.js";import{h as u,o as i,b as s,f as t,F as n,k as c,u as g,j as h,t as a,e as o,w as l,l as d}from"./entry.1dabf5ed.js";const w=[{id:1,title:"All",filter:"*",count:"08"},{id:2,title:"Branding",filter:".brand",count:"03"},{id:3,title:"Mobile App",filter:".app",count:"02"},{id:4,title:"Creative",filter:".web",count:"03"}],y=[{id:1,filter:"web",image:"/dark/assets/imgs/works/grid/1.jpg",type:"Design ART",year:"2023",title:"Character Design",width:"3",height:"1"},{id:2,filter:"app",image:"/dark/assets/imgs/works/grid/10.jpg",type:"Design ART",year:"2023",title:"Character Design",width:"3",height:"2"},{id:3,filter:"brand",image:"/dark/assets/imgs/works/grid/3.jpg",type:"Design ART",year:"2023",title:"Character Design",width:"6",height:"1"},{id:4,filter:"web",image:"/dark/assets/imgs/works/grid/4.jpg",type:"Design ART",year:"2023",title:"Character Design",width:"3",height:"2"},{id:5,filter:"brand",image:"/dark/assets/imgs/works/grid/5.jpg",type:"Design ART",year:"2023",title:"Character Design",width:"6",height:"1"},{id:6,filter:"app",image:"/dark/assets/imgs/works/grid/6.jpg",type:"Design ART",year:"2023",title:"Character Design",width:"6",height:"2"},{id:7,filter:"web",image:"/dark/assets/imgs/works/grid/7.jpg",type:"Design ART",year:"2023",title:"Character Design",width:"3",height:"2"},{id:8,filter:"brand",image:"/dark/assets/imgs/works/grid/8.jpg",type:"Design ART",year:"2023",title:"Character Design",width:"3",height:"2"}],_={filters:w,gallery:y},k={class:"portfolio section-padding pb-100"},D={class:"container-xxl"},b={class:"row"},v={class:"filtering col-12 mb-80 text-center"},j={class:"filter"},x=t("span",{class:"text"},"Filter By :",-1),C=["data-filter","data-count"],A={class:"gallery metro text-center"},T={class:"row"},R={class:"item-img o-hidden"},B={class:"inner wow"},N=["src"],F={class:"info"},M={class:"sub-title tag"},V=t("br",null,null,-1),q={__name:"Metro",setup($){return u(()=>{setTimeout(()=>{m()},100)}),(L,z)=>{const r=f;return i(),s("section",k,[t("div",D,[t("div",b,[t("div",v,[t("div",j,[x,(i(!0),s(n,null,c(g(_).filters,(e,p)=>(i(),s("span",{"data-filter":e.filter,class:h(p===0?"active":""),"data-count":e.count,key:e.id},a(e.title),11,C))),128))])])]),t("div",A,[t("div",T,[(i(!0),s(n,null,c(g(_).gallery,e=>(i(),s("div",{class:h(`col-lg-${e.width} col-md-6 items ${e.filter} info-overlay height-${e.height} mb-30`),key:e.id},[t("div",R,[o(r,{to:"/dark/project-details1",class:"imago wow"},{default:l(()=>[t("div",B,[t("img",{src:e.image,alt:"image"},null,8,N)])]),_:2},1024),t("div",F,[t("h6",null,[o(r,{to:"/dark/project-details1"},{default:l(()=>[d(a(e.title),1)]),_:2},1024)]),t("span",M,[o(r,{to:"/dark/project-details1"},{default:l(()=>[d("© "+a(e.year)+" ",1),V,d(" "+a(e.type),1)]),_:2},1024)])])])],2))),128))])])])])}}};export{q as _};
