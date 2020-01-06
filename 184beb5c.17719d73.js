(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return h}));var a=n(1),r=n(6),i=(n(0),n(261)),o=n(291),s=n.n(o),c=n(255),l=n(293),d={title:"Vector as a Service",sidebar_label:"Service",description:"Deploying and running Vector as a service"},b={id:"setup/deployment/roles/service",title:"Vector as a Service",description:"Deploying and running Vector as a service",source:"@site/docs/setup/deployment/roles/service.md",permalink:"/docs/setup/deployment/roles/service",editUrl:"https://github.com/timberio/vector/edit/master/website/docs/setup/deployment/roles/service.md",sidebar_label:"Service",sidebar:"docs",previous:{title:"Vector as an Agent",permalink:"/docs/setup/deployment/roles/agent"},next:{title:"Topologies",permalink:"/docs/setup/deployment/topologies"}},u=[{value:"Vector Configuration",id:"vector-configuration",children:[{value:"Receiving Data",id:"receiving-data",children:[]},{value:"Performance Tuning",id:"performance-tuning",children:[]},{value:"On-Disk Buffering",id:"on-disk-buffering",children:[]}]},{value:"System Configuration",id:"system-configuration",children:[]},{value:"Deployment",id:"deployment",children:[{value:"Hardware",id:"hardware",children:[]},{value:"Load balancing",id:"load-balancing",children:[]}]},{value:"Administration",id:"administration",children:[{value:"Configuration Changes",id:"configuration-changes",children:[]},{value:"Updating Vector",id:"updating-vector",children:[]}]}],p={rightToc:u},f="wrapper";function h(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(f,Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(s.a,{src:"/img/roles-service.svg",mdxType:"SVG"}),Object(i.b)("p",null,"When Vector serves as a service, its purpose is to efficiently receive,\naggregate, and route data downstream. In this scenario, Vector is the primary\nservice on the host and should take full advantage of all resources."),Object(i.b)("h2",{id:"vector-configuration"},"Vector Configuration"),Object(i.b)("h3",{id:"receiving-data"},"Receiving Data"),Object(i.b)("p",null,"When Vector is deployed as a service it receives data over the network from\nupstream clients or services. Relevant sources include the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sources/vector/"}),Object(i.b)("inlineCode",{parentName:"a"},"vector")),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sources/syslog/"}),Object(i.b)("inlineCode",{parentName:"a"},"syslog")),", and\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sources/socket/"}),Object(i.b)("inlineCode",{parentName:"a"},"socket"))," sources."),Object(i.b)("h3",{id:"performance-tuning"},"Performance Tuning"),Object(i.b)("p",null,"Vector is designed, by default, to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/#performance"}),"take full advantage of all system resources"),",\nwhich is usually preferred in the service role. As a result, there is nothing\nspecial you need to do to improve performance."),Object(i.b)("h3",{id:"on-disk-buffering"},"On-Disk Buffering"),Object(i.b)("p",null,"To ensure Vector does not lose data between restarts you'll need to switch\nthe buffer to use the disk for all relevant sinks. This can be accomplished\nby adding a simple ",Object(i.b)("inlineCode",{parentName:"p"},"[buffer]")," table to each of your configured sinks. In\naddition, we recommend specifying an explicit ",Object(i.b)("inlineCode",{parentName:"p"},"data_dir")," for Vector's buffer.\nFor example:"),Object(i.b)(c.a,{fileName:"vector.toml",mdxType:"CodeHeader"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml"}),'data_dir = "/var/lib/vector"\n\n[sinks.backups]\n    type = "s3"\n    # ...\n\n    [sinks.backups.buffer]\n        type = "disk"\n        max_size = 5000000000 # 5gb\n')),Object(i.b)(l.a,{type:"warning",mdxType:"Alert"},Object(i.b)("p",null,"Please make sure that the Vector user has write access to the specified\n",Object(i.b)("inlineCode",{parentName:"p"},"data_dir"),".")),Object(i.b)("p",null,"Please note that there is a performance hit to enabling on-disk buffers of\nabout 3X. We believe this to be a worthwhile tradeoff to ensure data is not\nlost across restarts."),Object(i.b)("h2",{id:"system-configuration"},"System Configuration"),Object(i.b)("p",null,"By default Vector is tuned for performance, there are no extra system level\nconfiguration steps necessary to improve performance."),Object(i.b)("h2",{id:"deployment"},"Deployment"),Object(i.b)("h3",{id:"hardware"},"Hardware"),Object(i.b)("p",null,"The hardware needed is highly dependent on your configuration and data volume.\nTypically, Vector is CPU bound and not memory bound, especially if all buffers\nare ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/setup/deployment/roles/service/#on-disk-buffering"}),"configured to use the disk"),". Our\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/#performance"}),"benchmarks")," should give you a general idea of resource usage\nin relation to specific pipelines and data volume."),Object(i.b)("h4",{id:"cpu"},"CPU"),Object(i.b)("p",null,"Vector benefits greatly from parallel processing, the more cores the better.\nFor example, if you're on AWS, the ",Object(i.b)("inlineCode",{parentName:"p"},"c5d.*")," instances will give you the most\nbang for your buck given their optimization towards CPU and the fact that\nthey include a fast NVME drive for on-disk buffers."),Object(i.b)("h4",{id:"memory"},"Memory"),Object(i.b)("p",null,"If you've configured ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/setup/deployment/roles/service/#on-disk-buffering"}),"on-disk buffers"),",\nthen memory should not be your bottleneck. If you opted to keep buffers\nin-memory, then you'll want to make sure you have at least 2X your cumulative\nbuffer size. For example, if you have an ",Object(i.b)("inlineCode",{parentName:"p"},"elasticsearch")," and ",Object(i.b)("inlineCode",{parentName:"p"},"s3")," sink\nconfigured to use 100mb and 1gb, then you should ensure you have at least\n2.2gb ","(","1.1 ","*"," 2",")"," of memory available."),Object(i.b)("h4",{id:"disk"},"Disk"),Object(i.b)("p",null,"If you've configured on-disk buffers, then we recommend using local NVMe SSD\ndrives when possible. This will ensure disk IO does not become your bottleneck.\nFor example, if you're on AWS you'll want to choose an instance that includes a\nlocal NVME SSD drive, such as the ",Object(i.b)("inlineCode",{parentName:"p"},"c5d.*")," instances. The size of the disk should\nbe at least 3 times your cumulative buffer size."),Object(i.b)("h3",{id:"load-balancing"},"Load balancing"),Object(i.b)("p",null,"If you've configured Vector to receive data over the network then you'll\nbenefit from load balancing. Select sinks offer built-in load balancing,\nsuch as the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sinks/http/"}),Object(i.b)("inlineCode",{parentName:"a"},"http")),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sinks/socket/"}),Object(i.b)("inlineCode",{parentName:"a"},"socket")),", and\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sinks/vector/"}),Object(i.b)("inlineCode",{parentName:"a"},"vector"))," sinks. This is a very rudimentary form of load\nbalancing that requires all clients to know about the available downstream\nhosts. A more formal load balancing strategy is outside of the scope of this\ndocument, but is typically achieved by services such as\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://aws.amazon.com/elasticloadbalancing/"}),"AWS' ELB"),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.haproxy.org/"}),"Haproxy"),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.nginx.com/"}),"Nginx"),", and more."),Object(i.b)("h2",{id:"administration"},"Administration"),Object(i.b)("h3",{id:"configuration-changes"},"Configuration Changes"),Object(i.b)("p",null,"Vector can be ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/administration/process-management/#reloading"}),"reloaded")," to apply configuration changes.\nThis is the recommended strategy and should be used over restarting when\npossible."),Object(i.b)("h3",{id:"updating-vector"},"Updating Vector"),Object(i.b)("p",null,"To ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/administration/updating/"}),"update")," Vector you'll need to restart the process. Like any\nservice, restarting without disruption is achieved by higher level design\ndecisions, such as ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/setup/deployment/roles/service/#load-balancing"}),"load balancing"),"."))}h.isMDXComponent=!0},255:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(85);t.a=function({fileName:e,links:t}){let n=[];for(var a in t)n.push(r.a.createElement("a",{href:a.href},a.text||"Learn more&hellip;"));return r.a.createElement("div",{className:"code-header"},n.length>0&&r.a.createElement("span",{className:"code-header--links"},n),e)}},293:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(253),o=n.n(i);n(93);t.a=function({children:e,fill:t,icon:n,type:a}){let i=null;switch(a){case"success":i="check-circle";break;case"warning":i="alert-triangle";break;default:i="info"}return r.a.createElement("div",{className:o()("alert",`alert--${a}`,{"alert--fill":t}),role:"alert"},r.a.createElement("i",{className:o()("feather",`icon-${n||i}`)}),e)}}}]);