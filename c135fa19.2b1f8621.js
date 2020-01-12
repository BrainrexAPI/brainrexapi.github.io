/*! For license information please see c135fa19.2b1f8621.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{182:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(6),i=(n(0),n(207)),c=n(211),o={title:"What is BrainRex?",description:"BrainRex is a single API for crypto data and analytics. "},s={id:"about/what-is-brainrex",title:"What is BrainRex?",description:"BrainRex is a single API for crypto data and analytics. ",source:"@site/docs/about/what-is-brainrex.md",permalink:"/docs/about/what-is-brainrex",editUrl:"https://github.com/brainrexapi/brainrexapi.github.io/edit/master/docs/about/what-is-brainrex.md",sidebar:"docs",next:{title:"Anomaly Detection",permalink:"/docs/features/anomaly-detection"}},l=[{value:"What is the BrainRex Api?",id:"what-is-the-brainrex-api",children:[]},{value:"What is AI enrichment?",id:"what-is-ai-enrichment",children:[{value:"Anomaly detection",id:"anomaly-detection",children:[]},{value:"Entity Analysis",id:"entity-analysis",children:[]},{value:"Sentiment Analysis",id:"sentiment-analysis",children:[]}]},{value:"Integrations",id:"integrations",children:[{value:"Crypto Exchange Data",id:"crypto-exchange-data",children:[]},{value:"Blockchain Data",id:"blockchain-data",children:[]}]}],b={rightToc:l},d="wrapper";function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(d,Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"BrainRex is a machine learning company that specializes in making tools for the cryptocurrency and blokchain industry."),Object(i.b)("h2",{id:"what-is-the-brainrex-api"},"What is the BrainRex Api?"),Object(i.b)("p",null,"The BrainRex API is the way to interact with the AI services and data provided by brainrex and its partners."),Object(i.b)(c.a,{to:"/docs/setup/installation/",mdxType:"Jump"},"Get started"),Object(i.b)("h2",{id:"what-is-ai-enrichment"},"What is AI enrichment?"),Object(i.b)("p",null,'"Transforms" is the generic term we use for ',Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#sources"}),"sources"),",\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#transforms"}),"transforms"),", and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#sinks"}),"sinks"),". You compose components to create\npipelines, allowing you to ingest, transform, and send data."),Object(i.b)(c.a,{to:"/components/",mdxType:"Jump"},"View all components"),Object(i.b)("h3",{id:"anomaly-detection"},"Anomaly detection"),Object(i.b)("p",null,'BrainRex can ingest all kinds of time series data would be junk if it couldn\'t injest data. A "source" defines where Vector\nshould pull data from, or how it should receive data pushed to it. A pipeline\ncan have any number of sources, and as they ingest data they proceed to\nnormalize it into ',Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#events"}),"events")," ","(","see next section",")",". This sets the stage\nfor easy and consistent processing of your data. Examples of sources include\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sources/file/"}),Object(i.b)("inlineCode",{parentName:"a"},"file")),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sources/syslog/"}),Object(i.b)("inlineCode",{parentName:"a"},"syslog")),",\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sources/socket/"}),Object(i.b)("inlineCode",{parentName:"a"},"socket")),", and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sources/stdin/"}),Object(i.b)("inlineCode",{parentName:"a"},"stdin")),"."),Object(i.b)(c.a,{to:"/docs/about//",mdxType:"Jump"},"View all sources"),Object(i.b)("h3",{id:"entity-analysis"},"Entity Analysis"),Object(i.b)("p",null,'"Entity analytics" is the art of extracting known '),Object(i.b)(c.a,{to:"/docs/reference/transforms/",mdxType:"Jump"},"View all transforms"),Object(i.b)("h3",{id:"sentiment-analysis"},"Sentiment Analysis"),Object(i.b)("p",null,'A "destination" is a destination for ',Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about/data-model/#event"}),"events"),". Each sink's\ndesign and transmission method is dictated by the downstream service it is\ninteracting with. For example, the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sinks/socket/"}),Object(i.b)("inlineCode",{parentName:"a"},"socket")," sink")," will\nstream individual events, while the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sinks/aws_s3/"}),Object(i.b)("inlineCode",{parentName:"a"},"aws_s3")," sink")," will\nbuffer and flush data."),Object(i.b)(c.a,{to:"/docs/features/sentiment-analysis/",mdxType:"Jump"},"Learn more about Sentiment"),Object(i.b)("h2",{id:"integrations"},"Integrations"),Object(i.b)("p",null,'All items (both logs and metrics) passing through Vector are known as an\n"event", which is explained in detail in the ',Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about/data-model/"}),"data model"),"\nsection."),Object(i.b)(c.a,{to:"/docs/about/data-model/",mdxType:"Jump"},"View All Integrations"),Object(i.b)("h3",{id:"crypto-exchange-data"},"Crypto Exchange Data"),Object(i.b)("p",null,'A "pipeline" is the end result of connecting ',Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#sources"}),"sources"),",\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#transforms"}),"transforms"),", and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#sinks"}),"sinks"),". You can see a full example of a\npipeline in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/quickstarts/configuration/"}),"configuration section"),"."),Object(i.b)(c.a,{to:"/docs/setup/configuration/",mdxType:"Jump"},"View configuration"),Object(i.b)("h3",{id:"blockchain-data"},"Blockchain Data"),Object(i.b)("p",null,'A "blockchain" is a '),Object(i.b)("h3",{id:""}))}p.isMDXComponent=!0},207:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},d=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=b(n),p=a,m=d["".concat(c,".").concat(p)]||d[p]||u[p]||i;return n?r.a.createElement(m,o({ref:t},l,{components:n})):r.a.createElement(m,o({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},208:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var c=r.apply(null,a);c&&e.push(c)}else if("object"===i)for(var o in a)n.call(a,o)&&a[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},209:function(e,t,n){"use strict";var a=n(1),r=n(0),i=n.n(r),c=n(17);const o=/^\/(?!\/)/;t.a=function(e){const{to:t,href:n}=e,s=t||n,l=o.test(s),b=Object(r.useRef)(!1),d="undefined"!=typeof window&&"IntersectionObserver"in window;let p;return Object(r.useEffect)(()=>(!d&&l&&window.docusaurus.prefetch(s),()=>{d&&p&&p.disconnect()}),[s,d,l]),s&&l?i.a.createElement(c.b,Object(a.a)({},e,{onMouseEnter:()=>{b.current||(window.docusaurus.preload(s),b.current=!0)},innerRef:e=>{d&&e&&l&&((e,t)=>{p=new window.IntersectionObserver(n=>{n.forEach(n=>{e===n.target&&(n.isIntersecting||n.intersectionRatio>0)&&(p.unobserve(e),p.disconnect(),t())})}),p.observe(e)})(e,()=>{window.docusaurus.prefetch(s)})},to:s})):i.a.createElement("a",Object(a.a)({},e,{href:s}))}},211:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(209),c=n(208),o=n.n(c);n(85);t.a=function({children:e,className:t,badge:n,icon:a,size:c,target:s,to:l}){let b=o()("jump-to",`jump-to--${c}`,t),d=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},r.a.createElement("div",{className:"jump-to--main"},n?r.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",e),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:`feather icon-${a||"chevron-right"} arrow`}))));return s?r.a.createElement("a",{href:l,target:s,className:b},d):r.a.createElement(i.a,{to:l,className:b},d)}}}]);