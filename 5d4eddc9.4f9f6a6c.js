(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{142:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return m})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return f}));var n=a(1),l=a(6),i=(a(0),a(212)),s=a(231),u=a(264),r=a(218),c=a(232),o=a(233),m={title:"Unit Tests",description:"Vector's unit test configuration options, allowing you to unit test your Vector configuration files.",status:"beta"},p={id:"reference/tests",title:"Unit Tests",description:"Vector's unit test configuration options, allowing you to unit test your Vector configuration files.",source:"@site/docs/reference/tests.md",permalink:"/docs/reference/tests",editUrl:"https://github.com/brainrexapi/brainrexapi.github.io/edit/master/docs/reference/tests.md"},d=[{value:"Configuration",id:"configuration",children:[]},{value:"Options",id:"options",children:[{value:"input",id:"input",children:[]},{value:"name",id:"name-1",children:[]},{value:"outputs",id:"outputs",children:[]}]}],b={rightToc:d},h="wrapper";function f(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(i.b)(h,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"It's possible to define unit tests within a Vector configuration file that cover\na network of transforms within the topology. The intention of these tests is to\nimprove the maintainability of configs containing larger and more complex\ncombinations of transforms."),Object(i.b)("p",null,"Executing tests within a config file can be done with the ",Object(i.b)("inlineCode",{parentName:"p"},"test")," subcommand:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"vector test /etc/vector/*.toml\n")),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)(s.a,{block:!0,defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(i.b)(u.a,{value:"common",mdxType:"TabItem"},Object(i.b)(r.a,{fileName:"vector.toml",mdxType:"CodeHeader"}),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[transforms.bar]\n  type = "regex_parser"\n  regex = "^(?P<timestamp>[\\\\w\\\\-:\\\\+]+) (?P<level>\\\\w+) (?P<message>.*)$"\n\n[[tests]]\n  # REQUIRED - General\n  name = "foo test" # example\n\n  # REQUIRED - Outputs\n  [[tests.outputs]]\n    # REQUIRED - General\n    extract_from = "foo" # example\n\n    # REQUIRED - Conditions\n    [[tests.outputs.conditions]]\n      # REQUIRED\n      type = "check_fields" # example\n\n      # OPTIONAL\n      "message.eq" = "this is the content to match against"\n      "host.exists" = true\n      "method.neq" = "POST"\n\n  # REQUIRED - Input\n  [tests.input]\n    # REQUIRED\n    type = "raw" # example, enum\n    insert_at = "foo" # example\n\n    # OPTIONAL\n    value = "some message contents" # example, no default, relevant when type = "raw"\n'))),Object(i.b)(u.a,{value:"advanced",mdxType:"TabItem"},Object(i.b)(r.a,{fileName:"vector.toml",mdxType:"CodeHeader"}),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[transforms.bar]\n  type = "regex_parser"\n  regex = "^(?P<timestamp>[\\\\w\\\\-:\\\\+]+) (?P<level>\\\\w+) (?P<message>.*)$"\n\n[[tests]]\n  # REQUIRED - General\n  name = "foo test" # example\n\n  # REQUIRED - Outputs\n  [[tests.outputs]]\n    # REQUIRED - General\n    extract_from = "foo" # example\n\n    # REQUIRED - Conditions\n    [[tests.outputs.conditions]]\n      # REQUIRED\n      type = "check_fields" # example\n\n      # OPTIONAL\n      "message.eq" = "this is the content to match against"\n      "host.exists" = true\n      "method.neq" = "POST"\n\n  # REQUIRED - Input\n  [tests.input]\n    # REQUIRED - General\n    type = "raw" # example, enum\n    insert_at = "foo" # example\n\n    # OPTIONAL - General\n    value = "some message contents" # example, no default, relevant when type = "raw"\n\n    # OPTIONAL - Log fields\n    [tests.input.log_fields]\n      message = "some message contents" # example\n      host = "myhost" # example\n\n    # OPTIONAL - Metric\n    [tests.input.metric]\n      # REQUIRED - General\n      type = "counter" # example, enum\n      name = "duration_total" # example\n      timestamp = "2019-11-01T21:15:47.443232Z" # example\n      val = 10.2 # example\n\n      # OPTIONAL - General\n      direction = "plus" # example, no default, enum\n      sample_rate = 1 # example, no default\n\n      # OPTIONAL - Tags\n      [tests.input.metric.tags]\n        host = "foohost" # example\n        region = "us-east-1" # example\n')))),Object(i.b)("p",null,"For more information about unit tests check out ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/guides/unit-testing/"}),"this guide"),"."),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)(c.a,{filters:!0,mdxType:"Fields"},Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:[],name:"input",nullable:!1,path:null,relevantWhen:null,required:!0,templateable:!1,type:"table",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"input"},"input"),Object(i.b)("p",null,"A table that defines a unit test input event."),Object(i.b)(c.a,{filters:!1,mdxType:"Fields"},Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["foo"],name:"insert_at",nullable:!1,path:"input",relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"insert_at"},"insert_at"),Object(i.b)("p",null,"The name of a transform, the input event will be delivered to this transform in order to begin the test.")),Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[],name:"log_fields",nullable:!0,path:"input",relevantWhen:{type:"log"},required:!1,templateable:!1,type:"table",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"log_fields"},"log_fields"),Object(i.b)("p",null,"Specifies the log fields when the input type is 'log'."),Object(i.b)(c.a,{filters:!1,mdxType:"Fields"},Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:[{message:"some message contents"},{host:"myhost"}],name:"`[field-name]`",nullable:!1,path:"input.log_fields",relevantWhen:null,required:!0,templateable:!1,type:"*",unit:null,mdxType:"Field"},Object(i.b)("h5",{id:"field-name"},Object(i.b)("inlineCode",{parentName:"h5"},"[field-name]")),Object(i.b)("p",null,"A key/value pair representing a field to be added to the input event.")))),Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[],name:"metric",nullable:!0,path:"input",relevantWhen:{type:"metric"},required:!1,templateable:!1,type:"table",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"metric"},"metric"),Object(i.b)("p",null,"Specifies the metric type when the input type is 'metric'."),Object(i.b)(c.a,{filters:!1,mdxType:"Fields"},Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:{plus:"Increase the gauge",minus:"Decrease the gauge"},examples:["plus","minus"],name:"direction",nullable:!0,path:"input.metric",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h5",{id:"direction"},"direction"),Object(i.b)("p",null,"The direction to increase or decrease the gauge value.")),Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["duration_total"],name:"name",nullable:!1,path:"input.metric",relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h5",{id:"name"},"name"),Object(i.b)("p",null,"The name of the metric. Defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"<field>_total")," for ",Object(i.b)("inlineCode",{parentName:"p"},"counter")," and ",Object(i.b)("inlineCode",{parentName:"p"},"<field>")," for ",Object(i.b)("inlineCode",{parentName:"p"},"gauge"),".")),Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[1],name:"sample_rate",nullable:!0,path:"input.metric",relevantWhen:null,required:!1,templateable:!1,type:"float",unit:null,mdxType:"Field"},Object(i.b)("h5",{id:"sample_rate"},"sample_rate"),Object(i.b)("p",null,"The bucket/distribution the metric is a part of.")),Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:[],name:"tags",nullable:!0,path:"input.metric",relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,mdxType:"Field"},Object(i.b)("h5",{id:"tags"},"tags"),Object(i.b)("p",null,"Key/value pairs representing ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/#tags"}),"metric tags"),"."),Object(i.b)(c.a,{filters:!1,mdxType:"Fields"},Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:[{host:"foohost"},{region:"us-east-1"}],name:"`[tag-name]`",nullable:!1,path:"input.metric.tags",relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h6",{id:"tag-name"},Object(i.b)("inlineCode",{parentName:"h6"},"[tag-name]")),Object(i.b)("p",null,"Key/value pairs representing ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/#tags"}),"metric tags"),".")))),Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["2019-11-01T21:15:47.443232Z"],name:"timestamp",nullable:!1,path:"input.metric",relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h5",{id:"timestamp"},"timestamp"),Object(i.b)("p",null,"Time metric was created/ingested.")),Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:{counter:"A [counter metric type][docs.data-model#counters].",gauge:"A [gauge metric type][docs.data-model#gauges].",histogram:"A [histogram metric type][docs.data-model#histograms].",set:"A [set metric type][docs.data-model#sets]."},examples:["counter"],name:"type",nullable:!1,path:"input.metric",relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h5",{id:"type"},"type"),Object(i.b)("p",null,"The metric type.")),Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:[10.2],name:"val",nullable:!1,path:"input.metric",relevantWhen:null,required:!0,templateable:!1,type:"float",unit:null,mdxType:"Field"},Object(i.b)("h5",{id:"val"},"val"),Object(i.b)("p",null,"Amount to increment/decrement or gauge.")))),Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:{raw:"Creates a log event where the message contents are specified in the field 'value'.",log:"Creates a log event where log fields are specified in the table 'log_fields'.",metric:"Creates a metric event, where its type and fields are specified in the table 'metric'."},examples:["raw","log","metric"],name:"type",nullable:!1,path:"input",relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"type-1"},"type"),Object(i.b)("p",null,"The event type.")),Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["some message contents"],name:"value",nullable:!0,path:"input",relevantWhen:{type:"raw"},required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"value"},"value"),Object(i.b)("p",null,"Specifies the log message field contents when the input type is 'raw'.")))),Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["foo test"],name:"name",nullable:!1,path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"name-1"},"name"),Object(i.b)("p",null,"A unique identifier for this test.")),Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:[],name:"outputs",nullable:!1,path:null,relevantWhen:null,required:!0,templateable:!1,type:"[table]",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"outputs"},"outputs"),Object(i.b)("p",null,"A table that defines a unit test expected output."),Object(i.b)(c.a,{filters:!1,mdxType:"Fields"},Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:[],name:"conditions",nullable:!1,path:"outputs",relevantWhen:null,required:!0,templateable:!1,type:"[table]",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"conditions"},"conditions"),Object(i.b)("p",null,"A table that defines a collection of conditions to check against the output of a transform. A test is considered to have passed when each condition has resolved true for one or more events extracted from the target transform."),Object(i.b)(c.a,{filters:!1,mdxType:"Fields"},Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:[{"message.eq":"this is the content to match against"}],name:"`<field_name>`.eq",nullable:!0,path:"outputs.conditions",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h5",{id:"field_nameeq"},Object(i.b)("inlineCode",{parentName:"h5"},"<field_name>"),".eq"),Object(i.b)("p",null,"Check whether a fields contents exactly matches the value specified.")),Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:[{"host.exists":!0}],name:"`<field_name>`.exists",nullable:!0,path:"outputs.conditions",relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,mdxType:"Field"},Object(i.b)("h5",{id:"field_nameexists"},Object(i.b)("inlineCode",{parentName:"h5"},"<field_name>"),".exists"),Object(i.b)("p",null,"Check whether a field exists or does not exist, depending on the provided valuebeing ",Object(i.b)("inlineCode",{parentName:"p"},"true")," or ",Object(i.b)("inlineCode",{parentName:"p"},"false")," respectively.")),Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:[{"method.neq":"POST"}],name:"`<field_name>`.neq",nullable:!0,path:"outputs.conditions",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h5",{id:"field_nameneq"},Object(i.b)("inlineCode",{parentName:"h5"},"<field_name>"),".neq"),Object(i.b)("p",null,"Check whether a fields contents does not match the value specified.")),Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["check_fields"],name:"type",nullable:!1,path:"outputs.conditions",relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h5",{id:"type-2"},"type"),Object(i.b)("p",null,"The type of the condition to execute. Currently only the ",Object(i.b)("inlineCode",{parentName:"p"},"check_fields")," type is available.")))),Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["foo"],name:"extract_from",nullable:!1,path:"outputs",relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"extract_from"},"extract_from"),Object(i.b)("p",null,"The name of a transform, at the end of the test events extracted from this transform will be checked against a table of conditions."))))))}f.isMDXComponent=!0},218:function(e,t,a){"use strict";var n=a(0),l=a.n(n);a(91);t.a=function({fileName:e,links:t}){let a=[];for(var n in t)a.push(l.a.createElement("a",{href:n.href},n.text||"Learn more&hellip;"));return l.a.createElement("div",{className:"code-header"},a.length>0&&l.a.createElement("span",{className:"code-header--links"},a),e)}},219:function(e,t,a){"use strict";(function(e){var n=a(1),l=a(0),i=a.n(l),s=a(246),u=a(237),r=a.n(u),c=a(230),o=a(211),m=a.n(o),p=a(244),d=a.n(p),b=a(238),h=a.n(b),f=a(214),g=a(86),O=a.n(g),y=a(217);(void 0!==e?e:window).Prism=c.a,a(239),a(240),a(241),a(242),a(243);const v=/{([\d,-]+)}/;t.a=({children:e,className:t,metastring:a})=>{const{siteConfig:{themeConfig:{prism:u={}}}}=Object(f.a)(),[c,o]=Object(l.useState)(!1),p=Object(l.useRef)(null),b=Object(l.useRef)(null),[g]=Object(y.a)();let j=[];if(a&&v.test(a)){const e=a.match(v)[1];j=h.a.parse(e).filter(e=>e>0)}Object(l.useEffect)(()=>{let e;return b.current&&(e=new r.a(b.current,{target:()=>p.current})),()=>{e&&e.destroy()}},[b.current,p.current]);let x=t&&t.replace(/language-/,"");!x&&u.defaultLanguage&&(x=u.defaultLanguage);const E=()=>{window.getSelection().empty(),o(!0),setTimeout(()=>o(!1),2e3)};let T="dark"==g?u.darkTheme:u.theme;return i.a.createElement(s.a,Object(n.a)({},s.b,{theme:T||d.a,code:e.trim(),language:x}),({className:e,style:t,tokens:a,getLineProps:l,getTokenProps:s})=>i.a.createElement("div",{className:O.a.codeBlockWrapper},i.a.createElement("pre",{ref:p,className:m()(e,O.a.codeBlock),style:t},a.map((e,t)=>{const a=l({line:e,key:t});return j.includes(t+1)&&(a.className=`${a.className} docusaurus-highlight-code-line`),i.a.createElement("div",Object(n.a)({key:t},a),e.map((e,t)=>i.a.createElement("span",Object(n.a)({key:t},s({token:e,key:t})))))})),i.a.createElement("button",{ref:b,type:"button","aria-label":"Copy code to clipboard",className:O.a.copyButton,onClick:E},c?"Copied":"Copy")))}}).call(this,a(48))},231:function(e,t,a){"use strict";var n=a(1),l=a(0),i=a.n(l),s=a(262),u=a(211),r=a.n(u),c=a(263),o=a.n(c);function m({block:e,centered:t,className:a,style:n,values:l,selectedValue:s,setSelectedValue:u}){return i.a.createElement("div",{className:t?"tabs--centered":""},i.a.createElement("ul",{className:r()("tabs",a,{"tabs--block":e}),style:n},l.map(({value:e,label:t})=>i.a.createElement("li",{className:r()("tab-item",{"tab-item--active":s===e}),key:e,onClick:()=>u(e)},t))))}function p({selectedValue:e,setSelectedValue:t,values:a}){return i.a.createElement(s.a,{className:"react-select-container",classNamePrefix:"react-select",options:a,isClearable:!1,placeholder:"Select a version...",value:a.find(t=>t.value==e),onChange:e=>t(e?e.value:null)})}t.a=function(e){const{block:t,centered:a,children:s,defaultValue:u,select:r,style:c,values:d,urlKey:b}=e,[h,f]=Object(l.useState)(u);return Object(l.useEffect)(()=>{if("undefined"!=typeof window&&window.location&&b){let e=o.a.parse(window.location.search);e[b]&&f(e[b])}},[]),i.a.createElement("div",null,d.length>1&&(r?i.a.createElement(p,Object(n.a)({selectedValue:h,setSelectedValue:f},e)):i.a.createElement(m,Object(n.a)({selectedValue:h,setSelectedValue:f},e))),i.a.createElement("div",{className:"margin-vert--md"},l.Children.toArray(s).filter(e=>e.props.value===h)[0]))}},232:function(e,t,a){"use strict";var n=a(0),l=a.n(n);a(92);t.a=function({children:e,filters:t}){const[a,i]=Object(n.useState)(!1),[s,u]=Object(n.useState)(!1),[r,c]=Object(n.useState)(null);let o=Array.isArray(e)?e:[e],m=o.some(e=>e.props.common),p=o.some(e=>e.props.required),d=o;return a&&(d=d.filter(e=>e.props.common)),s&&(d=d.filter(e=>e.props.required)),r&&(d=d.filter(e=>e.props.name.toLowerCase().includes(r.toLowerCase()))),l.a.createElement("div",{className:"fields"},o.length>1&&!1!==t?l.a.createElement("div",{className:"filters"},l.a.createElement("span",{className:"result-count"},d.length," items"),l.a.createElement("div",{className:" search"},l.a.createElement("input",{type:"text",onChange:e=>c(e.currentTarget.value),placeholder:"\ud83d\udd0d Search..."})),l.a.createElement("div",{className:"checkboxes"},m&&l.a.createElement("label",{title:"Only show popular/common results"},l.a.createElement("input",{type:"checkbox",onChange:e=>i(e.currentTarget.checked),checked:a}),"common only"),p&&l.a.createElement("label",{title:"Only show required results"},l.a.createElement("input",{type:"checkbox",onChange:e=>u(e.currentTarget.checked),checked:s}),"required only"))):null,l.a.createElement("div",{className:"section-list"},!Array.isArray(d)||d.length>0?d:l.a.createElement("div",{className:"empty"},l.a.createElement("div",{className:"icon"},"\u2639"),l.a.createElement("div",null,"No fields found"))))}},233:function(e,t,a){"use strict";a(228);var n=a(0),l=a.n(n),i=a(211),s=a.n(i),u=(a(234),a(218)),r=a(219);function c(e){return JSON.stringify(e)}function o(e){return e.includes(".")?'"'+e+'"':e}function m(e,t){return(a=t)&&a.constructor===Object?"name"in t&&"value"in t?`${o(t.name)} = ${c(t.value)}`:`${o(Object.keys(t)[0])} = ${c(Object.values(t)[0])}`:e?`${e} = ${c(t)}`:`${c(t)}`;var a}function p({values:e}){let t=[];if(Array.isArray(e))for(var a in e){let n=e[a];t.push(l.a.createElement("code",{key:n},c(n))),t.push(" ")}else for(var n in e)t.push(l.a.createElement("code",{key:n,title:e[n]},c(n))),t.push(" ");return t}function d({name:e,path:t,value:a}){return l.a.createElement("code",null,m(null,a))}function b({name:e,path:t,values:a}){let n="";return a.forEach((function(t){n+=m(e,t)+"\n"})),t&&(n=`[${t}]\n${n}`),l.a.createElement("div",null,l.a.createElement(u.a,{fileName:"vector.toml"}),l.a.createElement(r.a,{className:"language-toml"},n))}function h({value:e}){let t=Object.keys(e)[0],a=Object.values(e)[0];return l.a.createElement("span",null,l.a.createElement("code",null,l.a.createElement("a",{href:`#${t}`},t))," = ",l.a.createElement("code",null,c(a)))}function f({defaultValue:e,enumValues:t,examples:a,name:i,path:s,relevantWhen:u}){const[r,c]=Object(n.useState)(!1);return e||t||a&&a.length>0?l.a.createElement("div",{className:"info"},void 0!==e?e?l.a.createElement("div",null,"Default: ",l.a.createElement(d,{name:i,path:s,value:e})):l.a.createElement("div",null,"No default"):null,t?l.a.createElement("div",null,"Enum, must be one of: ",l.a.createElement(p,{values:t})):null,u?l.a.createElement("div",null,"Only relevant when: ",l.a.createElement(h,{value:u})):null,l.a.createElement("div",null,l.a.createElement("div",{className:"show-more",onClick:()=>c(!r)},r?"Hide examples":"View examples"),r&&l.a.createElement("div",{className:"examples"},l.a.createElement(b,{name:i,path:s,values:a})))):null}t.a=function({children:e,common:t,defaultValue:a,enumValues:i,examples:u,name:r,path:c,relevantWhen:o,templateable:m,type:p,unit:d,required:b}){const[h,g]=Object(n.useState)(!1);let O=e;return h&&(O=O.filter(e=>"p"!=e.props.originalType)),l.a.createElement("div",{className:s()("field","section",b?"field-required":"",h?"field-collapsed":""),required:b},l.a.createElement("div",{className:"badges"},t&&l.a.createElement("span",{className:"badge badge--primary",title:"This is a popular that we recommend for getting started"},"common"),m&&l.a.createElement("span",{className:"badge badge--primary",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),l.a.createElement("span",{className:"badge badge--secondary"},p),i&&Object.keys(i).length>0&&l.a.createElement("span",{className:"badge badge--secondary",title:"This option is an enumation and only allows specific values"},"enum"),d&&l.a.createElement("span",{className:"badge badge--secondary"},d),b?l.a.createElement("span",{className:"badge badge--danger"},"required"):l.a.createElement("span",{className:"badge badge--secondary"},"optional")),O,!h&&l.a.createElement(f,{defaultValue:a,enumValues:i,examples:u,name:r,path:c,relevantWhen:o}))}}}]);