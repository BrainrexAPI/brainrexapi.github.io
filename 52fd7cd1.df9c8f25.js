(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var a=n(1),s=n(6),o=(n(0),n(242)),i=n(250),r={title:"Install Vector On Your Operating System",sidebar_label:"hidden",hide_pagination:!0},c={id:"setup/installation/operating-systems",title:"Install Vector On Your Operating System",description:"import Jump from '@site/src/components/Jump';",source:"@site/docs/setup/installation/operating-systems.md",permalink:"/docs/setup/installation/operating-systems",editUrl:"https://github.com/brainrexapi/edit/master/docs/setup/installation/operating-systems.md",sidebar_label:"hidden",sidebar:"docs",previous:{title:"Install Vector via Window Installer",permalink:"/docs/setup/installation/package-managers/msi"},next:{title:"Install Vector On Amazon Linux",permalink:"/docs/setup/installation/operating-systems/amazon-linux"}},p=[],m={rightToc:p},u="wrapper";function l(e){var t=e.components,n=Object(s.a)(e,["components"]);return Object(o.b)(u,Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(i.a,{to:"/docs/setup/installation/operating-systems/amazon-linux/",mdxType:"Jump"},"Amazon Linux"),Object(o.b)(i.a,{to:"/docs/setup/installation/operating-systems/centos/",mdxType:"Jump"},"CentOS"),Object(o.b)(i.a,{to:"/docs/setup/installation/operating-systems/debian/",mdxType:"Jump"},"Debian"),Object(o.b)(i.a,{to:"/docs/setup/installation/operating-systems/macos/",mdxType:"Jump"},"MacOS"),Object(o.b)(i.a,{to:"/docs/setup/installation/operating-systems/raspbian/",mdxType:"Jump"},"Raspbian"),Object(o.b)(i.a,{to:"/docs/setup/installation/operating-systems/rhel/",mdxType:"Jump"},"RHEL"),Object(o.b)(i.a,{to:"/docs/setup/installation/operating-systems/ubuntu/",mdxType:"Jump"},"Ubuntu"),Object(o.b)(i.a,{to:"/docs/setup/installation/operating-systems/windows/",mdxType:"Jump"},"Windows"))}l.isMDXComponent=!0},243:function(e,t,n){"use strict";var a=n(1),s=n(0),o=n.n(s),i=n(17);const r=/^\/(?!\/)/;t.a=function(e){const{to:t,href:n}=e,c=t||n,p=r.test(c),m=Object(s.useRef)(!1),u="undefined"!=typeof window&&"IntersectionObserver"in window;let l;return Object(s.useEffect)(()=>(!u&&p&&window.docusaurus.prefetch(c),()=>{u&&l&&l.disconnect()}),[c,u,p]),c&&p?o.a.createElement(i.b,Object(a.a)({},e,{onMouseEnter:()=>{m.current||(window.docusaurus.preload(c),m.current=!0)},innerRef:e=>{u&&e&&p&&((e,t)=>{l=new window.IntersectionObserver(n=>{n.forEach(n=>{e===n.target&&(n.isIntersecting||n.intersectionRatio>0)&&(l.unobserve(e),l.disconnect(),t())})}),l.observe(e)})(e,()=>{window.docusaurus.prefetch(c)})},to:c})):o.a.createElement("a",Object(a.a)({},e,{href:c}))}},250:function(e,t,n){"use strict";var a=n(0),s=n.n(a),o=n(243),i=n(241),r=n.n(i);n(86);t.a=function({children:e,className:t,badge:n,icon:a,size:i,target:c,to:p}){let m=r()("jump-to",`jump-to--${i}`,t),u=s.a.createElement("div",{className:"jump-to--inner"},s.a.createElement("div",{className:"jump-to--inner-2"},s.a.createElement("div",{className:"jump-to--main"},n?s.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",e),s.a.createElement("div",{className:"jump-to--right"},s.a.createElement("i",{className:`feather icon-${a||"chevron-right"} arrow`}))));return c?s.a.createElement("a",{href:p,target:c,className:m},u):s.a.createElement(o.a,{to:p,className:m},u)}}}]);