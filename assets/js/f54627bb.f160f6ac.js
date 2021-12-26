"use strict";(self.webpackChunkts_belt_docs=self.webpackChunkts_belt_docs||[]).push([[842],{3905:(n,e,r)=>{r.d(e,{Zo:()=>g,kt:()=>s});var a=r(7294);function t(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function o(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,a)}return r}function f(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){t(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function l(n,e){if(null==n)return{};var r,a,t=function(n,e){if(null==n)return{};var r,a,t={},o=Object.keys(n);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(t[r]=n[r]);return t}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}var p=a.createContext({}),i=function(n){var e=a.useContext(p),r=e;return n&&(r="function"==typeof n?n(e):f(f({},e),n)),r},g=function(n){var e=i(n.components);return a.createElement(p.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(n,e){var r=n.components,t=n.mdxType,o=n.originalType,p=n.parentName,g=l(n,["components","mdxType","originalType","parentName"]),u=i(r),s=t,d=u["".concat(p,".").concat(s)]||u[s]||c[s]||o;return r?a.createElement(d,f(f({ref:e},g),{},{components:r})):a.createElement(d,f({ref:e},g))}));function s(n,e){var r=arguments,t=e&&e.mdxType;if("string"==typeof n||t){var o=r.length,f=new Array(o);f[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=n,l.mdxType="string"==typeof n?n:t,f[1]=l;for(var i=2;i<o;i++)f[i]=r[i];return a.createElement.apply(null,f)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6719:(n,e,r)=>{r.r(e),r.d(e,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>i,toc:()=>g,default:()=>u});var a=r(3117),t=r(102),o=(r(7294),r(3905)),f=["components"],l={id:"pipe-flow",title:"pipe & flow"},p=void 0,i={unversionedId:"pipe-flow",id:"pipe-flow",title:"pipe & flow",description:"pipe",source:"@site/api/pipe-flow.mdx",sourceDirName:".",slug:"/pipe-flow",permalink:"/ts-belt/api/pipe-flow",tags:[],version:"current",frontMatter:{id:"pipe-flow",title:"pipe & flow"},sidebar:"sidebar",next:{title:"Array",permalink:"/ts-belt/api/array"}},g=[{value:"pipe",id:"pipe",children:[],level:3},{value:"flow",id:"flow",children:[],level:3}],c={toc:g};function u(n){var e=n.components,r=(0,t.Z)(n,f);return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function() {\n  const clean = flow(S.removeAll('X'), S.toLowerCase)\n  const value = pipe(\n    ['HellXXXo', 'wOrXXXLd'],\n    A.map(clean),\n    A.join(' ')\n  )\n\n  return value\n}\n")),(0,o.kt)("h3",{id:"pipe"},"pipe"),(0,o.kt)("p",null,"Performs left-to-right function composition (the first argument must be a value)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare function pipe<A, B>(value: A, fn1: (arg: A) => B): B\n\nexport declare function pipe<A, B, C>(\n  value: A,\n  fn1: (arg: A) => B,\n  fn2: (arg: B) => C,\n): C\n\nexport declare function pipe<A, B, C, D>(\n  value: A,\n  fn1: (arg: A) => B,\n  fn2: (arg: B) => C,\n  fn3: (arg: C) => D,\n): D\n\nexport declare function pipe<A, B, C, D, E>(\n  value: A,\n  fn1: (arg: A) => B,\n  fn2: (arg: B) => C,\n  fn3: (arg: C) => D,\n  fn4: (arg: D) => E,\n): E\n\nexport declare function pipe<A, B, C, D, E, F>(\n  value: A,\n  fn1: (arg: A) => B,\n  fn2: (arg: B) => C,\n  fn3: (arg: C) => D,\n  fn4: (arg: D) => E,\n  fn5: (arg: E) => F,\n): F\n\nexport declare function pipe<A, B, C, D, E, F, G>(\n  value: A,\n  fn1: (arg: A) => B,\n  fn2: (arg: B) => C,\n  fn3: (arg: C) => D,\n  fn4: (arg: D) => E,\n  fn5: (arg: E) => F,\n  fn6: (arg: F) => G,\n): G\n\nexport declare function pipe<A, B, C, D, E, F, G, H>(\n  value: A,\n  fn1: (arg: A) => B,\n  fn2: (arg: B) => C,\n  fn3: (arg: C) => D,\n  fn4: (arg: D) => E,\n  fn5: (arg: E) => F,\n  fn6: (arg: F) => G,\n  fn7: (arg: G) => H,\n): H\n\nexport declare function pipe<A, B, C, D, E, F, G, H, I>(\n  value: A,\n  fn1: (arg: A) => B,\n  fn2: (arg: B) => C,\n  fn3: (arg: C) => D,\n  fn4: (arg: D) => E,\n  fn5: (arg: E) => F,\n  fn6: (arg: F) => G,\n  fn7: (arg: G) => H,\n  fn8: (arg: H) => I,\n): I\n\nexport declare function pipe<A, B, C, D, E, F, G, H, I, J>(\n  value: A,\n  fn1: (arg: A) => B,\n  fn2: (arg: B) => C,\n  fn3: (arg: C) => D,\n  fn4: (arg: D) => E,\n  fn5: (arg: E) => F,\n  fn6: (arg: F) => G,\n  fn7: (arg: G) => H,\n  fn8: (arg: H) => I,\n  fn9: (arg: I) => J,\n): J\n")),(0,o.kt)("h3",{id:"flow"},"flow"),(0,o.kt)("p",null,"Performs left-to-right function composition and returns a new function, the first argument may have any arity, the remaining arguments must be unary."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare function flow<A extends ReadonlyArray<unknown>, B>(\n  fn1: (...args: A) => B,\n): (...args: A) => B\n\nexport declare function flow<A extends ReadonlyArray<unknown>, B, C>(\n  fn1: (...args: A) => B,\n  fn2: (arg: B) => C,\n): (...args: A) => C\n\nexport declare function flow<A extends ReadonlyArray<unknown>, B, C, D>(\n  fn1: (...args: A) => B,\n  fn2: (arg: B) => C,\n  fn3: (arg: C) => D,\n): (...args: A) => D\n\nexport declare function flow<A extends ReadonlyArray<unknown>, B, C, D, E>(\n  fn1: (...args: A) => B,\n  fn2: (arg: B) => C,\n  fn3: (arg: C) => D,\n  fn4: (arg: D) => E,\n): (...args: A) => E\n\nexport declare function flow<A extends ReadonlyArray<unknown>, B, C, D, E, F>(\n  fn1: (...args: A) => B,\n  fn2: (arg: B) => C,\n  fn3: (arg: C) => D,\n  fn4: (arg: D) => E,\n  fn5: (arg: E) => F,\n): (...args: A) => F\n\nexport declare function flow<\n  A extends ReadonlyArray<unknown>,\n  B,\n  C,\n  D,\n  E,\n  F,\n  G,\n>(\n  fn1: (...args: A) => B,\n  fn2: (arg: B) => C,\n  fn3: (arg: C) => D,\n  fn4: (arg: D) => E,\n  fn5: (arg: E) => F,\n  fn6: (arg: F) => G,\n): (...args: A) => G\n\nexport declare function flow<\n  A extends ReadonlyArray<unknown>,\n  B,\n  C,\n  D,\n  E,\n  F,\n  G,\n  H,\n>(\n  fn1: (...args: A) => B,\n  fn2: (arg: B) => C,\n  fn3: (arg: C) => D,\n  fn4: (arg: D) => E,\n  fn5: (arg: E) => F,\n  fn6: (arg: F) => G,\n  fn7: (arg: G) => H,\n): (...args: A) => H\n\nexport declare function flow<\n  A extends ReadonlyArray<unknown>,\n  B,\n  C,\n  D,\n  E,\n  F,\n  G,\n  H,\n  I,\n>(\n  fn1: (...args: A) => B,\n  fn2: (arg: B) => C,\n  fn3: (arg: C) => D,\n  fn4: (arg: D) => E,\n  fn5: (arg: E) => F,\n  fn6: (arg: F) => G,\n  fn7: (arg: G) => H,\n  fn8: (arg: H) => I,\n): (...args: A) => I\n\nexport declare function flow<\n  A extends ReadonlyArray<unknown>,\n  B,\n  C,\n  D,\n  E,\n  F,\n  G,\n  H,\n  I,\n  J,\n>(\n  fn1: (...args: A) => B,\n  fn2: (arg: B) => C,\n  fn3: (arg: C) => D,\n  fn4: (arg: D) => E,\n  fn5: (arg: E) => F,\n  fn6: (arg: F) => G,\n  fn7: (arg: G) => H,\n  fn8: (arg: H) => I,\n  fn9: (arg: I) => J,\n): (...args: A) => J\n")))}u.isMDXComponent=!0}}]);