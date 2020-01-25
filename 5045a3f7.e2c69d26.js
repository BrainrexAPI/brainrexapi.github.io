(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return b}));var n=a(1),r=a(6),l=(a(0),a(242)),s=a(244),o=a(245),c=a(246),i={title:"Global Options",description:"Vector's global options, allowing you configure global Vector-wide behavior."},d={id:"reference/global-options",title:"Global Options",description:"Vector's global options, allowing you configure global Vector-wide behavior.",source:"@site/docs/reference/global-options.md",permalink:"/docs/reference/global-options",editUrl:"https://github.com/brainrexapi/edit/master/docs/reference/global-options.md",sidebar:"docs",previous:{title:"Environment Variables",permalink:"/docs/reference/env-vars"},next:{title:"Unit Tests",permalink:"/docs/reference/tests"}},u=[{value:"Configuration",id:"configuration",children:[]},{value:"Options",id:"options",children:[{value:"data_dir",id:"data_dir",children:[]},{value:"dns_servers",id:"dns_servers",children:[]}]},{value:"How It Works",id:"how-it-works",children:[{value:"Data Directory",id:"data-directory",children:[]}]}],m={rightToc:u},p="wrapper";function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)(p,Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"In addition to ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/sources/"}),"sources"),", ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/transforms/"}),"transforms"),", and\n",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/sinks/"}),"sinks"),", Vector accepts global options that serve to configure\nVector as a whole and set defaults for component options."),Object(l.b)("h2",{id:"configuration"},"Configuration"),Object(l.b)(s.a,{fileName:"vector.toml",mdxType:"CodeHeader"}),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'data_dir = "/var/lib/vector" # example, no default\n  dns_servers = ["0.0.0.0:53"] # example, no default\n')),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)(o.a,{filters:!0,mdxType:"Fields"},Object(l.b)(c.a,{common:!1,defaultValue:null,enumValues:null,examples:["/var/lib/vector"],name:"data_dir",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(l.b)("h3",{id:"data_dir"},"data_dir"),Object(l.b)("p",null,"The directory used for persisting Vector state, such as on-disk buffers, file checkpoints, and more. Please make sure the Vector project has write permissions to this dir. See ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#data-directory"}),"Data Directory")," for more info.")),Object(l.b)(c.a,{common:!1,defaultValue:null,enumValues:null,examples:[["0.0.0.0:53"]],name:"dns_servers",path:null,relevantWhen:null,required:!1,templateable:!1,type:"[string]",unit:null,mdxType:"Field"},Object(l.b)("h3",{id:"dns_servers"},"dns_servers"),Object(l.b)("p",null,"The list of DNS servers Vector will use to resolve DNS requests. When set Vector will ignore the system configuration and use only the list of DNS servers provided. If this option is not set then Vector will attempt to use the system configuration."))),Object(l.b)("h2",{id:"how-it-works"},"How It Works"),Object(l.b)("h3",{id:"data-directory"},"Data Directory"),Object(l.b)("p",null,"Vector requires a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#data_dir"}),Object(l.b)("inlineCode",{parentName:"a"},"data_dir"))," value for on-disk operations. Currently, the only\noperation using this directory are Vector's on-disk buffers. Buffers, by\ndefault, are memory-based, but if you switch them to disk-based you'll need to\nspecify a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#data_dir"}),Object(l.b)("inlineCode",{parentName:"a"},"data_dir")),"."))}b.isMDXComponent=!0},245:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(85);t.a=function({children:e,filters:t}){const[a,l]=Object(n.useState)(!1),[s,o]=Object(n.useState)(!1),[c,i]=Object(n.useState)(null);let d=Array.isArray(e)?e:[e],u=d.some(e=>e.props.common),m=d.some(e=>e.props.required),p=d;return a&&(p=p.filter(e=>e.props.common)),s&&(p=p.filter(e=>e.props.required)),c&&(p=p.filter(e=>e.props.name.toLowerCase().includes(c.toLowerCase()))),r.a.createElement("div",{className:"fields"},d.length>1&&!1!==t?r.a.createElement("div",{className:"filters"},r.a.createElement("span",{className:"result-count"},p.length," items"),r.a.createElement("div",{className:" search"},r.a.createElement("input",{type:"text",onChange:e=>i(e.currentTarget.value),placeholder:"\ud83d\udd0d Search..."})),r.a.createElement("div",{className:"checkboxes"},u&&r.a.createElement("label",{title:"Only show popular/common results"},r.a.createElement("input",{type:"checkbox",onChange:e=>l(e.currentTarget.checked),checked:a}),"common only"),m&&r.a.createElement("label",{title:"Only show required results"},r.a.createElement("input",{type:"checkbox",onChange:e=>o(e.currentTarget.checked),checked:s}),"required only"))):null,r.a.createElement("div",{className:"section-list"},!Array.isArray(p)||p.length>0?p:r.a.createElement("div",{className:"empty"},r.a.createElement("div",{className:"icon"},"\u2639"),r.a.createElement("div",null,"No fields found"))))}},246:function(e,t,a){"use strict";a(12);var n=a(0),r=a.n(n),l=a(241),s=a.n(l),o=(a(242),a(244)),c=a(251);function i(e){return JSON.stringify(e)}function d(e){return e.includes(".")?'"'+e+'"':e}function u(e,t){return(a=t)&&a.constructor===Object?"name"in t&&"value"in t?`${d(t.name)} = ${i(t.value)}`:`${d(Object.keys(t)[0])} = ${i(Object.values(t)[0])}`:e?`${e} = ${i(t)}`:`${i(t)}`;var a}function m({values:e}){let t=[];if(Array.isArray(e))for(var a in e){let n=e[a];t.push(r.a.createElement("code",{key:n},i(n))),t.push(" ")}else for(var n in e)t.push(r.a.createElement("code",{key:n,title:e[n]},i(n))),t.push(" ");return t}function p({name:e,path:t,value:a}){return r.a.createElement("code",null,u(null,a))}function b({name:e,path:t,values:a}){let n="";return a.forEach((function(t){n+=u(e,t)+"\n"})),t&&(n=`[${t}]\n${n}`),r.a.createElement("div",null,r.a.createElement(o.a,{fileName:"vector.toml"}),r.a.createElement(c.a,{className:"language-toml"},n))}function f({value:e}){let t=Object.keys(e)[0],a=Object.values(e)[0];return r.a.createElement("span",null,r.a.createElement("code",null,r.a.createElement("a",{href:`#${t}`},t))," = ",r.a.createElement("code",null,i(a)))}function h({defaultValue:e,enumValues:t,examples:a,name:l,path:s,relevantWhen:o}){const[c,i]=Object(n.useState)(!1);return e||t||a&&a.length>0?r.a.createElement("div",{className:"info"},void 0!==e?e?r.a.createElement("div",null,"Default: ",r.a.createElement(p,{name:l,path:s,value:e})):r.a.createElement("div",null,"No default"):null,t?r.a.createElement("div",null,"Enum, must be one of: ",r.a.createElement(m,{values:t})):null,o?r.a.createElement("div",null,"Only relevant when: ",r.a.createElement(f,{value:o})):null,r.a.createElement("div",null,r.a.createElement("div",{className:"show-more",onClick:()=>i(!c)},c?"Hide examples":"View examples"),c&&r.a.createElement("div",{className:"examples"},r.a.createElement(b,{name:l,path:s,values:a})))):null}t.a=function({children:e,common:t,defaultValue:a,enumValues:l,examples:o,name:c,path:i,relevantWhen:d,templateable:u,type:m,unit:p,required:b}){const[f,v]=Object(n.useState)(!1);let g=e;return f&&(g=g.filter(e=>"p"!=e.props.originalType)),r.a.createElement("div",{className:s()("field","section",b?"field-required":"",f?"field-collapsed":""),required:b},r.a.createElement("div",{className:"badges"},t&&r.a.createElement("span",{className:"badge badge--primary",title:"This is a popular that we recommend for getting started"},"common"),u&&r.a.createElement("span",{className:"badge badge--primary",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),r.a.createElement("span",{className:"badge badge--secondary"},m),l&&Object.keys(l).length>0&&r.a.createElement("span",{className:"badge badge--secondary",title:"This option is an enumation and only allows specific values"},"enum"),p&&r.a.createElement("span",{className:"badge badge--secondary"},p),b?r.a.createElement("span",{className:"badge badge--danger"},"required"):r.a.createElement("span",{className:"badge badge--secondary"},"optional")),g,!f&&r.a.createElement(h,{defaultValue:a,enumValues:l,examples:o,name:c,path:i,relevantWhen:d}))}}}]);