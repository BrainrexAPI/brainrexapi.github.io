/*! For license information please see c135fa19.22275f78.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{183:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(6),i=(n(0),n(209)),o=n(213),c={title:"What is BrainRex?",description:"BrainRex is a single API for crypto data and analytics. "},s={id:"about/what-is-brainrex",title:"What is BrainRex?",description:"BrainRex is a single API for crypto data and analytics. ",source:"@site/docs/about/what-is-brainrex.md",permalink:"/docs/about/what-is-brainrex",editUrl:"https://github.com/brainrexapi/brainrexapi.github.io/edit/master/docs/about/what-is-brainrex.md",sidebar:"docs",next:{title:"Anomaly Detection",permalink:"/docs/features/brain/anomaly-detection"}},l=[],u={rightToc:l},p="wrapper";function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(p,Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"BrainRex is a team of data scientists with expertise in anomaly detection and natural language understanding.\nWe are leveraging the advances in Deep Learning to quickly train industry domain speficic AI. Then we deploy this models at scale using a serverless architecture and make available to enterprises through client APIs.\nOur clients looking for maximum privacy and complaiance. We offer an on promise solution. "),Object(i.b)("p",null,"Things we make:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Anomaly detection"),Object(i.b)("li",{parentName:"ul"},"Sentiment Analysis"),Object(i.b)("li",{parentName:"ul"},"Named Entity Recognition")),Object(i.b)("p",null,"Industries we like:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Cryptocurrency"),Object(i.b)("li",{parentName:"ul"},"Insurance ")),Object(i.b)("p",null,"Coming next:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Legacy finance "),Object(i.b)("li",{parentName:"ul"})),Object(i.b)(o.a,{to:"/docs/setup/installation/",mdxType:"Jump"},"Concepts"))}b.isMDXComponent=!0},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,f=p["".concat(o,".").concat(b)]||p[b]||m[b]||i;return n?a.a.createElement(f,c({ref:t},l,{components:n})):a.a.createElement(f,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[b]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},210:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},211:function(e,t,n){"use strict";var r=n(1),a=n(0),i=n.n(a),o=n(17);const c=/^\/(?!\/)/;t.a=function(e){const{to:t,href:n}=e,s=t||n,l=c.test(s),u=Object(a.useRef)(!1),p="undefined"!=typeof window&&"IntersectionObserver"in window;let b;return Object(a.useEffect)(()=>(!p&&l&&window.docusaurus.prefetch(s),()=>{p&&b&&b.disconnect()}),[s,p,l]),s&&l?i.a.createElement(o.b,Object(r.a)({},e,{onMouseEnter:()=>{u.current||(window.docusaurus.preload(s),u.current=!0)},innerRef:e=>{p&&e&&l&&((e,t)=>{b=new window.IntersectionObserver(n=>{n.forEach(n=>{e===n.target&&(n.isIntersecting||n.intersectionRatio>0)&&(b.unobserve(e),b.disconnect(),t())})}),b.observe(e)})(e,()=>{window.docusaurus.prefetch(s)})},to:s})):i.a.createElement("a",Object(r.a)({},e,{href:s}))}},213:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(211),o=n(210),c=n.n(o);n(85);t.a=function({children:e,className:t,badge:n,icon:r,size:o,target:s,to:l}){let u=c()("jump-to",`jump-to--${o}`,t),p=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},a.a.createElement("div",{className:"jump-to--main"},n?a.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",e),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:`feather icon-${r||"chevron-right"} arrow`}))));return s?a.a.createElement("a",{href:l,target:s,className:u},p):a.a.createElement(i.a,{to:l,className:u},p)}}}]);