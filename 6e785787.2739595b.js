(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{168:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return d})),t.d(a,"rightToc",(function(){return m})),t.d(a,"default",(function(){return b}));var n=t(1),l=t(6),r=(t(0),t(242)),s=t(244),i=t(245),o=t(246),c={description:"The Vector `add_fields` transform accepts `log` events and allows you to add one or more log fields.",event_types:["log"],issues_url:"https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22transform%3A+add_fields%22",sidebar_label:'add_fields|["log"]',source_url:"https://github.com/timberio/vector/tree/master/src/transforms/add_fields.rs",status:"prod-ready",title:"Add Fields Transform"},d={id:"reference/transforms/add_fields",title:"Add Fields Transform",description:"The Vector `add_fields` transform accepts `log` events and allows you to add one or more log fields.",source:"@site/docs/reference/transforms/add_fields.md",permalink:"/docs/reference/transforms/add_fields",editUrl:"https://github.com/brainrexapi/edit/master/docs/reference/transforms/add_fields.md",sidebar_label:'add_fields|["log"]',sidebar:"docs",previous:{title:"Transforms",permalink:"/docs/reference/transforms"},next:{title:"Add Tags Transform",permalink:"/docs/reference/transforms/add_tags"}},m=[{value:"Configuration",id:"configuration",children:[]},{value:"Options",id:"options",children:[{value:"fields",id:"fields",children:[]}]},{value:"Output",id:"output",children:[]},{value:"How It Works",id:"how-it-works",children:[{value:"Arrays",id:"arrays",children:[]},{value:"Complex Transforming",id:"complex-transforming",children:[]},{value:"Environment Variables",id:"environment-variables",children:[]},{value:"Key Conflicts",id:"key-conflicts",children:[]},{value:"Nested Fields",id:"nested-fields",children:[]},{value:"Removing Fields",id:"removing-fields",children:[]},{value:"Special Characters",id:"special-characters",children:[]},{value:"Types",id:"types",children:[]}]}],p={rightToc:m},u="wrapper";function b(e){var a=e.components,t=Object(l.a)(e,["components"]);return Object(r.b)(u,Object(n.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The Vector ",Object(r.b)("inlineCode",{parentName:"p"},"add_fields")," transform accepts ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(r.b)("inlineCode",{parentName:"a"},"log"))," events and allows you to add one or more log fields."),Object(r.b)("h2",{id:"configuration"},"Configuration"),Object(r.b)(s.a,{fileName:"vector.toml",learnMoreUrl:"/docs/setup/configuration/",mdxType:"CodeHeader"}),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[transforms.my_transform_id]\n  # REQUIRED - General\n  type = "add_fields" # must be: "add_fields"\n  inputs = ["my-source-id"] # example\n\n  # REQUIRED - Fields\n  [transforms.my_transform_id.fields]\n    string_field = "string value" # example\n    env_var_field = "${ENV_VAR}" # example\n    int_field = 1 # example\n    float_field = 1.2 # example\n    bool_field = true # example\n    timestamp_field = 1979-05-27T00:32:00Z # example\n    parent = {child = "child_value"} # example\n    list_field = ["first", "second", "third"] # example\n')),Object(r.b)("h2",{id:"options"},"Options"),Object(r.b)(i.a,{filters:!0,mdxType:"Fields"},Object(r.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:[],name:"fields",path:null,relevantWhen:null,required:!0,templateable:!1,type:"table",unit:null,mdxType:"Field"},Object(r.b)("h3",{id:"fields"},"fields"),Object(r.b)("p",null,"A table of key/value pairs representing the keys to be added to the event."),Object(r.b)(i.a,{filters:!1,mdxType:"Fields"},Object(r.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:[{string_field:"string value"},{env_var_field:"${ENV_VAR}"},{int_field:1},{float_field:1.2},{bool_field:!0},{timestamp_field:"1979-05-27 00:32:00 -0700"},{parent:{child:"child_value"}},{list_field:["first","second","third"]}],name:"`[field-name]`",path:"fields",relevantWhen:null,required:!0,templateable:!1,type:"*",unit:null,mdxType:"Field"},Object(r.b)("h4",{id:"field-name"},Object(r.b)("inlineCode",{parentName:"h4"},"[field-name]")),Object(r.b)("p",null,"The name of the field to add. Accepts all ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/configuration/#types"}),"supported types"),". Use ",Object(r.b)("inlineCode",{parentName:"p"},".")," for adding nested fields."))))),Object(r.b)("h2",{id:"output"},"Output"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"add_fields")," transform accepts ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(r.b)("inlineCode",{parentName:"a"},"log"))," events and allows you to add one or more log fields.\nFor example:"),Object(r.b)("p",null,"Given the following configuration:"),Object(r.b)(s.a,{fileName:"vector.toml",mdxType:"CodeHeader"}),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[transforms.my_transform]\n  type = "add_fields"\n  inputs = [...]\n\n  [transforms.my_transform.fields]\n    field1 = "string value"\n    field2 = 1\n    field3 = 2.0\n    field4 = true\n    field5 = 2019-05-27T07:32:00Z\n    field6 = ["item 1", "item 2"]\n    field7.nested = "nested value",\n    field8 = "#{HOSTNAME}"\n')),Object(r.b)("p",null,"A ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(r.b)("inlineCode",{parentName:"a"},"log")," event")," will be output with the following structure:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  // ... existing fields\n  "field1": "string value",\n  "field2": 1,\n  "field3": 2.0,\n  "field4": true,\n  "field5": <timestamp:2019-05-27T07:32:00Z>,\n  "field6.0": "item1",\n  "field6.1": "item2",\n  "field7.nested": "nested value",\n  "field8": "my.hostname.com"\n}\n')),Object(r.b)("p",null,"While unrealistic, this example demonstrates the various accepted\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/configuration/#value-types"}),"types")," and how they're repsented in Vector's\ninternal ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),"log structure"),"."),Object(r.b)("h2",{id:"how-it-works"},"How It Works"),Object(r.b)("h3",{id:"arrays"},"Arrays"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"add_fields")," transform will support ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/toml-lang/toml#array"}),"TOML arrays"),". Keep in\nmind that the values must be simple type (not tables), and each value must the\nsame type. You cannot mix types:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[transforms.<transform-id>]\n  # ...\n\n  [transforms.<transform-id>.fields]\n    my_array = ["first", "second", "third"]\n')),Object(r.b)("p",null,"Results in:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "my_array.0": "first",\n  "my_array.1": "second",\n  "my_array.2": "third"\n}\n')),Object(r.b)("p",null,"Learn more about how ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(r.b)("inlineCode",{parentName:"a"},"log")," events")," are structured."),Object(r.b)("h3",{id:"complex-transforming"},"Complex Transforming"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"add_fields")," transform is designed for simple key additions. If you need\nmore complex transforming then we recommend using a more versatile transform\nlike the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/transforms/lua/"}),Object(r.b)("inlineCode",{parentName:"a"},"lua")," transform"),"."),Object(r.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(r.b)("p",null,"Environment variables are supported through all of Vector's configuration.\nSimply add ",Object(r.b)("inlineCode",{parentName:"p"},"${MY_ENV_VAR}")," in your Vector configuration file and the variable\nwill be replaced before being evaluated."),Object(r.b)("p",null,"You can learn more in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/configuration/#environment-variables"}),"Environment Variables"),"\nsection."),Object(r.b)("h3",{id:"key-conflicts"},"Key Conflicts"),Object(r.b)("p",null,"Keys specified in this transform will replace existing keys."),Object(r.b)("h3",{id:"nested-fields"},"Nested Fields"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"add_fields")," transform will support dotted keys or ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/toml-lang/toml#table"}),"TOML\ntables"),". We recommend the dotted key syntax since it is less\nverbose for this usecase:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'[transforms.<transform-id>]\n  # ...\n\n  [transforms.<transform-id>.fields]\n    parent.child.grandchild = "my_value"\n')),Object(r.b)("p",null,"Results in:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "parent.child.grandchild": "my_value"\n}\n')),Object(r.b)("p",null,"Learn more about how ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(r.b)("inlineCode",{parentName:"a"},"log")," events")," are structured."),Object(r.b)("h3",{id:"removing-fields"},"Removing Fields"),Object(r.b)("p",null,"See the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/transforms/remove_fields/"}),Object(r.b)("inlineCode",{parentName:"a"},"remove_fields")," transform"),"."),Object(r.b)("h3",{id:"special-characters"},"Special Characters"),Object(r.b)("p",null,"Aside from the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/log/#special-characters"}),"special characters"),"\nlisted in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/"}),"Data Model")," doc, Vector does not restrict the\ncharacters allowed in keys. You can wrap key names in ",Object(r.b)("inlineCode",{parentName:"p"},'" "')," quote to preserve\nspaces and use ",Object(r.b)("inlineCode",{parentName:"p"},"\\")," to escape quotes."),Object(r.b)("h3",{id:"types"},"Types"),Object(r.b)("p",null,"All supported ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/configuration/#value-types"}),"configuration value types")," are accepted.\nThis includes primitivate types (",Object(r.b)("inlineCode",{parentName:"p"},"string"),", ",Object(r.b)("inlineCode",{parentName:"p"},"int"),", ",Object(r.b)("inlineCode",{parentName:"p"},"float"),", ",Object(r.b)("inlineCode",{parentName:"p"},"boolean"),") and\nspecial types, such as ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#arrays"}),"arrays")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#nested-fields"}),"nested fields"),"."))}b.isMDXComponent=!0},245:function(e,a,t){"use strict";var n=t(0),l=t.n(n);t(85);a.a=function({children:e,filters:a}){const[t,r]=Object(n.useState)(!1),[s,i]=Object(n.useState)(!1),[o,c]=Object(n.useState)(null);let d=Array.isArray(e)?e:[e],m=d.some(e=>e.props.common),p=d.some(e=>e.props.required),u=d;return t&&(u=u.filter(e=>e.props.common)),s&&(u=u.filter(e=>e.props.required)),o&&(u=u.filter(e=>e.props.name.toLowerCase().includes(o.toLowerCase()))),l.a.createElement("div",{className:"fields"},d.length>1&&!1!==a?l.a.createElement("div",{className:"filters"},l.a.createElement("span",{className:"result-count"},u.length," items"),l.a.createElement("div",{className:" search"},l.a.createElement("input",{type:"text",onChange:e=>c(e.currentTarget.value),placeholder:"\ud83d\udd0d Search..."})),l.a.createElement("div",{className:"checkboxes"},m&&l.a.createElement("label",{title:"Only show popular/common results"},l.a.createElement("input",{type:"checkbox",onChange:e=>r(e.currentTarget.checked),checked:t}),"common only"),p&&l.a.createElement("label",{title:"Only show required results"},l.a.createElement("input",{type:"checkbox",onChange:e=>i(e.currentTarget.checked),checked:s}),"required only"))):null,l.a.createElement("div",{className:"section-list"},!Array.isArray(u)||u.length>0?u:l.a.createElement("div",{className:"empty"},l.a.createElement("div",{className:"icon"},"\u2639"),l.a.createElement("div",null,"No fields found"))))}},246:function(e,a,t){"use strict";t(12);var n=t(0),l=t.n(n),r=t(241),s=t.n(r),i=(t(242),t(244)),o=t(251);function c(e){return JSON.stringify(e)}function d(e){return e.includes(".")?'"'+e+'"':e}function m(e,a){return(t=a)&&t.constructor===Object?"name"in a&&"value"in a?`${d(a.name)} = ${c(a.value)}`:`${d(Object.keys(a)[0])} = ${c(Object.values(a)[0])}`:e?`${e} = ${c(a)}`:`${c(a)}`;var t}function p({values:e}){let a=[];if(Array.isArray(e))for(var t in e){let n=e[t];a.push(l.a.createElement("code",{key:n},c(n))),a.push(" ")}else for(var n in e)a.push(l.a.createElement("code",{key:n,title:e[n]},c(n))),a.push(" ");return a}function u({name:e,path:a,value:t}){return l.a.createElement("code",null,m(null,t))}function b({name:e,path:a,values:t}){let n="";return t.forEach((function(a){n+=m(e,a)+"\n"})),a&&(n=`[${a}]\n${n}`),l.a.createElement("div",null,l.a.createElement(i.a,{fileName:"vector.toml"}),l.a.createElement(o.a,{className:"language-toml"},n))}function f({value:e}){let a=Object.keys(e)[0],t=Object.values(e)[0];return l.a.createElement("span",null,l.a.createElement("code",null,l.a.createElement("a",{href:`#${a}`},a))," = ",l.a.createElement("code",null,c(t)))}function h({defaultValue:e,enumValues:a,examples:t,name:r,path:s,relevantWhen:i}){const[o,c]=Object(n.useState)(!1);return e||a||t&&t.length>0?l.a.createElement("div",{className:"info"},void 0!==e?e?l.a.createElement("div",null,"Default: ",l.a.createElement(u,{name:r,path:s,value:e})):l.a.createElement("div",null,"No default"):null,a?l.a.createElement("div",null,"Enum, must be one of: ",l.a.createElement(p,{values:a})):null,i?l.a.createElement("div",null,"Only relevant when: ",l.a.createElement(f,{value:i})):null,l.a.createElement("div",null,l.a.createElement("div",{className:"show-more",onClick:()=>c(!o)},o?"Hide examples":"View examples"),o&&l.a.createElement("div",{className:"examples"},l.a.createElement(b,{name:r,path:s,values:t})))):null}a.a=function({children:e,common:a,defaultValue:t,enumValues:r,examples:i,name:o,path:c,relevantWhen:d,templateable:m,type:p,unit:u,required:b}){const[f,O]=Object(n.useState)(!1);let j=e;return f&&(j=j.filter(e=>"p"!=e.props.originalType)),l.a.createElement("div",{className:s()("field","section",b?"field-required":"",f?"field-collapsed":""),required:b},l.a.createElement("div",{className:"badges"},a&&l.a.createElement("span",{className:"badge badge--primary",title:"This is a popular that we recommend for getting started"},"common"),m&&l.a.createElement("span",{className:"badge badge--primary",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),l.a.createElement("span",{className:"badge badge--secondary"},p),r&&Object.keys(r).length>0&&l.a.createElement("span",{className:"badge badge--secondary",title:"This option is an enumation and only allows specific values"},"enum"),u&&l.a.createElement("span",{className:"badge badge--secondary"},u),b?l.a.createElement("span",{className:"badge badge--danger"},"required"):l.a.createElement("span",{className:"badge badge--secondary"},"optional")),j,!f&&l.a.createElement(h,{defaultValue:t,enumValues:r,examples:i,name:o,path:c,relevantWhen:d}))}}}]);