/*! For license information please see 4db8806d.d237bb52.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return m}));var r=n(1),a=n(6),o=(n(0),n(209)),i=n(213),s={title:"All Tutorials",sidebar_label:"All tutorials",hide_pagination:!0},c={id:"tutorials",title:"All Tutorials",description:"This is a collection of in depth tutorials showing you how to perform some specific tasks in the Python programming language.",source:"@site/docs/tutorials.md",permalink:"/docs/tutorials",editUrl:"https://github.com/brainrexapi/brainrexapi.github.io/edit/master/docs/tutorials.md",sidebar_label:"All tutorials",sidebar:"docs",previous:{title:"Quickstarts Using Client Libraries",permalink:"/docs/quickstarts/quickstart-client-libraries"},next:{title:"Analyzing Sentiment",permalink:"/docs/tutorials/analyzing-sentiment"}},l=[],u={rightToc:l},p="wrapper";function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(p,Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This is a collection of in depth tutorials showing you how to perform some specific tasks in the Python programming language."),Object(o.b)("p",null,"This examples are for illustrative use only and should not be used in any production systems.\nPython, snakes... what?\nToday, we will focus on one of the most important web development software, called Python."),Object(o.b)("p",null,"Python has been developed for about 29 years now (since 1990), but it just had its stable release this year."),Object(o.b)("p",null,"You can make many things with it, because its a general purpose programming language"),Object(o.b)("p",null,"However, it has been used to create many big and important websites, especially with the use of one of its most useful web frameworks called Flask."),Object(o.b)("hr",null),Object(o.b)(i.a,{to:"/docs/tutorials/analyzing-sentiment/",mdxType:"Jump"},"Analyzing Sentiment Tutorial"),Object(o.b)(i.a,{to:"/docs/tutorials/analyzing-entities/",mdxType:"Jump"},"Extracting Entities Tutorial"),Object(o.b)(i.a,{to:"/docs/tutorials/analyzing-sentiment/",mdxType:"Jump"},"Analyzing Anomalies Tutorial"),Object(o.b)(i.a,{to:"/docs/tutorials/extracting-exchange-data/",mdxType:"Jump"},"Working With Crypto Market Data"))}m.isMDXComponent=!0},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||f[m]||o;return n?a.a.createElement(d,s({ref:t},l,{components:n})):a.a.createElement(d,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},210:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},211:function(e,t,n){"use strict";var r=n(1),a=n(0),o=n.n(a),i=n(17);const s=/^\/(?!\/)/;t.a=function(e){const{to:t,href:n}=e,c=t||n,l=s.test(c),u=Object(a.useRef)(!1),p="undefined"!=typeof window&&"IntersectionObserver"in window;let m;return Object(a.useEffect)(()=>(!p&&l&&window.docusaurus.prefetch(c),()=>{p&&m&&m.disconnect()}),[c,p,l]),c&&l?o.a.createElement(i.b,Object(r.a)({},e,{onMouseEnter:()=>{u.current||(window.docusaurus.preload(c),u.current=!0)},innerRef:e=>{p&&e&&l&&((e,t)=>{m=new window.IntersectionObserver(n=>{n.forEach(n=>{e===n.target&&(n.isIntersecting||n.intersectionRatio>0)&&(m.unobserve(e),m.disconnect(),t())})}),m.observe(e)})(e,()=>{window.docusaurus.prefetch(c)})},to:c})):o.a.createElement("a",Object(r.a)({},e,{href:c}))}},213:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(211),i=n(210),s=n.n(i);n(85);t.a=function({children:e,className:t,badge:n,icon:r,size:i,target:c,to:l}){let u=s()("jump-to",`jump-to--${i}`,t),p=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},a.a.createElement("div",{className:"jump-to--main"},n?a.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",e),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:`feather icon-${r||"chevron-right"} arrow`}))));return c?a.a.createElement("a",{href:l,target:c,className:u},p):a.a.createElement(o.a,{to:l,className:u},p)}}}]);