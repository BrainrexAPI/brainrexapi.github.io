(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{109:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return d}));var n=a(1),r=a(6),c=(a(0),a(196)),o=a(270),s={title:"Transforms",description:"Transforms are responsible for parsing, enriching, or transforming your log and metric data in-flight. They can be chained together, forming a network of transforms within your topology.",sidebar_label:"hidden",hide_pagination:!0},l={id:"reference/transforms",title:"Transforms",description:"Transforms are responsible for parsing, enriching, or transforming your log and metric data in-flight. They can be chained together, forming a network of transforms within your topology.",source:"@site/docs/reference/transforms.md",permalink:"/docs/reference/transforms",editUrl:"https://github.com/timberio/vector/edit/master/website/docs/reference/transforms.md",sidebar_label:"hidden"},i=[],m={rightToc:i},u="wrapper";function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)(u,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Transforms are responsible for parsing, enriching, or transforming your\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),"log")," and ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/metric/"}),"metric")," data\nin-flight. They can be chained together, forming a network of transforms within\nyour topology, ultimately flowing into a ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/sinks/"}),"sink"),"."),Object(c.b)("hr",null),Object(c.b)(o.a,{titles:!1,sinks:!1,sources:!1,mdxType:"VectorComponents"}))}d.isMDXComponent=!0},196:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),m=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s({},t,{},e)),a},u=function(e){var t=m(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=m(a),d=n,f=u["".concat(o,".").concat(d)]||u[d]||p[d]||c;return a?r.a.createElement(f,s({ref:t},i,{components:a})):r.a.createElement(f,s({ref:t},i))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var i=2;i<c;i++)o[i]=a[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},198:function(e,t,a){"use strict";var n=a(1),r=a(0),c=a.n(r),o=a(17);const s=/^\/(?!\/)/;t.a=function(e){const{to:t,href:a}=e,l=t||a,i=s.test(l),m=Object(r.useRef)(!1),u="undefined"!=typeof window&&"IntersectionObserver"in window;let d;return Object(r.useEffect)(()=>(!u&&i&&window.docusaurus.prefetch(l),()=>{u&&d&&d.disconnect()}),[l,u,i]),l&&i?c.a.createElement(o.b,Object(n.a)({},e,{onMouseEnter:()=>{m.current||(window.docusaurus.preload(l),m.current=!0)},innerRef:e=>{u&&e&&i&&((e,t)=>{d=new window.IntersectionObserver(a=>{a.forEach(a=>{e===a.target&&(a.isIntersecting||a.intersectionRatio>0)&&(d.unobserve(e),d.disconnect(),t())})}),d.observe(e)})(e,()=>{window.docusaurus.prefetch(l)})},to:l})):c.a.createElement("a",Object(n.a)({},e,{href:l}))}},199:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(198),o=a(195),s=a.n(o);a(85);t.a=function({children:e,className:t,badge:a,icon:n,size:o,target:l,to:i}){let m=s()("jump-to",`jump-to--${o}`,t),u=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},r.a.createElement("div",{className:"jump-to--main"},a?r.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",e),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:`feather icon-${n||"chevron-right"} arrow`}))));return l?r.a.createElement("a",{href:i,target:l,className:m},u):r.a.createElement(c.a,{to:i,className:m},u)}},270:function(e,t,a){"use strict";a(212);var n=a(1),r=a(0),c=a.n(r),o=a(262),s=a.n(o);a(94);var l=function({icon:e,values:t,currentState:a,setState:n}){if(0==t.size)return null;let r=Array.from(t);return c.a.createElement(c.a.Fragment,null,r.map((t,r)=>{let o="string"==typeof t?s()(t):t;return c.a.createElement("label",{key:r},c.a.createElement("input",{type:"checkbox",onChange:e=>{let r=new Set(a);e.currentTarget.checked?r.add(t):r.delete(t),n(r)},checked:a.has(t)}),e?c.a.createElement("i",{className:`feather icon-${e}`}):""," ",o)}))},i=a(199),m=a(198),u=a(306),d=a.n(u),p=a(195),f=a.n(p),b=a(308),g=a.n(b),h=a(197);a(95);function v({delivery_guarantee:e,description:t,event_types:a,name:n,status:r,type:o}){let s=null;return"source"==o&&(s=`/docs/reference/sources/${n}/`),"transform"==o&&(s=`/docs/reference/transforms/${n}/`),"sink"==o&&(s=`/docs/reference/sinks/${n}/`),c.a.createElement(m.a,{to:s,className:"vector-component"},c.a.createElement("div",{className:"vector-component--header"},t&&c.a.createElement("i",{className:"feather icon-info",title:t}),c.a.createElement("div",{className:"vector-component--name"},n," ",o)),c.a.createElement("div",{className:"vector-component--badges"},a.includes("log")?c.a.createElement("span",{className:"badge badge--primary",title:"This component works with log event types"},"L"):"",a.includes("metric")?c.a.createElement("span",{className:"badge badge--primary",title:"This component works with metric event types"},"M"):"","beta"==r?c.a.createElement("span",{className:"badge badge--warning",title:"This component is in beta and is not recommended for production environments"},c.a.createElement("i",{className:"feather icon-alert-triangle"})):c.a.createElement("span",{className:"badge badge--primary",title:"This component has passed reliability standards that make it production ready"},c.a.createElement("i",{className:"feather icon-award"})),"best_effort"==e?c.a.createElement("span",{className:"badge badge--warning",title:"This component makes a best-effort delivery guarantee, and in rare cases can lose data"},c.a.createElement("i",{className:"feather icon-shield-off"})):c.a.createElement("span",{className:"badge badge--primary",title:"This component offers an at-least-once delivery guarantee"},c.a.createElement("i",{className:"feather icon-shield"}))))}function y({components:e,headingLevel:t,titles:a}){const r=e.filter(e=>"source"==e.type),o=e.filter(e=>"transform"==e.type),s=e.filter(e=>"sink"==e.type),l=`h${t||3}`;return e.length>0?c.a.createElement(c.a.Fragment,null,r.length>0?c.a.createElement(c.a.Fragment,null,a&&c.a.createElement(l,null,r.length," Sources"),c.a.createElement("div",{className:"vector-components--grid"},r.map((e,t)=>c.a.createElement(v,Object(n.a)({key:t},e))))):"",o.length>0?c.a.createElement(c.a.Fragment,null,a&&c.a.createElement(l,null,o.length," Transforms"),c.a.createElement("div",{className:"vector-components--grid"},o.map((e,t)=>c.a.createElement(v,Object(n.a)({key:t},e))))):"",s.length>0?c.a.createElement(c.a.Fragment,null,a&&c.a.createElement(l,null,s.length," Sinks"),c.a.createElement("div",{className:"vector-components--grid"},s.map((e,t)=>c.a.createElement(v,Object(n.a)({key:t},e))))):"",c.a.createElement("hr",null),c.a.createElement(i.a,{to:"https://github.com/timberio/vector/issues/new?labels=type%3A+new+feature",target:"_blank",icon:"plus-circle"},"Request a new component")):c.a.createElement("div",{className:"empty"},c.a.createElement("div",{className:"icon"},"\u2639"),c.a.createElement("div",null,"No components found"))}t.a=function(e){const{siteConfig:t}=Object(h.a)(),{metadata:{sources:a,transforms:n,sinks:o}}=t.customFields,s=e.titles||null==e.titles,i=1==e.filterColumn,u=e.location?g.a.parse(e.location.search,{ignoreQueryPrefix:!0}):{};let p=[];(e.sources||null==e.sources)&&(p=p.concat(Object.values(a))),(e.transforms||null==e.transforms)&&(p=p.concat(Object.values(n))),(e.sinks||null==e.sinks)&&(p=p.concat(Object.values(o))),p=p.sort((e,t)=>e.name>t.name?1:-1);const[b,v]=Object(r.useState)("true"==u["at-least-once"]),[E,w]=Object(r.useState)(new Set(u.functions)),[O,N]=Object(r.useState)("true"==u.log),[j,k]=Object(r.useState)("true"==u.metric),[S,T]=Object(r.useState)(new Set(u["operating-systems"])),[_,x]=Object(r.useState)("true"==u["prod-ready"]),[C,P]=Object(r.useState)(new Set(u.providers)),[L,F]=Object(r.useState)(null);L&&(p=p.filter(e=>{return`${e.name.toLowerCase()} ${e.type.toLowerCase()}`.includes(L.toLowerCase())})),b&&(p=p.filter(e=>"at_least_once"==e.delivery_guarantee)),E.size>0&&(p=p.filter(e=>E.has(e.function_category))),O&&(p=p.filter(e=>e.event_types.includes("log"))),j&&(p=p.filter(e=>e.event_types.includes("metric"))),S.size>0&&(p=p.filter(e=>Array.from(S).every(t=>e.operating_systems.includes(t)))),_&&(p=p.filter(e=>"prod-ready"==e.status)),C.size>0&&(p=p.filter(e=>C.has(e.service_provider)));const $=new Set(d()(p).map(e=>e.operating_systems).flatten().uniq().compact().sort().value()),z=new Set(d()(p).map(e=>e.service_provider).uniq().compact().sort().value()),D=new Set(d()(p).map(e=>e.function_category).uniq().compact().sort().value());return c.a.createElement("div",{className:f()("vector-components",{"vector-components--cols":i})},c.a.createElement("div",{className:"filters"},c.a.createElement("div",{className:"search"},c.a.createElement("input",{type:"text",onChange:e=>F(e.currentTarget.value),placeholder:"\ud83d\udd0d Search..."})),c.a.createElement("div",{className:"filter"},c.a.createElement("div",{className:"filter--label"},c.a.createElement(m.a,{to:"/docs/about/data-model/",title:"Learn more about Vector's event types"},"Event types ",c.a.createElement("i",{className:"feather icon-info"}))),c.a.createElement("div",{className:"filter--choices"},c.a.createElement("label",{title:"Show only components that work with log event types."},c.a.createElement("input",{type:"checkbox",onChange:e=>N(e.currentTarget.checked),checked:O})," Log"),c.a.createElement("label",{title:"Show only components that work with metric event types."},c.a.createElement("input",{type:"checkbox",onChange:e=>k(e.currentTarget.checked),checked:j})," Metric"))),c.a.createElement("div",{className:"filter"},c.a.createElement("div",{className:"filter--label"},c.a.createElement(m.a,{to:"/docs/about/guarantees/",title:"Learn more about Vector's guarantees"},"Guarantees ",c.a.createElement("i",{className:"feather icon-info"}))),c.a.createElement("div",{className:"filter--choices"},c.a.createElement("label",{title:"Show only components that offer an at-least-once delivery guarantee."},c.a.createElement("input",{type:"checkbox",onChange:e=>v(e.currentTarget.checked),checked:b}),c.a.createElement("i",{className:"feather icon-shield"})," At-least-once"),c.a.createElement("label",{title:"Show only production ready components."},c.a.createElement("input",{type:"checkbox",onChange:e=>x(e.currentTarget.checked),checked:_}),c.a.createElement("i",{className:"feather icon-award"})," Prod-ready"))),c.a.createElement("div",{className:"filter"},c.a.createElement("div",{className:"filter--label"},"Functions"),c.a.createElement("div",{className:"filter--choices"},c.a.createElement(l,{label:"Functions",icon:"code",values:D,currentState:E,setState:w}))),z.size>0&&c.a.createElement("div",{className:"filter"},c.a.createElement("div",{className:"filter--label"},"Providers"),c.a.createElement("div",{className:"filter--choices"},c.a.createElement(l,{label:"Providers",icon:"cloud",values:z,currentState:C,setState:P}))),$.size>0&&c.a.createElement("div",{className:"filter"},c.a.createElement("div",{className:"filter--label"},c.a.createElement(m.a,{to:"/docs/setup/installation/operating-systems/",title:"Learn more about Vector's operating systems"},"Operating Systems")),c.a.createElement("div",{className:"filter--choices"},c.a.createElement(l,{label:"Operating Systems",icon:"cpu",values:$,currentState:S,setState:T})))),c.a.createElement("div",{className:"vector-components--results"},c.a.createElement(y,{components:p,headingLevel:e.headingLevel,titles:s})))}}}]);