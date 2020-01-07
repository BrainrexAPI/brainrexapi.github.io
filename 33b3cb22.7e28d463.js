(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var r=n(1),a=(n(0),n(214));const i={title:"Use Vector On Docker",sidebar_label:"Docker",description:"Using Vector on Docker",source_url:"https://github.com/timberio/vector/tree/master/distribution/docker"},c={id:"setup/installation/containers/docker",title:"Use Vector On Docker",description:"Using Vector on Docker",source:"@site/docs/setup/installation/containers/docker.md",permalink:"/docs/setup/installation/containers/docker",editUrl:"https://github.com/timberio/vector/edit/master/website/docs/setup/installation/containers/docker.md",sidebar_label:"Docker"},o=[{value:"Running",id:"running",children:[]},{value:"Configuring",id:"configuring",children:[]},{value:"Image Variants",id:"image-variants",children:[{value:"alpine",id:"alpine",children:[]},{value:"debian",id:"debian",children:[]}]},{value:"Versions",id:"versions",children:[{value:"Latest Version",id:"latest-version",children:[]},{value:"Previous Versions",id:"previous-versions",children:[]},{value:"Nightlies",id:"nightlies",children:[]}]},{value:"Updating",id:"updating",children:[]},{value:"Source Files",id:"source-files",children:[]}],l={rightToc:o},b="wrapper";function s({components:e,...t}){return Object(a.b)(b,Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Vector maintains the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/r/timberio/vector"}),Object(a.b)("inlineCode",{parentName:"a"},"timberio/vector")," Docker images"),"\navailable on ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/r/timberio/vector"}),"Docker Hub")," which come pre-installed\nwith Vector and any recommended system dependencies. These images are available\nfor x86_64, ARM64, and ARMv7 architectures."),Object(a.b)("h2",{id:"running"},"Running"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker run timberio/vector:0.6.0-alpine\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("inlineCode",{parentName:"li"},"vector")," binary is located at ",Object(a.b)("inlineCode",{parentName:"li"},"/usr/local/bin/vector"),", which should be in your ",Object(a.b)("inlineCode",{parentName:"li"},"$PATH"),"."),Object(a.b)("li",{parentName:"ul"},"The default ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/setup/configuration/"}),"configuration file")," is located at ",Object(a.b)("inlineCode",{parentName:"li"},"/etc/vector/vector.toml"),".")),Object(a.b)("h2",{id:"configuring"},"Configuring"),Object(a.b)("p",null,"The Vector Docker images ship with a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/timberio/vector/blob/master/config/vector.toml"}),"default ",Object(a.b)("inlineCode",{parentName:"a"},"/etc/vector/vector.toml")," configuration file"),".\nTo use your own configuration file:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Create your own ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/setup/configuration/"}),"Vector configuration file")," and save it\nas ",Object(a.b)("inlineCode",{parentName:"p"},"vector.toml"),".")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Run the Vector Docker image with the following command:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker run \\\n -v $PWD/vector.toml:/etc/vector/vector.toml:ro \\\n timberio/vector:0.6.0-alpine\n")),Object(a.b)("p",{parentName:"li"},"Modify ",Object(a.b)("inlineCode",{parentName:"p"},"$PWD")," to the directory where you store your local ",Object(a.b)("inlineCode",{parentName:"p"},"vector.toml")," file."))),Object(a.b)("h2",{id:"image-variants"},"Image Variants"),Object(a.b)("h3",{id:"alpine"},"alpine"),Object(a.b)("p",null,"This image is based on the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/_/alpine"}),Object(a.b)("inlineCode",{parentName:"a"},"alpine")," Docker image"),", which is\na Linux distribution built around musl libc and BusyBox. It is considerably\nsmaller in size than other Docker images and statically links libraries. This\nis the image we recommend due to it's small size and reliability."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker run timberio/vector:0.6.0-alpine\n")),Object(a.b)("h3",{id:"debian"},"debian"),Object(a.b)("p",null,"This image is based on the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/_/debian"}),Object(a.b)("inlineCode",{parentName:"a"},"debian-slim")," image"),",\nwhich is a smaller, more compact variant of the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/_/debian"}),Object(a.b)("inlineCode",{parentName:"a"},"debian")," image"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker run timberio/vector:0.6.0-debian\n")),Object(a.b)("h2",{id:"versions"},"Versions"),Object(a.b)("h3",{id:"latest-version"},"Latest Version"),Object(a.b)("p",null,"Vector's Docker images include a special ",Object(a.b)("inlineCode",{parentName:"p"},"latest")," version that will be updated\nwhenever Vector is ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://vector.dev/releases/latest"}),"released"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker run timberio/vector:latest-alpine\n")),Object(a.b)("h3",{id:"previous-versions"},"Previous Versions"),Object(a.b)("p",null,"Previous versions can be accessed by their direct tag:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker run timberio/vector:<X.X.X>-alpine\n")),Object(a.b)("h3",{id:"nightlies"},"Nightlies"),Object(a.b)("p",null,"Vector's releases nightly versions that contain the latest changes."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker run timberio/vector:nightly-alpine\n")),Object(a.b)("p",null,"Historical nightly versions are also available:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker run timberio/vector:nightly-<YYYY-MM-DD>-alpine\n")),Object(a.b)("h2",{id:"updating"},"Updating"),Object(a.b)("p",null,"Simply run with newer version in the tag:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker run timberio/vector:X.X.X-alpine\n")),Object(a.b)("p",null,"Or pull the newest latest version:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker pull timberio/vector:latest-alpine && \\\n  docker run timberio/vector:latest-alpine\n")),Object(a.b)("p",null,"Or run with newer nightly date in the tag:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker run timberio/vector:nightly-<YYYY-MM-DD>-alpine\n")),Object(a.b)("p",null,"Or pull the newest nightly version:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker pull timberio/vector:nightly-alpine && \\\n  docker run timberio/vector:nightly-alpine\n")),Object(a.b)("h2",{id:"source-files"},"Source Files"),Object(a.b)("p",null,"Vector's Docker source files are located ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/timberio/vector/tree/master/distribution/docker"}),"in it's Github repo"),"."))}s.isMDXComponent=!0},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},p=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||i;return n?a.a.createElement(m,o({ref:t},b,{components:n})):a.a.createElement(m,o({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);