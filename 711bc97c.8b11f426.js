(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{171:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return u})),t.d(a,"metadata",(function(){return o})),t.d(a,"rightToc",(function(){return d})),t.d(a,"default",(function(){return b}));var n=t(1),l=t(6),i=(t(0),t(242)),r=t(244),c=t(245),s=t(246),u={description:"The Vector `aws_ec2_metadata` transform accepts `log` events and allows you to enrich logs with AWS EC2 instance metadata.",event_types:["log"],issues_url:"https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22transform%3A+aws_ec2_metadata%22",sidebar_label:'aws_ec2_metadata|["log"]',source_url:"https://github.com/timberio/vector/tree/master/src/transforms/aws_ec2_metadata.rs",status:"prod-ready",title:"AWS EC2 Metadata Transform"},o={id:"reference/transforms/aws_ec2_metadata",title:"AWS EC2 Metadata Transform",description:"The Vector `aws_ec2_metadata` transform accepts `log` events and allows you to enrich logs with AWS EC2 instance metadata.",source:"@site/docs/reference/transforms/aws_ec2_metadata.md",permalink:"/docs/reference/transforms/aws_ec2_metadata",editUrl:"https://github.com/brainrexapi/edit/master/docs/reference/transforms/aws_ec2_metadata.md",sidebar_label:'aws_ec2_metadata|["log"]',sidebar:"docs",previous:{title:"ANSI Stripper Transform",permalink:"/docs/reference/transforms/ansi_stripper"},next:{title:"Coercer Transform",permalink:"/docs/reference/transforms/coercer"}},d=[{value:"Configuration",id:"configuration",children:[]},{value:"Options",id:"options",children:[{value:"fields",id:"fields",children:[]},{value:"host",id:"host",children:[]},{value:"namespace",id:"namespace",children:[]},{value:"refresh_interval_secs",id:"refresh_interval_secs",children:[]}]},{value:"Output",id:"output",children:[{value:"ami-id",id:"ami-id",children:[]},{value:"availability-zone",id:"availability-zone",children:[]},{value:"instance-id",id:"instance-id",children:[]},{value:"local-hostname",id:"local-hostname",children:[]},{value:"local-ipv4",id:"local-ipv4",children:[]},{value:"public-hostname",id:"public-hostname",children:[]},{value:"public-ipv4",id:"public-ipv4",children:[]},{value:"region",id:"region",children:[]},{value:"role-name",id:"role-name",children:[]},{value:"subnet-id",id:"subnet-id",children:[]},{value:"vpc-id",id:"vpc-id",children:[]}]},{value:"How It Works",id:"how-it-works",children:[{value:"Environment Variables",id:"environment-variables",children:[]}]}],m={rightToc:d},p="wrapper";function b(e){var a=e.components,t=Object(l.a)(e,["components"]);return Object(i.b)(p,Object(n.a)({},m,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Vector ",Object(i.b)("inlineCode",{parentName:"p"},"aws_ec2_metadata")," transform accepts ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(i.b)("inlineCode",{parentName:"a"},"log"))," events and allows you to enrich logs with AWS EC2 instance metadata."),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)(r.a,{fileName:"vector.toml",learnMoreUrl:"/docs/setup/configuration/",mdxType:"CodeHeader"}),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[transforms.my_transform_id]\n  # REQUIRED\n  type = "aws_ec2_metadata" # must be: "aws_ec2_metadata"\n  inputs = ["my-source-id"] # example\n\n  # OPTIONAL\n  fields = ["instance-id", "local-hostname", "local-ipv4", "public-hostname", "public-ipv4", "ami-id", "availability-zone", "vpc-id", "subnet-id", "region"] # default\n  host = "http://169.254.169.254" # default\n  namespace = "" # default\n  refresh_interval_secs = 10 # default\n')),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)(c.a,{filters:!0,mdxType:"Fields"},Object(i.b)(s.a,{common:!0,defaultValue:["instance-id","local-hostname","local-ipv4","public-hostname","public-ipv4","ami-id","availability-zone","vpc-id","subnet-id","region"],enumValues:null,examples:[["instance-id","local-hostname","local-ipv4","public-hostname","public-ipv4","ami-id","availability-zone","vpc-id","subnet-id","region"]],name:"fields",path:null,relevantWhen:null,required:!1,templateable:!1,type:"[string]",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"fields"},"fields"),Object(i.b)("p",null,"A list of fields to include in each event.")),Object(i.b)(s.a,{common:!0,defaultValue:"http://169.254.169.254",enumValues:null,examples:["http://169.254.169.254"],name:"host",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"host"},"host"),Object(i.b)("p",null,"Override the default EC2 Metadata host.")),Object(i.b)(s.a,{common:!0,defaultValue:"",enumValues:null,examples:[""],name:"namespace",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"namespace"},"namespace"),Object(i.b)("p",null,"Prepend a namespace to each field's key.")),Object(i.b)(s.a,{common:!0,defaultValue:10,enumValues:null,examples:[10],name:"refresh_interval_secs",path:null,relevantWhen:null,required:!1,templateable:!1,type:"int",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"refresh_interval_secs"},"refresh_interval_secs"),Object(i.b)("p",null,"The interval in seconds at which the EC2 Metadata api will be called."))),Object(i.b)("h2",{id:"output"},"Output"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"aws_ec2_metadata")," transform accepts ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(i.b)("inlineCode",{parentName:"a"},"log"))," events and allows you to enrich logs with AWS EC2 instance metadata.\nFor example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "ami-id": "ami-00068cd7555f543d5",\n  "availability-zone": "54.234.246.107",\n  "instance-id": "i-096fba6d03d36d262",\n  "local-hostname": "ip-172-31-93-227.ec2.internal",\n  "local-ipv4": "172.31.93.227",\n  "public-hostname": "ec2-54-234-246-107.compute-1.amazonaws.com",\n  "public-ipv4": "54.234.246.107",\n  "region": "us-east-1",\n  "role-name": "some_iam_role",\n  "subnet-id": "subnet-9d6713b9",\n  "vpc-id": "vpc-a51da4dc"\n}\n')),Object(i.b)("p",null,"More detail on the output schema is below."),Object(i.b)(c.a,{filters:!0,mdxType:"Fields"},Object(i.b)(s.a,{defaultValue:null,enumValues:null,examples:["ami-00068cd7555f543d5"],name:"ami-id",path:null,required:!1,type:"string",mdxType:"Field"},Object(i.b)("h3",{id:"ami-id"},"ami-id"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"ami-id")," that the current EC2 instance is using.")),Object(i.b)(s.a,{defaultValue:null,enumValues:null,examples:["54.234.246.107"],name:"availability-zone",path:null,required:!1,type:"string",mdxType:"Field"},Object(i.b)("h3",{id:"availability-zone"},"availability-zone"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"availability-zone")," that the current EC2 instance is running in.")),Object(i.b)(s.a,{defaultValue:null,enumValues:null,examples:["i-096fba6d03d36d262"],name:"instance-id",path:null,required:!1,type:"string",mdxType:"Field"},Object(i.b)("h3",{id:"instance-id"},"instance-id"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"instance-id")," of the current EC2 instance.")),Object(i.b)(s.a,{defaultValue:null,enumValues:null,examples:["ip-172-31-93-227.ec2.internal"],name:"local-hostname",path:null,required:!1,type:"string",mdxType:"Field"},Object(i.b)("h3",{id:"local-hostname"},"local-hostname"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"local-hostname")," of the current EC2 instance.")),Object(i.b)(s.a,{defaultValue:null,enumValues:null,examples:["172.31.93.227"],name:"local-ipv4",path:null,required:!1,type:"string",mdxType:"Field"},Object(i.b)("h3",{id:"local-ipv4"},"local-ipv4"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"local-ipv4")," of the current EC2 instance.")),Object(i.b)(s.a,{defaultValue:null,enumValues:null,examples:["ec2-54-234-246-107.compute-1.amazonaws.com"],name:"public-hostname",path:null,required:!1,type:"string",mdxType:"Field"},Object(i.b)("h3",{id:"public-hostname"},"public-hostname"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"public-hostname")," of the current EC2 instance.")),Object(i.b)(s.a,{defaultValue:null,enumValues:null,examples:["54.234.246.107"],name:"public-ipv4",path:null,required:!1,type:"string",mdxType:"Field"},Object(i.b)("h3",{id:"public-ipv4"},"public-ipv4"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"public-ipv4")," of the current EC2 instance.")),Object(i.b)(s.a,{defaultValue:null,enumValues:null,examples:["us-east-1"],name:"region",path:null,required:!1,type:"string",mdxType:"Field"},Object(i.b)("h3",{id:"region"},"region"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#region"}),Object(i.b)("inlineCode",{parentName:"a"},"region"))," that the current EC2 instance is running in.")),Object(i.b)(s.a,{defaultValue:null,enumValues:null,examples:["some_iam_role"],name:"role-name",path:null,required:!1,type:"string",mdxType:"Field"},Object(i.b)("h3",{id:"role-name"},"role-name"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"role-name")," that the current EC2 instance is using.")),Object(i.b)(s.a,{defaultValue:null,enumValues:null,examples:["subnet-9d6713b9"],name:"subnet-id",path:null,required:!1,type:"string",mdxType:"Field"},Object(i.b)("h3",{id:"subnet-id"},"subnet-id"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"subnet-id")," of the current EC2 instance's default network interface.")),Object(i.b)(s.a,{defaultValue:null,enumValues:null,examples:["vpc-a51da4dc"],name:"vpc-id",path:null,required:!1,type:"string",mdxType:"Field"},Object(i.b)("h3",{id:"vpc-id"},"vpc-id"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"vpc-id")," of the current EC2 instance's default network interface."))),Object(i.b)("h2",{id:"how-it-works"},"How It Works"),Object(i.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(i.b)("p",null,"Environment variables are supported through all of Vector's configuration.\nSimply add ",Object(i.b)("inlineCode",{parentName:"p"},"${MY_ENV_VAR}")," in your Vector configuration file and the variable\nwill be replaced before being evaluated."),Object(i.b)("p",null,"You can learn more in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/configuration/#environment-variables"}),"Environment Variables"),"\nsection."))}b.isMDXComponent=!0},245:function(e,a,t){"use strict";var n=t(0),l=t.n(n);t(85);a.a=function({children:e,filters:a}){const[t,i]=Object(n.useState)(!1),[r,c]=Object(n.useState)(!1),[s,u]=Object(n.useState)(null);let o=Array.isArray(e)?e:[e],d=o.some(e=>e.props.common),m=o.some(e=>e.props.required),p=o;return t&&(p=p.filter(e=>e.props.common)),r&&(p=p.filter(e=>e.props.required)),s&&(p=p.filter(e=>e.props.name.toLowerCase().includes(s.toLowerCase()))),l.a.createElement("div",{className:"fields"},o.length>1&&!1!==a?l.a.createElement("div",{className:"filters"},l.a.createElement("span",{className:"result-count"},p.length," items"),l.a.createElement("div",{className:" search"},l.a.createElement("input",{type:"text",onChange:e=>u(e.currentTarget.value),placeholder:"\ud83d\udd0d Search..."})),l.a.createElement("div",{className:"checkboxes"},d&&l.a.createElement("label",{title:"Only show popular/common results"},l.a.createElement("input",{type:"checkbox",onChange:e=>i(e.currentTarget.checked),checked:t}),"common only"),m&&l.a.createElement("label",{title:"Only show required results"},l.a.createElement("input",{type:"checkbox",onChange:e=>c(e.currentTarget.checked),checked:r}),"required only"))):null,l.a.createElement("div",{className:"section-list"},!Array.isArray(p)||p.length>0?p:l.a.createElement("div",{className:"empty"},l.a.createElement("div",{className:"icon"},"\u2639"),l.a.createElement("div",null,"No fields found"))))}},246:function(e,a,t){"use strict";t(12);var n=t(0),l=t.n(n),i=t(241),r=t.n(i),c=(t(242),t(244)),s=t(251);function u(e){return JSON.stringify(e)}function o(e){return e.includes(".")?'"'+e+'"':e}function d(e,a){return(t=a)&&t.constructor===Object?"name"in a&&"value"in a?`${o(a.name)} = ${u(a.value)}`:`${o(Object.keys(a)[0])} = ${u(Object.values(a)[0])}`:e?`${e} = ${u(a)}`:`${u(a)}`;var t}function m({values:e}){let a=[];if(Array.isArray(e))for(var t in e){let n=e[t];a.push(l.a.createElement("code",{key:n},u(n))),a.push(" ")}else for(var n in e)a.push(l.a.createElement("code",{key:n,title:e[n]},u(n))),a.push(" ");return a}function p({name:e,path:a,value:t}){return l.a.createElement("code",null,d(null,t))}function b({name:e,path:a,values:t}){let n="";return t.forEach((function(a){n+=d(e,a)+"\n"})),a&&(n=`[${a}]\n${n}`),l.a.createElement("div",null,l.a.createElement(c.a,{fileName:"vector.toml"}),l.a.createElement(s.a,{className:"language-toml"},n))}function h({value:e}){let a=Object.keys(e)[0],t=Object.values(e)[0];return l.a.createElement("span",null,l.a.createElement("code",null,l.a.createElement("a",{href:`#${a}`},a))," = ",l.a.createElement("code",null,u(t)))}function v({defaultValue:e,enumValues:a,examples:t,name:i,path:r,relevantWhen:c}){const[s,u]=Object(n.useState)(!1);return e||a||t&&t.length>0?l.a.createElement("div",{className:"info"},void 0!==e?e?l.a.createElement("div",null,"Default: ",l.a.createElement(p,{name:i,path:r,value:e})):l.a.createElement("div",null,"No default"):null,a?l.a.createElement("div",null,"Enum, must be one of: ",l.a.createElement(m,{values:a})):null,c?l.a.createElement("div",null,"Only relevant when: ",l.a.createElement(h,{value:c})):null,l.a.createElement("div",null,l.a.createElement("div",{className:"show-more",onClick:()=>u(!s)},s?"Hide examples":"View examples"),s&&l.a.createElement("div",{className:"examples"},l.a.createElement(b,{name:i,path:r,values:t})))):null}a.a=function({children:e,common:a,defaultValue:t,enumValues:i,examples:c,name:s,path:u,relevantWhen:o,templateable:d,type:m,unit:p,required:b}){const[h,f]=Object(n.useState)(!1);let O=e;return h&&(O=O.filter(e=>"p"!=e.props.originalType)),l.a.createElement("div",{className:r()("field","section",b?"field-required":"",h?"field-collapsed":""),required:b},l.a.createElement("div",{className:"badges"},a&&l.a.createElement("span",{className:"badge badge--primary",title:"This is a popular that we recommend for getting started"},"common"),d&&l.a.createElement("span",{className:"badge badge--primary",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),l.a.createElement("span",{className:"badge badge--secondary"},m),i&&Object.keys(i).length>0&&l.a.createElement("span",{className:"badge badge--secondary",title:"This option is an enumation and only allows specific values"},"enum"),p&&l.a.createElement("span",{className:"badge badge--secondary"},p),b?l.a.createElement("span",{className:"badge badge--danger"},"required"):l.a.createElement("span",{className:"badge badge--secondary"},"optional")),O,!h&&l.a.createElement(v,{defaultValue:t,enumValues:i,examples:c,name:s,path:u,relevantWhen:o}))}}}]);