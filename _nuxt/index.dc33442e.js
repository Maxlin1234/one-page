import{_ as f}from"./Navbar.07507708.js";import{_ as h,a as S,b as H,c as b,d as w,e as M,f as y,g as v,h as T,i as $}from"./Footer.90dccb91.js";import{a as x,h as P,i as W,b as q,e,f as r,o as B}from"./entry.1dabf5ed.js";import"./nuxt-link.88ad0170.js";import"./swiper-slide.bf8b9abb.js";import"./loadBackgroudImages.6dc4ef71.js";import"./navigation.ddcd0df9.js";import"./pagination.08663847.js";import"./app-data.c5e7f44e.js";const z={id:"smooth-wrapper"},A={id:"smooth-content"},k={class:"main-bg"},G={__name:"index",setup(E){x({titleTemplate:"%s - Main",bodyAttrs:{class:"home-main-crev main-bg"}});function t(){if(window.innerWidth<991&&document.querySelector(".thecontainer").style.maxHeight&&location.reload(),window.innerWidth>991&&!document.querySelector(".thecontainer").style.maxHeight){gsap.registerPlugin(ScrollTrigger);let o=gsap.utils.toArray(".panel");gsap.to(o,{xPercent:-100*(o.length-1),ease:"none",scrollTrigger:{trigger:".thecontainer",pin:!0,scrub:1,end:()=>"+="+document.querySelector(".thecontainer").offsetWidth}})}}return P(()=>{if(gsap.registerPlugin(ScrollTrigger,ScrollSmoother),ScrollTrigger.normalizeScroll(!0),ScrollSmoother.create({smooth:2,effects:!0}),window.innerWidth>991){gsap.registerPlugin(ScrollTrigger);let o=gsap.utils.toArray(".panel");gsap.to(o,{xPercent:-100*(o.length-1),ease:"none",scrollTrigger:{trigger:".thecontainer",pin:!0,scrub:1,end:()=>{var n;return"+="+((n=document.querySelector(".thecontainer"))==null?void 0:n.offsetWidth)}}})}if(window.innerWidth>991){gsap.set(".footer-container",{yPercent:-50});const o=gsap.timeline({paused:!0});o.to(".footer-container",{yPercent:0,ease:"none"}),ScrollTrigger.create({trigger:"main",start:"bottom bottom",end:"+=50%",animation:o,scrub:!0})}window.addEventListener("resize",t)}),W(()=>{window.removeEventListener("resize",t)}),(o,n)=>{const i=f,s=h,a=S,c=H,m=b,_=w,l=M,g=y,p=v,d=T,u=$;return B(),q("div",z,[e(i,{mainBg:!0,noStatic:!0}),r("div",A,[r("main",k,[e(s),e(a),e(c),e(m),e(_),e(l),e(g),e(p),e(d)]),e(u)])])}}};export{G as default};