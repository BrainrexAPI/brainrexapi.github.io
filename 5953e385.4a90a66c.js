(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{153:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return m})),t.d(a,"metadata",(function(){return d})),t.d(a,"rightToc",(function(){return b})),t.d(a,"default",(function(){return f}));var n=t(1),l=t(6),c=(t(0),t(242)),r=t(247),s=t(248),i=t(244),o=t(245),u=t(246),m={delivery_guarantee:"best_effort",description:"The Vector `blackhole` sink streams `log` and `metric` events to a blackhole that simply discards data, designed for testing and benchmarking purposes.",event_types:["log","metric"],issues_url:"https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22sink%3A+blackhole%22",operating_systems:["linux","macos","windows"],sidebar_label:'blackhole|["log","metric"]',source_url:"https://github.com/timberio/vector/tree/master/src/sinks/blackhole.rs",status:"prod-ready",title:"Blockhole Sink",unsupported_operating_systems:[]},d={id:"reference/sinks/blackhole",title:"Blockhole Sink",description:"The Vector `blackhole` sink streams `log` and `metric` events to a blackhole that simply discards data, designed for testing and benchmarking purposes.",source:"@site/docs/reference/sinks/blackhole.md",permalink:"/docs/reference/sinks/blackhole",editUrl:"https://github.com/brainrexapi/edit/master/docs/reference/sinks/blackhole.md",sidebar_label:'blackhole|["log","metric"]',sidebar:"docs",previous:{title:"AWS S3 Sink",permalink:"/docs/reference/sinks/aws_s3"},next:{title:"Clickhouse Sink",permalink:"/docs/reference/sinks/clickhouse"}},b=[{value:"Configuration",id:"configuration",children:[]},{value:"Options",id:"options",children:[{value:"healthcheck",id:"healthcheck",children:[]},{value:"print_amount",id:"print_amount",children:[]}]},{value:"How It Works",id:"how-it-works",children:[{value:"Environment Variables",id:"environment-variables",children:[]},{value:"Health Checks",id:"health-checks",children:[]},{value:"Streaming",id:"streaming",children:[]}]}],h={rightToc:b},p="wrapper";function f(e){var a=e.components,t=Object(l.a)(e,["components"]);return Object(c.b)(p,Object(n.a)({},h,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The Vector ",Object(c.b)("inlineCode",{parentName:"p"},"blackhole")," sink ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#streaming"}),"streams")," ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(c.b)("inlineCode",{parentName:"a"},"log"))," and ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/metric/"}),Object(c.b)("inlineCode",{parentName:"a"},"metric"))," events to a blackhole that simply discards data, designed for testing and benchmarking purposes."),Object(c.b)("h2",{id:"configuration"},"Configuration"),Object(c.b)(r.a,{block:!0,defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(c.b)(s.a,{value:"common",mdxType:"TabItem"},Object(c.b)(i.a,{fileName:"vector.toml",learnMoreUrl:"/docs/setup/configuration/",mdxType:"CodeHeader"}),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[sinks.my_sink_id]\n  type = "blackhole" # must be: "blackhole"\n  inputs = ["my-source-id"] # example\n  print_amount = 1000 # example\n'))),Object(c.b)(s.a,{value:"advanced",mdxType:"TabItem"},Object(c.b)(i.a,{fileName:"vector.toml",learnMoreUrl:"/docs/setup/configuration/",mdxType:"CodeHeader"}),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[sinks.my_sink_id]\n  # REQUIRED\n  type = "blackhole" # must be: "blackhole"\n  inputs = ["my-source-id"] # example\n  print_amount = 1000 # example\n\n  # OPTIONAL\n  healthcheck = true # default\n')))),Object(c.b)("h2",{id:"options"},"Options"),Object(c.b)(o.a,{filters:!0,mdxType:"Fields"},Object(c.b)(u.a,{common:!1,defaultValue:!0,enumValues:null,examples:[!0,!1],name:"healthcheck",path:null,relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,mdxType:"Field"},Object(c.b)("h3",{id:"healthcheck"},"healthcheck"),Object(c.b)("p",null,"Enables/disables the sink healthcheck upon start. See ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#health-checks"}),"Health Checks")," for more info.")),Object(c.b)(u.a,{common:!0,defaultValue:null,enumValues:null,examples:[1e3],name:"print_amount",path:null,relevantWhen:null,required:!0,templateable:!1,type:"int",unit:null,mdxType:"Field"},Object(c.b)("h3",{id:"print_amount"},"print_amount"),Object(c.b)("p",null,"The number of events that must be received in order to print a summary of activity."))),Object(c.b)("h2",{id:"how-it-works"},"How It Works"),Object(c.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(c.b)("p",null,"Environment variables are supported through all of Vector's configuration.\nSimply add ",Object(c.b)("inlineCode",{parentName:"p"},"${MY_ENV_VAR}")," in your Vector configuration file and the variable\nwill be replaced before being evaluated."),Object(c.b)("p",null,"You can learn more in the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/configuration/#environment-variables"}),"Environment Variables"),"\nsection."),Object(c.b)("h3",{id:"health-checks"},"Health Checks"),Object(c.b)("p",null,"Health checks ensure that the downstream service is accessible and ready to\naccept data. This check is performed upon sink initialization.\nIf the health check fails an error will be logged and Vector will proceed to\nstart."),Object(c.b)("h4",{id:"require-health-checks"},"Require Health Checks"),Object(c.b)("p",null,"If you'd like to exit immediately upon a health check failure, you can\npass the ",Object(c.b)("inlineCode",{parentName:"p"},"--require-healthy")," flag:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"vector --config /etc/vector/vector.toml --require-healthy\n")),Object(c.b)("h4",{id:"disable-health-checks"},"Disable Health Checks"),Object(c.b)("p",null,"If you'd like to disable health checks for this sink you can set the\n",Object(c.b)("inlineCode",{parentName:"p"},"healthcheck")," option to ",Object(c.b)("inlineCode",{parentName:"p"},"false"),"."),Object(c.b)("h3",{id:"streaming"},"Streaming"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"blackhole")," sink streams data on a real-time\nevent-by-event basis. It does not batch data."))}f.isMDXComponent=!0},245:function(e,a,t){"use strict";var n=t(0),l=t.n(n);t(85);a.a=function({children:e,filters:a}){const[t,c]=Object(n.useState)(!1),[r,s]=Object(n.useState)(!1),[i,o]=Object(n.useState)(null);let u=Array.isArray(e)?e:[e],m=u.some(e=>e.props.common),d=u.some(e=>e.props.required),b=u;return t&&(b=b.filter(e=>e.props.common)),r&&(b=b.filter(e=>e.props.required)),i&&(b=b.filter(e=>e.props.name.toLowerCase().includes(i.toLowerCase()))),l.a.createElement("div",{className:"fields"},u.length>1&&!1!==a?l.a.createElement("div",{className:"filters"},l.a.createElement("span",{className:"result-count"},b.length," items"),l.a.createElement("div",{className:" search"},l.a.createElement("input",{type:"text",onChange:e=>o(e.currentTarget.value),placeholder:"\ud83d\udd0d Search..."})),l.a.createElement("div",{className:"checkboxes"},m&&l.a.createElement("label",{title:"Only show popular/common results"},l.a.createElement("input",{type:"checkbox",onChange:e=>c(e.currentTarget.checked),checked:t}),"common only"),d&&l.a.createElement("label",{title:"Only show required results"},l.a.createElement("input",{type:"checkbox",onChange:e=>s(e.currentTarget.checked),checked:r}),"required only"))):null,l.a.createElement("div",{className:"section-list"},!Array.isArray(b)||b.length>0?b:l.a.createElement("div",{className:"empty"},l.a.createElement("div",{className:"icon"},"\u2639"),l.a.createElement("div",null,"No fields found"))))}},246:function(e,a,t){"use strict";t(12);var n=t(0),l=t.n(n),c=t(241),r=t.n(c),s=(t(242),t(244)),i=t(251);function o(e){return JSON.stringify(e)}function u(e){return e.includes(".")?'"'+e+'"':e}function m(e,a){return(t=a)&&t.constructor===Object?"name"in a&&"value"in a?`${u(a.name)} = ${o(a.value)}`:`${u(Object.keys(a)[0])} = ${o(Object.values(a)[0])}`:e?`${e} = ${o(a)}`:`${o(a)}`;var t}function d({values:e}){let a=[];if(Array.isArray(e))for(var t in e){let n=e[t];a.push(l.a.createElement("code",{key:n},o(n))),a.push(" ")}else for(var n in e)a.push(l.a.createElement("code",{key:n,title:e[n]},o(n))),a.push(" ");return a}function b({name:e,path:a,value:t}){return l.a.createElement("code",null,m(null,t))}function h({name:e,path:a,values:t}){let n="";return t.forEach((function(a){n+=m(e,a)+"\n"})),a&&(n=`[${a}]\n${n}`),l.a.createElement("div",null,l.a.createElement(s.a,{fileName:"vector.toml"}),l.a.createElement(i.a,{className:"language-toml"},n))}function p({value:e}){let a=Object.keys(e)[0],t=Object.values(e)[0];return l.a.createElement("span",null,l.a.createElement("code",null,l.a.createElement("a",{href:`#${a}`},a))," = ",l.a.createElement("code",null,o(t)))}function f({defaultValue:e,enumValues:a,examples:t,name:c,path:r,relevantWhen:s}){const[i,o]=Object(n.useState)(!1);return e||a||t&&t.length>0?l.a.createElement("div",{className:"info"},void 0!==e?e?l.a.createElement("div",null,"Default: ",l.a.createElement(b,{name:c,path:r,value:e})):l.a.createElement("div",null,"No default"):null,a?l.a.createElement("div",null,"Enum, must be one of: ",l.a.createElement(d,{values:a})):null,s?l.a.createElement("div",null,"Only relevant when: ",l.a.createElement(p,{value:s})):null,l.a.createElement("div",null,l.a.createElement("div",{className:"show-more",onClick:()=>o(!i)},i?"Hide examples":"View examples"),i&&l.a.createElement("div",{className:"examples"},l.a.createElement(h,{name:c,path:r,values:t})))):null}a.a=function({children:e,common:a,defaultValue:t,enumValues:c,examples:s,name:i,path:o,relevantWhen:u,templateable:m,type:d,unit:b,required:h}){const[p,v]=Object(n.useState)(!1);let k=e;return p&&(k=k.filter(e=>"p"!=e.props.originalType)),l.a.createElement("div",{className:r()("field","section",h?"field-required":"",p?"field-collapsed":""),required:h},l.a.createElement("div",{className:"badges"},a&&l.a.createElement("span",{className:"badge badge--primary",title:"This is a popular that we recommend for getting started"},"common"),m&&l.a.createElement("span",{className:"badge badge--primary",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),l.a.createElement("span",{className:"badge badge--secondary"},d),c&&Object.keys(c).length>0&&l.a.createElement("span",{className:"badge badge--secondary",title:"This option is an enumation and only allows specific values"},"enum"),b&&l.a.createElement("span",{className:"badge badge--secondary"},b),h?l.a.createElement("span",{className:"badge badge--danger"},"required"):l.a.createElement("span",{className:"badge badge--secondary"},"optional")),k,!p&&l.a.createElement(f,{defaultValue:t,enumValues:c,examples:s,name:i,path:o,relevantWhen:u}))}},247:function(e,a,t){"use strict";var n=t(1),l=t(0),c=t.n(l),r=t(252),s=t(241),i=t.n(s),o=t(253),u=t.n(o);function m({block:e,centered:a,className:t,style:n,values:l,selectedValue:r,setSelectedValue:s}){return c.a.createElement("div",{className:a?"tabs--centered":""},c.a.createElement("ul",{className:i()("tabs",t,{"tabs--block":e}),style:n},l.map(({value:e,label:a})=>c.a.createElement("li",{className:i()("tab-item",{"tab-item--active":r===e}),key:e,onClick:()=>s(e)},a))))}function d({selectedValue:e,setSelectedValue:a,values:t}){return c.a.createElement(r.a,{className:"react-select-container",classNamePrefix:"react-select",options:t,isClearable:!1,placeholder:"Select a version...",value:t.find(a=>a.value==e),onChange:e=>a(e?e.value:null)})}a.a=function(e){const{block:a,centered:t,children:r,defaultValue:s,select:i,style:o,values:b,urlKey:h}=e,[p,f]=Object(l.useState)(s);return Object(l.useEffect)(()=>{if("undefined"!=typeof window&&window.location&&h){let e=u.a.parse(window.location.search);e[h]&&f(e[h])}},[]),c.a.createElement("div",null,b.length>1&&(i?c.a.createElement(d,Object(n.a)({selectedValue:p,setSelectedValue:f},e)):c.a.createElement(m,Object(n.a)({selectedValue:p,setSelectedValue:f},e))),c.a.createElement("div",{className:"margin-vert--md"},l.Children.toArray(r).filter(e=>e.props.value===p)[0]))}},248:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(e){return l.a.createElement("div",null,e.children)}}}]);