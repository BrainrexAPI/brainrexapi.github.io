(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{129:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var a=r(1),n=r(6),o=(r(0),r(196)),c={title:"Glossary",description:"Vector documentation glossary of terms"},i={id:"meta/glossary",title:"Glossary",description:"Vector documentation glossary of terms",source:"@site/docs/meta/glossary.md",permalink:"/docs/meta/glossary",editUrl:"https://github.com/timberio/vector/edit/master/website/docs/meta/glossary.md"},s=[{value:"Batch",id:"batch",children:[]},{value:"Benchmark",id:"benchmark",children:[]},{value:"Binary",id:"binary",children:[]},{value:"Buffer",id:"buffer",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Durability",id:"durability",children:[]},{value:"Event",id:"event",children:[]},{value:"Filter",id:"filter",children:[]},{value:"Flush",id:"flush",children:[]},{value:"Github",id:"github",children:[]},{value:"Guide",id:"guide",children:[]},{value:"Log",id:"log",children:[]},{value:"Lucio",id:"lucio",children:[]},{value:"Metric",id:"metric",children:[]},{value:"Parser",id:"parser",children:[]},{value:"Pipeline",id:"pipeline",children:[]},{value:"Reducer",id:"reducer",children:[]},{value:"Repo",id:"repo",children:[]},{value:"Role",id:"role",children:[]},{value:"Router",id:"router",children:[]},{value:"Rust",id:"rust",children:[]},{value:"Sampler",id:"sampler",children:[]},{value:"Sink",id:"sink",children:[]},{value:"Source",id:"source",children:[]},{value:"Structured Log",id:"structured-log",children:[]},{value:"Table",id:"table",children:[]},{value:"TOML",id:"toml",children:[]},{value:"Topology",id:"topology",children:[]},{value:"Transform",id:"transform",children:[]},{value:"Use Case",id:"use-case",children:[]},{value:"Vector",id:"vector",children:[]}],l={rightToc:s},b="wrapper";function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)(b,Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The gloassary contains common terms and their definitions."),Object(o.b)("h2",{id:"batch"},"Batch"),Object(o.b)("p",null,'"Batch" refers to a ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),"batched payload")," within a sink. It is a batch of events encoded into a payload that the downstream service understands."),Object(o.b)("h2",{id:"benchmark"},"Benchmark"),Object(o.b)("p",null,'"Benchmark" refers to a test designed to measure performance and resource usage. You can learn more about Vector\'s benchmarks in the ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/#performance"}),"Benchmarks")," section."),Object(o.b)("h2",{id:"binary"},"Binary"),Object(o.b)("p",null,'"Binary" refers to the static binary that Vector compiles to.'),Object(o.b)("h2",{id:"buffer"},"Buffer"),Object(o.b)("p",null,'"Buffer" refers to an ordered queue of events that is coupled with a sink.'),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"\"Configuration\" refers to the settings and options used to control Vector's behavior. You can learn more about Vector's configuration in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/setup/configuration/"}),"Configuration")," section."),Object(o.b)("h2",{id:"durability"},"Durability"),Object(o.b)("p",null,'"Durability" refers to the ability to retain data across exceptional events. In the context of Vector, this typically refers to the ability to retain data across restarts.'),Object(o.b)("h2",{id:"event"},"Event"),Object(o.b)("p",null,'"Event" refers to a single unit of data that flows through Vector. You can learn more about events in the ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about/data-model/"}),"Data Model")," section."),Object(o.b)("h2",{id:"filter"},"Filter"),Object(o.b)("p",null,'"Filter" refers to a type of ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/transforms/"}),"transform")," that filters events or fields on an event."),Object(o.b)("h2",{id:"flush"},"Flush"),Object(o.b)("p",null,'"flush" refers to the act of sending a batched payload to a downstream service. It is a common term used in conjunction with "buffer".'),Object(o.b)("h2",{id:"github"},"Github"),Object(o.b)("p",null,'"',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/"}),"Github"),'"" refers to the service used to host Vector\'s source code.'),Object(o.b)("h2",{id:"guide"},"Guide"),Object(o.b)("p",null,'"Guide" is a tutorial or walk through on a specific subject. You can see Vector\'s guides in the ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/setup/guides/"}),"Guides")," section."),Object(o.b)("h2",{id:"log"},"Log"),Object(o.b)("p",null,'"Log" refers to an individual log event. This is a type of\n',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about/data-model/metric/"}),"Vector event"),"."),Object(o.b)("h2",{id:"lucio"},"Lucio"),Object(o.b)("p",null,"A sporty Italian that bleeds Rust, is a core member of the Vector team, and does not approve of New York pizza."),Object(o.b)("h2",{id:"metric"},"Metric"),Object(o.b)("p",null,'"Metric" refers to an individual data unit used to represent a point in time\nmeasurement. This is a type of ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about/data-model/metric/"}),"Vector event"),"."),Object(o.b)("h2",{id:"parser"},"Parser"),Object(o.b)("p",null,'"Parser" refers to a ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/transforms/"}),"transform")," that parses event data."),Object(o.b)("h2",{id:"pipeline"},"Pipeline"),Object(o.b)("p",null,'"Pipeline" refers to the end result from combining ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sources/"}),"sources"),",\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/transforms/"}),"transforms"),", and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sinks/"}),"sinks"),"."),Object(o.b)("h2",{id:"reducer"},"Reducer"),Object(o.b)("p",null,'"Reducer" refers to a ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/transforms/"}),"transform")," that reduces data into\na metric."),Object(o.b)("h2",{id:"repo"},"Repo"),Object(o.b)("p",null,'"Repo" refers to a Git respository, usually the\n',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/timberio/vector"}),"Vector Git repository"),"."),Object(o.b)("h2",{id:"role"},"Role"),Object(o.b)("p",null,'"Role" refers to a ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/setup/deployment/roles/"}),"deployment role")," that Vector is deployed\nunder."),Object(o.b)("h2",{id:"router"},"Router"),Object(o.b)("p",null,'"Router" refers is something that accepts and routes data to many destinations,\nthis is commonly used to describe Vector.'),Object(o.b)("h2",{id:"rust"},"Rust"),Object(o.b)("p",null,'"Rust" refers to the ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.rust-lang.org/"}),"Rust programming language")," that Vector is\nwritten in."),Object(o.b)("h2",{id:"sampler"},"Sampler"),Object(o.b)("p",null,'"Sampler" refers to a ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/transforms/"}),"transform")," that samples data."),Object(o.b)("h2",{id:"sink"},"Sink"),Object(o.b)("p",null,'"Sink" refers to the Vector ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sinks/"}),"sink concept"),"."),Object(o.b)("h2",{id:"source"},"Source"),Object(o.b)("p",null,'"Source" refers to the Vector ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sources/"}),"source concept"),"."),Object(o.b)("h2",{id:"structured-log"},"Structured Log"),Object(o.b)("p",null,'"Structured log" refers to a log represented in a structured form, such as\na map. This is different from a text log which is represented as a single\ntext string.'),Object(o.b)("h2",{id:"table"},"Table"),Object(o.b)("p",null,'"Table" refers to the ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/toml-lang/toml#table"}),"TOML table type"),"."),Object(o.b)("h2",{id:"toml"},"TOML"),Object(o.b)("p",null,'"TOML" refers to ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/toml-lang/toml"}),"Tom's Obvious Markup Language")," and it is the syntax\nused to represent the Vector configuration."),Object(o.b)("h2",{id:"topology"},"Topology"),Object(o.b)("p",null,'"Topology" refers to a ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/setup/deployment/topologies/"}),"deploy topology")," that Vector is\ndeployed under."),Object(o.b)("h2",{id:"transform"},"Transform"),Object(o.b)("p",null,'"Transform" refers to the Vector ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/transforms/"}),"transform concept"),"."),Object(o.b)("h2",{id:"use-case"},"Use Case"),Object(o.b)("p",null,'"Use case" refers to a way in which Vector is used, such logs, metrics,\nreducing cost, etc.'),Object(o.b)("h2",{id:"vector"},"Vector"),Object(o.b)("p",null,'"BrainRex" is the name of this project.'))}u.isMDXComponent=!0},196:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},u=function(e){var t=b(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(r),d=a,h=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return r?n.a.createElement(h,i({ref:t},l,{components:r})):n.a.createElement(h,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);