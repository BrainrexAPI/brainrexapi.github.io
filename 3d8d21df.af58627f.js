(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{136:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return m}));var n=a(1),o=a(6),r=(a(0),a(242)),c=a(250),i={title:"About",description:"About Vector, the monitoring and observability data router",sidebar_label:"hidden",hide_pagination:!0},s={id:"about",title:"About",description:"About Vector, the monitoring and observability data router",source:"@site/docs/about.md",permalink:"/docs/about",editUrl:"https://github.com/brainrexapi/edit/master/docs/about.md",sidebar_label:"hidden",sidebar:"docs",next:{title:"What is BrainRex?",permalink:"/docs/about/what-is-brainrex"}},d=[],u={rightToc:d},b="wrapper";function m(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(b,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This section will cover the basic concepts of Vector and provide a foundation\nfor the rest of the documentation."),Object(r.b)(c.a,{to:"/docs/about/concepts/",mdxType:"Jump"},"Concepts"),Object(r.b)(c.a,{to:"/docs/about/data-model/",mdxType:"Jump"},"Data model"),Object(r.b)(c.a,{to:"/docs/about/guarantees/",mdxType:"Jump"},"Guarantees"),Object(r.b)(c.a,{to:"/docs/about/what-is-vector/",mdxType:"Jump"},"What is vector"))}m.isMDXComponent=!0},243:function(e,t,a){"use strict";var n=a(1),o=a(0),r=a.n(o),c=a(17);const i=/^\/(?!\/)/;t.a=function(e){const{to:t,href:a}=e,s=t||a,d=i.test(s),u=Object(o.useRef)(!1),b="undefined"!=typeof window&&"IntersectionObserver"in window;let m;return Object(o.useEffect)(()=>(!b&&d&&window.docusaurus.prefetch(s),()=>{b&&m&&m.disconnect()}),[s,b,d]),s&&d?r.a.createElement(c.b,Object(n.a)({},e,{onMouseEnter:()=>{u.current||(window.docusaurus.preload(s),u.current=!0)},innerRef:e=>{b&&e&&d&&((e,t)=>{m=new window.IntersectionObserver(a=>{a.forEach(a=>{e===a.target&&(a.isIntersecting||a.intersectionRatio>0)&&(m.unobserve(e),m.disconnect(),t())})}),m.observe(e)})(e,()=>{window.docusaurus.prefetch(s)})},to:s})):r.a.createElement("a",Object(n.a)({},e,{href:s}))}},250:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(243),c=a(241),i=a.n(c);a(86);t.a=function({children:e,className:t,badge:a,icon:n,size:c,target:s,to:d}){let u=i()("jump-to",`jump-to--${c}`,t),b=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},o.a.createElement("div",{className:"jump-to--main"},a?o.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",e),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:`feather icon-${n||"chevron-right"} arrow`}))));return s?o.a.createElement("a",{href:d,target:s,className:u},b):o.a.createElement(r.a,{to:d,className:u},b)}}}]);