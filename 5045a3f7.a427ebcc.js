(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return u})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return b}));var n=a(1),r=a(6),l=(a(0),a(261)),c=a(255),o=a(262),s=a(263),i={title:"Global Options",description:"Vector's global options, allowing you configure global Vector-wide behavior."},u={id:"reference/global-options",title:"Global Options",description:"Vector's global options, allowing you configure global Vector-wide behavior.",source:"@site/docs/reference/global-options.md",permalink:"/docs/reference/global-options",editUrl:"https://github.com/timberio/vector/edit/master/website/docs/reference/global-options.md",sidebar:"docs",previous:{title:"Environment Variables",permalink:"/docs/reference/env-vars"},next:{title:"Unit Tests",permalink:"/docs/reference/tests"}},d=[{value:"Configuration",id:"configuration",children:[]},{value:"Options",id:"options",children:[{value:"data_dir",id:"data_dir",children:[]},{value:"dns_servers",id:"dns_servers",children:[]}]},{value:"How It Works",id:"how-it-works",children:[{value:"Data Directory",id:"data-directory",children:[]}]}],m={rightToc:d},p="wrapper";function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)(p,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"In addition to ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/sources/"}),"sources"),", ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/transforms/"}),"transforms"),", and\n",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/sinks/"}),"sinks"),", Vector accepts global options that serve to configure\nVector as a whole and set defaults for component options."),Object(l.b)("h2",{id:"configuration"},"Configuration"),Object(l.b)(c.a,{fileName:"vector.toml",mdxType:"CodeHeader"}),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'data_dir = "/var/lib/vector" # example, no default\n  dns_servers = ["0.0.0.0:53"] # example, no default\n')),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)(o.a,{filters:!0,mdxType:"Fields"},Object(l.b)(s.a,{common:!1,defaultValue:null,enumValues:null,examples:["/var/lib/vector"],name:"data_dir",nullable:!0,path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(l.b)("h3",{id:"data_dir"},"data_dir"),Object(l.b)("p",null,"The directory used for persisting Vector state, such as on-disk buffers, file checkpoints, and more. Please make sure the Vector project has write permissions to this dir. See ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#data-directory"}),"Data Directory")," for more info.")),Object(l.b)(s.a,{common:!1,defaultValue:null,enumValues:null,examples:[["0.0.0.0:53"]],name:"dns_servers",nullable:!0,path:null,relevantWhen:null,required:!1,templateable:!1,type:"[string]",unit:null,mdxType:"Field"},Object(l.b)("h3",{id:"dns_servers"},"dns_servers"),Object(l.b)("p",null,"The list of DNS servers Vector will use to resolve DNS requests. When set Vector will ignore the system configuration and use only the list of DNS servers provided. If this option is not set then Vector will attempt to use the system configuration."))),Object(l.b)("h2",{id:"how-it-works"},"How It Works"),Object(l.b)("h3",{id:"data-directory"},"Data Directory"),Object(l.b)("p",null,"Vector requires a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#data_dir"}),Object(l.b)("inlineCode",{parentName:"a"},"data_dir"))," value for on-disk operations. Currently, the only\noperation using this directory are Vector's on-disk buffers. Buffers, by\ndefault, are memory-based, but if you switch them to disk-based you'll need to\nspecify a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#data_dir"}),Object(l.b)("inlineCode",{parentName:"a"},"data_dir")),"."))}b.isMDXComponent=!0},255:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(85);t.a=function({fileName:e,links:t}){let a=[];for(var n in t)a.push(r.a.createElement("a",{href:n.href},n.text||"Learn more&hellip;"));return r.a.createElement("div",{className:"code-header"},a.length>0&&r.a.createElement("span",{className:"code-header--links"},a),e)}},257:function(e,t,a){"use strict";(function(e){var n=a(1),r=a(0),l=a.n(r),c=a(277),o=a(268),s=a.n(o),i=a(267),u=a(253),d=a.n(u),m=a(275),p=a.n(m),b=a(269),f=a.n(b),h=a(254),v=a(86),y=a.n(v),g=a(265);(void 0!==e?e:window).Prism=i.a,a(270),a(271),a(272),a(273),a(274);const O=/{([\d,-]+)}/;t.a=({children:e,className:t,metastring:a})=>{const{siteConfig:{themeConfig:{prism:o={}}}}=Object(h.a)(),[i,u]=Object(r.useState)(!1),m=Object(r.useRef)(null),b=Object(r.useRef)(null),[v]=Object(g.a)();let j=[];if(a&&O.test(a)){const e=a.match(O)[1];j=f.a.parse(e).filter(e=>e>0)}Object(r.useEffect)(()=>{let e;return b.current&&(e=new s.a(b.current,{target:()=>m.current})),()=>{e&&e.destroy()}},[b.current,m.current]);let E=t&&t.replace(/language-/,"");!E&&o.defaultLanguage&&(E=o.defaultLanguage);const N=()=>{window.getSelection().empty(),u(!0),setTimeout(()=>u(!1),2e3)};let w="dark"==v?o.darkTheme:o.theme;return l.a.createElement(c.a,Object(n.a)({},c.b,{theme:w||p.a,code:e.trim(),language:E}),({className:e,style:t,tokens:a,getLineProps:r,getTokenProps:c})=>l.a.createElement("div",{className:y.a.codeBlockWrapper},l.a.createElement("pre",{ref:m,className:d()(e,y.a.codeBlock),style:t},a.map((e,t)=>{const a=r({line:e,key:t});return j.includes(t+1)&&(a.className=`${a.className} docusaurus-highlight-code-line`),l.a.createElement("div",Object(n.a)({key:t},a),e.map((e,t)=>l.a.createElement("span",Object(n.a)({key:t},c({token:e,key:t})))))})),l.a.createElement("button",{ref:b,type:"button","aria-label":"Copy code to clipboard",className:y.a.copyButton,onClick:N},i?"Copied":"Copy")))}}).call(this,a(48))},258:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},d=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=u(a),p=n,b=d["".concat(c,".").concat(p)]||d[p]||m[p]||l;return a?r.a.createElement(b,o({ref:t},i,{components:a})):r.a.createElement(b,o({ref:t},i))}));p.displayName="MDXCreateElement"},262:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(87);t.a=function({children:e,filters:t}){const[a,l]=Object(n.useState)(!1),[c,o]=Object(n.useState)(!1),[s,i]=Object(n.useState)(null);let u=Array.isArray(e)?e:[e],d=u.some(e=>e.props.common),m=u.some(e=>e.props.required),p=u;return a&&(p=p.filter(e=>e.props.common)),c&&(p=p.filter(e=>e.props.required)),s&&(p=p.filter(e=>e.props.name.toLowerCase().includes(s.toLowerCase()))),r.a.createElement("div",{className:"fields"},u.length>1&&!1!==t?r.a.createElement("div",{className:"filters"},r.a.createElement("span",{className:"result-count"},p.length," items"),r.a.createElement("div",{className:" search"},r.a.createElement("input",{type:"text",onChange:e=>i(e.currentTarget.value),placeholder:"\ud83d\udd0d Search..."})),r.a.createElement("div",{className:"checkboxes"},d&&r.a.createElement("label",{title:"Only show popular/common results"},r.a.createElement("input",{type:"checkbox",onChange:e=>l(e.currentTarget.checked),checked:a}),"common only"),m&&r.a.createElement("label",{title:"Only show required results"},r.a.createElement("input",{type:"checkbox",onChange:e=>o(e.currentTarget.checked),checked:c}),"required only"))):null,r.a.createElement("div",{className:"section-list"},!Array.isArray(p)||p.length>0?p:r.a.createElement("div",{className:"empty"},r.a.createElement("div",{className:"icon"},"\u2639"),r.a.createElement("div",null,"No fields found"))))}},263:function(e,t,a){"use strict";a(266);var n=a(0),r=a.n(n),l=a(253),c=a.n(l),o=(a(258),a(255)),s=a(257);function i(e){return JSON.stringify(e)}function u(e){return e.includes(".")?'"'+e+'"':e}function d(e,t){return(a=t)&&a.constructor===Object?"name"in t&&"value"in t?`${u(t.name)} = ${i(t.value)}`:`${u(Object.keys(t)[0])} = ${i(Object.values(t)[0])}`:e?`${e} = ${i(t)}`:`${i(t)}`;var a}function m({values:e}){let t=[];if(Array.isArray(e))for(var a in e){let n=e[a];t.push(r.a.createElement("code",{key:n},i(n))),t.push(" ")}else for(var n in e)t.push(r.a.createElement("code",{key:n,title:e[n]},i(n))),t.push(" ");return t}function p({name:e,path:t,value:a}){return r.a.createElement("code",null,d(null,a))}function b({name:e,path:t,values:a}){let n="";return a.forEach((function(t){n+=d(e,t)+"\n"})),t&&(n=`[${t}]\n${n}`),r.a.createElement("div",null,r.a.createElement(o.a,{fileName:"vector.toml"}),r.a.createElement(s.a,{className:"language-toml"},n))}function f({value:e}){let t=Object.keys(e)[0],a=Object.values(e)[0];return r.a.createElement("span",null,r.a.createElement("code",null,r.a.createElement("a",{href:`#${t}`},t))," = ",r.a.createElement("code",null,i(a)))}function h({defaultValue:e,enumValues:t,examples:a,name:l,path:c,relevantWhen:o}){const[s,i]=Object(n.useState)(!1);return e||t||a&&a.length>0?r.a.createElement("div",{className:"info"},void 0!==e?e?r.a.createElement("div",null,"Default: ",r.a.createElement(p,{name:l,path:c,value:e})):r.a.createElement("div",null,"No default"):null,t?r.a.createElement("div",null,"Enum, must be one of: ",r.a.createElement(m,{values:t})):null,o?r.a.createElement("div",null,"Only relevant when: ",r.a.createElement(f,{value:o})):null,r.a.createElement("div",null,r.a.createElement("div",{className:"show-more",onClick:()=>i(!s)},s?"Hide examples":"View examples"),s&&r.a.createElement("div",{className:"examples"},r.a.createElement(b,{name:l,path:c,values:a})))):null}t.a=function({children:e,common:t,defaultValue:a,enumValues:l,examples:o,name:s,path:i,relevantWhen:u,templateable:d,type:m,unit:p,required:b}){const[f,v]=Object(n.useState)(!1);let y=e;return f&&(y=y.filter(e=>"p"!=e.props.originalType)),r.a.createElement("div",{className:c()("field","section",b?"field-required":"",f?"field-collapsed":""),required:b},r.a.createElement("div",{className:"badges"},t&&r.a.createElement("span",{className:"badge badge--primary",title:"This is a popular that we recommend for getting started"},"common"),d&&r.a.createElement("span",{className:"badge badge--primary",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),r.a.createElement("span",{className:"badge badge--secondary"},m),l&&Object.keys(l).length>0&&r.a.createElement("span",{className:"badge badge--secondary",title:"This option is an enumation and only allows specific values"},"enum"),p&&r.a.createElement("span",{className:"badge badge--secondary"},p),b?r.a.createElement("span",{className:"badge badge--danger"},"required"):r.a.createElement("span",{className:"badge badge--secondary"},"optional")),y,!f&&r.a.createElement(h,{defaultValue:a,enumValues:l,examples:o,name:s,path:i,relevantWhen:u}))}}}]);