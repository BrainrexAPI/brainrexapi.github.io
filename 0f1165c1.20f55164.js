(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{108:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return m})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return b}));var n=a(1),l=a(6),r=(a(0),a(242)),i=a(244),s=a(245),c=a(246),o={description:"The Vector `tokenizer` transform accepts `log` events and allows you to tokenize a field's value by splitting on white space, ignoring special wrapping characters, and zip the tokens into ordered field names.",event_types:["log"],issues_url:"https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22transform%3A+tokenizer%22",sidebar_label:'tokenizer|["log"]',source_url:"https://github.com/timberio/vector/tree/master/src/transforms/tokenizer.rs",status:"prod-ready",title:"Tokenizer Transform"},m={id:"reference/transforms/tokenizer",title:"Tokenizer Transform",description:"The Vector `tokenizer` transform accepts `log` events and allows you to tokenize a field's value by splitting on white space, ignoring special wrapping characters, and zip the tokens into ordered field names.",source:"@site/docs/reference/transforms/tokenizer.md",permalink:"/docs/reference/transforms/tokenizer",editUrl:"https://github.com/brainrexapi/edit/master/docs/reference/transforms/tokenizer.md",sidebar_label:'tokenizer|["log"]',sidebar:"docs",previous:{title:"Split Transform",permalink:"/docs/reference/transforms/split"},next:{title:"Sinks",permalink:"/docs/reference/sinks"}},d=[{value:"Configuration",id:"configuration",children:[]},{value:"Options",id:"options",children:[{value:"drop_field",id:"drop_field",children:[]},{value:"field",id:"field",children:[]},{value:"field_names",id:"field_names",children:[]},{value:"types",id:"types",children:[]}]},{value:"Output",id:"output",children:[]},{value:"How It Works",id:"how-it-works",children:[{value:"Blank Values",id:"blank-values",children:[]},{value:"Environment Variables",id:"environment-variables",children:[]},{value:"Special Characters",id:"special-characters",children:[]}]}],p={rightToc:d},u="wrapper";function b(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)(u,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Vector ",Object(r.b)("inlineCode",{parentName:"p"},"tokenizer")," transform accepts ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(r.b)("inlineCode",{parentName:"a"},"log"))," events and allows you to tokenize a field's value by splitting on white space, ignoring special wrapping characters, and zip the tokens into ordered field names."),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)(i.a,{fileName:"vector.toml",learnMoreUrl:"/docs/setup/configuration/",mdxType:"CodeHeader"}),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[transforms.my_transform_id]\n  # REQUIRED - General\n  type = "tokenizer" # must be: "tokenizer"\n  inputs = ["my-source-id"] # example\n  field_names = ["timestamp", "level", "message"] # example\n\n  # OPTIONAL - General\n  drop_field = true # default\n  field = "message" # default\n\n  # OPTIONAL - Types\n  [transforms.my_transform_id.types]\n')),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)(s.a,{filters:!0,mdxType:"Fields"},Object(r.b)(c.a,{common:!0,defaultValue:!0,enumValues:null,examples:[!0,!1],name:"drop_field",path:null,relevantWhen:null,required:!0,templateable:!1,type:"bool",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"drop_field"},"drop_field"),Object(r.b)("p",null,"If ",Object(r.b)("inlineCode",{parentName:"p"},"true")," the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#field"}),Object(r.b)("inlineCode",{parentName:"a"},"field"))," will be dropped after parsing.")),Object(r.b)(c.a,{common:!0,defaultValue:"message",enumValues:null,examples:["message"],name:"field",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"field"},"field"),Object(r.b)("p",null,"The log field to tokenize.")),Object(r.b)(c.a,{common:!0,defaultValue:null,enumValues:null,examples:[["timestamp","level","message"]],name:"field_names",path:null,relevantWhen:null,required:!0,templateable:!1,type:"[string]",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"field_names"},"field_names"),Object(r.b)("p",null,"The log field names assigned to the resulting tokens, in order.")),Object(r.b)(c.a,{common:!0,defaultValue:null,enumValues:null,examples:[],name:"types",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"types"},"types"),Object(r.b)("p",null,"Key/Value pairs representing mapped log field types."),Object(r.b)(s.a,{filters:!1,mdxType:"Fields"},Object(r.b)(c.a,{common:!1,defaultValue:null,enumValues:{bool:'Coerces `"true"`/`/"false"`, `"1"`/`"0"`, and `"t"`/`"f"` values into boolean.',float:"Coerce to a 64 bit float.",int:"Coerce to a 64 bit integer.",string:"Coerce to a string.",timestamp:"Coerces to a Vector timestamp. [`strptime` specificiers][urls.strptime_specifiers] must be used to parse the string."},examples:[{status:"int"},{duration:"float"},{success:"bool"},{timestamp:"timestamp|%s"},{timestamp:"timestamp|%+"},{timestamp:"timestamp|%F"},{timestamp:"timestamp|%a %b %e %T %Y"}],name:"`[field-name]`",path:"types",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(r.b)("h4",{id:"field-name"},Object(r.b)("inlineCode",{parentName:"h4"},"[field-name]")),Object(r.b)("p",null,"A definition of log field type conversions. They key is the log field name and the value is the type. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.rs/chrono/0.3.1/chrono/format/strftime/index.html"}),Object(r.b)("inlineCode",{parentName:"a"},"strptime")," specifiers")," are supported for the ",Object(r.b)("inlineCode",{parentName:"p"},"timestamp")," type."))))),Object(r.b)("h2",{id:"output"},"Output"),Object(r.b)("p",null,"Given the following log line:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "message": "5.86.210.12 - zieme4647 [19/06/2019:17:20:49 -0400] "GET /embrace/supply-chains/dynamic/vertical" 201 20574"\n}\n')),Object(r.b)("p",null,"And the following configuration:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[transforms.<transform-id>]\ntype = "tokenizer"\nfield = "message"\nfields = ["remote_addr", "ident", "user_id", "timestamp", "message", "status", "bytes"]\n')),Object(r.b)("p",null,"A ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(r.b)("inlineCode",{parentName:"a"},"log")," event")," will be output with the following structure:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  // ... existing fields\n  "remote_addr": "5.86.210.12",\n  "user_id": "zieme4647",\n  "timestamp": "19/06/2019:17:20:49 -0400",\n  "message": "GET /embrace/supply-chains/dynamic/vertical",\n  "status": "201",\n  "bytes": "20574"\n}\n')),Object(r.b)("p",null,"A few things to note about the output:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"message")," field was overwritten."),Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"ident")," field was dropped since it contained a ",Object(r.b)("inlineCode",{parentName:"li"},'"-"')," value."),Object(r.b)("li",{parentName:"ol"},"All values are strings, we have plans to add type coercion."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#special-characters"}),"Special wrapper characters")," were dropped, such as\nwrapping ",Object(r.b)("inlineCode",{parentName:"li"},"[...]")," and ",Object(r.b)("inlineCode",{parentName:"li"},'"..."')," characters.")),Object(r.b)("h2",{id:"how-it-works"},"How It Works"),Object(r.b)("h3",{id:"blank-values"},"Blank Values"),Object(r.b)("p",null,"Both ",Object(r.b)("inlineCode",{parentName:"p"},'" "')," and ",Object(r.b)("inlineCode",{parentName:"p"},'"-"')," are considered blank values and their mapped field will\nbe set to ",Object(r.b)("inlineCode",{parentName:"p"},"null"),"."),Object(r.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(r.b)("p",null,"Environment variables are supported through all of Vector's configuration.\nSimply add ",Object(r.b)("inlineCode",{parentName:"p"},"${MY_ENV_VAR}")," in your Vector configuration file and the variable\nwill be replaced before being evaluated."),Object(r.b)("p",null,"You can learn more in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/configuration/#environment-variables"}),"Environment Variables"),"\nsection."),Object(r.b)("h3",{id:"special-characters"},"Special Characters"),Object(r.b)("p",null,"In order to extract raw values and remove wrapping characters, we must treat\ncertain characters as special. These characters will be discarded:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'"..."')," - Quotes are used tp wrap phrases. Spaces are preserved, but the wrapping quotes will be discarded."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"[...]")," - Brackets are used to wrap phrases. Spaces are preserved, but the wrapping brackets will be discarded."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"\\")," - Can be used to escape the above characters, Vector will treat them as literal.")))}b.isMDXComponent=!0},245:function(e,t,a){"use strict";var n=a(0),l=a.n(n);a(85);t.a=function({children:e,filters:t}){const[a,r]=Object(n.useState)(!1),[i,s]=Object(n.useState)(!1),[c,o]=Object(n.useState)(null);let m=Array.isArray(e)?e:[e],d=m.some(e=>e.props.common),p=m.some(e=>e.props.required),u=m;return a&&(u=u.filter(e=>e.props.common)),i&&(u=u.filter(e=>e.props.required)),c&&(u=u.filter(e=>e.props.name.toLowerCase().includes(c.toLowerCase()))),l.a.createElement("div",{className:"fields"},m.length>1&&!1!==t?l.a.createElement("div",{className:"filters"},l.a.createElement("span",{className:"result-count"},u.length," items"),l.a.createElement("div",{className:" search"},l.a.createElement("input",{type:"text",onChange:e=>o(e.currentTarget.value),placeholder:"\ud83d\udd0d Search..."})),l.a.createElement("div",{className:"checkboxes"},d&&l.a.createElement("label",{title:"Only show popular/common results"},l.a.createElement("input",{type:"checkbox",onChange:e=>r(e.currentTarget.checked),checked:a}),"common only"),p&&l.a.createElement("label",{title:"Only show required results"},l.a.createElement("input",{type:"checkbox",onChange:e=>s(e.currentTarget.checked),checked:i}),"required only"))):null,l.a.createElement("div",{className:"section-list"},!Array.isArray(u)||u.length>0?u:l.a.createElement("div",{className:"empty"},l.a.createElement("div",{className:"icon"},"\u2639"),l.a.createElement("div",null,"No fields found"))))}},246:function(e,t,a){"use strict";a(12);var n=a(0),l=a.n(n),r=a(241),i=a.n(r),s=(a(242),a(244)),c=a(251);function o(e){return JSON.stringify(e)}function m(e){return e.includes(".")?'"'+e+'"':e}function d(e,t){return(a=t)&&a.constructor===Object?"name"in t&&"value"in t?`${m(t.name)} = ${o(t.value)}`:`${m(Object.keys(t)[0])} = ${o(Object.values(t)[0])}`:e?`${e} = ${o(t)}`:`${o(t)}`;var a}function p({values:e}){let t=[];if(Array.isArray(e))for(var a in e){let n=e[a];t.push(l.a.createElement("code",{key:n},o(n))),t.push(" ")}else for(var n in e)t.push(l.a.createElement("code",{key:n,title:e[n]},o(n))),t.push(" ");return t}function u({name:e,path:t,value:a}){return l.a.createElement("code",null,d(null,a))}function b({name:e,path:t,values:a}){let n="";return a.forEach((function(t){n+=d(e,t)+"\n"})),t&&(n=`[${t}]\n${n}`),l.a.createElement("div",null,l.a.createElement(s.a,{fileName:"vector.toml"}),l.a.createElement(c.a,{className:"language-toml"},n))}function f({value:e}){let t=Object.keys(e)[0],a=Object.values(e)[0];return l.a.createElement("span",null,l.a.createElement("code",null,l.a.createElement("a",{href:`#${t}`},t))," = ",l.a.createElement("code",null,o(a)))}function h({defaultValue:e,enumValues:t,examples:a,name:r,path:i,relevantWhen:s}){const[c,o]=Object(n.useState)(!1);return e||t||a&&a.length>0?l.a.createElement("div",{className:"info"},void 0!==e?e?l.a.createElement("div",null,"Default: ",l.a.createElement(u,{name:r,path:i,value:e})):l.a.createElement("div",null,"No default"):null,t?l.a.createElement("div",null,"Enum, must be one of: ",l.a.createElement(p,{values:t})):null,s?l.a.createElement("div",null,"Only relevant when: ",l.a.createElement(f,{value:s})):null,l.a.createElement("div",null,l.a.createElement("div",{className:"show-more",onClick:()=>o(!c)},c?"Hide examples":"View examples"),c&&l.a.createElement("div",{className:"examples"},l.a.createElement(b,{name:r,path:i,values:a})))):null}t.a=function({children:e,common:t,defaultValue:a,enumValues:r,examples:s,name:c,path:o,relevantWhen:m,templateable:d,type:p,unit:u,required:b}){const[f,g]=Object(n.useState)(!1);let O=e;return f&&(O=O.filter(e=>"p"!=e.props.originalType)),l.a.createElement("div",{className:i()("field","section",b?"field-required":"",f?"field-collapsed":""),required:b},l.a.createElement("div",{className:"badges"},t&&l.a.createElement("span",{className:"badge badge--primary",title:"This is a popular that we recommend for getting started"},"common"),d&&l.a.createElement("span",{className:"badge badge--primary",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),l.a.createElement("span",{className:"badge badge--secondary"},p),r&&Object.keys(r).length>0&&l.a.createElement("span",{className:"badge badge--secondary",title:"This option is an enumation and only allows specific values"},"enum"),u&&l.a.createElement("span",{className:"badge badge--secondary"},u),b?l.a.createElement("span",{className:"badge badge--danger"},"required"):l.a.createElement("span",{className:"badge badge--secondary"},"optional")),O,!f&&l.a.createElement(h,{defaultValue:a,enumValues:r,examples:s,name:c,path:o,relevantWhen:m}))}}}]);