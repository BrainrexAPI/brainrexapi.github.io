/*! For license information please see 77587487.c8c50eea.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{130:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return f}));var n=r(1),a=r(6),o=(r(0),r(173)),c=r(190),i={title:"Reference",description:"Vector technical reference, covering available options and settings.",sidebar_label:"hidden",hide_pagination:!0},s={id:"reference",title:"Reference",description:"Vector technical reference, covering available options and settings.",source:"@site/docs/reference.md",permalink:"/docs/reference",editUrl:"https://github.com/brainrexapi/edit/master/docs/reference.md",sidebar_label:"hidden",sidebar:"docs",previous:{title:"Insurance solution",permalink:"/docs/solutions/insurance-firms-solution"},next:{title:"sources",permalink:"/docs/reference/sources"}},u=[],l={rightToc:u},p="wrapper";function f(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)(p,Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Vector reference will outline and define all available options within\nVector. Serving as a complete guide to option types, values, requirements,\nand more."),Object(o.b)(c.a,{to:"/docs/reference/sources",mdxType:"Jump"},"Sources"),Object(o.b)(c.a,{to:"/docs/reference/transforms",mdxType:"Jump"},"Transforms"),Object(o.b)(c.a,{to:"/docs/reference/sinks",mdxType:"Jump"},"Sinks"))}f.isMDXComponent=!0},171:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var c=a.apply(null,n);c&&e.push(c)}else if("object"===o)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},173:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return r?a.a.createElement(m,i({ref:t},u,{components:r})):a.a.createElement(m,i({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[f]="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},174:function(e,t,r){"use strict";var n=r(1),a=r(0),o=r.n(a),c=r(17);const i=/^\/(?!\/)/;t.a=function(e){const{to:t,href:r}=e,s=t||r,u=i.test(s),l=Object(a.useRef)(!1),p="undefined"!=typeof window&&"IntersectionObserver"in window;let f;return Object(a.useEffect)(()=>(!p&&u&&window.docusaurus.prefetch(s),()=>{p&&f&&f.disconnect()}),[s,p,u]),s&&u?o.a.createElement(c.b,Object(n.a)({},e,{onMouseEnter:()=>{l.current||(window.docusaurus.preload(s),l.current=!0)},innerRef:e=>{p&&e&&u&&((e,t)=>{f=new window.IntersectionObserver(r=>{r.forEach(r=>{e===r.target&&(r.isIntersecting||r.intersectionRatio>0)&&(f.unobserve(e),f.disconnect(),t())})}),f.observe(e)})(e,()=>{window.docusaurus.prefetch(s)})},to:s})):o.a.createElement("a",Object(n.a)({},e,{href:s}))}},190:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(174),c=r(171),i=r.n(c);r(90);t.a=function({children:e,className:t,badge:r,icon:n,size:c,target:s,to:u}){let l=i()("jump-to",`jump-to--${c}`,t),p=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},a.a.createElement("div",{className:"jump-to--main"},r?a.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",e),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:`feather icon-${n||"chevron-right"} arrow`}))));return s?a.a.createElement("a",{href:u,target:s,className:l},p):a.a.createElement(o.a,{to:u,className:l},p)}}}]);