/*! For license information please see a8be5f73.527ee7e2.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{176:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(1),a=r(6),i=(r(0),r(209)),o=r(213),s={title:"Build your own dashboards",sidebar_label:"Dashboards",description:"BrainRex provides"},c={id:"features/destinations/dashboards",title:"Build your own dashboards",description:"BrainRex provides",source:"@site/docs/features/destinations/dashboards.md",permalink:"/docs/features/destinations/dashboards",editUrl:"https://github.com/brainrexapi/brainrexapi.github.io/edit/master/docs/features/destinations/dashboards.md",sidebar_label:"Dashboards",sidebar:"docs",previous:{title:"destinations",permalink:"/docs/destinations"},next:{title:"Trading Backtester",permalink:"/docs/features/destinations/trading-backtesting"}},u=[{value:"What are Dashboards?",id:"what-are-dashboards",children:[]},{value:"How are the built?",id:"how-are-the-built",children:[]},{value:"Running dashboards on premise",id:"running-dashboards-on-premise",children:[]},{value:"How much does it cost?",id:"how-much-does-it-cost",children:[]},{value:"Limits",id:"limits",children:[]}],l={rightToc:u},d="wrapper";function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)(d,Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"what-are-dashboards"},"What are Dashboards?"),Object(i.b)("p",null,"All data streamed or passed through our anomaly detector can be easily visualize with the help of Elastic Search and Kibana. Allowing you to get a "),Object(i.b)("p",null,"Features:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Real time visulazation "),Object(i.b)("li",{parentName:"ul"},"Visualize each time series."),Object(i.b)("li",{parentName:"ul"},"Visualize all time series ."),Object(i.b)("li",{parentName:"ul"},"Explore indi")),Object(i.b)("h2",{id:"how-are-the-built"},"How are the built?"),Object(i.b)("p",null,"Our dashboards are built using Elastic Search and Kibana.  "),Object(i.b)("h2",{id:"running-dashboards-on-premise"},"Running dashboards on premise"),Object(i.b)("p",null,"When you purchase an IBM Power 9 system. You can run your own dashboards servers locally with the help of Docker and Docker-compose."),Object(i.b)("h2",{id:"how-much-does-it-cost"},"How much does it cost?"),Object(i.b)("p",null,"Dashboards are included in Pro and Enterprise tiers only."),Object(i.b)("h2",{id:"limits"},"Limits"),Object(i.b)("p",null,"Pro. 2 Dashboards"),Object(i.b)("p",null,"Enterprise "),Object(i.b)(o.a,{to:"docs/tutorials/analyzing-entities",mdxType:"Jump"},"Purchase Pro Plan"))}b.isMDXComponent=!0},209:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s({},t,{},e)),r},d=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),b=n,h=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return r?a.a.createElement(h,s({ref:t},u,{components:r})):a.a.createElement(h,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[b]="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},210:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var o=a.apply(null,n);o&&e.push(o)}else if("object"===i)for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},211:function(e,t,r){"use strict";var n=r(1),a=r(0),i=r.n(a),o=r(17);const s=/^\/(?!\/)/;t.a=function(e){const{to:t,href:r}=e,c=t||r,u=s.test(c),l=Object(a.useRef)(!1),d="undefined"!=typeof window&&"IntersectionObserver"in window;let b;return Object(a.useEffect)(()=>(!d&&u&&window.docusaurus.prefetch(c),()=>{d&&b&&b.disconnect()}),[c,d,u]),c&&u?i.a.createElement(o.b,Object(n.a)({},e,{onMouseEnter:()=>{l.current||(window.docusaurus.preload(c),l.current=!0)},innerRef:e=>{d&&e&&u&&((e,t)=>{b=new window.IntersectionObserver(r=>{r.forEach(r=>{e===r.target&&(r.isIntersecting||r.intersectionRatio>0)&&(b.unobserve(e),b.disconnect(),t())})}),b.observe(e)})(e,()=>{window.docusaurus.prefetch(c)})},to:c})):i.a.createElement("a",Object(n.a)({},e,{href:c}))}},213:function(e,t,r){"use strict";var n=r(0),a=r.n(n),i=r(211),o=r(210),s=r.n(o);r(85);t.a=function({children:e,className:t,badge:r,icon:n,size:o,target:c,to:u}){let l=s()("jump-to",`jump-to--${o}`,t),d=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},a.a.createElement("div",{className:"jump-to--main"},r?a.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",e),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:`feather icon-${n||"chevron-right"} arrow`}))));return c?a.a.createElement("a",{href:u,target:c,className:l},d):a.a.createElement(i.a,{to:u,className:l},d)}}}]);