/*! For license information please see 96b590e1.cc1aa8b7.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{175:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(1),a=(n(0),n(214)),o=n(268),s=n.n(o),c=n(217);const i={title:"Concepts",description:"The fundamental BrainRex concepts. A great place to start learning about BrainRex."},p={id:"about/concepts",title:"Concepts",description:"The fundamental BrainRex concepts. A great place to start learning about BrainRex.",source:"@site/docs/about/concepts.md",permalink:"/docs/about/concepts",editUrl:"https://github.com/timberio/vector/edit/master/website/docs/about/concepts.md",sidebar:"docs",previous:{title:"What is BrainRex?",permalink:"/docs/about/what-is-brainrex"},next:{title:"Data Model (Event)",permalink:"/docs/about/data-model"}},l=[{value:"Components",id:"components",children:[{value:"Sources",id:"sources",children:[]},{value:"Transforms",id:"transforms",children:[]},{value:"Sinks",id:"sinks",children:[]}]},{value:"Events",id:"events",children:[]},{value:"Pipelines",id:"pipelines",children:[]}],u={rightToc:l},b="wrapper";function d({components:e,...t}){return Object(a.b)(b,Object(r.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)(s.a,{src:"/img/concepts.svg",mdxType:"SVG"}),Object(a.b)("p",null,"It's worth getting familiar with the basic concepts that comprise BrainRex as they\nare used throughout the documentation. This knowledge will be helpful as you\nproceed and is also cool to brag about amongst friends."),Object(a.b)("h2",{id:"components"},"Components"),Object(a.b)("p",null,'"Component" is the generic term we use for ',Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#sources"}),"sources"),",\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#transforms"}),"transforms"),", and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#sinks"}),"sinks"),". You compose components to create\npipelines, allowing you to ingest, transform, and send data."),Object(a.b)(c.a,{to:"/components/",mdxType:"Jump"},"View all components"),Object(a.b)("h3",{id:"sources"},"Sources"),Object(a.b)("p",null,'Vector would be junk if it couldn\'t injest data. A "source" defines where Vector\nshould pull data from, or how it should receive data pushed to it. A pipeline\ncan have any number of sources, and as they ingest data they proceed to\nnormalize it into ',Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#events"}),"events")," ","(","see next section",")",". This sets the stage\nfor easy and consistent processing of your data. Examples of sources include\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/sources/file/"}),Object(a.b)("inlineCode",{parentName:"a"},"file")),", ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/sources/syslog/"}),Object(a.b)("inlineCode",{parentName:"a"},"syslog")),",\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/sources/socket/"}),Object(a.b)("inlineCode",{parentName:"a"},"socket")),", and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/sources/stdin/"}),Object(a.b)("inlineCode",{parentName:"a"},"stdin")),"."),Object(a.b)(c.a,{to:"/docs/reference/sources/",mdxType:"Jump"},"View all sources"),Object(a.b)("h3",{id:"transforms"},"Transforms"),Object(a.b)("p",null,'A "transform" is responsible for mutating events as they are transported by\nVector. This might involve parsing, filtering, sampling, or aggregating. You can\nhave any number of transforms in your pipeline and how they are composed is up\nto you.'),Object(a.b)(c.a,{to:"/docs/reference/transforms/",mdxType:"Jump"},"View all transforms"),Object(a.b)("h3",{id:"sinks"},"Sinks"),Object(a.b)("p",null,'A "sink" is a destination for ',Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/about/data-model/#event"}),"events"),". Each sink's\ndesign and transmission method is dictated by the downstream service it is\ninteracting with. For example, the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/sinks/socket/"}),Object(a.b)("inlineCode",{parentName:"a"},"socket")," sink")," will\nstream individual events, while the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reference/sinks/aws_s3/"}),Object(a.b)("inlineCode",{parentName:"a"},"aws_s3")," sink")," will\nbuffer and flush data."),Object(a.b)(c.a,{to:"/docs/reference/sinks/",mdxType:"Jump"},"View all sinks"),Object(a.b)("h2",{id:"events"},"Events"),Object(a.b)("p",null,'All items (both logs and metrics) passing through Vector are known as an\n"event", which is explained in detail in the ',Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/about/data-model/"}),"data model"),"\nsection."),Object(a.b)(c.a,{to:"/docs/about/data-model/",mdxType:"Jump"},"View data model"),Object(a.b)("h2",{id:"pipelines"},"Pipelines"),Object(a.b)("p",null,'A "pipeline" is the end result of connecting ',Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#sources"}),"sources"),",\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#transforms"}),"transforms"),", and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#sinks"}),"sinks"),". You can see a full example of a\npipeline in the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/setup/configuration/"}),"configuration section"),"."),Object(a.b)(c.a,{to:"/docs/setup/configuration/",mdxType:"Jump"},"View configuration"))}d.isMDXComponent=!0},213:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var s=a.apply(null,r);s&&e.push(s)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,m=u["".concat(s,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(m,c({ref:t},p,{components:n})):a.a.createElement(m,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[b]="string"==typeof e?e:r,s[1]=c;for(var p=2;p<o;p++)s[p]=n[p];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},215:function(e,t,n){"use strict";var r=n(1),a=n(0),o=n.n(a),s=n(17);const c=/^\/(?!\/)/;t.a=function(e){const{to:t,href:n}=e,i=t||n,p=c.test(i),l=Object(a.useRef)(!1),u="undefined"!=typeof window&&"IntersectionObserver"in window;let b;return Object(a.useEffect)(()=>(!u&&p&&window.docusaurus.prefetch(i),()=>{u&&b&&b.disconnect()}),[i,u,p]),i&&p?o.a.createElement(s.b,Object(r.a)({},e,{onMouseEnter:()=>{l.current||(window.docusaurus.preload(i),l.current=!0)},innerRef:e=>{u&&e&&p&&((e,t)=>{b=new window.IntersectionObserver(n=>{n.forEach(n=>{e===n.target&&(n.isIntersecting||n.intersectionRatio>0)&&(b.unobserve(e),b.disconnect(),t())})}),b.observe(e)})(e,()=>{window.docusaurus.prefetch(i)})},to:i})):o.a.createElement("a",Object(r.a)({},e,{href:i}))}},217:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(215),s=n(213),c=n.n(s);n(85);t.a=function({children:e,className:t,badge:n,icon:r,size:s,target:i,to:p}){let l=c()("jump-to",`jump-to--${s}`,t),u=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},a.a.createElement("div",{className:"jump-to--main"},n?a.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",e),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:`feather icon-${r||"chevron-right"} arrow`}))));return i?a.a.createElement("a",{href:p,target:i,className:l},u):a.a.createElement(o.a,{to:p,className:l},u)}}}]);