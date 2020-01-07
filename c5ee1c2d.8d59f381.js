/*! For license information please see c5ee1c2d.8d59f381.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{193:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(1),a=(r(0),r(214)),o=r(217);const c={title:"Install Vector Through Your Package Manager",sidebar_label:"hidden",hide_pagination:!0},i={id:"setup/installation/package-managers",title:"Install Vector Through Your Package Manager",description:"import Jump from '@site/src/components/Jump';",source:"@site/docs/setup/installation/package-managers.md",permalink:"/docs/setup/installation/package-managers",editUrl:"https://github.com/timberio/vector/edit/master/website/docs/setup/installation/package-managers.md",sidebar_label:"hidden"},s=[],u={rightToc:s},p="wrapper";function l({components:e,...t}){return Object(a.b)(p,Object(n.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)(o.a,{to:"/docs/setup/installation/package-managers/dpkg/",mdxType:"Jump"},"DPKG"),Object(a.b)(o.a,{to:"/docs/setup/installation/package-managers/homebrew/",mdxType:"Jump"},"Homebrew"),Object(a.b)(o.a,{to:"/docs/setup/installation/package-managers/msi/",mdxType:"Jump"},"MSI"),Object(a.b)(o.a,{to:"/docs/setup/installation/package-managers/rpm/",mdxType:"Jump"},"RPM"))}l.isMDXComponent=!0},213:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var c=a.apply(null,n);c&&e.push(c)}else if("object"===o)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},214:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),m=n,d=l["".concat(c,".").concat(m)]||l[m]||f[m]||o;return r?a.a.createElement(d,i({ref:t},u,{components:r})):a.a.createElement(d,i({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},215:function(e,t,r){"use strict";var n=r(1),a=r(0),o=r.n(a),c=r(17);const i=/^\/(?!\/)/;t.a=function(e){const{to:t,href:r}=e,s=t||r,u=i.test(s),p=Object(a.useRef)(!1),l="undefined"!=typeof window&&"IntersectionObserver"in window;let m;return Object(a.useEffect)(()=>(!l&&u&&window.docusaurus.prefetch(s),()=>{l&&m&&m.disconnect()}),[s,l,u]),s&&u?o.a.createElement(c.b,Object(n.a)({},e,{onMouseEnter:()=>{p.current||(window.docusaurus.preload(s),p.current=!0)},innerRef:e=>{l&&e&&u&&((e,t)=>{m=new window.IntersectionObserver(r=>{r.forEach(r=>{e===r.target&&(r.isIntersecting||r.intersectionRatio>0)&&(m.unobserve(e),m.disconnect(),t())})}),m.observe(e)})(e,()=>{window.docusaurus.prefetch(s)})},to:s})):o.a.createElement("a",Object(n.a)({},e,{href:s}))}},217:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(215),c=r(213),i=r.n(c);r(85);t.a=function({children:e,className:t,badge:r,icon:n,size:c,target:s,to:u}){let p=i()("jump-to",`jump-to--${c}`,t),l=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},a.a.createElement("div",{className:"jump-to--main"},r?a.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",e),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:`feather icon-${n||"chevron-right"} arrow`}))));return s?a.a.createElement("a",{href:u,target:s,className:p},l):a.a.createElement(o.a,{to:u,className:p},l)}}}]);