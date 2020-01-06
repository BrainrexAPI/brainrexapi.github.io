(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{162:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return o})),t.d(a,"rightToc",(function(){return i})),t.d(a,"default",(function(){return d}));var n=t(1),r=t(6),c=(t(0),t(261)),s=t(329),l={title:"Install Vector On Amazon Linux",sidebar_label:"Amazon Linux",description:"Install Vector on Amazon Linux"},o={id:"setup/installation/operating-systems/amazon-linux",title:"Install Vector On Amazon Linux",description:"Install Vector on Amazon Linux",source:"@site/docs/setup/installation/operating-systems/amazon-linux.md",permalink:"/docs/setup/installation/operating-systems/amazon-linux",editUrl:"https://github.com/timberio/vector/edit/master/website/docs/setup/installation/operating-systems/amazon-linux.md",sidebar_label:"Amazon Linux",sidebar:"docs",previous:{title:"Install Vector On Your Operating System",permalink:"/docs/setup/installation/operating-systems"},next:{title:"Install Vector On CentOS",permalink:"/docs/setup/installation/operating-systems/centos"}},i=[],m={rightToc:i},u="wrapper";function d(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)(u,Object(n.a)({},m,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Vector can be installed on Amazon Linux through the following methods:"),Object(c.b)(s.a,{docker:!0,os:"Linux",packageManager:"RPM",mdxType:"InstallChoices"}))}d.isMDXComponent=!0},256:function(e,a,t){"use strict";var n=t(1),r=t(0),c=t.n(r),s=t(17);const l=/^\/(?!\/)/;a.a=function(e){const{to:a,href:t}=e,o=a||t,i=l.test(o),m=Object(r.useRef)(!1),u="undefined"!=typeof window&&"IntersectionObserver"in window;let d;return Object(r.useEffect)(()=>(!u&&i&&window.docusaurus.prefetch(o),()=>{u&&d&&d.disconnect()}),[o,u,i]),o&&i?c.a.createElement(s.b,Object(n.a)({},e,{onMouseEnter:()=>{m.current||(window.docusaurus.preload(o),m.current=!0)},innerRef:e=>{u&&e&&i&&((e,a)=>{d=new window.IntersectionObserver(t=>{t.forEach(t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(d.unobserve(e),d.disconnect(),a())})}),d.observe(e)})(e,()=>{window.docusaurus.prefetch(o)})},to:o})):c.a.createElement("a",Object(n.a)({},e,{href:o}))}},259:function(e,a,t){"use strict";var n=t(1),r=t(0),c=t.n(r),s=t(276),l=t(253),o=t.n(l),i=t(279),m=t.n(i);function u({block:e,centered:a,className:t,style:n,values:r,selectedValue:s,setSelectedValue:l}){return c.a.createElement("div",{className:a?"tabs--centered":""},c.a.createElement("ul",{className:o()("tabs",t,{"tabs--block":e}),style:n},r.map(({value:e,label:a})=>c.a.createElement("li",{className:o()("tab-item",{"tab-item--active":s===e}),key:e,onClick:()=>l(e)},a))))}function d({selectedValue:e,setSelectedValue:a,values:t}){return c.a.createElement(s.a,{className:"react-select-container",classNamePrefix:"react-select",options:t,isClearable:!1,placeholder:"Select a version...",value:t.find(a=>a.value==e),onChange:e=>a(e?e.value:null)})}a.a=function(e){const{block:a,centered:t,children:s,defaultValue:l,select:o,style:i,values:p,urlKey:f}=e,[b,h]=Object(r.useState)(l);return Object(r.useEffect)(()=>{if("undefined"!=typeof window&&window.location&&f){let e=m.a.parse(window.location.search);e[f]&&h(e[f])}},[]),c.a.createElement("div",null,p.length>1&&(o?c.a.createElement(d,Object(n.a)({selectedValue:b,setSelectedValue:h},e)):c.a.createElement(u,Object(n.a)({selectedValue:b,setSelectedValue:h},e))),c.a.createElement("div",{className:"margin-vert--md"},r.Children.toArray(s).filter(e=>e.props.value===b)[0]))}},260:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(e){return r.a.createElement("div",null,e.children)}},264:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(256),s=t(253),l=t.n(s);t(88);a.a=function({children:e,className:a,badge:t,icon:n,size:s,target:o,to:i}){let m=l()("jump-to",`jump-to--${s}`,a),u=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},r.a.createElement("div",{className:"jump-to--main"},t?r.a.createElement("span",{className:"badge badge--primary badge--right"},t):"",e),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:`feather icon-${n||"chevron-right"} arrow`}))));return o?r.a.createElement("a",{href:i,target:o,className:m},u):r.a.createElement(c.a,{to:i,className:m},u)}},329:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(264),s=t(259),l=t(260),o=t(254);function i(){const e=Object(o.a)(),{siteConfig:a={}}=e,{metadata:{installation:t}}=a.customFields;return t}function m({arch:e,docker:a,os:t,packageManager:n}){const{containers:s,downloads:l,package_managers:o}=i(),m=l.filter(a=>a.arch.toLowerCase()==e.toLowerCase()&&a.os.toLowerCase()==t.toLowerCase()&&"archive"==a.type)[0],u=s.find(e=>"docker"==e.id),d=u.archs.includes(e)&&u.oss.includes(t),p=n&&o.find(e=>e.name==n).archs.includes(e);return r.a.createElement("div",null,p&&r.a.createElement(c.a,{to:`/docs/setup/installation/package-managers/${n.toLowerCase()}/?arch=${e}`},r.a.createElement("i",{className:"feather icon-package"})," ",n," (",e,") ",r.a.createElement("span",{className:"badge badge--primary"},"recommended")),!p&&d&&r.a.createElement(c.a,{to:"/docs/setup/installation/containers/docker/"},r.a.createElement("i",{className:"feather icon-terminal"})," Docker (",e,") ",r.a.createElement("span",{className:"badge badge--primary"},"recommended")),!p&&!d&&r.a.createElement(c.a,{to:`/docs/setup/installation/manual/from-archives/?file_name=${m.file_name}`},r.a.createElement("i",{className:"feather icon-terminal"})," From an Archive (",e,")  ",r.a.createElement("span",{className:"badge badge--primary"},"recommended")),r.a.createElement("p",null,"Alternatively, you can use your preferred method:"),p&&d&&r.a.createElement(c.a,{to:"/docs/setup/installation/containers/docker/",size:"sm"},r.a.createElement("i",{className:"feather icon-package"})," Docker (",e,")"),(p||d)&&r.a.createElement(c.a,{to:`/docs/setup/installation/manual/from-archives/?file_name=${m.file_name}`,size:"sm"},r.a.createElement("i",{className:"feather icon-terminal"})," From an Archive (",e,")"),r.a.createElement(c.a,{to:"/docs/setup/installation/manual/from-source/",size:"sm"},r.a.createElement("i",{className:"feather icon-terminal"})," From Source"))}a.a=function({docker:e,os:a,packageManager:t}){const{downloads:n}=i(),c=n.filter(e=>e.os.toLowerCase()==a.toLowerCase()&&"archive"==e.type).map(e=>e.arch);return r.a.createElement("div",null,r.a.createElement(s.a,{block:!0,defaultValue:c[0],urlKey:"os",values:c.map(e=>({label:r.a.createElement(r.a.Fragment,null,r.a.createElement("i",{className:"feather icon-cpu"})," ",e),value:e}))},c.map((n,c)=>r.a.createElement(l.a,{key:c,value:n},r.a.createElement(m,{arch:n,docker:e,os:a,packageManager:t})))))}}}]);