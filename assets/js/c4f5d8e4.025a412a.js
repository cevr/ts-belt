"use strict";(self.webpackChunkts_belt_docs=self.webpackChunkts_belt_docs||[]).push([[195,383,4,138,822,970,836,426,76,627,555],{7175:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var l=a(7294),n=a(6010),r=a(9960),c=a(4996);const o="button_1Sic",u="buttonOutline_XMzl",i="buttonFull_6wZH";const m=function(e){var t=e.children,a=e.to,m=e.variant;return l.createElement(r.Z,{className:(0,n.Z)("button",o,"outline"===m?u:i),to:(0,c.Z)(a)},t)}},671:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var l=a(7294),n=a(9960),r=a(4996);const c="card_kac4",o="title_Fik8",u="body_TiLF";const i=function(e){var t=e.children,a=e.title,i=e.to,m=(0,r.Z)(i);return l.createElement(n.Z,{to:m,className:c},l.createElement("div",{className:o},a),l.createElement("div",{className:u},t))}},2247:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var l=a(7294),n=a(1923);const r="column_+WXT";const c=function(e){var t=e.children,a=(0,n.useColumns)().space;return l.createElement("div",{className:r,style:{marginLeft:a+"rem"}},t)}},1923:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o,useColumns:()=>c});var l=a(7294);const n="columns_wQ6G";var r=l.createContext({space:0}),c=function(){return l.useContext(r)};const o=function(e){var t=e.children,a=e.space,c=e.marginBottom,o=void 0===c?0:c;return l.createElement(r.Provider,{value:{space:a}},l.createElement("div",{className:n,style:{marginLeft:-a+"rem",marginBottom:o+"rem"}},t))}},667:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var l=a(7294);const n="feature_vfje";const r=function(e){var t=e.children;return l.createElement("span",{className:n},t)}},7008:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var l=a(7294);const n="features_eERS",r="dot_QOQn";const c=function(e){var t=e.children,a=l.Children.count(t);return l.createElement("div",{className:n},l.Children.map(t,(function(e,t){return l.createElement("span",null,e,t===a-1?null:l.createElement("span",{className:r},"\xb7"))})))}},1767:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var l=a(7294),n=(a(9960),a(4996),a(2263)),r=a(7175),c=a(1923),o=a(2247);const u="hero_TbHc",i="container_mR43",m="title_YaB4",d="logo_Zvww",s="summary_Llck",f="buttons_TpFM";const E=function(e){var t=e.api,a=e.logo,E=(0,n.Z)().siteConfig,p=void 0===E?{}:E;return l.createElement("header",{className:u},l.createElement("div",{className:i},l.createElement("img",{className:d,src:a,alt:p.title+" - "+p.tagline}),l.createElement("h1",{className:m},p.title)),l.createElement("p",{className:s},p.tagline),l.createElement("div",{className:f},l.createElement(c.default,{space:1},l.createElement(o.default,null,l.createElement(r.default,{to:"docs",variant:"outline"},"Getting started")),l.createElement(o.default,null,l.createElement(r.default,{to:t},"Go to API")))))}},6090:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var l=a(7294),n=a(7019);const r="wrapper_85Jk";const c=function(e){var t=e.children;return l.createElement(n.Z,null,l.createElement("div",{className:r},t))}},2043:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var l=a(7294);const n="row_htCY";const r=function(e){var t=e.children,a=e.alignX,r=void 0===a?"flex-start":a,c=e.marginBottom,o=void 0===c?0:c,u=e.padding,i=void 0===u?0:u,m=e.paddingX,d=e.paddingY;return l.createElement("div",{className:n,style:{justifyContent:r,marginBottom:o+"rem",padding:(d||i)+"rem "+(m||i)+"rem"}},t)}},4013:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var l=a(7294);const n="title_YWWp";const r=function(e){var t=e.children;return l.createElement("h2",{className:n},t)}},2841:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var l=a(7294),n=a(9960),r=a(4996),c=a(671),o=a(1767),u=a(2043),i=a(1923),m=a(2247),d=a(7008),s=a(667),f=a(4013),E=a(6090),p=a(7175);const g=function(){return l.useLayoutEffect((function(){localStorage.setItem("theme","light"),document.querySelector(".navbar__brand").style="display: none;"}),[]),l.createElement(E.default,null,l.createElement(u.default,{alignX:"center",marginBottom:3},l.createElement(o.default,{logo:"img/hero-logo.png",api:"api/array"})),l.createElement(u.default,{alignX:"center",marginBottom:3},l.createElement(d.default,null,l.createElement(s.default,null,"\ud83d\udc40 provides more readable code, due to the data-first approach"),l.createElement(s.default,null,"\u2728 supports TypeScript and Flow"),l.createElement(s.default,{isDotVisible:!1},"\ud83d\udee1 helps you write safer code with"," ",l.createElement(n.Z,{to:(0,r.Z)("api/option")},"Option")," and"," ",l.createElement(n.Z,{to:(0,r.Z)("api/result")},"Result")," data types"),l.createElement(s.default,null,"\ud83c\udfaf all functions return immutable data (no side-effects)"),l.createElement(s.default,null,"\ud83c\udf32 tree-shakeable"))),l.createElement(u.default,{marginBottom:3},l.createElement(u.default,{marginBottom:2,alignX:"center"},l.createElement(f.default,null,"Modules")),l.createElement(u.default,{paddingX:1},l.createElement(i.default,{space:1,marginBottom:1},l.createElement(m.default,null,l.createElement(c.default,{title:"Array",to:"api/array"},"Utility functions for ",l.createElement("code",null,"Array"),".")),l.createElement(m.default,null,l.createElement(c.default,{title:"Boolean",to:"api/boolean"},"Utility functions for ",l.createElement("code",null,"Boolean"),".")),l.createElement(m.default,null,l.createElement(c.default,{title:"Function",to:"api/function"},"Other useful utility functions such as ",l.createElement("code",null,"debounce")," or"," ",l.createElement("code",null,"throttle"),".")))),l.createElement(u.default,{paddingX:1},l.createElement(i.default,{space:1,marginBottom:1},l.createElement(m.default,null,l.createElement(c.default,{title:"Guards",to:"api/guards"},"Various TypeScript guards.")),l.createElement(m.default,null,l.createElement(c.default,{title:"Number",to:"api/number"},"Utility functions for ",l.createElement("code",null,"Number"),".")),l.createElement(m.default,null,l.createElement(c.default,{title:"Object (Dict)",to:"api/object"},"Utility functions for ",l.createElement("code",null,"Object"),".")))),l.createElement(u.default,{paddingX:1},l.createElement(i.default,{space:1,marginBottom:1},l.createElement(m.default,null,l.createElement(c.default,{title:"Option",to:"api/option"},"Functions for handling the ",l.createElement("code",null,"Option")," data type that represents the existence and nonexistence of a value.")),l.createElement(m.default,null,l.createElement(c.default,{title:"Result",to:"api/result"},"Functions for describing the result of a certain operation without relying on exceptions.")),l.createElement(m.default,null,l.createElement(c.default,{title:"String",to:"api/string"},"Utility functions for ",l.createElement("code",null,"String"),"."))))),l.createElement(u.default,{paddingX:1},l.createElement(u.default,{marginBottom:1,alignX:"center"},l.createElement(f.default,null,"Benchmarks")),l.createElement(u.default,{marginBottom:2,alignX:"center"},l.createElement(d.default,null,l.createElement(s.default,null,l.createElement("strong",null,"ts-belt")," is built in ReScript, which generates highly performant JavaScript code, see the benchmark results by clicking on the button below."))),l.createElement(u.default,{alignX:"center"},l.createElement(p.default,{to:"benchmarks/introduction"},"See results"))))}}}]);