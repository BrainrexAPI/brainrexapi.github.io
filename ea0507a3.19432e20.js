(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{229:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return m})),a.d(t,"default",(function(){return O}));var c=a(1),r=a(6),n=(a(0),a(242)),l=a(265),b=a(247),i=a(248),o=a(244),p={title:"Install Vector From Archives",sidebar_label:"From Archives",description:"Install Vector from pre-compiled archives"},s={id:"setup/installation/manual/from-archives",title:"Install Vector From Archives",description:"Install Vector from pre-compiled archives",source:"@site/docs/setup/installation/manual/from-archives.md",permalink:"/docs/setup/installation/manual/from-archives",editUrl:"https://github.com/brainrexapi/edit/master/docs/setup/installation/manual/from-archives.md",sidebar_label:"From Archives",sidebar:"docs",previous:{title:"Install Vector Manually",permalink:"/docs/setup/installation/manual"},next:{title:"Install Vector From Source",permalink:"/docs/setup/installation/manual/from-source"}},m=[{value:"Installation",id:"installation",children:[]},{value:"Next Steps",id:"next-steps",children:[{value:"Configuring",id:"configuring",children:[]},{value:"Data Directory",id:"data-directory",children:[]},{value:"Service Managers",id:"service-managers",children:[]},{value:"Updating",id:"updating",children:[]}]}],u={rightToc:m},d="wrapper";function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)(d,Object(c.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"This page covers installing Vector from a pre-built archive. These archives\ncontain the ",Object(n.b)("inlineCode",{parentName:"p"},"vector")," binary as well as supporting configuration files."),Object(n.b)(l.a,{type:"warning",mdxType:"Alert"},Object(n.b)("p",null,"We recommend installing Vector through a supported ",Object(n.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/setup/installation/containers/"}),"container\nplatform")," or ",Object(n.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/setup/installation/package-managers/"}),"package manager"),", if\npossible. These handle permissions, directory creation, and other\nintricacies covered in the ",Object(n.b)("a",Object(c.a)({parentName:"p"},{href:"#next-steps"}),"Next Steps")," section.")),Object(n.b)("h2",{id:"installation"},"Installation"),Object(n.b)(b.a,{block:!0,defaultValue:"vector-x86_64-unknown-linux-musl.tar.gz",urlKey:"file_name",values:[{label:"Linux (x86_64)",value:"vector-x86_64-unknown-linux-musl.tar.gz"},{label:"Linux (ARM64)",value:"vector-aarch64-unknown-linux-musl.tar.gz"},{label:"Linux (ARMv7)",value:"vector-armv7-unknown-linux-musleabihf.tar.gz"},{label:"MacOS (x86_64)",value:"vector-x86_64-apple-darwin.tar.gz"},{label:"Windows (x86_64, 7+)",value:"vector-x86_64-pc-windows-msvc.zip"}],mdxType:"Tabs"},Object(n.b)(i.a,{value:"vector-x86_64-unknown-linux-musl.tar.gz",mdxType:"TabItem"},Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Download & unpack the archive"),Object(n.b)(b.a,{className:"mini",defaultValue:"latest",values:[{label:"Latest (0.6.0)",value:"latest"},{label:"Nightly",value:"nightly"}],mdxType:"Tabs"},Object(n.b)(i.a,{value:"latest",mdxType:"TabItem"},Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p vector && \\\n  curl -sSfL --proto '=https' --tlsv1.2 https://packages.timber.io/vector/0.6.X/vector-x86_64-unknown-linux-musl.tar.gz | \\\n  tar xzf - -C vector --strip-components=2\n"))),Object(n.b)(i.a,{value:"nightly",mdxType:"TabItem"},Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p vector && \\\n  curl -sSfL --proto '=https' --tlsv1.2 https://packages.timber.io/vector/nightly/latest/vector-x86_64-unknown-linux-musl.tar.gz | \\\n  tar xzf - -C vector --strip-components=2\n"))))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Change into the ",Object(n.b)("inlineCode",{parentName:"p"},"vector")," directory"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"cd vector\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Move ",Object(n.b)("inlineCode",{parentName:"p"},"vector")," into your $PATH"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),'echo "export PATH=\\"$(pwd)/vector/bin:$PATH\\"" >> $HOME/.profile\nsource $HOME/.profile\n'))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Start Vector"),Object(n.b)("p",{parentName:"li"},"That's it! You can start vector with:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"vector --config config/vector.toml\n"))))),Object(n.b)(i.a,{value:"vector-aarch64-unknown-linux-musl.tar.gz",mdxType:"TabItem"},Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Download & unpack the archive"),Object(n.b)(b.a,{className:"mini",defaultValue:"latest",values:[{label:"Latest (0.6.0)",value:"latest"},{label:"Nightly",value:"nightly"}],mdxType:"Tabs"},Object(n.b)(i.a,{value:"latest",mdxType:"TabItem"},Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p vector && \\\n  curl -sSfL --proto '=https' --tlsv1.2 https://packages.timber.io/vector/0.6.X/vector-aarch64-unknown-linux-musl.tar.gz | \\\n  tar xzf - -C vector --strip-components=2\n"))),Object(n.b)(i.a,{value:"nightly",mdxType:"TabItem"},Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p vector && \\\n  curl -sSfL --proto '=https' --tlsv1.2 https://packages.timber.io/vector/nightly/latest/vector-aarch64-unknown-linux-musl.tar.gz | \\\n  tar xzf - -C vector --strip-components=2\n"))))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Change into the ",Object(n.b)("inlineCode",{parentName:"p"},"vector")," directory"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"cd vector\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Move ",Object(n.b)("inlineCode",{parentName:"p"},"vector")," into your $PATH"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),'echo "export PATH=\\"$(pwd)/vector/bin:$PATH\\"" >> $HOME/.profile\nsource $HOME/.profile\n'))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Start Vector"),Object(n.b)("p",{parentName:"li"},"That's it! You can start vector with:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"vector --config config/vector.toml\n"))))),Object(n.b)(i.a,{value:"vector-armv7-unknown-linux-musleabihf.tar.gz",mdxType:"TabItem"},Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Download & unpack the archive"),Object(n.b)(b.a,{className:"mini",defaultValue:"latest",values:[{label:"Latest (0.6.0)",value:"latest"},{label:"Nightly",value:"nightly"}],mdxType:"Tabs"},Object(n.b)(i.a,{value:"latest",mdxType:"TabItem"},Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p vector && \\\n  curl -sSfL --proto '=https' --tlsv1.2 https://packages.timber.io/vector/0.6.X/vector-armv7-unknown-linux-musleabihf.tar.gz | \\\n  tar xzf - -C vector --strip-components=2\n"))),Object(n.b)(i.a,{value:"nightly",mdxType:"TabItem"},Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p vector && \\\n  curl -sSfL --proto '=https' --tlsv1.2 https://packages.timber.io/vector/nightly/latest/vector-armv7-unknown-linux-musleabihf.tar.gz | \\\n  tar xzf - -C vector --strip-components=2\n"))))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Change into the ",Object(n.b)("inlineCode",{parentName:"p"},"vector")," directory"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"cd vector\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Move ",Object(n.b)("inlineCode",{parentName:"p"},"vector")," into your $PATH"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),'echo "export PATH=\\"$(pwd)/vector/bin:$PATH\\"" >> $HOME/.profile\nsource $HOME/.profile\n'))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Start Vector"),Object(n.b)("p",{parentName:"li"},"That's it! You can start vector with:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"vector --config config/vector.toml\n"))))),Object(n.b)(i.a,{value:"vector-x86_64-apple-darwin.tar.gz",mdxType:"TabItem"},Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Download & unpack the archive"),Object(n.b)(b.a,{className:"mini",defaultValue:"latest",values:[{label:"Latest (0.6.0)",value:"latest"},{label:"Nightly",value:"nightly"}],mdxType:"Tabs"},Object(n.b)(i.a,{value:"latest",mdxType:"TabItem"},Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p vector && \\\n  curl -sSfL --proto '=https' --tlsv1.2 https://packages.timber.io/vector/0.6.X/vector-x86_64-apple-darwin.tar.gz | \\\n  tar xzf - -C vector --strip-components=2\n"))),Object(n.b)(i.a,{value:"nightly",mdxType:"TabItem"},Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"mkdir -p vector && \\\n  curl -sSfL --proto '=https' --tlsv1.2 https://packages.timber.io/vector/nightly/latest/vector-x86_64-apple-darwin.tar.gz | \\\n  tar xzf - -C vector --strip-components=2\n"))))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Change into the ",Object(n.b)("inlineCode",{parentName:"p"},"vector")," directory"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"cd vector\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Move ",Object(n.b)("inlineCode",{parentName:"p"},"vector")," into your $PATH"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),'echo "export PATH=\\"$(pwd)/vector/bin:$PATH\\"" >> $HOME/.profile\nsource $HOME/.profile\n'))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Start Vector"),Object(n.b)("p",{parentName:"li"},"That's it! You can start vector with:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"vector --config config/vector.toml\n"))))),Object(n.b)(i.a,{value:"vector-x86_64-pc-windows-msvc.zip",mdxType:"TabItem"},Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Download Vector release archive (latest):"),Object(n.b)(b.a,{className:"mini",defaultValue:"latest",values:[{label:"Latest (0.6.0)",value:"latest"},{label:"Nightly",value:"nightly"}],mdxType:"Tabs"},Object(n.b)(i.a,{value:"latest",mdxType:"TabItem"},Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bat"}),"powershell Invoke-WebRequest https://packages.timber.io/vector/0.6.X/vector-x86_64-pc-windows-msvc.zip -OutFile vector-x86_64-pc-windows-msvc.zip\n"))),Object(n.b)(i.a,{value:"nightly",mdxType:"TabItem"},Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bat"}),"powershell Invoke-WebRequest https://packages.timber.io/vector/nightly/latest/vector-x86_64-pc-windows-msvc.zip -OutFile vector-x86_64-pc-windows-msvc.zip\n"))))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Extract files from the archive:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bat"}),"powershell Expand-Archive vector-x86_64-pc-windows-msvc.zip .\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Navigate to the Vector directory:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bat"}),"cd vector-x86_64-pc-windows-msvc\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Start Vector:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bat"}),".\\bin\\vector --config config\\vector.toml\n")))))),Object(n.b)("h2",{id:"next-steps"},"Next Steps"),Object(n.b)("h3",{id:"configuring"},"Configuring"),Object(n.b)("p",null,"The Vector configuration file is located at:"),Object(n.b)("pre",null,Object(n.b)("code",Object(c.a)({parentName:"pre"},{}),"config/vector.toml\n")),Object(n.b)("p",null,"A full spec is located at ",Object(n.b)("inlineCode",{parentName:"p"},"config/vector.spec.toml")," and examples are\nlocated in ",Object(n.b)("inlineCode",{parentName:"p"},"config/vector/examples/*"),". You can learn more about configuring\nVector in the ",Object(n.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/setup/configuration/"}),"Configuration")," section."),Object(n.b)("h3",{id:"data-directory"},"Data Directory"),Object(n.b)("p",null,"We highly recommend creating a ",Object(n.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/reference/global-options/#data-directory"}),"data directory"),"\nthat Vector can use:"),Object(n.b)("pre",null,Object(n.b)("code",Object(c.a)({parentName:"pre"},{}),"mkdir /var/lib/vector\n")),Object(n.b)(l.a,{type:"warning",mdxType:"Alert"},Object(n.b)("p",null,"Make sure that this directory is writable by the ",Object(n.b)("inlineCode",{parentName:"p"},"vector")," process.")),Object(n.b)("p",null,"Vector offers a global ",Object(n.b)("a",Object(c.a)({parentName:"p"},{href:"/docs/reference/global-options/#data_dir"}),Object(n.b)("inlineCode",{parentName:"a"},"data_dir")," option")," that\nyou can use to specify the path of your directory."),Object(n.b)(o.a,{fileName:"vector.toml",mdxType:"CodeHeader"}),Object(n.b)("pre",null,Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-toml"}),'data_dir = "/var/lib/vector" # default\n')),Object(n.b)("h3",{id:"service-managers"},"Service Managers"),Object(n.b)("p",null,"Vector archives ship with service files in case you need them:"),Object(n.b)("h4",{id:"initd"},"Init.d"),Object(n.b)("p",null,"To install Vector into Init.d run:"),Object(n.b)("pre",null,Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"cp -av etc/init.d/vector /etc/init.d\n")),Object(n.b)("h4",{id:"systemd"},"Systemd"),Object(n.b)("p",null,"To install Vector into Systemd run:"),Object(n.b)("pre",null,Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),"cp -av etc/systemd/vector.service /etc/systemd/system\n")),Object(n.b)("h3",{id:"updating"},"Updating"),Object(n.b)("p",null,"Simply follow the same ",Object(n.b)("a",Object(c.a)({parentName:"p"},{href:"#installation"}),"installation instructions above"),"."))}O.isMDXComponent=!0},247:function(e,t,a){"use strict";var c=a(1),r=a(0),n=a.n(r),l=a(252),b=a(241),i=a.n(b),o=a(253),p=a.n(o);function s({block:e,centered:t,className:a,style:c,values:r,selectedValue:l,setSelectedValue:b}){return n.a.createElement("div",{className:t?"tabs--centered":""},n.a.createElement("ul",{className:i()("tabs",a,{"tabs--block":e}),style:c},r.map(({value:e,label:t})=>n.a.createElement("li",{className:i()("tab-item",{"tab-item--active":l===e}),key:e,onClick:()=>b(e)},t))))}function m({selectedValue:e,setSelectedValue:t,values:a}){return n.a.createElement(l.a,{className:"react-select-container",classNamePrefix:"react-select",options:a,isClearable:!1,placeholder:"Select a version...",value:a.find(t=>t.value==e),onChange:e=>t(e?e.value:null)})}t.a=function(e){const{block:t,centered:a,children:l,defaultValue:b,select:i,style:o,values:u,urlKey:d}=e,[O,j]=Object(r.useState)(b);return Object(r.useEffect)(()=>{if("undefined"!=typeof window&&window.location&&d){let e=p.a.parse(window.location.search);e[d]&&j(e[d])}},[]),n.a.createElement("div",null,u.length>1&&(i?n.a.createElement(m,Object(c.a)({selectedValue:O,setSelectedValue:j},e)):n.a.createElement(s,Object(c.a)({selectedValue:O,setSelectedValue:j},e))),n.a.createElement("div",{className:"margin-vert--md"},r.Children.toArray(l).filter(e=>e.props.value===O)[0]))}},248:function(e,t,a){"use strict";var c=a(0),r=a.n(c);t.a=function(e){return r.a.createElement("div",null,e.children)}},265:function(e,t,a){"use strict";var c=a(0),r=a.n(c),n=a(241),l=a.n(n);a(92);t.a=function({children:e,fill:t,icon:a,type:c}){let n=null;switch(c){case"success":n="check-circle";break;case"warning":n="alert-triangle";break;default:n="info"}return r.a.createElement("div",{className:l()("alert",`alert--${c}`,{"alert--fill":t}),role:"alert"},r.a.createElement("i",{className:l()("feather",`icon-${a||n}`)}),e)}}}]);