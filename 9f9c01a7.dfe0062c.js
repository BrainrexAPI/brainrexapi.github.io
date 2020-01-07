/*! For license information please see 9f9c01a7.dfe0062c.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{178:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(1),o=(r(0),r(214)),a=r(217);const c={title:"Deployment",sidebar_label:"hidden",description:"How to deploy Vector into your own infrastructure",hide_pagination:!0},i={id:"setup/deployment",title:"Deployment",description:"How to deploy Vector into your own infrastructure",source:"@site/docs/setup/deployment.md",permalink:"/docs/setup/deployment",editUrl:"https://github.com/timberio/vector/edit/master/website/docs/setup/deployment.md",sidebar_label:"hidden"},s=[],p={rightToc:s},l="wrapper";function u({components:e,...t}){return Object(o.b)(l,Object(n.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This section will cover deploying Vector. Vector is designed to be the single\nand only tool needed to get data from A to B, serving both as an\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/deployment/roles/agent/"}),"agent")," and a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/deployment/roles/service/"}),"service"),". You combine\nthese roles to form ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/deployment/topologies/"}),"topologies"),"."),Object(o.b)("p",null,"Start by becoming familiar with the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/deployment/roles/"}),"roles")," and then take a closer\nlook at the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/deployment/roles/"}),"topologies")," you can create."),Object(o.b)("hr",null),Object(o.b)(a.a,{to:"/docs/setup/deployment/roles/",mdxType:"Jump"},"Roles"),Object(o.b)(a.a,{to:"/docs/setup/deployment/topologies/",mdxType:"Jump"},"Topologies"))}u.isMDXComponent=!0},213:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var c=o.apply(null,n);c&&e.push(c)}else if("object"===a)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},214:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||a;return r?o.a.createElement(f,i({ref:t},p,{components:r})):o.a.createElement(f,i({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,c[1]=i;for(var p=2;p<a;p++)c[p]=r[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},215:function(e,t,r){"use strict";var n=r(1),o=r(0),a=r.n(o),c=r(17);const i=/^\/(?!\/)/;t.a=function(e){const{to:t,href:r}=e,s=t||r,p=i.test(s),l=Object(o.useRef)(!1),u="undefined"!=typeof window&&"IntersectionObserver"in window;let d;return Object(o.useEffect)(()=>(!u&&p&&window.docusaurus.prefetch(s),()=>{u&&d&&d.disconnect()}),[s,u,p]),s&&p?a.a.createElement(c.b,Object(n.a)({},e,{onMouseEnter:()=>{l.current||(window.docusaurus.preload(s),l.current=!0)},innerRef:e=>{u&&e&&p&&((e,t)=>{d=new window.IntersectionObserver(r=>{r.forEach(r=>{e===r.target&&(r.isIntersecting||r.intersectionRatio>0)&&(d.unobserve(e),d.disconnect(),t())})}),d.observe(e)})(e,()=>{window.docusaurus.prefetch(s)})},to:s})):a.a.createElement("a",Object(n.a)({},e,{href:s}))}},217:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(215),c=r(213),i=r.n(c);r(85);t.a=function({children:e,className:t,badge:r,icon:n,size:c,target:s,to:p}){let l=i()("jump-to",`jump-to--${c}`,t),u=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},o.a.createElement("div",{className:"jump-to--main"},r?o.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",e),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:`feather icon-${n||"chevron-right"} arrow`}))));return s?o.a.createElement("a",{href:p,target:s,className:l},u):o.a.createElement(a.a,{to:p,className:l},u)}}}]);