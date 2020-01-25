(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{149:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return m})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return v}));var n=a(1),l=a(6),r=(a(0),a(242)),s=a(244),c=a(245),o=a(246),u=a(247),i=a(248),m={delivery_guarantee:"best_effort",description:"The Vector `prometheus` source ingests data through the Prometheus text exposition format and outputs `metric` events.",event_types:["metric"],issues_url:"https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22source%3A+prometheus%22",operating_systems:["linux","macos","windows"],sidebar_label:'prometheus|["metric"]',source_url:"https://github.com/timberio/vector/tree/master/src/sources/prometheus.rs",status:"beta",title:"Prometheus Source",unsupported_operating_systems:[]},p={id:"reference/sources/prometheus",title:"Prometheus Source",description:"The Vector `prometheus` source ingests data through the Prometheus text exposition format and outputs `metric` events.",source:"@site/docs/reference/sources/prometheus.md",permalink:"/docs/reference/sources/prometheus",editUrl:"https://github.com/brainrexapi/edit/master/docs/reference/sources/prometheus.md",sidebar_label:'prometheus|["metric"]',sidebar:"docs",previous:{title:"Kafka Source",permalink:"/docs/reference/sources/kafka"},next:{title:"Socket Source",permalink:"/docs/reference/sources/socket"}},d=[{value:"Configuration",id:"configuration",children:[]},{value:"Options",id:"options",children:[{value:"hosts",id:"hosts",children:[]},{value:"scrape_interval_secs",id:"scrape_interval_secs",children:[]}]},{value:"Output",id:"output",children:[]},{value:"How It Works",id:"how-it-works",children:[{value:"Environment Variables",id:"environment-variables",children:[]}]}],b={rightToc:d},h="wrapper";function v(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)(h,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Vector ",Object(r.b)("inlineCode",{parentName:"p"},"prometheus")," source ingests data through the Prometheus text exposition format and outputs ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/metric/"}),Object(r.b)("inlineCode",{parentName:"a"},"metric"))," events."),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)(s.a,{fileName:"vector.toml",learnMoreUrl:"/docs/setup/configuration/",mdxType:"CodeHeader"}),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[sources.my_source_id]\n  type = "prometheus" # must be: "prometheus"\n  hosts = ["http://localhost:9090"] # example\n  scrape_interval_secs = 1 # example\n')),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)(c.a,{filters:!0,mdxType:"Fields"},Object(r.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:[["http://localhost:9090"]],name:"hosts",path:null,relevantWhen:null,required:!0,templateable:!1,type:"[string]",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"hosts"},"hosts"),Object(r.b)("p",null,"Host addresses to scrape metrics from.")),Object(r.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:[1],name:"scrape_interval_secs",path:null,relevantWhen:null,required:!0,templateable:!1,type:"int",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"scrape_interval_secs"},"scrape_interval_secs"),Object(r.b)("p",null,"The interval between scrapes in seconds."))),Object(r.b)("h2",{id:"output"},"Output"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"prometheus")," source ingests data through the Prometheus text exposition format and outputs ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/metric/"}),Object(r.b)("inlineCode",{parentName:"a"},"metric"))," events.\nFor example:"),Object(r.b)(u.a,{block:!0,defaultValue:"counter",values:[{label:"Counter",value:"counter"},{label:"Gauge",value:"gauge"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"counter",mdxType:"TabItem"},Object(r.b)("p",null,"Given the following input:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),'# TYPE promhttp_metric_handler_requests_total counter\npromhttp_metric_handler_requests_total{code="200"} 100\n')),Object(r.b)("p",null,"A metric event will be output with the following structure:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "promhttp_metric_handler_requests_total",\n  "kind": "absolute",\n  "timestamp": "2019-05-02T12:22:46.658503Z" // current time / time ingested\n  "tags": {\n    "code": "200"\n  },\n  "value": {\n    "type": "counter",\n    "value": 100.0\n  }\n}\n'))),Object(r.b)(i.a,{value:"gauge",mdxType:"TabItem"},Object(r.b)("p",null,"Given the following input:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"prometheus_remote_storage_samples_in_total 57011636\n")),Object(r.b)("p",null,"A metric event will be output with the following structure:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "prometheus_remote_storage_samples_in_total",\n  "kind": "absolute",\n  "timestamp": "2019-05-02T12:22:46.658503Z" // current time / time ingested\n  "tags": null,\n  "value": {\n    "type": "gauge",\n    "value": 57011636.0\n  }\n}\n')))),Object(r.b)("h2",{id:"how-it-works"},"How It Works"),Object(r.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(r.b)("p",null,"Environment variables are supported through all of Vector's configuration.\nSimply add ",Object(r.b)("inlineCode",{parentName:"p"},"${MY_ENV_VAR}")," in your Vector configuration file and the variable\nwill be replaced before being evaluated."),Object(r.b)("p",null,"You can learn more in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/configuration/#environment-variables"}),"Environment Variables"),"\nsection."))}v.isMDXComponent=!0},245:function(e,t,a){"use strict";var n=a(0),l=a.n(n);a(85);t.a=function({children:e,filters:t}){const[a,r]=Object(n.useState)(!1),[s,c]=Object(n.useState)(!1),[o,u]=Object(n.useState)(null);let i=Array.isArray(e)?e:[e],m=i.some(e=>e.props.common),p=i.some(e=>e.props.required),d=i;return a&&(d=d.filter(e=>e.props.common)),s&&(d=d.filter(e=>e.props.required)),o&&(d=d.filter(e=>e.props.name.toLowerCase().includes(o.toLowerCase()))),l.a.createElement("div",{className:"fields"},i.length>1&&!1!==t?l.a.createElement("div",{className:"filters"},l.a.createElement("span",{className:"result-count"},d.length," items"),l.a.createElement("div",{className:" search"},l.a.createElement("input",{type:"text",onChange:e=>u(e.currentTarget.value),placeholder:"\ud83d\udd0d Search..."})),l.a.createElement("div",{className:"checkboxes"},m&&l.a.createElement("label",{title:"Only show popular/common results"},l.a.createElement("input",{type:"checkbox",onChange:e=>r(e.currentTarget.checked),checked:a}),"common only"),p&&l.a.createElement("label",{title:"Only show required results"},l.a.createElement("input",{type:"checkbox",onChange:e=>c(e.currentTarget.checked),checked:s}),"required only"))):null,l.a.createElement("div",{className:"section-list"},!Array.isArray(d)||d.length>0?d:l.a.createElement("div",{className:"empty"},l.a.createElement("div",{className:"icon"},"\u2639"),l.a.createElement("div",null,"No fields found"))))}},246:function(e,t,a){"use strict";a(12);var n=a(0),l=a.n(n),r=a(241),s=a.n(r),c=(a(242),a(244)),o=a(251);function u(e){return JSON.stringify(e)}function i(e){return e.includes(".")?'"'+e+'"':e}function m(e,t){return(a=t)&&a.constructor===Object?"name"in t&&"value"in t?`${i(t.name)} = ${u(t.value)}`:`${i(Object.keys(t)[0])} = ${u(Object.values(t)[0])}`:e?`${e} = ${u(t)}`:`${u(t)}`;var a}function p({values:e}){let t=[];if(Array.isArray(e))for(var a in e){let n=e[a];t.push(l.a.createElement("code",{key:n},u(n))),t.push(" ")}else for(var n in e)t.push(l.a.createElement("code",{key:n,title:e[n]},u(n))),t.push(" ");return t}function d({name:e,path:t,value:a}){return l.a.createElement("code",null,m(null,a))}function b({name:e,path:t,values:a}){let n="";return a.forEach((function(t){n+=m(e,t)+"\n"})),t&&(n=`[${t}]\n${n}`),l.a.createElement("div",null,l.a.createElement(c.a,{fileName:"vector.toml"}),l.a.createElement(o.a,{className:"language-toml"},n))}function h({value:e}){let t=Object.keys(e)[0],a=Object.values(e)[0];return l.a.createElement("span",null,l.a.createElement("code",null,l.a.createElement("a",{href:`#${t}`},t))," = ",l.a.createElement("code",null,u(a)))}function v({defaultValue:e,enumValues:t,examples:a,name:r,path:s,relevantWhen:c}){const[o,u]=Object(n.useState)(!1);return e||t||a&&a.length>0?l.a.createElement("div",{className:"info"},void 0!==e?e?l.a.createElement("div",null,"Default: ",l.a.createElement(d,{name:r,path:s,value:e})):l.a.createElement("div",null,"No default"):null,t?l.a.createElement("div",null,"Enum, must be one of: ",l.a.createElement(p,{values:t})):null,c?l.a.createElement("div",null,"Only relevant when: ",l.a.createElement(h,{value:c})):null,l.a.createElement("div",null,l.a.createElement("div",{className:"show-more",onClick:()=>u(!o)},o?"Hide examples":"View examples"),o&&l.a.createElement("div",{className:"examples"},l.a.createElement(b,{name:r,path:s,values:a})))):null}t.a=function({children:e,common:t,defaultValue:a,enumValues:r,examples:c,name:o,path:u,relevantWhen:i,templateable:m,type:p,unit:d,required:b}){const[h,f]=Object(n.useState)(!1);let g=e;return h&&(g=g.filter(e=>"p"!=e.props.originalType)),l.a.createElement("div",{className:s()("field","section",b?"field-required":"",h?"field-collapsed":""),required:b},l.a.createElement("div",{className:"badges"},t&&l.a.createElement("span",{className:"badge badge--primary",title:"This is a popular that we recommend for getting started"},"common"),m&&l.a.createElement("span",{className:"badge badge--primary",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),l.a.createElement("span",{className:"badge badge--secondary"},p),r&&Object.keys(r).length>0&&l.a.createElement("span",{className:"badge badge--secondary",title:"This option is an enumation and only allows specific values"},"enum"),d&&l.a.createElement("span",{className:"badge badge--secondary"},d),b?l.a.createElement("span",{className:"badge badge--danger"},"required"):l.a.createElement("span",{className:"badge badge--secondary"},"optional")),g,!h&&l.a.createElement(v,{defaultValue:a,enumValues:r,examples:c,name:o,path:u,relevantWhen:i}))}},247:function(e,t,a){"use strict";var n=a(1),l=a(0),r=a.n(l),s=a(252),c=a(241),o=a.n(c),u=a(253),i=a.n(u);function m({block:e,centered:t,className:a,style:n,values:l,selectedValue:s,setSelectedValue:c}){return r.a.createElement("div",{className:t?"tabs--centered":""},r.a.createElement("ul",{className:o()("tabs",a,{"tabs--block":e}),style:n},l.map(({value:e,label:t})=>r.a.createElement("li",{className:o()("tab-item",{"tab-item--active":s===e}),key:e,onClick:()=>c(e)},t))))}function p({selectedValue:e,setSelectedValue:t,values:a}){return r.a.createElement(s.a,{className:"react-select-container",classNamePrefix:"react-select",options:a,isClearable:!1,placeholder:"Select a version...",value:a.find(t=>t.value==e),onChange:e=>t(e?e.value:null)})}t.a=function(e){const{block:t,centered:a,children:s,defaultValue:c,select:o,style:u,values:d,urlKey:b}=e,[h,v]=Object(l.useState)(c);return Object(l.useEffect)(()=>{if("undefined"!=typeof window&&window.location&&b){let e=i.a.parse(window.location.search);e[b]&&v(e[b])}},[]),r.a.createElement("div",null,d.length>1&&(o?r.a.createElement(p,Object(n.a)({selectedValue:h,setSelectedValue:v},e)):r.a.createElement(m,Object(n.a)({selectedValue:h,setSelectedValue:v},e))),r.a.createElement("div",{className:"margin-vert--md"},l.Children.toArray(s).filter(e=>e.props.value===h)[0]))}},248:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){return l.a.createElement("div",null,e.children)}}}]);