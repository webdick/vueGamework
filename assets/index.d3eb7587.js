import{r as d,o as f,c as m,a as h,b as _,d as g}from"./vendor.592e9f88.js";const w=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}};w();const v={setup(c){const i=()=>{var r=window.innerWidth,o=window.innerHeight,t=document.getElementById("app"),e="";r>=o?(e+="width:"+r+"px;",e+="height:"+o+"px;",e+="-webkit-transform: rotate(0); transform: rotate(0);",e+="-webkit-transform-origin: "+r/2+"px "+r/2+"px;",e+="transform-origin: "+r/2+"px "+r/2+"px;"):(e+="width:"+o+"px;",e+="height:"+r+"px;",e+="-webkit-transform: rotate(90deg); transform: rotate(90deg);",e+="-webkit-transform-origin: "+r/2+"px "+r/2+"px;",e+="transform-origin: "+r/2+"px "+r/2+"px;"),t.style.cssText=e};return window.addEventListener("resize",i()),(r,o)=>{const t=d("router-view");return f(),m(t)}}},y="modulepreload",a={},x="/vueGamework/",s=function(i,r){return!r||r.length===0?i():Promise.all(r.map(o=>{if(o=`${x}${o}`,o in a)return;a[o]=!0;const t=o.endsWith(".css"),e=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${e}`))return;const n=document.createElement("link");if(n.rel=t?"stylesheet":y,t||(n.as="script",n.crossOrigin=""),n.href=o,document.head.appendChild(n),t)return new Promise((p,u)=>{n.addEventListener("load",p),n.addEventListener("error",u)})})).then(()=>i())},E=[{path:"/",component:()=>s(()=>import("./index.cca24186.js"),["assets/index.cca24186.js","assets/index.66a6c415.css","assets/vendor.592e9f88.js"])},{path:"/maps",component:()=>s(()=>import("./maps.ee2efb19.js"),["assets/maps.ee2efb19.js","assets/vendor.592e9f88.js"])},{path:"/chat",component:()=>s(()=>import("./demo.426ffcab.js"),["assets/demo.426ffcab.js","assets/demo.810e2f05.css","assets/vendor.592e9f88.js","assets/Stand.0fea9687.js","assets/Stand.030c0819.css"])},{path:"/role",component:()=>s(()=>import("./role.74eb9222.js"),["assets/role.74eb9222.js","assets/Stand.0fea9687.js","assets/Stand.030c0819.css","assets/vendor.592e9f88.js"])}],b=h({history:_("/"),routes:E});const l=g(v);l.use(b);l.mount("#app");
