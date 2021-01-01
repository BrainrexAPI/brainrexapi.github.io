(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{168:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=(a(12),a(1)),c=a(253),s=a.n(c);a(119);var o=function({icon:e,values:t,currentState:a,setState:n}){if(0==t.size)return null;let l=Array.from(t);return r.a.createElement(r.a.Fragment,null,l.map((t,l)=>{let c="string"==typeof t?s()(t):t;return r.a.createElement("label",{key:l},r.a.createElement("input",{type:"checkbox",onChange:e=>{let r=new Set(a);e.currentTarget.checked?r.add(t):r.delete(t),n(r)},checked:a.has(t)}),e?r.a.createElement("i",{className:`feather icon-${e}`}):""," ",c)}))},i=a(192),m=a(176),d=a(294),u=a.n(d),b=a(173),g=a.n(b),h=a(295),f=a.n(h),p=a(174);a(120);function v({delivery_guarantee:e,description:t,event_types:a,name:n,status:l,type:c}){let s=null;return"source"==c&&(s=`/docs/reference/sources/${n}/`),"transform"==c&&(s=`/docs/reference/transforms/${n}/`),"sink"==c&&(s=`/docs/reference/sinks/${n}/`),r.a.createElement(m.a,{to:s,className:"vector-component"},r.a.createElement("div",{className:"vector-component--header"},t&&r.a.createElement("i",{className:"feather icon-info",title:t}),r.a.createElement("div",{className:"vector-component--name"},n," ",c)),r.a.createElement("div",{className:"vector-component--badges"},a.includes("log")?r.a.createElement("span",{className:"badge badge--primary",title:"This component works with log event types"},"L"):"",a.includes("metric")?r.a.createElement("span",{className:"badge badge--primary",title:"This component works with metric event types"},"M"):"","beta"==l?r.a.createElement("span",{className:"badge badge--warning",title:"This component is in beta and is not recommended for production environments"},r.a.createElement("i",{className:"feather icon-alert-triangle"})):r.a.createElement("span",{className:"badge badge--primary",title:"This component has passed reliability standards that make it production ready"},r.a.createElement("i",{className:"feather icon-award"})),"best_effort"==e?r.a.createElement("span",{className:"badge badge--warning",title:"This component makes a best-effort delivery guarantee, and in rare cases can lose data"},r.a.createElement("i",{className:"feather icon-shield-off"})):r.a.createElement("span",{className:"badge badge--primary",title:"This component offers an at-least-once delivery guarantee"},r.a.createElement("i",{className:"feather icon-shield"}))))}function E({components:e,headingLevel:t,titles:a}){const n=e.filter(e=>"source"==e.type),c=e.filter(e=>"transform"==e.type),s=e.filter(e=>"sink"==e.type),o=`h${t||3}`;return e.length>0?r.a.createElement(r.a.Fragment,null,n.length>0?r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(o,null,n.length," Sources"),r.a.createElement("div",{className:"vector-components--grid"},n.map((e,t)=>r.a.createElement(v,Object(l.a)({key:t},e))))):"",c.length>0?r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(o,null,c.length," Transforms"),r.a.createElement("div",{className:"vector-components--grid"},c.map((e,t)=>r.a.createElement(v,Object(l.a)({key:t},e))))):"",s.length>0?r.a.createElement(r.a.Fragment,null,a&&r.a.createElement(o,null,s.length," Destinations"),r.a.createElement("div",{className:"vector-components--grid"},s.map((e,t)=>r.a.createElement(v,Object(l.a)({key:t},e))))):"",r.a.createElement("hr",null),r.a.createElement(i.a,{to:"mailto:support@brainrex.com",target:"_blank",icon:"plus-circle"},"Request a new component")):r.a.createElement("div",{className:"empty"},r.a.createElement("div",{className:"icon"},"\u2639"),r.a.createElement("div",null,"No components found"))}var y=function(e){const{siteConfig:t}=Object(p.a)(),{metadata:{sources:a,transforms:l,sinks:c}}=t.customFields,s=e.titles||null==e.titles,i=1==e.filterColumn,d=e.location?f.a.parse(e.location.search,{ignoreQueryPrefix:!0}):{};let b=[];(e.sources||null==e.sources)&&(b=b.concat(Object.values(a))),(e.transforms||null==e.transforms)&&(b=b.concat(Object.values(l))),(e.sinks||null==e.sinks)&&(b=b.concat(Object.values(c))),b=b.sort((e,t)=>e.name>t.name?1:-1);const[h,v]=Object(n.useState)("true"==d["at-least-once"]),[y,N]=Object(n.useState)(new Set(d.functions)),[w,k]=Object(n.useState)("true"==d.log),[_,S]=Object(n.useState)("true"==d.metric),[j,O]=Object(n.useState)(new Set(d["operating-systems"])),[C,x]=Object(n.useState)("true"==d["prod-ready"]),[T,L]=Object(n.useState)(new Set(d.providers)),[M,$]=Object(n.useState)(null);M&&(b=b.filter(e=>{return`${e.name.toLowerCase()} ${e.type.toLowerCase()}`.includes(M.toLowerCase())})),h&&(b=b.filter(e=>"at_least_once"==e.delivery_guarantee)),y.size>0&&(b=b.filter(e=>y.has(e.function_category))),w&&(b=b.filter(e=>e.event_types.includes("log"))),_&&(b=b.filter(e=>e.event_types.includes("metric"))),j.size>0&&(b=b.filter(e=>Array.from(j).every(t=>e.operating_systems.includes(t)))),C&&(b=b.filter(e=>"prod-ready"==e.status)),T.size>0&&(b=b.filter(e=>Array.from(T).every(t=>e.service_providers.includes(t))));const F=new Set(u()(b).map(e=>e.operating_systems).flatten().uniq().compact().sort().value()),D=new Set(u()(b).map(e=>e.service_providers).flatten().uniq().compact().sort().value()),V=new Set(u()(b).map(e=>e.function_category).uniq().compact().sort().value());return r.a.createElement("div",{className:g()("vector-components",{"vector-components--cols":i})},r.a.createElement("div",{className:"filters"},r.a.createElement("div",{className:"search"},r.a.createElement("input",{type:"text",onChange:e=>$(e.currentTarget.value),placeholder:"\ud83d\udd0d Search..."})),r.a.createElement("div",{className:"filter"},r.a.createElement("div",{className:"filter--label"},r.a.createElement(m.a,{to:"/docs/about/data-model/",title:"Learn more about Vector's event types"},"Event types ",r.a.createElement("i",{className:"feather icon-info"}))),r.a.createElement("div",{className:"filter--choices"},r.a.createElement("label",{title:"Show only components that work with log event types."},r.a.createElement("input",{type:"checkbox",onChange:e=>k(e.currentTarget.checked),checked:w})," Log"),r.a.createElement("label",{title:"Show only components that work with metric event types."},r.a.createElement("input",{type:"checkbox",onChange:e=>S(e.currentTarget.checked),checked:_})," Metric"))),r.a.createElement("div",{className:"filter"},r.a.createElement("div",{className:"filter--label"},r.a.createElement(m.a,{to:"/docs/about/guarantees/",title:"Learn more about Vector's guarantees"},"Guarantees ",r.a.createElement("i",{className:"feather icon-info"}))),r.a.createElement("div",{className:"filter--choices"},r.a.createElement("label",{title:"Show only components that offer an at-least-once delivery guarantee."},r.a.createElement("input",{type:"checkbox",onChange:e=>v(e.currentTarget.checked),checked:h}),r.a.createElement("i",{className:"feather icon-shield"})," At-least-once"),r.a.createElement("label",{title:"Show only production ready components."},r.a.createElement("input",{type:"checkbox",onChange:e=>x(e.currentTarget.checked),checked:C}),r.a.createElement("i",{className:"feather icon-award"})," Prod-ready"))),r.a.createElement("div",{className:"filter"},r.a.createElement("div",{className:"filter--label"},"Functions"),r.a.createElement("div",{className:"filter--choices"},r.a.createElement(o,{label:"Functions",icon:"code",values:V,currentState:y,setState:N}))),D.size>0&&r.a.createElement("div",{className:"filter"},r.a.createElement("div",{className:"filter--label"},"Providers"),r.a.createElement("div",{className:"filter--choices"},r.a.createElement(o,{label:"Providers",icon:"cloud",values:D,currentState:T,setState:L}))),F.size>0&&r.a.createElement("div",{className:"filter"},r.a.createElement("div",{className:"filter--label"},r.a.createElement(m.a,{to:"/docs/setup/installation/operating-systems/",title:"Learn more about Vector's operating systems"},"Operating Systems")),r.a.createElement("div",{className:"filter--choices"},r.a.createElement(o,{label:"Operating Systems",icon:"cpu",values:F,currentState:j,setState:O})))),r.a.createElement("div",{className:"vector-components--results"},r.a.createElement(E,{components:b,headingLevel:e.headingLevel,titles:s})))},N=a(184),w=a(428);const k=Object.assign({},w);var _=a(121),S=a.n(_);t.default=function(e){return Object(n.useEffect)((function(){if("undefined"!=typeof document){var e=function(e){for(var t=e.getContext("2d"),a=e.width,n=e.height,r=2*Math.PI,l=200,c=new Array(l),s=0;s<l;++s)c[s]={x:Math.random()*a,y:Math.random()*n,vx:0,vy:0};return k.timer((function(e){t.save(),t.clearRect(0,0,a,n);for(var s=0;s<l;++s){var o=c[s];o.x+=o.vx,o.x<-45?o.x+=a+90:o.x>a+45&&(o.x-=a+90),o.y+=o.vy,o.y<-45?o.y+=n+90:o.y>n+45&&(o.y-=n+90),o.vx+=.2*(Math.random()-.5)-.01*o.vx,o.vy+=.2*(Math.random()-.5)-.01*o.vy,t.beginPath(),t.arc(o.x,o.y,3,0,r),t.fillStyle="rgba(40,217,242,0.4)",t.fill()}for(s=0;s<l;++s)for(var i=s+1;i<l;++i){var m=c[s],d=c[i],u=m.x-d.x,b=m.y-d.y,g=u*u+b*b;g<2025&&(t.globalAlpha=g>3600?(2025-g)/-1575:1,t.beginPath(),t.moveTo(m.x,m.y),t.lineTo(d.x,d.y),t.strokeStyle="rgba(40,217,242,0.3)",t.stroke())}t.restore()}))}(document.querySelector("canvas"));return function(){e.stop()}}}),[]),r.a.createElement(N.a,{title:"Components - Sources, Transforms, & Destinations",description:"Browse and search all of Codabl's components: sources, transforms, and destinations. Filter by data type, guarantee, function, asset type, and provider."},r.a.createElement("header",{className:g()("hero",S.a.componentsHero)},r.a.createElement("div",{className:"container container--fluid container--flush"},r.a.createElement("canvas",{width:"2000",height:"300"}),r.a.createElement("div",{className:S.a.componentsHeroOverlay},r.a.createElement("h1",null,"Codabl Components"),r.a.createElement("div",{className:"hero__subtitle"},"Components allow you to collect, transform, and route data with ease. ",r.a.createElement(m.a,{to:"/docs/about/concepts/"},"Learn more"),".")))),r.a.createElement("main",{className:"container container--fluid"},r.a.createElement(y,{filterColumn:!0,headingLevel:2,location:e.location})))}},180:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(173),c=a.n(l);a(87);t.a=function(e){var t,a=e.block,n=e.buttonClass,l=e.center,s=e.description,o=e.size,i=e.width;return r.a.createElement("div",{className:c()("mailing-list",(t={"mailing-list--block":a,"mailing-list--center":l},t["mailing-list--"+o]=o,t))},!1!==s&&r.a.createElement("div",{className:"mailing-list--description"}),r.a.createElement("form",{action:"https://formspree.io/xqkevzld",method:"post",className:"mailing-list--form"},r.a.createElement("input",{className:c()("input","input--"+o),name:"email",placeholder:"your@email.com",type:"email",style:{width:i}}),r.a.createElement("button",{className:c()("button","button--"+(n||"primary"),"button--"+o),type:"submit"},"Subscribe")))}},181:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return l}));var n=a(174);function r(){const e=Object(n.a)(),{siteConfig:t={}}=e,{metadata:{latest_post:a}}=t.customFields,r=Date.parse(a.date),l=new Date,c=Math.abs(l-r),s=Math.ceil(c/864e5);let o=null;return"undefined"!=typeof window&&(o=new Date(parseInt(window.localStorage.getItem("blogViewedAt")||"0"))),s<30&&(!o||o<r)?a:null}function l(){"undefined"!=typeof window&&window.localStorage.setItem("blogViewedAt",(new Date).getTime())}},183:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(174);function r(){const e=Object(n.a)(),{siteConfig:t={}}=e,{metadata:{latest_release:a}}=t.customFields,r=Date.parse(a.date),l=new Date,c=Math.abs(l-r),s=Math.ceil(c/864e5);let o=null;return"undefined"!=typeof window&&(o=new Date(parseInt(window.localStorage.getItem("releaseViewedAt")||"0"))),s<30&&(!o||o<r)?a:null}},184:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(182),c=a(174),s=a(177),o=a(1),i=a(176),m=a(191),d=a(178),u=a.n(d),b=a(185),g=a(173),h=a.n(g),f=a(181),p=a(183),v=a(190),E=a(179),y=a(86),N=a.n(y);function w({href:e,hideIcon:t,hideText:a,label:n,onClick:l,to:c}){let m=function(e){switch(e.toLowerCase()){case"blog":return Object(f.a)()?{badge:"new",badgeStyle:"primary"}:{};case"download":let e={icon:"download"};return Object(p.a)()&&(e.badge="new",e.badgeStyle="primary"),e;case"github":return{badge:"3k",icon:"github"};default:return{}}}(n)||{};const d=Object(s.a)(c);return r.a.createElement(i.a,Object(o.a)({className:"navbar__item navbar__link",title:a?n:null,onClick:l},e?{target:"_blank",rel:"noopener noreferrer",href:e}:{activeClassName:"navbar__link--active",to:d}),!t&&m.icon&&r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:`feather icon-${m.icon}`})," "),!a&&n,m.badge&&r.a.createElement("span",{className:h()("badge",`badge--${m.badgeStyle||"secondary"}`)},m.badge))}var k=function(){const e=Object(c.a)(),{siteConfig:t={}}=e,{baseUrl:a,themeConfig:l={}}=t,{navbar:d={},disableDarkMode:g=!1}=l,{title:f,logo:p={},links:y=[],hideOnScroll:k=!1}=d,[_,S]=Object(n.useState)(!1),[j,O]=Object(n.useState)(!1),[C,x]=Object(E.a)(),{navbarRef:T,isNavbarVisible:L}=Object(v.a)(k),M=Object(n.useCallback)(()=>{document.body.style.overflow="hidden",S(!0)},[S]),$=Object(n.useCallback)(()=>{document.body.style.overflow="visible",S(!1)},[S]),F=Object(n.useCallback)(e=>x(e.target.checked?"dark":""),[x]),D=Object(s.a)(p.src);return r.a.createElement("nav",{ref:T,className:h()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":_,[N.a.navbarHideable]:k,[N.a.navbarHidden]:!L})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:M,onKeyDown:M},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(i.a,{className:"navbar__brand",to:a},null!=p&&r.a.createElement(u.a,{className:"navbar__logo",src:D,alt:p.alt}),null!=f&&r.a.createElement("strong",{className:j?N.a.hideLogoText:""},f)),y.filter(e=>"right"!==e.position).map((e,t)=>r.a.createElement(w,Object(o.a)({},e,{key:t})))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},y.filter(e=>"right"===e.position).map((e,t)=>r.a.createElement(w,Object(o.a)({},e,{hideText:!0,key:t}))),!g&&r.a.createElement(b.a,{className:N.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:"dark"===C,onChange:F}),r.a.createElement(m.a,{handleSearchBarToggle:O,isSearchBarExpanded:j}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:$}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(i.a,{className:"navbar__brand",onClick:$,to:a},null!=p&&r.a.createElement(u.a,{className:"navbar__logo",src:D,alt:p.alt}),null!=f&&r.a.createElement("strong",null,f)),!g&&_&&r.a.createElement(b.a,{"aria-label":"Dark mode toggle in sidebar",checked:"dark"===C,onChange:F})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},y.map((e,t)=>r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(w,Object(o.a)({className:"menu__link"},e,{hideIcon:!0,onClick:$})))))))))},_=a(180),S=a(88),j=a.n(S);function O({to:e,href:t,label:a,...n}){const l=Object(s.a)(e);return r.a.createElement(i.a,Object(o.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:l},n),a)}const C=({url:e,alt:t})=>r.a.createElement(u.a,{className:"footer__logo",alt:t,src:e});var x=function(){const e=Object(c.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a,{copyright:l,links:o=[],logo:i={}}=n||{},m=Object(s.a)(i.src);return n?r.a.createElement("footer",{className:h()("footer",{"footer--dark":"dark"===n.style})},r.a.createElement("div",{className:"container"},o&&o.length>0&&r.a.createElement("div",{className:"row footer__links"},r.a.createElement("div",{className:"col col--5 footer__col"},r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement(u.a,{className:"navbar__logo",src:"/img/logo-light.svg",alt:"Vector",width:"150",height:"auto"})),r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement(_.a,{description:!1,width:"150px"})),r.a.createElement("div",null,r.a.createElement("a",{href:"https://twitter.com/timberdotio",target:"_blank"},r.a.createElement("i",{className:"feather icon-twitter",alt:"Vector's Twitter"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://chat.vector.dev",target:"_blank"},r.a.createElement("i",{className:"feather icon-message-circle",alt:"Vector's Chat"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://github.com/timberio/vector",target:"_blank"},r.a.createElement("i",{className:"feather icon-github",alt:"Vector's Github Repo"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://vector.dev/blog/atom.xml",target:"_blank"},r.a.createElement("i",{className:"feather icon-rss",alt:"Vector's RSS feed"})))),o.map((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?r.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(O,e)))):null))),(i||l)&&r.a.createElement("div",{className:"text--center"},i&&i.src&&r.a.createElement("div",{className:"margin-bottom--sm"},i.href?r.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:j.a.footerLogoLink},r.a.createElement(C,{alt:i.alt,url:m})):r.a.createElement(C,{alt:i.alt,url:m})),l))):null};a(89);t.a=function(e){const{siteConfig:t={}}=Object(c.a)(),{favicon:a,tagline:n,title:o,themeConfig:{image:i},url:m}=t,{children:d,title:u,noFooter:b,description:g,image:h,keywords:f,permalink:p,version:v}=e,E=u?`${u} | ${o}`:`${o} - ${n}`,y=h||i,N=m+Object(s.a)(y),w=Object(s.a)(a);return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),E&&r.a.createElement("title",null,E),E&&r.a.createElement("meta",{property:"og:title",content:E}),a&&r.a.createElement("link",{rel:"shortcut icon",href:w}),g&&r.a.createElement("meta",{name:"description",content:g}),g&&r.a.createElement("meta",{property:"og:description",content:g}),v&&r.a.createElement("meta",{name:"docsearch:version",content:v}),f&&f.length&&r.a.createElement("meta",{name:"keywords",content:f.join(",")}),y&&r.a.createElement("meta",{property:"og:image",content:N}),y&&r.a.createElement("meta",{property:"twitter:image",content:N}),y&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${E}`}),p&&r.a.createElement("meta",{property:"og:url",content:m+p}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(k,null),r.a.createElement("div",{className:"main-wrapper"},d),!b&&r.a.createElement(x,null))}},192:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(176),c=a(173),s=a.n(c);a(90);t.a=function({children:e,className:t,badge:a,icon:n,size:c,target:o,to:i}){let m=s()("jump-to",`jump-to--${c}`,t),d=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},r.a.createElement("div",{className:"jump-to--main"},a?r.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",e),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:`feather icon-${n||"chevron-right"} arrow`}))));return o?r.a.createElement("a",{href:i,target:o,className:m},d):r.a.createElement(l.a,{to:i,className:m},d)}}}]);