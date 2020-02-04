(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{149:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return d}));var n=a(1),r=a(6),c=(a(0),a(204)),l=a(209),i=a(210),o=a(207),s={title:"Install Vector via DPKG",sidebar_label:"DPKG",description:"Install Vector through the DKG package manager"},b={id:"setup/installation/package-managers/dpkg",title:"Install Vector via DPKG",description:"Install Vector through the DKG package manager",source:"@site/docs/setup/installation/package-managers/dpkg.md",permalink:"/docs/setup/installation/package-managers/dpkg",editUrl:"https://github.com/brainrexapi/edit/master/docs/setup/installation/package-managers/dpkg.md",sidebar_label:"DPKG",sidebar:"docs",previous:{title:"Install Vector Through Your Package Manager",permalink:"/docs/setup/installation/package-managers"},next:{title:"Install Vector via Homebrew",permalink:"/docs/setup/installation/package-managers/homebrew"}},p=[{value:"Install",id:"install",children:[{value:"Previous Versions",id:"previous-versions",children:[]}]},{value:"Configuring",id:"configuring",children:[]},{value:"Administering",id:"administering",children:[]},{value:"Uninstalling",id:"uninstalling",children:[]},{value:"Updating",id:"updating",children:[]}],u={rightToc:p},m="wrapper";function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)(m,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Vector can be installed through the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://wiki.debian.org/dpkg"}),"DPKG package manager")," which is\ngenerally used on Debian and Ubuntu systems."),Object(c.b)("h2",{id:"install"},"Install"),Object(c.b)(l.a,{block:!0,defaultValue:"x86_64",urlKey:"arch",values:[{label:"x86_64",value:"x86_64"},{label:"ARM64",value:"ARM64"},{label:"ARMv7",value:"ARMv7"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"x86_64",mdxType:"TabItem"},Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Download the Vector ",Object(c.b)("inlineCode",{parentName:"p"},".deb")," package"),Object(c.b)(l.a,{className:"mini",defaultValue:"latest",values:[{label:"Latest (0.6.0)",value:"latest"},{label:"Nightly",value:"nightly"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"latest",mdxType:"TabItem"},Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl --proto '=https' --tlsv1.2 -O https://packages.timber.io/vector/0.6.X/vector-amd64.deb\n"))),Object(c.b)(i.a,{value:"nightly",mdxType:"TabItem"},Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl --proto '=https' --tlsv1.2 -O https://packages.timber.io/vector/nightly/latest/vector-amd64.deb\n"))))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Install the downloaded package"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo dpkg -i vector-amd64.deb\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Start Vector"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo systemctl start vector\n"))))),Object(c.b)(i.a,{value:"ARM64",mdxType:"TabItem"},Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Download the Vector ",Object(c.b)("inlineCode",{parentName:"p"},".deb")," package"),Object(c.b)(l.a,{className:"mini",defaultValue:"latest",values:[{label:"Latest (0.6.0)",value:"latest"},{label:"Nightly",value:"nightly"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"latest",mdxType:"TabItem"},Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl --proto '=https' --tlsv1.2 -O https://packages.timber.io/vector/0.6.X/vector-arm64.deb\n"))),Object(c.b)(i.a,{value:"nightly",mdxType:"TabItem"},Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl --proto '=https' --tlsv1.2 -O https://packages.timber.io/vector/nightly/latest/vector-arm64.deb\n"))))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Install the downloaded package"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo dpkg -i vector-arm64.deb\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Start Vector"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo systemctl start vector\n"))))),Object(c.b)(i.a,{value:"ARMv7",mdxType:"TabItem"},Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Download the Vector ",Object(c.b)("inlineCode",{parentName:"p"},".deb")," package"),Object(c.b)(l.a,{className:"mini",defaultValue:"latest",values:[{label:"Latest (0.6.0)",value:"latest"},{label:"Nightly",value:"nightly"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"latest",mdxType:"TabItem"},Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl --proto '=https' --tlsv1.2 -O https://packages.timber.io/vector/0.6.X/vector-armhf.deb\n"))),Object(c.b)(i.a,{value:"nightly",mdxType:"TabItem"},Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"curl --proto '=https' --tlsv1.2 -O https://packages.timber.io/vector/nightly/latest/vector-armhf.deb\n"))))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Install the downloaded package"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo dpkg -i vector-armhf.deb\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Start Vector"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo systemctl start vector\n")))))),Object(c.b)("p",null,"That's it! Proceed to ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#configuring"}),"configure")," Vector for your use case."),Object(c.b)("h3",{id:"previous-versions"},"Previous Versions"),Object(c.b)("p",null,"Historical Vector versions can be found in the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://vector.dev/releases/latest"}),"releases"),".\nOnce you've found the version you'd like to install you can re-follow the\n",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#install"}),"install")," steps with the URL to the Vector ",Object(c.b)("inlineCode",{parentName:"p"},".deb")," file."),Object(c.b)("h2",{id:"configuring"},"Configuring"),Object(c.b)("p",null,"The Vector configuration file is placed in:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"etc/vector/vector.toml\n")),Object(c.b)("p",null,"A full spec is located at ",Object(c.b)("inlineCode",{parentName:"p"},"/etc/vector/vector.spec.toml")," and examples are\nlocated in ",Object(c.b)("inlineCode",{parentName:"p"},"/etc/vector/examples/*"),". You can learn more about configuring\nVector in the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/configuration/"}),"Configuration")," section."),Object(c.b)("h2",{id:"administering"},"Administering"),Object(c.b)("p",null,"Vector can be managed through the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.freedesktop.org/wiki/Software/systemd/"}),"Systemd")," service manager:"),Object(c.b)(o.a,{to:"/docs/administration/",mdxType:"Jump"},"Administration"),Object(c.b)("h2",{id:"uninstalling"},"Uninstalling"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo dpkg -r vector\n")),Object(c.b)("h2",{id:"updating"},"Updating"),Object(c.b)("p",null,"Follow the ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"#install"}),"install")," steps again, downloading the latest version of\nVector."))}d.isMDXComponent=!0},204:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,d=p["".concat(l,".").concat(u)]||p[u]||m[u]||c;return a?r.a.createElement(d,i({ref:t},s,{components:a})):r.a.createElement(d,i({ref:t},s))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,l=new Array(c);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<c;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},206:function(e,t,a){"use strict";var n=a(1),r=a(0),c=a.n(r),l=a(17);const i=/^\/(?!\/)/;t.a=function(e){const{to:t,href:a}=e,o=t||a,s=i.test(o),b=Object(r.useRef)(!1),p="undefined"!=typeof window&&"IntersectionObserver"in window;let u;return Object(r.useEffect)(()=>(!p&&s&&window.docusaurus.prefetch(o),()=>{p&&u&&u.disconnect()}),[o,p,s]),o&&s?c.a.createElement(l.b,Object(n.a)({},e,{onMouseEnter:()=>{b.current||(window.docusaurus.preload(o),b.current=!0)},innerRef:e=>{p&&e&&s&&((e,t)=>{u=new window.IntersectionObserver(a=>{a.forEach(a=>{e===a.target&&(a.isIntersecting||a.intersectionRatio>0)&&(u.unobserve(e),u.disconnect(),t())})}),u.observe(e)})(e,()=>{window.docusaurus.prefetch(o)})},to:o})):c.a.createElement("a",Object(n.a)({},e,{href:o}))}},207:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(206),l=a(203),i=a.n(l);a(85);t.a=function({children:e,className:t,badge:a,icon:n,size:l,target:o,to:s}){let b=i()("jump-to",`jump-to--${l}`,t),p=r.a.createElement("div",{className:"jump-to--inner"},r.a.createElement("div",{className:"jump-to--inner-2"},r.a.createElement("div",{className:"jump-to--main"},a?r.a.createElement("span",{className:"badge badge--primary badge--right"},a):"",e),r.a.createElement("div",{className:"jump-to--right"},r.a.createElement("i",{className:`feather icon-${n||"chevron-right"} arrow`}))));return o?r.a.createElement("a",{href:s,target:o,className:b},p):r.a.createElement(c.a,{to:s,className:b},p)}},209:function(e,t,a){"use strict";var n=a(1),r=a(0),c=a.n(r),l=a(226),i=a(203),o=a.n(i),s=a(227),b=a.n(s);function p({block:e,centered:t,className:a,style:n,values:r,selectedValue:l,setSelectedValue:i}){return c.a.createElement("div",{className:t?"tabs--centered":""},c.a.createElement("ul",{className:o()("tabs",a,{"tabs--block":e}),style:n},r.map(({value:e,label:t})=>c.a.createElement("li",{className:o()("tab-item",{"tab-item--active":l===e}),key:e,onClick:()=>i(e)},t))))}function u({selectedValue:e,setSelectedValue:t,values:a}){return c.a.createElement(l.a,{className:"react-select-container",classNamePrefix:"react-select",options:a,isClearable:!1,placeholder:"Select a version...",value:a.find(t=>t.value==e),onChange:e=>t(e?e.value:null)})}t.a=function(e){const{block:t,centered:a,children:l,defaultValue:i,select:o,style:s,values:m,urlKey:d}=e,[O,g]=Object(r.useState)(i);return Object(r.useEffect)(()=>{if("undefined"!=typeof window&&window.location&&d){let e=b.a.parse(window.location.search);e[d]&&g(e[d])}},[]),c.a.createElement("div",null,m.length>1&&(o?c.a.createElement(u,Object(n.a)({selectedValue:O,setSelectedValue:g},e)):c.a.createElement(p,Object(n.a)({selectedValue:O,setSelectedValue:g},e))),c.a.createElement("div",{className:"margin-vert--md"},r.Children.toArray(l).filter(e=>e.props.value===O)[0]))}},210:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);