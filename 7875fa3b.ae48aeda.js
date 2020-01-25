(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{178:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return m})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return f}));var l=a(1),n=a(6),r=(a(0),a(242)),s=a(247),i=a(248),c=a(244),o=a(245),u=a(246),m={delivery_guarantee:"at_least_once",description:"The Vector `kafka` sink streams `log` events to Apache Kafka via the Kafka protocol.",event_types:["log"],issues_url:"https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22sink%3A+kafka%22",operating_systems:["linux","macos","windows"],sidebar_label:'kafka|["log"]',source_url:"https://github.com/timberio/vector/tree/master/src/sinks/kafka.rs",status:"prod-ready",title:"Kafka Sink",unsupported_operating_systems:[]},d={id:"reference/sinks/kafka",title:"Kafka Sink",description:"The Vector `kafka` sink streams `log` events to Apache Kafka via the Kafka protocol.",source:"@site/docs/reference/sinks/kafka.md",permalink:"/docs/reference/sinks/kafka",editUrl:"https://github.com/brainrexapi/edit/master/docs/reference/sinks/kafka.md",sidebar_label:'kafka|["log"]',sidebar:"docs",previous:{title:"HTTP Sink",permalink:"/docs/reference/sinks/http"},next:{title:"New Relic Logs Sink",permalink:"/docs/reference/sinks/new_relic_logs"}},b=[{value:"Configuration",id:"configuration",children:[]},{value:"Options",id:"options",children:[{value:"bootstrap_servers",id:"bootstrap_servers",children:[]},{value:"buffer",id:"buffer",children:[]},{value:"encoding",id:"encoding",children:[]},{value:"healthcheck",id:"healthcheck",children:[]},{value:"key_field",id:"key_field",children:[]},{value:"tls",id:"tls",children:[]},{value:"topic",id:"topic",children:[]}]},{value:"How It Works",id:"how-it-works",children:[{value:"Environment Variables",id:"environment-variables",children:[]},{value:"Health Checks",id:"health-checks",children:[]},{value:"Streaming",id:"streaming",children:[]}]}],p={rightToc:b},h="wrapper";function f(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)(h,Object(l.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Vector ",Object(r.b)("inlineCode",{parentName:"p"},"kafka")," sink ",Object(r.b)("a",Object(l.a)({parentName:"p"},{href:"#streaming"}),"streams")," ",Object(r.b)("a",Object(l.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(r.b)("inlineCode",{parentName:"a"},"log"))," events to ",Object(r.b)("a",Object(l.a)({parentName:"p"},{href:"https://kafka.apache.org/"}),"Apache Kafka")," via the ",Object(r.b)("a",Object(l.a)({parentName:"p"},{href:"https://kafka.apache.org/protocol"}),"Kafka protocol"),"."),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)(s.a,{block:!0,defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"common",mdxType:"TabItem"},Object(r.b)(c.a,{fileName:"vector.toml",learnMoreUrl:"/docs/setup/configuration/",mdxType:"CodeHeader"}),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-toml"}),'[sinks.my_sink_id]\n  type = "kafka" # must be: "kafka"\n  inputs = ["my-source-id"] # example\n  bootstrap_servers = "10.14.22.123:9092,10.14.23.332:9092" # example\n  key_field = "user_id" # example\n  topic = "topic-1234" # example\n'))),Object(r.b)(i.a,{value:"advanced",mdxType:"TabItem"},Object(r.b)(c.a,{fileName:"vector.toml",learnMoreUrl:"/docs/setup/configuration/",mdxType:"CodeHeader"}),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-toml"}),'[sinks.my_sink_id]\n  # REQUIRED - General\n  type = "kafka" # must be: "kafka"\n  inputs = ["my-source-id"] # example\n  bootstrap_servers = "10.14.22.123:9092,10.14.23.332:9092" # example\n  key_field = "user_id" # example\n  topic = "topic-1234" # example\n\n  # OPTIONAL - General\n  healthcheck = true # default\n\n  # OPTIONAL - requests\n  encoding = "json" # example, no default, enum\n\n  # OPTIONAL - Buffer\n  [sinks.my_sink_id.buffer]\n    type = "memory" # default, enum\n    max_events = 500 # default, events, relevant when type = "memory"\n    max_size = 104900000 # example, no default, bytes, relevant when type = "disk"\n    when_full = "block" # default, enum\n\n  # OPTIONAL - Tls\n  [sinks.my_sink_id.tls]\n    ca_path = "/path/to/certificate_authority.crt" # example, no default\n    crt_path = "/path/to/host_certificate.crt" # example, no default\n    enabled = false # default\n    key_pass = "PassWord1" # example, no default\n    key_path = "/path/to/host_certificate.key" # example, no default\n')))),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)(o.a,{filters:!0,mdxType:"Fields"},Object(r.b)(u.a,{common:!0,defaultValue:null,enumValues:null,examples:["10.14.22.123:9092,10.14.23.332:9092"],name:"bootstrap_servers",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"bootstrap_servers"},"bootstrap_servers"),Object(r.b)("p",null,"A comma delimited list of host and port pairs that the Kafka client should contact to bootstrap its cluster metadata.")),Object(r.b)(u.a,{common:!1,defaultValue:null,enumValues:null,examples:[],name:"buffer",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"buffer"},"buffer"),Object(r.b)("p",null,"Configures the sink buffer behavior."),Object(r.b)(o.a,{filters:!1,mdxType:"Fields"},Object(r.b)(u.a,{common:!1,defaultValue:500,enumValues:null,examples:[500],name:"max_events",path:"buffer",relevantWhen:{type:"memory"},required:!1,templateable:!1,type:"int",unit:"events",mdxType:"Field"},Object(r.b)("h4",{id:"max_events"},"max_events"),Object(r.b)("p",null,"The maximum number of ",Object(r.b)("a",Object(l.a)({parentName:"p"},{href:"/docs/about/data-model/#event"}),"events")," allowed in the buffer.")),Object(r.b)(u.a,{common:!1,defaultValue:null,enumValues:null,examples:[1049e5],name:"max_size",path:"buffer",relevantWhen:{type:"disk"},required:!1,templateable:!1,type:"int",unit:"bytes",mdxType:"Field"},Object(r.b)("h4",{id:"max_size"},"max_size"),Object(r.b)("p",null,"The maximum size of the buffer on the disk.")),Object(r.b)(u.a,{common:!1,defaultValue:"memory",enumValues:{memory:"Stores the sink's buffer in memory. This is more performant (~3x), but less durable. Data will be lost if Vector is restarted abruptly.",disk:"Stores the sink's buffer on disk. This is less performance (~3x),  but durable. Data will not be lost between restarts."},examples:["memory","disk"],name:"type",path:"buffer",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(r.b)("h4",{id:"type"},"type"),Object(r.b)("p",null,"The buffer's type / location. ",Object(r.b)("inlineCode",{parentName:"p"},"disk")," buffers are persistent and will be retained between restarts.")),Object(r.b)(u.a,{common:!1,defaultValue:"block",enumValues:{block:"Applies back pressure when the buffer is full. This prevents data loss, but will cause data to pile up on the edge.",drop_newest:"Drops new data as it's received. This data is lost. This should be used when performance is the highest priority."},examples:["block","drop_newest"],name:"when_full",path:"buffer",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(r.b)("h4",{id:"when_full"},"when_full"),Object(r.b)("p",null,"The behavior when the buffer becomes full.")))),Object(r.b)(u.a,{common:!1,defaultValue:null,enumValues:{json:"Each event is encoded into JSON and the payload is represented as a JSON array.",text:"Each event is encoded into text via the `message` key and the payload is new line delimited."},examples:["json","text"],name:"encoding",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"encoding"},"encoding"),Object(r.b)("p",null,"The encoding format used to serialize the events before outputting.")),Object(r.b)(u.a,{common:!1,defaultValue:!0,enumValues:null,examples:[!0,!1],name:"healthcheck",path:null,relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"healthcheck"},"healthcheck"),Object(r.b)("p",null,"Enables/disables the sink healthcheck upon start. See ",Object(r.b)("a",Object(l.a)({parentName:"p"},{href:"#health-checks"}),"Health Checks")," for more info.")),Object(r.b)(u.a,{common:!0,defaultValue:null,enumValues:null,examples:["user_id"],name:"key_field",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"key_field"},"key_field"),Object(r.b)("p",null,"The log field name to use for the topic key. If unspecified, the key will be randomly generated. If the field does not exist on the log, a blank value will be used.")),Object(r.b)(u.a,{common:!1,defaultValue:null,enumValues:null,examples:[],name:"tls",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"tls"},"tls"),Object(r.b)("p",null,"Configures the TLS options for connections from this sink."),Object(r.b)(o.a,{filters:!1,mdxType:"Fields"},Object(r.b)(u.a,{common:!1,defaultValue:null,enumValues:null,examples:["/path/to/certificate_authority.crt"],name:"ca_path",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(r.b)("h4",{id:"ca_path"},"ca_path"),Object(r.b)("p",null,"Absolute path to an additional CA certificate file, in DER or PEM format (X.509).")),Object(r.b)(u.a,{common:!1,defaultValue:null,enumValues:null,examples:["/path/to/host_certificate.crt"],name:"crt_path",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(r.b)("h4",{id:"crt_path"},"crt_path"),Object(r.b)("p",null,"Absolute path to a certificate file used to identify this connection, in DER or PEM format (X.509) or PKCS#12. If this is set and is not a PKCS#12 archive, ",Object(r.b)("a",Object(l.a)({parentName:"p"},{href:"#key_path"}),Object(r.b)("inlineCode",{parentName:"a"},"key_path"))," must also be set.")),Object(r.b)(u.a,{common:!1,defaultValue:!1,enumValues:null,examples:[!1,!0],name:"enabled",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,mdxType:"Field"},Object(r.b)("h4",{id:"enabled"},"enabled"),Object(r.b)("p",null,"Enable TLS during connections to the remote.")),Object(r.b)(u.a,{common:!1,defaultValue:null,enumValues:null,examples:["PassWord1"],name:"key_pass",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(r.b)("h4",{id:"key_pass"},"key_pass"),Object(r.b)("p",null,"Pass phrase used to unlock the encrypted key file. This has no effect unless ",Object(r.b)("a",Object(l.a)({parentName:"p"},{href:"#key_pass"}),Object(r.b)("inlineCode",{parentName:"a"},"key_pass"))," above is set.")),Object(r.b)(u.a,{common:!1,defaultValue:null,enumValues:null,examples:["/path/to/host_certificate.key"],name:"key_path",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(r.b)("h4",{id:"key_path"},"key_path"),Object(r.b)("p",null,"Absolute path to a certificate key file used to identify this connection, in DER or PEM format (PKCS#8). If this is set, ",Object(r.b)("a",Object(l.a)({parentName:"p"},{href:"#crt_path"}),Object(r.b)("inlineCode",{parentName:"a"},"crt_path"))," must also be set.")))),Object(r.b)(u.a,{common:!0,defaultValue:null,enumValues:null,examples:["topic-1234"],name:"topic",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"topic"},"topic"),Object(r.b)("p",null,"The Kafka topic name to write events to."))),Object(r.b)("h2",{id:"how-it-works"},"How It Works"),Object(r.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(r.b)("p",null,"Environment variables are supported through all of Vector's configuration.\nSimply add ",Object(r.b)("inlineCode",{parentName:"p"},"${MY_ENV_VAR}")," in your Vector configuration file and the variable\nwill be replaced before being evaluated."),Object(r.b)("p",null,"You can learn more in the ",Object(r.b)("a",Object(l.a)({parentName:"p"},{href:"/docs/setup/configuration/#environment-variables"}),"Environment Variables"),"\nsection."),Object(r.b)("h3",{id:"health-checks"},"Health Checks"),Object(r.b)("p",null,"Health checks ensure that the downstream service is accessible and ready to\naccept data. This check is performed upon sink initialization.\nIf the health check fails an error will be logged and Vector will proceed to\nstart."),Object(r.b)("h4",{id:"require-health-checks"},"Require Health Checks"),Object(r.b)("p",null,"If you'd like to exit immediately upon a health check failure, you can\npass the ",Object(r.b)("inlineCode",{parentName:"p"},"--require-healthy")," flag:"),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-bash"}),"vector --config /etc/vector/vector.toml --require-healthy\n")),Object(r.b)("h4",{id:"disable-health-checks"},"Disable Health Checks"),Object(r.b)("p",null,"If you'd like to disable health checks for this sink you can set the\n",Object(r.b)("inlineCode",{parentName:"p"},"healthcheck")," option to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),"."),Object(r.b)("h3",{id:"streaming"},"Streaming"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"kafka")," sink streams data on a real-time\nevent-by-event basis. It does not batch data."))}f.isMDXComponent=!0},245:function(e,t,a){"use strict";var l=a(0),n=a.n(l);a(85);t.a=function({children:e,filters:t}){const[a,r]=Object(l.useState)(!1),[s,i]=Object(l.useState)(!1),[c,o]=Object(l.useState)(null);let u=Array.isArray(e)?e:[e],m=u.some(e=>e.props.common),d=u.some(e=>e.props.required),b=u;return a&&(b=b.filter(e=>e.props.common)),s&&(b=b.filter(e=>e.props.required)),c&&(b=b.filter(e=>e.props.name.toLowerCase().includes(c.toLowerCase()))),n.a.createElement("div",{className:"fields"},u.length>1&&!1!==t?n.a.createElement("div",{className:"filters"},n.a.createElement("span",{className:"result-count"},b.length," items"),n.a.createElement("div",{className:" search"},n.a.createElement("input",{type:"text",onChange:e=>o(e.currentTarget.value),placeholder:"\ud83d\udd0d Search..."})),n.a.createElement("div",{className:"checkboxes"},m&&n.a.createElement("label",{title:"Only show popular/common results"},n.a.createElement("input",{type:"checkbox",onChange:e=>r(e.currentTarget.checked),checked:a}),"common only"),d&&n.a.createElement("label",{title:"Only show required results"},n.a.createElement("input",{type:"checkbox",onChange:e=>i(e.currentTarget.checked),checked:s}),"required only"))):null,n.a.createElement("div",{className:"section-list"},!Array.isArray(b)||b.length>0?b:n.a.createElement("div",{className:"empty"},n.a.createElement("div",{className:"icon"},"\u2639"),n.a.createElement("div",null,"No fields found"))))}},246:function(e,t,a){"use strict";a(12);var l=a(0),n=a.n(l),r=a(241),s=a.n(r),i=(a(242),a(244)),c=a(251);function o(e){return JSON.stringify(e)}function u(e){return e.includes(".")?'"'+e+'"':e}function m(e,t){return(a=t)&&a.constructor===Object?"name"in t&&"value"in t?`${u(t.name)} = ${o(t.value)}`:`${u(Object.keys(t)[0])} = ${o(Object.values(t)[0])}`:e?`${e} = ${o(t)}`:`${o(t)}`;var a}function d({values:e}){let t=[];if(Array.isArray(e))for(var a in e){let l=e[a];t.push(n.a.createElement("code",{key:l},o(l))),t.push(" ")}else for(var l in e)t.push(n.a.createElement("code",{key:l,title:e[l]},o(l))),t.push(" ");return t}function b({name:e,path:t,value:a}){return n.a.createElement("code",null,m(null,a))}function p({name:e,path:t,values:a}){let l="";return a.forEach((function(t){l+=m(e,t)+"\n"})),t&&(l=`[${t}]\n${l}`),n.a.createElement("div",null,n.a.createElement(i.a,{fileName:"vector.toml"}),n.a.createElement(c.a,{className:"language-toml"},l))}function h({value:e}){let t=Object.keys(e)[0],a=Object.values(e)[0];return n.a.createElement("span",null,n.a.createElement("code",null,n.a.createElement("a",{href:`#${t}`},t))," = ",n.a.createElement("code",null,o(a)))}function f({defaultValue:e,enumValues:t,examples:a,name:r,path:s,relevantWhen:i}){const[c,o]=Object(l.useState)(!1);return e||t||a&&a.length>0?n.a.createElement("div",{className:"info"},void 0!==e?e?n.a.createElement("div",null,"Default: ",n.a.createElement(b,{name:r,path:s,value:e})):n.a.createElement("div",null,"No default"):null,t?n.a.createElement("div",null,"Enum, must be one of: ",n.a.createElement(d,{values:t})):null,i?n.a.createElement("div",null,"Only relevant when: ",n.a.createElement(h,{value:i})):null,n.a.createElement("div",null,n.a.createElement("div",{className:"show-more",onClick:()=>o(!c)},c?"Hide examples":"View examples"),c&&n.a.createElement("div",{className:"examples"},n.a.createElement(p,{name:r,path:s,values:a})))):null}t.a=function({children:e,common:t,defaultValue:a,enumValues:r,examples:i,name:c,path:o,relevantWhen:u,templateable:m,type:d,unit:b,required:p}){const[h,k]=Object(l.useState)(!1);let v=e;return h&&(v=v.filter(e=>"p"!=e.props.originalType)),n.a.createElement("div",{className:s()("field","section",p?"field-required":"",h?"field-collapsed":""),required:p},n.a.createElement("div",{className:"badges"},t&&n.a.createElement("span",{className:"badge badge--primary",title:"This is a popular that we recommend for getting started"},"common"),m&&n.a.createElement("span",{className:"badge badge--primary",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),n.a.createElement("span",{className:"badge badge--secondary"},d),r&&Object.keys(r).length>0&&n.a.createElement("span",{className:"badge badge--secondary",title:"This option is an enumation and only allows specific values"},"enum"),b&&n.a.createElement("span",{className:"badge badge--secondary"},b),p?n.a.createElement("span",{className:"badge badge--danger"},"required"):n.a.createElement("span",{className:"badge badge--secondary"},"optional")),v,!h&&n.a.createElement(f,{defaultValue:a,enumValues:r,examples:i,name:c,path:o,relevantWhen:u}))}},247:function(e,t,a){"use strict";var l=a(1),n=a(0),r=a.n(n),s=a(252),i=a(241),c=a.n(i),o=a(253),u=a.n(o);function m({block:e,centered:t,className:a,style:l,values:n,selectedValue:s,setSelectedValue:i}){return r.a.createElement("div",{className:t?"tabs--centered":""},r.a.createElement("ul",{className:c()("tabs",a,{"tabs--block":e}),style:l},n.map(({value:e,label:t})=>r.a.createElement("li",{className:c()("tab-item",{"tab-item--active":s===e}),key:e,onClick:()=>i(e)},t))))}function d({selectedValue:e,setSelectedValue:t,values:a}){return r.a.createElement(s.a,{className:"react-select-container",classNamePrefix:"react-select",options:a,isClearable:!1,placeholder:"Select a version...",value:a.find(t=>t.value==e),onChange:e=>t(e?e.value:null)})}t.a=function(e){const{block:t,centered:a,children:s,defaultValue:i,select:c,style:o,values:b,urlKey:p}=e,[h,f]=Object(n.useState)(i);return Object(n.useEffect)(()=>{if("undefined"!=typeof window&&window.location&&p){let e=u.a.parse(window.location.search);e[p]&&f(e[p])}},[]),r.a.createElement("div",null,b.length>1&&(c?r.a.createElement(d,Object(l.a)({selectedValue:h,setSelectedValue:f},e)):r.a.createElement(m,Object(l.a)({selectedValue:h,setSelectedValue:f},e))),r.a.createElement("div",{className:"margin-vert--md"},n.Children.toArray(s).filter(e=>e.props.value===h)[0]))}},248:function(e,t,a){"use strict";var l=a(0),n=a.n(l);t.a=function(e){return n.a.createElement("div",null,e.children)}}}]);