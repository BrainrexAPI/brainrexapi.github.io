/*! For license information please see ccc49370.f40ecc22.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{168:function(e,t,a){"use strict";a.r(t);a(415),a(420),a(422);var n=a(0),r=a.n(n),u=a(210),l=a(211),c=a(182),i=(a(215),a(174));var o=function(e){const{nextItem:t,prevItem:a}=e;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},a&&r.a.createElement(i.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Previous Post"),r.a.createElement("h4",{className:"pagination-nav__link--label"},"\xab ",a.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Next Post"),r.a.createElement("h4",{className:"pagination-nav__link--label"},t.title," \xbb"))))},s=a(178),D=a(198),m=a(173),d=a(171),f=a.n(d),h=a(212),E=a.n(h),p=a(195),g=a(179),b=a(213),v=a.n(b),y=a(155),F=a.n(y);t.default=function(e){var t=e.content,a=t.frontMatter,n=t.metadata,i=a.author_id,d=a.id,h=a.title,b=n.date,y=n.tags,C=v()(t.toString()),k=new Date(Date.parse(b)),N=Object(p.a)(y).find((function(e){return"domain"==e.category})),w=N?N.value:null,_=Object(g.a)();return _&&_.id==d&&Object(g.b)(),r.a.createElement(c.a,{title:n.title,description:n.description},r.a.createElement("article",{className:F.a.blogPost},r.a.createElement("header",{className:f()("hero","domain-bg","domain-bg--"+w,F.a.header)},r.a.createElement("div",{className:f()("container",F.a.headerContainer)},r.a.createElement(u.a,{id:i,size:"lg",nameSuffix:r.a.createElement(r.a.Fragment,null," / ",r.a.createElement("time",{pubdate:"pubdate",dateTime:k.toISOString()},E()(k,"mmm dS"))," / ",C.text),rel:"author",subTitle:!1,vertical:!0}),r.a.createElement("h1",null,h),r.a.createElement("div",{className:F.a.headerTags},r.a.createElement(l.a,{tags:y})))),r.a.createElement("div",{className:"container container--narrow container--bleed margin-vert--xl"},r.a.createElement("section",{className:"markdown"},r.a.createElement(m.a,{components:D.a},r.a.createElement(t,null))),r.a.createElement("section",{className:f()("panel","bleed",F.a.mailingList),style:{textAlign:"center"}},r.a.createElement("div",{className:F.a.mailingListTitle},r.a.createElement("i",{className:"feather icon-mail"})," BrainRex In Your Inbox!"),r.a.createElement("p",null,"One email on the 1st of the month. No spam, ever."),r.a.createElement(s.a,{center:!0,description:!1,size:"lg"})),(n.nextItem||n.prevItem)&&r.a.createElement("div",{className:"bleed margin-vert--xl"},r.a.createElement(o,{nextItem:n.nextItem,prevItem:n.prevItem})))))}},173:function(e,t,a){"use strict";a.d(t,"a",(function(){return D})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){u(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},u=Object.keys(e);for(n=0;n<u.length;n++)a=u[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)a=u[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},D=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,u=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),D=s(a),m=n,f=D["".concat(l,".").concat(m)]||D[m]||d[m]||u;return a?r.a.createElement(f,c({ref:t},o,{components:a})):r.a.createElement(f,c({ref:t},o))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var u=a.length,l=new Array(u);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[m]="string"==typeof e?e:n,l[1]=c;for(var o=2;o<u;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},178:function(e,t,a){"use strict";var n=a(0),r=a.n(n),u=a(171),l=a.n(u);a(87);t.a=function({block:e,buttonClass:t,center:a,description:n,size:u,width:c}){return r.a.createElement("div",{className:l()("mailing-list",{"mailing-list--block":e,"mailing-list--center":a,[`mailing-list--${u}`]:u})},!1!==n&&r.a.createElement("div",{className:"mailing-list--description"}),r.a.createElement("form",{action:"https://formspree.io/xqkevzld",method:"post",className:"mailing-list--form"},r.a.createElement("input",{className:l()("input",`input--${u}`),name:"email",placeholder:"you@email.com",type:"email",style:{width:c}}),r.a.createElement("button",{className:l()("button",`button--${t||"primary"}`,`button--${u}`),type:"submit"},"Subscribe")))}},179:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return u}));var n=a(172);function r(){const e=Object(n.a)(),{siteConfig:t={}}=e,{metadata:{latest_post:a}}=t.customFields,r=Date.parse(a.date),u=new Date,l=Math.abs(u-r),c=Math.ceil(l/864e5);let i=null;return"undefined"!=typeof window&&(i=new Date(parseInt(window.localStorage.getItem("blogViewedAt")||"0"))),c<30&&(!i||i<r)?a:null}function u(){"undefined"!=typeof window&&window.localStorage.setItem("blogViewedAt",(new Date).getTime())}},181:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(172);function r(){const e=Object(n.a)(),{siteConfig:t={}}=e,{metadata:{latest_release:a}}=t.customFields,r=Date.parse(a.date),u=new Date,l=Math.abs(u-r),c=Math.ceil(l/864e5);let i=null;return"undefined"!=typeof window&&(i=new Date(parseInt(window.localStorage.getItem("releaseViewedAt")||"0"))),c<30&&(!i||i<r)?a:null}},182:function(e,t,a){"use strict";var n=a(0),r=a.n(n),u=a(180),l=a(172),c=a(175),i=a(1),o=a(174),s=a(189),D=a(176),m=a.n(D),d=a(183),f=a(171),h=a.n(f),E=a(179),p=a(181),g=a(188),b=a(177),v=a(86),y=a.n(v);function F({href:e,hideIcon:t,hideText:a,label:n,onClick:u,to:l}){let s=function(e){switch(e.toLowerCase()){case"blog":return Object(E.a)()?{badge:"new",badgeStyle:"primary"}:{};case"download":let e={icon:"download"};return Object(p.a)()&&(e.badge="new",e.badgeStyle="primary"),e;case"github":return{badge:"3k",icon:"github"};default:return{}}}(n)||{};const D=Object(c.a)(l);return r.a.createElement(o.a,Object(i.a)({className:"navbar__item navbar__link",title:a?n:null,onClick:u},e?{target:"_blank",rel:"noopener noreferrer",href:e}:{activeClassName:"navbar__link--active",to:D}),!t&&s.icon&&r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:`feather icon-${s.icon}`})," "),!a&&n,s.badge&&r.a.createElement("span",{className:h()("badge",`badge--${s.badgeStyle||"secondary"}`)},s.badge))}var C=function(){const e=Object(l.a)(),{siteConfig:t={}}=e,{baseUrl:a,themeConfig:u={}}=t,{navbar:D={},disableDarkMode:f=!1}=u,{title:E,logo:p={},links:v=[],hideOnScroll:C=!1}=D,[k,N]=Object(n.useState)(!1),[w,_]=Object(n.useState)(!1),[O,j]=Object(b.a)(),{navbarRef:T,isNavbarVisible:A}=Object(g.a)(C),M=Object(n.useCallback)(()=>{document.body.style.overflow="hidden",N(!0)},[N]),x=Object(n.useCallback)(()=>{document.body.style.overflow="visible",N(!1)},[N]),S=Object(n.useCallback)(e=>j(e.target.checked?"dark":""),[j]),B=Object(c.a)(p.src);return r.a.createElement("nav",{ref:T,className:h()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":k,[y.a.navbarHideable]:C,[y.a.navbarHidden]:!A})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:M,onKeyDown:M},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(o.a,{className:"navbar__brand",to:a},null!=p&&r.a.createElement(m.a,{className:"navbar__logo",src:B,alt:p.alt}),null!=E&&r.a.createElement("strong",{className:w?y.a.hideLogoText:""},E)),v.filter(e=>"right"!==e.position).map((e,t)=>r.a.createElement(F,Object(i.a)({},e,{key:t})))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},v.filter(e=>"right"===e.position).map((e,t)=>r.a.createElement(F,Object(i.a)({},e,{hideText:!0,key:t}))),!f&&r.a.createElement(d.a,{className:y.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:"dark"===O,onChange:S}),r.a.createElement(s.a,{handleSearchBarToggle:_,isSearchBarExpanded:w}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:x}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(o.a,{className:"navbar__brand",onClick:x,to:a},null!=p&&r.a.createElement(m.a,{className:"navbar__logo",src:B,alt:p.alt}),null!=E&&r.a.createElement("strong",null,E)),!f&&k&&r.a.createElement(d.a,{"aria-label":"Dark mode toggle in sidebar",checked:"dark"===O,onChange:S})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},v.map((e,t)=>r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(F,Object(i.a)({className:"menu__link"},e,{hideIcon:!0,onClick:x})))))))))},k=a(178),N=a(88),w=a.n(N);function _({to:e,href:t,label:a,...n}){const u=Object(c.a)(e);return r.a.createElement(o.a,Object(i.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:u},n),a)}const O=({url:e,alt:t})=>r.a.createElement(m.a,{className:"footer__logo",alt:t,src:e});var j=function(){const e=Object(l.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a,{copyright:u,links:i=[],logo:o={}}=n||{},s=Object(c.a)(o.src);return n?r.a.createElement("footer",{className:h()("footer",{"footer--dark":"dark"===n.style})},r.a.createElement("div",{className:"container"},i&&i.length>0&&r.a.createElement("div",{className:"row footer__links"},r.a.createElement("div",{className:"col col--5 footer__col"},r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement(m.a,{className:"navbar__logo",src:"/img/logo-light.svg",alt:"Vector",width:"150",height:"auto"})),r.a.createElement("div",{className:"margin-bottom--md"},r.a.createElement(k.a,{description:!1,width:"150px"})),r.a.createElement("div",null,r.a.createElement("a",{href:"https://twitter.com/timberdotio",target:"_blank"},r.a.createElement("i",{className:"feather icon-twitter",alt:"Vector's Twitter"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://chat.vector.dev",target:"_blank"},r.a.createElement("i",{className:"feather icon-message-circle",alt:"Vector's Chat"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://github.com/timberio/vector",target:"_blank"},r.a.createElement("i",{className:"feather icon-github",alt:"Vector's Github Repo"})),"\xa0\xa0\xa0\xa0",r.a.createElement("a",{href:"https://vector.dev/blog/atom.xml",target:"_blank"},r.a.createElement("i",{className:"feather icon-rss",alt:"Vector's RSS feed"})))),i.map((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?r.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(_,e)))):null))),(o||u)&&r.a.createElement("div",{className:"text--center"},o&&o.src&&r.a.createElement("div",{className:"margin-bottom--sm"},o.href?r.a.createElement("a",{href:o.href,target:"_blank",rel:"noopener noreferrer",className:w.a.footerLogoLink},r.a.createElement(O,{alt:o.alt,url:s})):r.a.createElement(O,{alt:o.alt,url:s})),u))):null};a(89);t.a=function(e){const{siteConfig:t={}}=Object(l.a)(),{favicon:a,tagline:n,title:i,themeConfig:{image:o},url:s}=t,{children:D,title:m,noFooter:d,description:f,image:h,keywords:E,permalink:p,version:g}=e,b=m?`${m} | ${i}`:`${i} - ${n}`,v=h||o,y=s+Object(c.a)(v),F=Object(c.a)(a);return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),b&&r.a.createElement("title",null,b),b&&r.a.createElement("meta",{property:"og:title",content:b}),a&&r.a.createElement("link",{rel:"shortcut icon",href:F}),f&&r.a.createElement("meta",{name:"description",content:f}),f&&r.a.createElement("meta",{property:"og:description",content:f}),g&&r.a.createElement("meta",{name:"docsearch:version",content:g}),E&&E.length&&r.a.createElement("meta",{name:"keywords",content:E.join(",")}),v&&r.a.createElement("meta",{property:"og:image",content:y}),v&&r.a.createElement("meta",{property:"twitter:image",content:y}),v&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${b}`}),p&&r.a.createElement("meta",{property:"og:url",content:s+p}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(C,null),r.a.createElement("div",{className:"main-wrapper"},D),!d&&r.a.createElement(j,null))}},183:function(e,t,a){"use strict";var n=a(1),r=a(0),u=a.n(r),l=a(184),c=a.n(l),i=a(172),o=a(171),s=a.n(o),D=a(85),m=a.n(D);const d=()=>u.a.createElement("span",{className:s()(m.a.toggle,m.a.moon)}),f=()=>u.a.createElement("span",{className:s()(m.a.toggle,m.a.sun)});t.a=function(e){const{isClient:t}=Object(i.a)();return u.a.createElement(c.a,Object(n.a)({disabled:!t,icons:{checked:u.a.createElement(d,null),unchecked:u.a.createElement(f,null)}},e))}},184:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(0),l=m(u),c=m(a(171)),i=m(a(8)),o=m(a(185)),s=m(a(186)),D=a(187);function m(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,D.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,D.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,D.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),u=(0,c.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return l.default.createElement("div",{className:u,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},l.default.createElement("div",{className:"react-toggle-track"},l.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),l.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),l.default.createElement("div",{className:"react-toggle-thumb"}),l.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(u.PureComponent);t.default=d,d.displayName="Toggle",d.defaultProps={icons:{checked:l.default.createElement(o.default,null),unchecked:l.default.createElement(s.default,null)}},d.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},185:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),u=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return u.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},u.default.createElement("title",null,"switch-check"),u.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},186:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),u=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return u.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},u.default.createElement("title",null,"switch-x"),u.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},187:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},188:function(e,t,a){"use strict";var n=a(0);t.a=e=>{const[t,a]=Object(n.useState)(!0),[r,u]=Object(n.useState)(0),[l,c]=Object(n.useState)(0),i=Object(n.useCallback)(e=>{null!==e&&c(e.getBoundingClientRect().height)},[]),o=()=>{const e=window.pageYOffset||document.documentElement.scrollTop,t=document.documentElement.scrollHeight-l,n=window.innerHeight;e<l||(r&&e>r?a(!1):e+n<t&&a(!0),u(e))};return Object(n.useEffect)(()=>{if(e)return window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o)}},[r,l]),{navbarRef:i,isNavbarVisible:t}}},189:function(e,t,a){"use strict";var n=()=>null;a.d(t,"a",(function(){return n}))},191:function(e,t,a){"use strict";(function(e){var n=a(1),r=a(0),u=a.n(r),l=a(208),c=a(199),i=a.n(c),o=a(194),s=a(171),D=a.n(s),m=a(206),d=a.n(m),f=a(200),h=a.n(f),E=a(172),p=a(91),g=a.n(p),b=a(177);(void 0!==e?e:window).Prism=o.a,a(201),a(202),a(203),a(204),a(205);const v=/{([\d,-]+)}/;t.a=({children:e,className:t,metastring:a})=>{const{siteConfig:{themeConfig:{prism:c={}}}}=Object(E.a)(),[o,s]=Object(r.useState)(!1),m=Object(r.useRef)(null),f=Object(r.useRef)(null),[p]=Object(b.a)();let y=[];if(a&&v.test(a)){const e=a.match(v)[1];y=h.a.parse(e).filter(e=>e>0)}Object(r.useEffect)(()=>{let e;return f.current&&(e=new i.a(f.current,{target:()=>m.current})),()=>{e&&e.destroy()}},[f.current,m.current]);let F=t&&t.replace(/language-/,"");!F&&c.defaultLanguage&&(F=c.defaultLanguage);const C=()=>{window.getSelection().empty(),s(!0),setTimeout(()=>s(!1),2e3)};let k="dark"==p?c.darkTheme:c.theme;return u.a.createElement(l.a,Object(n.a)({},l.b,{theme:k||d.a,code:e.trim(),language:F}),({className:e,style:t,tokens:a,getLineProps:r,getTokenProps:l})=>u.a.createElement("div",{className:g.a.codeBlockWrapper},u.a.createElement("pre",{ref:m,className:D()(e,g.a.codeBlock),style:t},a.map((e,t)=>{const a=r({line:e,key:t});return y.includes(t+1)&&(a.className=`${a.className} docusaurus-highlight-code-line`),u.a.createElement("div",Object(n.a)({key:t},a),e.map((e,t)=>u.a.createElement("span",Object(n.a)({key:t},l({token:e,key:t})))))})),u.a.createElement("button",{ref:f,type:"button","aria-label":"Copy code to clipboard",className:g.a.copyButton,onClick:C},o?"Copied":"Copy")))}}).call(this,a(48))},192:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(92);t.a=e=>({id:t,...a})=>t?r.a.createElement(e,a,r.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"anchor",id:t}),r.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:`#${t}`,title:"Direct link to heading"},"#"),a.children):r.a.createElement(e,a)},195:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(216),r=a.n(n);function u(e){const t=new r.a;return e.map(e=>{let a=e;return"string"==typeof e&&(a={label:e,permalink:`/blog/tags/${t.slug(e)}`}),function(e){const t=e.label.split(": ",2),a=t[0],n=t[1];let r="primary";switch(a){case"domain":r="blue";break;case"type":r="pink"}return{category:a,label:e.label,permalink:e.permalink,style:r,value:n}}(a)})}},198:function(e,t,a){"use strict";var n=a(1),r=a(0),u=a.n(r),l=a(174),c=a(191),i=a(192),o=a(94),s=a.n(o);t.a={code:e=>{const{children:t}=e;return"string"==typeof t?u.a.createElement(c.a,e):t},a:e=>/\.[^./]+$/.test(e.href)?u.a.createElement("a",e):u.a.createElement(l.a,e),pre:e=>u.a.createElement("pre",Object(n.a)({className:s.a.mdxCodeBlock},e)),h1:Object(i.a)("h1"),h2:Object(i.a)("h2"),h3:Object(i.a)("h3"),h4:Object(i.a)("h4"),h5:Object(i.a)("h5"),h6:Object(i.a)("h6")}},210:function(e,t,a){"use strict";var n=a(0),r=a.n(n),u=a(171),l=a.n(u),c=a(172);a(95);t.a=function({className:e,id:t,inline:a,nameSuffix:n,rel:u,size:i,subTitle:o,vertical:s}){const D=Object(c.a)(),{siteConfig:m={}}=D,{metadata:{team:d}}=m.customFields,f=d.find(e=>e.id==t)||d.find(e=>"ben"==e.id);return a?r.a.createElement("span",{className:"avatar avatar--inline"},r.a.createElement("img",{className:l()("avatar__photo",`avatar__photo--${i}`),src:f.avatar}),f.name):r.a.createElement("div",{className:l()("avatar",e,{[`avatar--${i}`]:i,"avatar--inline":a,"avatar--vertical":s})},r.a.createElement("img",{className:l()("avatar__photo",`avatar__photo--${i}`),src:f.avatar}),r.a.createElement("div",{className:"avatar__intro"},r.a.createElement("div",{className:"avatar__name"},r.a.createElement("a",{href:f.github,target:"_blank",rel:u},f.name),n),!1!==o&&r.a.createElement("small",{className:"avatar__subtitle"},o||"Vector core team")))}},211:function(e,t,a){"use strict";var n=a(0),r=a.n(n),u=a(174),l=a(171),c=a.n(l),i=a(195),o=a(96),s=a.n(o);t.a=function({tags:e,valuesOnly:t}){const a=Object(i.a)(e);return r.a.createElement("div",{className:s.a.tags},a.map((e,a)=>r.a.createElement(u.a,{key:a,to:e.permalink+"/",className:c()("badge","badge--rounded",`badge--${e.style}`)},t?e.value:e.label)))}},212:function(e,t,a){var n;!function(r){"use strict";var u,l,c,i=(u=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g,l=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,c=/[^-+\dA-Z]/g,function(e,t,a,n){if(1!==arguments.length||"string"!==m(e)||/\d/.test(e)||(t=e,e=void 0),(e=e||new Date)instanceof Date||(e=new Date(e)),isNaN(e))throw TypeError("Invalid date");var r=(t=String(i.masks[t]||t||i.masks.default)).slice(0,4);"UTC:"!==r&&"GMT:"!==r||(t=t.slice(4),a=!0,"GMT:"===r&&(n=!0));var d=a?"getUTC":"get",f=e[d+"Date"](),h=e[d+"Day"](),E=e[d+"Month"](),p=e[d+"FullYear"](),g=e[d+"Hours"](),b=e[d+"Minutes"](),v=e[d+"Seconds"](),y=e[d+"Milliseconds"](),F=a?0:e.getTimezoneOffset(),C=s(e),k=D(e),N={d:f,dd:o(f),ddd:i.i18n.dayNames[h],dddd:i.i18n.dayNames[h+7],m:E+1,mm:o(E+1),mmm:i.i18n.monthNames[E],mmmm:i.i18n.monthNames[E+12],yy:String(p).slice(2),yyyy:p,h:g%12||12,hh:o(g%12||12),H:g,HH:o(g),M:b,MM:o(b),s:v,ss:o(v),l:o(y,3),L:o(Math.round(y/10)),t:g<12?i.i18n.timeNames[0]:i.i18n.timeNames[1],tt:g<12?i.i18n.timeNames[2]:i.i18n.timeNames[3],T:g<12?i.i18n.timeNames[4]:i.i18n.timeNames[5],TT:g<12?i.i18n.timeNames[6]:i.i18n.timeNames[7],Z:n?"GMT":a?"UTC":(String(e).match(l)||[""]).pop().replace(c,""),o:(F>0?"-":"+")+o(100*Math.floor(Math.abs(F)/60)+Math.abs(F)%60,4),S:["th","st","nd","rd"][f%10>3?0:(f%100-f%10!=10)*f%10],W:C,N:k};return t.replace(u,(function(e){return e in N?N[e]:e.slice(1,e.length-1)}))});function o(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}function s(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var a=new Date(t.getFullYear(),0,4);a.setDate(a.getDate()-(a.getDay()+6)%7+3);var n=t.getTimezoneOffset()-a.getTimezoneOffset();t.setHours(t.getHours()-n);var r=(t-a)/6048e5;return 1+Math.floor(r)}function D(e){var t=e.getDay();return 0===t&&(t=7),t}function m(e){return null===e?"null":void 0===e?"undefined":"object"!=typeof e?typeof e:Array.isArray(e)?"array":{}.toString.call(e).slice(8,-1).toLowerCase()}i.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},i.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},void 0===(n=function(){return i}.call(t,a,t,e))||(e.exports=n)}()},213:function(e,t,a){e.exports=a(218)},215:function(e,t,a){"use strict";var n=a(0),r=a.n(n),u=a(210),l=a(211),c=a(174),i=(a(198),a(173),a(171)),o=a.n(i),s=a(212),D=a.n(s),m=a(195),d=a(213),f=a.n(d);a(97);t.a=function(e){const{children:t,frontMatter:a,metadata:n,truncated:i,isBlogPostPage:s=!1}=e,{date:d,description:h,permalink:E,tags:p}=n,{author_id:g,title:b}=a,v=f()(t.toString()),y=new Date(Date.parse(d)),F=Object(m.a)(p).find(e=>"domain"==e.category),C=F?F.value:null;return r.a.createElement(c.a,{to:E+"/",className:o()("blog-post-item","domain-bg","domain-bg--hover",`domain-bg--${C}`)},r.a.createElement("article",null,r.a.createElement("h2",null,b),r.a.createElement("div",{className:"blog-post-item--subtitle"},h),r.a.createElement(u.a,{id:g,size:"sm",subTitle:r.a.createElement(r.a.Fragment,null,r.a.createElement("time",{pubdate:"pubdate",dateTime:y.toISOString()},D()(y,"mmm dS"))," / ",v.text),rel:"author"}),r.a.createElement(l.a,{tags:p})))}},216:function(e,t,a){var n=a(217);e.exports=c;var r=Object.hasOwnProperty,u=/\s/g,l=/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g;function c(){if(!(this instanceof c))return new c;this.reset()}c.prototype.slug=function(e,t){for(var a=function(e,t){if("string"!=typeof e)return"";t||(e=e.toLowerCase());return e.trim().replace(l,"").replace(n(),"").replace(u,"-")}(e,!0===t),c=a;r.call(this.occurrences,a);)this.occurrences[c]++,a=c+"-"+this.occurrences[c];return this.occurrences[a]=0,a},c.prototype.reset=function(){this.occurrences=Object.create(null)}},217:function(e,t){e.exports=function(){return/[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD79\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED0\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3]|\uD83E[\uDD10-\uDD18\uDD80-\uDD84\uDDC0]|\uD83C\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uD83C\uDDFE\uD83C[\uDDEA\uDDF9]|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDFC\uD83C[\uDDEB\uDDF8]|\uD83C\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uD83C\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF8\uDDFE\uDDFF]|\uD83C\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uD83C\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uD83C\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uD83C\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uD83C\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uD83C\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uD83C\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uD83C\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uD83C\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uD83C\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uD83C\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uD83C\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uD83C\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uD83C\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uD83C\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uD83C\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|[#\*0-9]\u20E3/g}},218:function(e,t,a){"use strict";function n(e){return" "===e||"\n"===e||"\r"===e||"\t"===e}e.exports=function(e,t){var a,r,u=0,l=0,c=e.length-1;for((t=t||{}).wordsPerMinute=t.wordsPerMinute||200,a=t.wordBound||n;a(e[l]);)l++;for(;a(e[c]);)c--;for(r=l;r<=c;){for(;r<=c&&!a(e[r]);r++);for(u++;r<=c&&a(e[r]);r++);}var i=u/t.wordsPerMinute,o=60*i*1e3;return{text:Math.ceil(i.toFixed(2))+" min read",minutes:i,time:o,words:u}}},273:function(e,t,a){"use strict";var n=a(18);e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},415:function(e,t,a){"use strict";var n=a(52),r=a(416)(5),u=!0;"find"in[]&&Array(1).find((function(){u=!1})),n(n.P+n.F*u,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a(50)("find")},416:function(e,t,a){var n=a(53),r=a(51),u=a(55),l=a(54),c=a(417);e.exports=function(e,t){var a=1==e,i=2==e,o=3==e,s=4==e,D=6==e,m=5==e||D,d=t||c;return function(t,c,f){for(var h,E,p=u(t),g=r(p),b=n(c,f,3),v=l(g.length),y=0,F=a?d(t,v):i?d(t,0):void 0;v>y;y++)if((m||y in g)&&(E=b(h=g[y],y,p),e))if(a)F[y]=E;else if(E)switch(e){case 3:return!0;case 5:return h;case 6:return y;case 2:F.push(h)}else if(s)return!1;return D?-1:o||s?s:F}}},417:function(e,t,a){var n=a(418);e.exports=function(e,t){return new(n(e))(t)}},418:function(e,t,a){var n=a(21),r=a(419),u=a(11)("species");e.exports=function(e){var t;return r(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!r(t.prototype)||(t=void 0),n(t)&&null===(t=t[u])&&(t=void 0)),void 0===t?Array:t}},419:function(e,t,a){var n=a(49);e.exports=Array.isArray||function(e){return"Array"==n(e)}},420:function(e,t,a){"use strict";a(421);var n=a(18),r=a(273),u=a(13),l=/./.toString,c=function(e){a(19)(RegExp.prototype,"toString",e,!0)};a(35)((function(){return"/a/b"!=l.call({source:"a",flags:"b"})}))?c((function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!u&&e instanceof RegExp?r.call(e):void 0)})):"toString"!=l.name&&c((function(){return l.call(this)}))},421:function(e,t,a){a(13)&&"g"!=/./g.flags&&a(20).f(RegExp.prototype,"flags",{configurable:!0,get:a(273)})},422:function(e,t,a){"use strict";var n=a(423),r={};r[a(11)("toStringTag")]="z",r+""!="[object z]"&&a(19)(Object.prototype,"toString",(function(){return"[object "+n(this)+"]"}),!0)},423:function(e,t,a){var n=a(49),r=a(11)("toStringTag"),u="Arguments"==n(function(){return arguments}());e.exports=function(e){var t,a,l;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(a=function(e,t){try{return e[t]}catch(a){}}(t=Object(e),r))?a:u?n(t):"Object"==(l=n(t))&&"function"==typeof t.callee?"Arguments":l}}}]);