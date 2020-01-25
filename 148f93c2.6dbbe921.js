(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{109:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return d})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return h})),a.d(t,"default",(function(){return j}));var n=a(1),l=a(6),i=(a(0),a(242)),r=a(247),s=a(248),c=a(244),u=a(245),o=a(246),b=a(254),m=a.n(b),d={delivery_guarantee:"best_effort",description:"The Vector `elasticsearch` sink batches `log` events to Elasticsearch via the `_bulk` API endpoint.",event_types:["log"],issues_url:"https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22sink%3A+elasticsearch%22",operating_systems:["linux","macos","windows"],sidebar_label:'elasticsearch|["log"]',source_url:"https://github.com/timberio/vector/tree/master/src/sinks/elasticsearch.rs",status:"beta",title:"Elasticsearch Sink",unsupported_operating_systems:[]},p={id:"reference/sinks/elasticsearch",title:"Elasticsearch Sink",description:"The Vector `elasticsearch` sink batches `log` events to Elasticsearch via the `_bulk` API endpoint.",source:"@site/docs/reference/sinks/elasticsearch.md",permalink:"/docs/reference/sinks/elasticsearch",editUrl:"https://github.com/brainrexapi/edit/master/docs/reference/sinks/elasticsearch.md",sidebar_label:'elasticsearch|["log"]',sidebar:"docs",previous:{title:"Datadog Metrics Sink",permalink:"/docs/reference/sinks/datadog_metrics"},next:{title:"File Sink",permalink:"/docs/reference/sinks/file"}},h=[{value:"Configuration",id:"configuration",children:[]},{value:"Options",id:"options",children:[{value:"auth",id:"auth",children:[]},{value:"batch",id:"batch",children:[]},{value:"buffer",id:"buffer",children:[]},{value:"doc_type",id:"doc_type",children:[]},{value:"headers",id:"headers",children:[]},{value:"healthcheck",id:"healthcheck",children:[]},{value:"host",id:"host",children:[]},{value:"index",id:"index",children:[]},{value:"provider",id:"provider",children:[]},{value:"query",id:"query",children:[]},{value:"region",id:"region",children:[]},{value:"request",id:"request",children:[]},{value:"tls",id:"tls",children:[]}]},{value:"Output",id:"output",children:[]},{value:"How It Works",id:"how-it-works",children:[{value:"Buffers & Batches",id:"buffers--batches",children:[]},{value:"Environment Variables",id:"environment-variables",children:[]},{value:"Health Checks",id:"health-checks",children:[]},{value:"Nested Documents",id:"nested-documents",children:[]},{value:"Rate Limits",id:"rate-limits",children:[]},{value:"Retry Policy",id:"retry-policy",children:[]},{value:"Template Syntax",id:"template-syntax",children:[]}]}],f={rightToc:h},O="wrapper";function j(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(i.b)(O,Object(n.a)({},f,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Vector ",Object(i.b)("inlineCode",{parentName:"p"},"elasticsearch")," sink ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#buffers--batches"}),"batches")," ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(i.b)("inlineCode",{parentName:"a"},"log"))," events to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.elastic.co/products/elasticsearch"}),"Elasticsearch")," via the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-bulk.html"}),Object(i.b)("inlineCode",{parentName:"a"},"_bulk")," API endpoint"),"."),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)(r.a,{block:!0,defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"common",mdxType:"TabItem"},Object(i.b)(c.a,{fileName:"vector.toml",learnMoreUrl:"/docs/setup/configuration/",mdxType:"CodeHeader"}),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[sinks.my_sink_id]\n  # REQUIRED\n  type = "elasticsearch" # must be: "elasticsearch"\n  inputs = ["my-source-id"] # example\n\n  # OPTIONAL\n  doc_type = "_doc" # default\n  index = "vector-%F" # default\n  host = "http://10.24.32.122:9000" # example, no default\n'))),Object(i.b)(s.a,{value:"advanced",mdxType:"TabItem"},Object(i.b)(c.a,{fileName:"vector.toml",learnMoreUrl:"/docs/setup/configuration/",mdxType:"CodeHeader"}),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[sinks.my_sink_id]\n  # REQUIRED - General\n  type = "elasticsearch" # must be: "elasticsearch"\n  inputs = ["my-source-id"] # example\n\n  # OPTIONAL - General\n  doc_type = "_doc" # default\n  index = "vector-%F" # default\n  healthcheck = true # default\n  host = "http://10.24.32.122:9000" # example, no default\n  provider = "default" # default, enum\n  region = "us-east-1" # example, no default\n\n  # OPTIONAL - Auth\n  [sinks.my_sink_id.auth]\n    strategy = "aws" # example, enum\n    password = "${PASSWORD_ENV_VAR}" # example, relevant when strategy = "basic"\n    user = "${USERNAME_ENV_VAR}" # example, relevant when strategy = "basic"\n\n  # OPTIONAL - Batch\n  [sinks.my_sink_id.batch]\n    max_size = 10490000 # default, bytes\n    timeout_secs = 1 # default, seconds\n\n  # OPTIONAL - Buffer\n  [sinks.my_sink_id.buffer]\n    type = "memory" # default, enum\n    max_events = 500 # default, events, relevant when type = "memory"\n    max_size = 104900000 # example, no default, bytes, relevant when type = "disk"\n    when_full = "block" # default, enum\n\n  # OPTIONAL - Headers\n  [sinks.my_sink_id.headers]\n    Authorization = "${TOKEN_ENV_VAR}" # example\n    X-Powered-By = "Vector" # example\n\n  # OPTIONAL - Query\n  [sinks.my_sink_id.query]\n    X-Powered-By = "Vector" # example\n\n  # OPTIONAL - Request\n  [sinks.my_sink_id.request]\n    in_flight_limit = 5 # default\n    rate_limit_duration_secs = 1 # default, seconds\n    rate_limit_num = 5 # default\n    retry_attempts = 5 # default\n    retry_initial_backoff_secs = 1 # default, seconds\n    retry_max_duration_secs = 10 # default, seconds\n    timeout_secs = 60 # default, seconds\n\n  # OPTIONAL - Tls\n  [sinks.my_sink_id.tls]\n    ca_path = "/path/to/certificate_authority.crt" # example, no default\n    crt_path = "/path/to/host_certificate.crt" # example, no default\n    key_pass = "PassWord1" # example, no default\n    key_path = "/path/to/host_certificate.key" # example, no default\n    verify_certificate = true # default\n    verify_hostname = true # default\n')))),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)(u.a,{filters:!0,mdxType:"Fields"},Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[],name:"auth",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"auth"},"auth"),Object(i.b)("p",null,"Options for the authentication strategy."),Object(i.b)(u.a,{filters:!1,mdxType:"Fields"},Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["${PASSWORD_ENV_VAR}","password"],name:"password",path:"auth",relevantWhen:{strategy:"basic"},required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"password"},"password"),Object(i.b)("p",null,"The basic authentication password.")),Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:{aws:"Authentication strategy used for [AWS' hosted Elasticsearch service][urls.aws_elasticsearch].",basic:"The [basic authentication strategy][urls.basic_auth]."},examples:["aws","basic"],name:"strategy",path:"auth",relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"strategy"},"strategy"),Object(i.b)("p",null,"The authentication strategy to use.")),Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["${USERNAME_ENV_VAR}","username"],name:"user",path:"auth",relevantWhen:{strategy:"basic"},required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"user"},"user"),Object(i.b)("p",null,"The basic authentication user name.")))),Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[],name:"batch",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"batch"},"batch"),Object(i.b)("p",null,"Configures the sink batching behavior."),Object(i.b)(u.a,{filters:!1,mdxType:"Fields"},Object(i.b)(o.a,{common:!1,defaultValue:1049e4,enumValues:null,examples:[1049e4],name:"max_size",path:"batch",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"bytes",mdxType:"Field"},Object(i.b)("h4",{id:"max_size"},"max_size"),Object(i.b)("p",null,"The maximum size of a batch before it is flushed. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#buffers--batches"}),"Buffers & Batches")," for more info.")),Object(i.b)(o.a,{common:!1,defaultValue:1,enumValues:null,examples:[1],name:"timeout_secs",path:"batch",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"seconds",mdxType:"Field"},Object(i.b)("h4",{id:"timeout_secs"},"timeout_secs"),Object(i.b)("p",null,"The maximum age of a batch before it is flushed. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#buffers--batches"}),"Buffers & Batches")," for more info.")))),Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[],name:"buffer",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"buffer"},"buffer"),Object(i.b)("p",null,"Configures the sink buffer behavior."),Object(i.b)(u.a,{filters:!1,mdxType:"Fields"},Object(i.b)(o.a,{common:!1,defaultValue:500,enumValues:null,examples:[500],name:"max_events",path:"buffer",relevantWhen:{type:"memory"},required:!1,templateable:!1,type:"int",unit:"events",mdxType:"Field"},Object(i.b)("h4",{id:"max_events"},"max_events"),Object(i.b)("p",null,"The maximum number of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/#event"}),"events")," allowed in the buffer.")),Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[1049e5],name:"max_size",path:"buffer",relevantWhen:{type:"disk"},required:!1,templateable:!1,type:"int",unit:"bytes",mdxType:"Field"},Object(i.b)("h4",{id:"max_size-1"},"max_size"),Object(i.b)("p",null,"The maximum size of the buffer on the disk. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#buffers--batches"}),"Buffers & Batches")," for more info.")),Object(i.b)(o.a,{common:!1,defaultValue:"memory",enumValues:{memory:"Stores the sink's buffer in memory. This is more performant (~3x), but less durable. Data will be lost if Vector is restarted abruptly.",disk:"Stores the sink's buffer on disk. This is less performance (~3x),  but durable. Data will not be lost between restarts."},examples:["memory","disk"],name:"type",path:"buffer",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"type"},"type"),Object(i.b)("p",null,"The buffer's type / location. ",Object(i.b)("inlineCode",{parentName:"p"},"disk")," buffers are persistent and will be retained between restarts.")),Object(i.b)(o.a,{common:!1,defaultValue:"block",enumValues:{block:"Applies back pressure when the buffer is full. This prevents data loss, but will cause data to pile up on the edge.",drop_newest:"Drops new data as it's received. This data is lost. This should be used when performance is the highest priority."},examples:["block","drop_newest"],name:"when_full",path:"buffer",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"when_full"},"when_full"),Object(i.b)("p",null,"The behavior when the buffer becomes full.")))),Object(i.b)(o.a,{common:!0,defaultValue:"_doc",enumValues:null,examples:["_doc"],name:"doc_type",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"doc_type"},"doc_type"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#doc_type"}),Object(i.b)("inlineCode",{parentName:"a"},"doc_type"))," for your index data. This is only relevant for Elasticsearch <= 6.X. If you are using >= 7.0 you do not need to set this option since Elasticsearch has removed it.")),Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[],name:"headers",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"headers"},"headers"),Object(i.b)("p",null,"Options for custom headers."),Object(i.b)(u.a,{filters:!1,mdxType:"Fields"},Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:[{Authorization:"${TOKEN_ENV_VAR}"},{"X-Powered-By":"Vector"}],name:"`[header-name]`",path:"headers",relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"header-name"},Object(i.b)("inlineCode",{parentName:"h4"},"[header-name]")),Object(i.b)("p",null,"A custom header to be added to each outgoing Elasticsearch request.")))),Object(i.b)(o.a,{common:!1,defaultValue:!0,enumValues:null,examples:[!0,!1],name:"healthcheck",path:null,relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"healthcheck"},"healthcheck"),Object(i.b)("p",null,"Enables/disables the sink healthcheck upon start. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#health-checks"}),"Health Checks")," for more info.")),Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:["http://10.24.32.122:9000"],name:"host",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"host"},"host"),Object(i.b)("p",null,"The host of your Elasticsearch cluster. This should be the full URL as shown in the example. This is required if the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#provider"}),Object(i.b)("inlineCode",{parentName:"a"},"provider"))," is not ",Object(i.b)("inlineCode",{parentName:"p"},'"aws"'))),Object(i.b)(o.a,{common:!0,defaultValue:"vector-%F",enumValues:null,examples:["application-{{ application_id }}-%Y-%m-%d","vector-%Y-%m-%d"],name:"index",path:null,relevantWhen:null,required:!0,templateable:!0,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"index"},"index"),Object(i.b)("p",null,"Index name to write events to. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#template-syntax"}),"Template Syntax")," for more info.")),Object(i.b)(o.a,{common:!1,defaultValue:"default",enumValues:{default:"A generic Elasticsearch provider.",aws:"The [AWS Elasticsearch Service][urls.aws_elasticsearch]."},examples:["default","aws"],name:"provider",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"provider"},"provider"),Object(i.b)("p",null,"The provider of the Elasticsearch service. This is used to properly authenticate with the Elasticsearch cluster. For example, authentication for ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://aws.amazon.com/elasticsearch-service/"}),"AWS Elasticsearch Service")," requires that we obtain AWS credentials to properly sign the request.")),Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[],name:"query",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"query"},"query"),Object(i.b)("p",null,"Custom parameters to Elasticsearch query string."),Object(i.b)(u.a,{filters:!1,mdxType:"Fields"},Object(i.b)(o.a,{common:!0,defaultValue:null,enumValues:null,examples:[{"X-Powered-By":"Vector"}],name:"`[parameter-name]`",path:"query",relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"parameter-name"},Object(i.b)("inlineCode",{parentName:"h4"},"[parameter-name]")),Object(i.b)("p",null,"A custom parameter to be added to each Elasticsearch request.")))),Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:["us-east-1"],name:"region",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"region"},"region"),Object(i.b)("p",null,"When using the AWS provider, the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/general/latest/gr/rande.html#elasticsearch-service-regions"}),"AWS region")," of the target Elasticsearch instance.")),Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[],name:"request",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"request"},"request"),Object(i.b)("p",null,"Configures the sink request behavior."),Object(i.b)(u.a,{filters:!1,mdxType:"Fields"},Object(i.b)(o.a,{common:!1,defaultValue:5,enumValues:null,examples:[5],name:"in_flight_limit",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"in_flight_limit"},"in_flight_limit"),Object(i.b)("p",null,"The maximum number of in-flight requests allowed at any given time. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#rate-limits"}),"Rate Limits")," for more info.")),Object(i.b)(o.a,{common:!1,defaultValue:1,enumValues:null,examples:[1],name:"rate_limit_duration_secs",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"seconds",mdxType:"Field"},Object(i.b)("h4",{id:"rate_limit_duration_secs"},"rate_limit_duration_secs"),Object(i.b)("p",null,"The window used for the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#rate_limit_num"}),Object(i.b)("inlineCode",{parentName:"a"},"rate_limit_num"))," option See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#rate-limits"}),"Rate Limits")," for more info.")),Object(i.b)(o.a,{common:!1,defaultValue:5,enumValues:null,examples:[5],name:"rate_limit_num",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"rate_limit_num"},"rate_limit_num"),Object(i.b)("p",null,"The maximum number of requests allowed within the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#rate_limit_duration_secs"}),Object(i.b)("inlineCode",{parentName:"a"},"rate_limit_duration_secs"))," window. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#rate-limits"}),"Rate Limits")," for more info.")),Object(i.b)(o.a,{common:!1,defaultValue:5,enumValues:null,examples:[5],name:"retry_attempts",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"retry_attempts"},"retry_attempts"),Object(i.b)("p",null,"The maximum number of retries to make for failed requests. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#retry-policy"}),"Retry Policy")," for more info.")),Object(i.b)(o.a,{common:!1,defaultValue:1,enumValues:null,examples:[1],name:"retry_initial_backoff_secs",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"seconds",mdxType:"Field"},Object(i.b)("h4",{id:"retry_initial_backoff_secs"},"retry_initial_backoff_secs"),Object(i.b)("p",null,"The amount of time to wait before attempting the first retry for a failed request. Once, the first retry has failed the fibonacci sequence will be used to select future backoffs.")),Object(i.b)(o.a,{common:!1,defaultValue:10,enumValues:null,examples:[10],name:"retry_max_duration_secs",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"seconds",mdxType:"Field"},Object(i.b)("h4",{id:"retry_max_duration_secs"},"retry_max_duration_secs"),Object(i.b)("p",null,"The maximum amount of time to wait between retries.")),Object(i.b)(o.a,{common:!1,defaultValue:60,enumValues:null,examples:[60],name:"timeout_secs",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"seconds",mdxType:"Field"},Object(i.b)("h4",{id:"timeout_secs-1"},"timeout_secs"),Object(i.b)("p",null,"The maximum time a request can take before being aborted. It is highly recommended that you do not lower value below the service's internal timeout, as this could create orphaned requests, pile on retries, and result in deuplicate data downstream. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#buffers--batches"}),"Buffers & Batches")," for more info.")))),Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:[],name:"tls",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"tls"},"tls"),Object(i.b)("p",null,"Configures the TLS options for connections from this sink."),Object(i.b)(u.a,{filters:!1,mdxType:"Fields"},Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:["/path/to/certificate_authority.crt"],name:"ca_path",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"ca_path"},"ca_path"),Object(i.b)("p",null,"Absolute path to an additional CA certificate file, in DER or PEM format (X.509).")),Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:["/path/to/host_certificate.crt"],name:"crt_path",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"crt_path"},"crt_path"),Object(i.b)("p",null,"Absolute path to a certificate file used to identify this connection, in DER or PEM format (X.509) or PKCS#12. If this is set and is not a PKCS#12 archive, ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#key_path"}),Object(i.b)("inlineCode",{parentName:"a"},"key_path"))," must also be set.")),Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:["PassWord1"],name:"key_pass",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"key_pass"},"key_pass"),Object(i.b)("p",null,"Pass phrase used to unlock the encrypted key file. This has no effect unless ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#key_pass"}),Object(i.b)("inlineCode",{parentName:"a"},"key_pass"))," above is set.")),Object(i.b)(o.a,{common:!1,defaultValue:null,enumValues:null,examples:["/path/to/host_certificate.key"],name:"key_path",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"key_path"},"key_path"),Object(i.b)("p",null,"Absolute path to a certificate key file used to identify this connection, in DER or PEM format (PKCS#8). If this is set, ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#crt_path"}),Object(i.b)("inlineCode",{parentName:"a"},"crt_path"))," must also be set.")),Object(i.b)(o.a,{common:!1,defaultValue:!0,enumValues:null,examples:[!0,!1],name:"verify_certificate",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"verify_certificate"},"verify_certificate"),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"true")," (the default), Vector will validate the TLS certificate of the remote host. Do NOT set this to ",Object(i.b)("inlineCode",{parentName:"p"},"false")," unless you understand the risks of not verifying the remote certificate.")),Object(i.b)(o.a,{common:!1,defaultValue:!0,enumValues:null,examples:[!0,!1],name:"verify_hostname",path:"tls",relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"verify_hostname"},"verify_hostname"),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"true")," (the default), Vector will validate the configured remote host name against the remote host's TLS certificate. Do NOT set this to ",Object(i.b)("inlineCode",{parentName:"p"},"false")," unless you understand the risks of not verifying the remote hostname."))))),Object(i.b)("h2",{id:"output"},"Output"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"elasticsearch")," sink ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#buffers--batches"}),"batches")," ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(i.b)("inlineCode",{parentName:"a"},"log"))," events to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.elastic.co/products/elasticsearch"}),"Elasticsearch")," via the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-bulk.html"}),Object(i.b)("inlineCode",{parentName:"a"},"_bulk")," API endpoint"),".\nBatches are flushed via the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#batch_size"}),Object(i.b)("inlineCode",{parentName:"a"},"batch_size"))," or\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#batch_timeout"}),Object(i.b)("inlineCode",{parentName:"a"},"batch_timeout"))," options. You can learn more in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#buffers--batches"}),"buffers &\nbatches")," section.\nFor example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-http"}),'POST <host>/_bulk HTTP/1.1\nHost: <host>\nContent-Type: application/x-ndjson\nContent-Length: <byte_size>\n\n{ "index" : { "_index" : "<index>" } }\n<json_encoded_log>\n{ "index" : { "_index" : "<index>" } }\n<json_encoded_log>\n{ "index" : { "_index" : "<index>" } }\n<json_encoded_log>\n')),Object(i.b)("h2",{id:"how-it-works"},"How It Works"),Object(i.b)("h3",{id:"buffers--batches"},"Buffers & Batches"),Object(i.b)(m.a,{src:"/img/buffers-and-batches-serial.svg",mdxType:"SVG"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"elasticsearch")," sink buffers & batches data as\nshown in the diagram above. You'll notice that Vector treats these concepts\ndifferently, instead of treating them as global concepts, Vector treats them\nas sink specific concepts. This isolates sinks, ensuring services disruptions\nare contained and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/guarantees/"}),"delivery guarantees")," are honored."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Batches")," are flushed when 1 of 2 conditions are met:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The batch age meets or exceeds the configured ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#timeout_secs"}),Object(i.b)("inlineCode",{parentName:"a"},"timeout_secs")),"."),Object(i.b)("li",{parentName:"ol"},"The batch size meets or exceeds the configured ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#max_size"}),Object(i.b)("inlineCode",{parentName:"a"},"max_size")),".")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Buffers")," are controlled via the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#buffer"}),Object(i.b)("inlineCode",{parentName:"a"},"buffer.*"))," options."),Object(i.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(i.b)("p",null,"Environment variables are supported through all of Vector's configuration.\nSimply add ",Object(i.b)("inlineCode",{parentName:"p"},"${MY_ENV_VAR}")," in your Vector configuration file and the variable\nwill be replaced before being evaluated."),Object(i.b)("p",null,"You can learn more in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/configuration/#environment-variables"}),"Environment Variables"),"\nsection."),Object(i.b)("h3",{id:"health-checks"},"Health Checks"),Object(i.b)("p",null,"Health checks ensure that the downstream service is accessible and ready to\naccept data. This check is performed upon sink initialization.\nIf the health check fails an error will be logged and Vector will proceed to\nstart."),Object(i.b)("h4",{id:"require-health-checks"},"Require Health Checks"),Object(i.b)("p",null,"If you'd like to exit immediately upon a health check failure, you can\npass the ",Object(i.b)("inlineCode",{parentName:"p"},"--require-healthy")," flag:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"vector --config /etc/vector/vector.toml --require-healthy\n")),Object(i.b)("h4",{id:"disable-health-checks"},"Disable Health Checks"),Object(i.b)("p",null,"If you'd like to disable health checks for this sink you can set the\n",Object(i.b)("inlineCode",{parentName:"p"},"healthcheck")," option to ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"."),Object(i.b)("h3",{id:"nested-documents"},"Nested Documents"),Object(i.b)("p",null,"Vector will explode events into nested documents before writing them to\nElasticsearch. Vector assumes keys with a . delimit nested fields. You can read\nmore about how Vector handles nested documents in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/"}),"Data Model\ndocument"),"."),Object(i.b)("h3",{id:"rate-limits"},"Rate Limits"),Object(i.b)("p",null,"Vector offers a few levers to control the rate and volume of requests to the\ndownstream service. Start with the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#rate_limit_duration_secs"}),Object(i.b)("inlineCode",{parentName:"a"},"rate_limit_duration_secs"))," and\n",Object(i.b)("inlineCode",{parentName:"p"},"rate_limit_num")," options to ensure Vector does not exceed the specified\nnumber of requests in the specified window. You can further control the pace at\nwhich this window is saturated with the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#in_flight_limit"}),Object(i.b)("inlineCode",{parentName:"a"},"in_flight_limit"))," option, which\nwill guarantee no more than the specified number of requests are in-flight at\nany given time."),Object(i.b)("p",null,"Please note, Vector's defaults are carefully chosen and it should be rare that\nyou need to adjust these. If you found a good reason to do so please share it\nwith the Vector team by ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/timberio/vector/issues/new?labels=sink%3A+elasticsearch"}),"opening an issie"),"."),Object(i.b)("h3",{id:"retry-policy"},"Retry Policy"),Object(i.b)("p",null,"Vector will retry failed requests (status == ",Object(i.b)("inlineCode",{parentName:"p"},"429"),", >= ",Object(i.b)("inlineCode",{parentName:"p"},"500"),", and != ",Object(i.b)("inlineCode",{parentName:"p"},"501"),").\nOther responses will ",Object(i.b)("em",{parentName:"p"},"not")," be retried. You can control the number of retry\nattempts and backoff rate with the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#retry_attempts"}),Object(i.b)("inlineCode",{parentName:"a"},"retry_attempts"))," and\n",Object(i.b)("inlineCode",{parentName:"p"},"retry_backoff_secs")," options."),Object(i.b)("h3",{id:"template-syntax"},"Template Syntax"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#index"}),Object(i.b)("inlineCode",{parentName:"a"},"index"))," options\nsupport ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/configuration/#template-syntax"}),"Vector's template syntax"),",\nenabling dynamic values derived from the event's data. This syntax accepts\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.rs/chrono/0.3.1/chrono/format/strftime/index.html"}),"strptime specifiers")," as well as the\n",Object(i.b)("inlineCode",{parentName:"p"},"{{ field_name }}")," syntax for accessing event fields. For example:"),Object(i.b)(c.a,{fileName:"vector.toml",mdxType:"CodeHeader"}),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[sinks.my_elasticsearch_sink_id]\n  # ...\n  index = "application-{{ application_id }}-%Y-%m-%d"\n  index = "vector-%Y-%m-%d"\n  # ...\n')),Object(i.b)("p",null,"You can read more about the complete syntax in the\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/configuration/#template-syntax"}),"template syntax section"),"."))}j.isMDXComponent=!0},245:function(e,t,a){"use strict";var n=a(0),l=a.n(n);a(85);t.a=function({children:e,filters:t}){const[a,i]=Object(n.useState)(!1),[r,s]=Object(n.useState)(!1),[c,u]=Object(n.useState)(null);let o=Array.isArray(e)?e:[e],b=o.some(e=>e.props.common),m=o.some(e=>e.props.required),d=o;return a&&(d=d.filter(e=>e.props.common)),r&&(d=d.filter(e=>e.props.required)),c&&(d=d.filter(e=>e.props.name.toLowerCase().includes(c.toLowerCase()))),l.a.createElement("div",{className:"fields"},o.length>1&&!1!==t?l.a.createElement("div",{className:"filters"},l.a.createElement("span",{className:"result-count"},d.length," items"),l.a.createElement("div",{className:" search"},l.a.createElement("input",{type:"text",onChange:e=>u(e.currentTarget.value),placeholder:"\ud83d\udd0d Search..."})),l.a.createElement("div",{className:"checkboxes"},b&&l.a.createElement("label",{title:"Only show popular/common results"},l.a.createElement("input",{type:"checkbox",onChange:e=>i(e.currentTarget.checked),checked:a}),"common only"),m&&l.a.createElement("label",{title:"Only show required results"},l.a.createElement("input",{type:"checkbox",onChange:e=>s(e.currentTarget.checked),checked:r}),"required only"))):null,l.a.createElement("div",{className:"section-list"},!Array.isArray(d)||d.length>0?d:l.a.createElement("div",{className:"empty"},l.a.createElement("div",{className:"icon"},"\u2639"),l.a.createElement("div",null,"No fields found"))))}},246:function(e,t,a){"use strict";a(12);var n=a(0),l=a.n(n),i=a(241),r=a.n(i),s=(a(242),a(244)),c=a(251);function u(e){return JSON.stringify(e)}function o(e){return e.includes(".")?'"'+e+'"':e}function b(e,t){return(a=t)&&a.constructor===Object?"name"in t&&"value"in t?`${o(t.name)} = ${u(t.value)}`:`${o(Object.keys(t)[0])} = ${u(Object.values(t)[0])}`:e?`${e} = ${u(t)}`:`${u(t)}`;var a}function m({values:e}){let t=[];if(Array.isArray(e))for(var a in e){let n=e[a];t.push(l.a.createElement("code",{key:n},u(n))),t.push(" ")}else for(var n in e)t.push(l.a.createElement("code",{key:n,title:e[n]},u(n))),t.push(" ");return t}function d({name:e,path:t,value:a}){return l.a.createElement("code",null,b(null,a))}function p({name:e,path:t,values:a}){let n="";return a.forEach((function(t){n+=b(e,t)+"\n"})),t&&(n=`[${t}]\n${n}`),l.a.createElement("div",null,l.a.createElement(s.a,{fileName:"vector.toml"}),l.a.createElement(c.a,{className:"language-toml"},n))}function h({value:e}){let t=Object.keys(e)[0],a=Object.values(e)[0];return l.a.createElement("span",null,l.a.createElement("code",null,l.a.createElement("a",{href:`#${t}`},t))," = ",l.a.createElement("code",null,u(a)))}function f({defaultValue:e,enumValues:t,examples:a,name:i,path:r,relevantWhen:s}){const[c,u]=Object(n.useState)(!1);return e||t||a&&a.length>0?l.a.createElement("div",{className:"info"},void 0!==e?e?l.a.createElement("div",null,"Default: ",l.a.createElement(d,{name:i,path:r,value:e})):l.a.createElement("div",null,"No default"):null,t?l.a.createElement("div",null,"Enum, must be one of: ",l.a.createElement(m,{values:t})):null,s?l.a.createElement("div",null,"Only relevant when: ",l.a.createElement(h,{value:s})):null,l.a.createElement("div",null,l.a.createElement("div",{className:"show-more",onClick:()=>u(!c)},c?"Hide examples":"View examples"),c&&l.a.createElement("div",{className:"examples"},l.a.createElement(p,{name:i,path:r,values:a})))):null}t.a=function({children:e,common:t,defaultValue:a,enumValues:i,examples:s,name:c,path:u,relevantWhen:o,templateable:b,type:m,unit:d,required:p}){const[h,O]=Object(n.useState)(!1);let j=e;return h&&(j=j.filter(e=>"p"!=e.props.originalType)),l.a.createElement("div",{className:r()("field","section",p?"field-required":"",h?"field-collapsed":""),required:p},l.a.createElement("div",{className:"badges"},t&&l.a.createElement("span",{className:"badge badge--primary",title:"This is a popular that we recommend for getting started"},"common"),b&&l.a.createElement("span",{className:"badge badge--primary",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),l.a.createElement("span",{className:"badge badge--secondary"},m),i&&Object.keys(i).length>0&&l.a.createElement("span",{className:"badge badge--secondary",title:"This option is an enumation and only allows specific values"},"enum"),d&&l.a.createElement("span",{className:"badge badge--secondary"},d),p?l.a.createElement("span",{className:"badge badge--danger"},"required"):l.a.createElement("span",{className:"badge badge--secondary"},"optional")),j,!h&&l.a.createElement(f,{defaultValue:a,enumValues:i,examples:s,name:c,path:u,relevantWhen:o}))}},247:function(e,t,a){"use strict";var n=a(1),l=a(0),i=a.n(l),r=a(252),s=a(241),c=a.n(s),u=a(253),o=a.n(u);function b({block:e,centered:t,className:a,style:n,values:l,selectedValue:r,setSelectedValue:s}){return i.a.createElement("div",{className:t?"tabs--centered":""},i.a.createElement("ul",{className:c()("tabs",a,{"tabs--block":e}),style:n},l.map(({value:e,label:t})=>i.a.createElement("li",{className:c()("tab-item",{"tab-item--active":r===e}),key:e,onClick:()=>s(e)},t))))}function m({selectedValue:e,setSelectedValue:t,values:a}){return i.a.createElement(r.a,{className:"react-select-container",classNamePrefix:"react-select",options:a,isClearable:!1,placeholder:"Select a version...",value:a.find(t=>t.value==e),onChange:e=>t(e?e.value:null)})}t.a=function(e){const{block:t,centered:a,children:r,defaultValue:s,select:c,style:u,values:d,urlKey:p}=e,[h,f]=Object(l.useState)(s);return Object(l.useEffect)(()=>{if("undefined"!=typeof window&&window.location&&p){let e=o.a.parse(window.location.search);e[p]&&f(e[p])}},[]),i.a.createElement("div",null,d.length>1&&(c?i.a.createElement(m,Object(n.a)({selectedValue:h,setSelectedValue:f},e)):i.a.createElement(b,Object(n.a)({selectedValue:h,setSelectedValue:f},e))),i.a.createElement("div",{className:"margin-vert--md"},l.Children.toArray(r).filter(e=>e.props.value===h)[0]))}},248:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){return l.a.createElement("div",null,e.children)}}}]);