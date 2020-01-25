(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{125:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return d})),a.d(t,"metadata",(function(){return h})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return j}));var n=a(1),l=a(6),i=(a(0),a(242)),s=a(247),r=a(248),c=a(244),o=a(245),u=a(246),m=a(254),b=a.n(m),d={delivery_guarantee:"at_least_once",description:"The Vector `aws_kinesis_firehose` sink batches `log` events to Amazon Web Service's Kinesis Data Firehose via the `PutRecordBatch` API endpoint.",event_types:["log"],issues_url:"https://github.com/timberio/vector/issues?q=is%3Aopen+is%3Aissue+label%3A%22sink%3A+aws_kinesis_firehose%22",operating_systems:["linux","macos","windows"],sidebar_label:'aws_kinesis_firehose|["log"]',source_url:"https://github.com/timberio/vector/tree/master/src/sinks/aws_kinesis_firehose.rs",status:"beta",title:"AWS Kinesis Firehose Sink",unsupported_operating_systems:[]},h={id:"reference/sinks/aws_kinesis_firehose",title:"AWS Kinesis Firehose Sink",description:"The Vector `aws_kinesis_firehose` sink batches `log` events to Amazon Web Service's Kinesis Data Firehose via the `PutRecordBatch` API endpoint.",source:"@site/docs/reference/sinks/aws_kinesis_firehose.md",permalink:"/docs/reference/sinks/aws_kinesis_firehose",editUrl:"https://github.com/brainrexapi/edit/master/docs/reference/sinks/aws_kinesis_firehose.md",sidebar_label:'aws_kinesis_firehose|["log"]',sidebar:"docs",previous:{title:"AWS Cloudwatch Metrics Sink",permalink:"/docs/reference/sinks/aws_cloudwatch_metrics"},next:{title:"AWS Kinesis Data Streams Sink",permalink:"/docs/reference/sinks/aws_kinesis_streams"}},p=[{value:"Configuration",id:"configuration",children:[]},{value:"Options",id:"options",children:[{value:"batch",id:"batch",children:[]},{value:"buffer",id:"buffer",children:[]},{value:"encoding",id:"encoding",children:[]},{value:"healthcheck",id:"healthcheck",children:[]},{value:"region",id:"region",children:[]},{value:"request",id:"request",children:[]},{value:"stream_name",id:"stream_name",children:[]}]},{value:"Output",id:"output",children:[]},{value:"How It Works",id:"how-it-works",children:[{value:"Buffers & Batches",id:"buffers--batches",children:[]},{value:"Environment Variables",id:"environment-variables",children:[]},{value:"Health Checks",id:"health-checks",children:[]},{value:"Rate Limits",id:"rate-limits",children:[]},{value:"Retry Policy",id:"retry-policy",children:[]}]}],f={rightToc:p},O="wrapper";function j(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(i.b)(O,Object(n.a)({},f,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Vector ",Object(i.b)("inlineCode",{parentName:"p"},"aws_kinesis_firehose")," sink ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#buffers--batches"}),"batches")," ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(i.b)("inlineCode",{parentName:"a"},"log"))," events to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://aws.amazon.com/kinesis/data-firehose/"}),"Amazon Web Service's Kinesis Data Firehose")," via the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/firehose/latest/APIReference/API_PutRecordBatch.html"}),Object(i.b)("inlineCode",{parentName:"a"},"PutRecordBatch")," API endpoint"),"."),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)(s.a,{block:!0,defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"common",mdxType:"TabItem"},Object(i.b)(c.a,{fileName:"vector.toml",learnMoreUrl:"/docs/setup/configuration/",mdxType:"CodeHeader"}),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[sinks.my_sink_id]\n  type = "aws_kinesis_firehose" # must be: "aws_kinesis_firehose"\n  inputs = ["my-source-id"] # example\n  region = "us-east-1" # example\n  stream_name = "my-stream" # example\n'))),Object(i.b)(r.a,{value:"advanced",mdxType:"TabItem"},Object(i.b)(c.a,{fileName:"vector.toml",learnMoreUrl:"/docs/setup/configuration/",mdxType:"CodeHeader"}),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-toml"}),'[sinks.my_sink_id]\n  # REQUIRED - General\n  type = "aws_kinesis_firehose" # must be: "aws_kinesis_firehose"\n  inputs = ["my-source-id"] # example\n  region = "us-east-1" # example\n  stream_name = "my-stream" # example\n\n  # OPTIONAL - General\n  healthcheck = true # default\n\n  # OPTIONAL - requests\n  encoding = "json" # example, no default, enum\n\n  # OPTIONAL - Batch\n  [sinks.my_sink_id.batch]\n    max_events = 500 # default, bytes\n    timeout_secs = 1 # default, seconds\n\n  # OPTIONAL - Buffer\n  [sinks.my_sink_id.buffer]\n    type = "memory" # default, enum\n    max_events = 500 # default, events, relevant when type = "memory"\n    max_size = 104900000 # example, no default, bytes, relevant when type = "disk"\n    when_full = "block" # default, enum\n\n  # OPTIONAL - Request\n  [sinks.my_sink_id.request]\n    in_flight_limit = 5 # default\n    rate_limit_duration_secs = 1 # default, seconds\n    rate_limit_num = 5 # default\n    retry_attempts = 5 # default\n    retry_initial_backoff_secs = 1 # default, seconds\n    retry_max_duration_secs = 10 # default, seconds\n    timeout_secs = 30 # default, seconds\n')))),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)(o.a,{filters:!0,mdxType:"Fields"},Object(i.b)(u.a,{common:!1,defaultValue:null,enumValues:null,examples:[],name:"batch",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"batch"},"batch"),Object(i.b)("p",null,"Configures the sink batching behavior."),Object(i.b)(o.a,{filters:!1,mdxType:"Fields"},Object(i.b)(u.a,{common:!1,defaultValue:500,enumValues:null,examples:[500],name:"max_events",path:"batch",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"bytes",mdxType:"Field"},Object(i.b)("h4",{id:"max_events"},"max_events"),Object(i.b)("p",null,"The maximum size of a batch before it is flushed. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#buffers--batches"}),"Buffers & Batches")," for more info.")),Object(i.b)(u.a,{common:!1,defaultValue:1,enumValues:null,examples:[1],name:"timeout_secs",path:"batch",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"seconds",mdxType:"Field"},Object(i.b)("h4",{id:"timeout_secs"},"timeout_secs"),Object(i.b)("p",null,"The maximum age of a batch before it is flushed. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#buffers--batches"}),"Buffers & Batches")," for more info.")))),Object(i.b)(u.a,{common:!1,defaultValue:null,enumValues:null,examples:[],name:"buffer",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"buffer"},"buffer"),Object(i.b)("p",null,"Configures the sink buffer behavior."),Object(i.b)(o.a,{filters:!1,mdxType:"Fields"},Object(i.b)(u.a,{common:!1,defaultValue:500,enumValues:null,examples:[500],name:"max_events",path:"buffer",relevantWhen:{type:"memory"},required:!1,templateable:!1,type:"int",unit:"events",mdxType:"Field"},Object(i.b)("h4",{id:"max_events-1"},"max_events"),Object(i.b)("p",null,"The maximum number of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/#event"}),"events")," allowed in the buffer. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#buffers--batches"}),"Buffers & Batches")," for more info.")),Object(i.b)(u.a,{common:!1,defaultValue:null,enumValues:null,examples:[1049e5],name:"max_size",path:"buffer",relevantWhen:{type:"disk"},required:!1,templateable:!1,type:"int",unit:"bytes",mdxType:"Field"},Object(i.b)("h4",{id:"max_size"},"max_size"),Object(i.b)("p",null,"The maximum size of the buffer on the disk.")),Object(i.b)(u.a,{common:!1,defaultValue:"memory",enumValues:{memory:"Stores the sink's buffer in memory. This is more performant (~3x), but less durable. Data will be lost if Vector is restarted abruptly.",disk:"Stores the sink's buffer on disk. This is less performance (~3x),  but durable. Data will not be lost between restarts."},examples:["memory","disk"],name:"type",path:"buffer",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"type"},"type"),Object(i.b)("p",null,"The buffer's type / location. ",Object(i.b)("inlineCode",{parentName:"p"},"disk")," buffers are persistent and will be retained between restarts.")),Object(i.b)(u.a,{common:!1,defaultValue:"block",enumValues:{block:"Applies back pressure when the buffer is full. This prevents data loss, but will cause data to pile up on the edge.",drop_newest:"Drops new data as it's received. This data is lost. This should be used when performance is the highest priority."},examples:["block","drop_newest"],name:"when_full",path:"buffer",relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"when_full"},"when_full"),Object(i.b)("p",null,"The behavior when the buffer becomes full.")))),Object(i.b)(u.a,{common:!1,defaultValue:null,enumValues:{json:"Each event is encoded into JSON and the payload is represented as a JSON array.",text:"Each event is encoded into text via the `message` key and the payload is new line delimited."},examples:["json","text"],name:"encoding",path:null,relevantWhen:null,required:!1,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"encoding"},"encoding"),Object(i.b)("p",null,"The encoding format used to serialize the events before outputting.")),Object(i.b)(u.a,{common:!1,defaultValue:!0,enumValues:null,examples:[!0,!1],name:"healthcheck",path:null,relevantWhen:null,required:!1,templateable:!1,type:"bool",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"healthcheck"},"healthcheck"),Object(i.b)("p",null,"Enables/disables the sink healthcheck upon start. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#health-checks"}),"Health Checks")," for more info.")),Object(i.b)(u.a,{common:!0,defaultValue:null,enumValues:null,examples:["us-east-1"],name:"region",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"region"},"region"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/general/latest/gr/rande.html#cwl_region"}),"AWS region")," of the target Kinesis Firehose delivery stream resides.")),Object(i.b)(u.a,{common:!1,defaultValue:null,enumValues:null,examples:[],name:"request",path:null,relevantWhen:null,required:!1,templateable:!1,type:"table",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"request"},"request"),Object(i.b)("p",null,"Configures the sink request behavior."),Object(i.b)(o.a,{filters:!1,mdxType:"Fields"},Object(i.b)(u.a,{common:!1,defaultValue:5,enumValues:null,examples:[5],name:"in_flight_limit",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"in_flight_limit"},"in_flight_limit"),Object(i.b)("p",null,"The maximum number of in-flight requests allowed at any given time. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#rate-limits"}),"Rate Limits")," for more info.")),Object(i.b)(u.a,{common:!1,defaultValue:1,enumValues:null,examples:[1],name:"rate_limit_duration_secs",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"seconds",mdxType:"Field"},Object(i.b)("h4",{id:"rate_limit_duration_secs"},"rate_limit_duration_secs"),Object(i.b)("p",null,"The window used for the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#rate_limit_num"}),Object(i.b)("inlineCode",{parentName:"a"},"rate_limit_num"))," option See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#rate-limits"}),"Rate Limits")," for more info.")),Object(i.b)(u.a,{common:!1,defaultValue:5,enumValues:null,examples:[5],name:"rate_limit_num",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"rate_limit_num"},"rate_limit_num"),Object(i.b)("p",null,"The maximum number of requests allowed within the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#rate_limit_duration_secs"}),Object(i.b)("inlineCode",{parentName:"a"},"rate_limit_duration_secs"))," window. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#rate-limits"}),"Rate Limits")," for more info.")),Object(i.b)(u.a,{common:!1,defaultValue:5,enumValues:null,examples:[5],name:"retry_attempts",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:null,mdxType:"Field"},Object(i.b)("h4",{id:"retry_attempts"},"retry_attempts"),Object(i.b)("p",null,"The maximum number of retries to make for failed requests. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#retry-policy"}),"Retry Policy")," for more info.")),Object(i.b)(u.a,{common:!1,defaultValue:1,enumValues:null,examples:[1],name:"retry_initial_backoff_secs",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"seconds",mdxType:"Field"},Object(i.b)("h4",{id:"retry_initial_backoff_secs"},"retry_initial_backoff_secs"),Object(i.b)("p",null,"The amount of time to wait before attempting the first retry for a failed request. Once, the first retry has failed the fibonacci sequence will be used to select future backoffs.")),Object(i.b)(u.a,{common:!1,defaultValue:10,enumValues:null,examples:[10],name:"retry_max_duration_secs",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"seconds",mdxType:"Field"},Object(i.b)("h4",{id:"retry_max_duration_secs"},"retry_max_duration_secs"),Object(i.b)("p",null,"The maximum amount of time to wait between retries.")),Object(i.b)(u.a,{common:!1,defaultValue:30,enumValues:null,examples:[30],name:"timeout_secs",path:"request",relevantWhen:null,required:!1,templateable:!1,type:"int",unit:"seconds",mdxType:"Field"},Object(i.b)("h4",{id:"timeout_secs-1"},"timeout_secs"),Object(i.b)("p",null,"The maximum time a request can take before being aborted. It is highly recommended that you do not lower value below the service's internal timeout, as this could create orphaned requests, pile on retries, and result in deuplicate data downstream. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#buffers--batches"}),"Buffers & Batches")," for more info.")))),Object(i.b)(u.a,{common:!0,defaultValue:null,enumValues:null,examples:["my-stream"],name:"stream_name",path:null,relevantWhen:null,required:!0,templateable:!1,type:"string",unit:null,mdxType:"Field"},Object(i.b)("h3",{id:"stream_name"},"stream_name"),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html"}),"stream name")," of the target Kinesis Firehose delivery stream."))),Object(i.b)("h2",{id:"output"},"Output"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"aws_kinesis_firehose")," sink ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#buffers--batches"}),"batches")," ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/data-model/log/"}),Object(i.b)("inlineCode",{parentName:"a"},"log"))," events to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://aws.amazon.com/kinesis/data-firehose/"}),"Amazon Web Service's Kinesis Data Firehose")," via the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.aws.amazon.com/firehose/latest/APIReference/API_PutRecordBatch.html"}),Object(i.b)("inlineCode",{parentName:"a"},"PutRecordBatch")," API endpoint"),".\nBatches are flushed via the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#batch_size"}),Object(i.b)("inlineCode",{parentName:"a"},"batch_size"))," or\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#batch_timeout"}),Object(i.b)("inlineCode",{parentName:"a"},"batch_timeout"))," options. You can learn more in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#buffers--batches"}),"buffers &\nbatches")," section.\nFor example:"),Object(i.b)("h2",{id:"how-it-works"},"How It Works"),Object(i.b)("h3",{id:"buffers--batches"},"Buffers & Batches"),Object(i.b)(b.a,{src:"/img/buffers-and-batches-serial.svg",mdxType:"SVG"}),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"aws_kinesis_firehose")," sink buffers & batches data as\nshown in the diagram above. You'll notice that Vector treats these concepts\ndifferently, instead of treating them as global concepts, Vector treats them\nas sink specific concepts. This isolates sinks, ensuring services disruptions\nare contained and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/about/guarantees/"}),"delivery guarantees")," are honored."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Batches")," are flushed when 1 of 2 conditions are met:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The batch age meets or exceeds the configured ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#timeout_secs"}),Object(i.b)("inlineCode",{parentName:"a"},"timeout_secs")),"."),Object(i.b)("li",{parentName:"ol"},"The batch size meets or exceeds the configured ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#max_events"}),Object(i.b)("inlineCode",{parentName:"a"},"max_events")),".")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Buffers")," are controlled via the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#buffer"}),Object(i.b)("inlineCode",{parentName:"a"},"buffer.*"))," options."),Object(i.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(i.b)("p",null,"Environment variables are supported through all of Vector's configuration.\nSimply add ",Object(i.b)("inlineCode",{parentName:"p"},"${MY_ENV_VAR}")," in your Vector configuration file and the variable\nwill be replaced before being evaluated."),Object(i.b)("p",null,"You can learn more in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/setup/configuration/#environment-variables"}),"Environment Variables"),"\nsection."),Object(i.b)("h3",{id:"health-checks"},"Health Checks"),Object(i.b)("p",null,"Health checks ensure that the downstream service is accessible and ready to\naccept data. This check is performed upon sink initialization.\nIf the health check fails an error will be logged and Vector will proceed to\nstart."),Object(i.b)("h4",{id:"require-health-checks"},"Require Health Checks"),Object(i.b)("p",null,"If you'd like to exit immediately upon a health check failure, you can\npass the ",Object(i.b)("inlineCode",{parentName:"p"},"--require-healthy")," flag:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"vector --config /etc/vector/vector.toml --require-healthy\n")),Object(i.b)("h4",{id:"disable-health-checks"},"Disable Health Checks"),Object(i.b)("p",null,"If you'd like to disable health checks for this sink you can set the\n",Object(i.b)("inlineCode",{parentName:"p"},"healthcheck")," option to ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"."),Object(i.b)("h3",{id:"rate-limits"},"Rate Limits"),Object(i.b)("p",null,"Vector offers a few levers to control the rate and volume of requests to the\ndownstream service. Start with the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#rate_limit_duration_secs"}),Object(i.b)("inlineCode",{parentName:"a"},"rate_limit_duration_secs"))," and\n",Object(i.b)("inlineCode",{parentName:"p"},"rate_limit_num")," options to ensure Vector does not exceed the specified\nnumber of requests in the specified window. You can further control the pace at\nwhich this window is saturated with the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#in_flight_limit"}),Object(i.b)("inlineCode",{parentName:"a"},"in_flight_limit"))," option, which\nwill guarantee no more than the specified number of requests are in-flight at\nany given time."),Object(i.b)("p",null,"Please note, Vector's defaults are carefully chosen and it should be rare that\nyou need to adjust these. If you found a good reason to do so please share it\nwith the Vector team by ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/timberio/vector/issues/new?labels=sink%3A+aws_kinesis_firehose"}),"opening an issie"),"."),Object(i.b)("h3",{id:"retry-policy"},"Retry Policy"),Object(i.b)("p",null,"Vector will retry failed requests (status == ",Object(i.b)("inlineCode",{parentName:"p"},"429"),", >= ",Object(i.b)("inlineCode",{parentName:"p"},"500"),", and != ",Object(i.b)("inlineCode",{parentName:"p"},"501"),").\nOther responses will ",Object(i.b)("em",{parentName:"p"},"not")," be retried. You can control the number of retry\nattempts and backoff rate with the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#retry_attempts"}),Object(i.b)("inlineCode",{parentName:"a"},"retry_attempts"))," and\n",Object(i.b)("inlineCode",{parentName:"p"},"retry_backoff_secs")," options."))}j.isMDXComponent=!0},245:function(e,t,a){"use strict";var n=a(0),l=a.n(n);a(85);t.a=function({children:e,filters:t}){const[a,i]=Object(n.useState)(!1),[s,r]=Object(n.useState)(!1),[c,o]=Object(n.useState)(null);let u=Array.isArray(e)?e:[e],m=u.some(e=>e.props.common),b=u.some(e=>e.props.required),d=u;return a&&(d=d.filter(e=>e.props.common)),s&&(d=d.filter(e=>e.props.required)),c&&(d=d.filter(e=>e.props.name.toLowerCase().includes(c.toLowerCase()))),l.a.createElement("div",{className:"fields"},u.length>1&&!1!==t?l.a.createElement("div",{className:"filters"},l.a.createElement("span",{className:"result-count"},d.length," items"),l.a.createElement("div",{className:" search"},l.a.createElement("input",{type:"text",onChange:e=>o(e.currentTarget.value),placeholder:"\ud83d\udd0d Search..."})),l.a.createElement("div",{className:"checkboxes"},m&&l.a.createElement("label",{title:"Only show popular/common results"},l.a.createElement("input",{type:"checkbox",onChange:e=>i(e.currentTarget.checked),checked:a}),"common only"),b&&l.a.createElement("label",{title:"Only show required results"},l.a.createElement("input",{type:"checkbox",onChange:e=>r(e.currentTarget.checked),checked:s}),"required only"))):null,l.a.createElement("div",{className:"section-list"},!Array.isArray(d)||d.length>0?d:l.a.createElement("div",{className:"empty"},l.a.createElement("div",{className:"icon"},"\u2639"),l.a.createElement("div",null,"No fields found"))))}},246:function(e,t,a){"use strict";a(12);var n=a(0),l=a.n(n),i=a(241),s=a.n(i),r=(a(242),a(244)),c=a(251);function o(e){return JSON.stringify(e)}function u(e){return e.includes(".")?'"'+e+'"':e}function m(e,t){return(a=t)&&a.constructor===Object?"name"in t&&"value"in t?`${u(t.name)} = ${o(t.value)}`:`${u(Object.keys(t)[0])} = ${o(Object.values(t)[0])}`:e?`${e} = ${o(t)}`:`${o(t)}`;var a}function b({values:e}){let t=[];if(Array.isArray(e))for(var a in e){let n=e[a];t.push(l.a.createElement("code",{key:n},o(n))),t.push(" ")}else for(var n in e)t.push(l.a.createElement("code",{key:n,title:e[n]},o(n))),t.push(" ");return t}function d({name:e,path:t,value:a}){return l.a.createElement("code",null,m(null,a))}function h({name:e,path:t,values:a}){let n="";return a.forEach((function(t){n+=m(e,t)+"\n"})),t&&(n=`[${t}]\n${n}`),l.a.createElement("div",null,l.a.createElement(r.a,{fileName:"vector.toml"}),l.a.createElement(c.a,{className:"language-toml"},n))}function p({value:e}){let t=Object.keys(e)[0],a=Object.values(e)[0];return l.a.createElement("span",null,l.a.createElement("code",null,l.a.createElement("a",{href:`#${t}`},t))," = ",l.a.createElement("code",null,o(a)))}function f({defaultValue:e,enumValues:t,examples:a,name:i,path:s,relevantWhen:r}){const[c,o]=Object(n.useState)(!1);return e||t||a&&a.length>0?l.a.createElement("div",{className:"info"},void 0!==e?e?l.a.createElement("div",null,"Default: ",l.a.createElement(d,{name:i,path:s,value:e})):l.a.createElement("div",null,"No default"):null,t?l.a.createElement("div",null,"Enum, must be one of: ",l.a.createElement(b,{values:t})):null,r?l.a.createElement("div",null,"Only relevant when: ",l.a.createElement(p,{value:r})):null,l.a.createElement("div",null,l.a.createElement("div",{className:"show-more",onClick:()=>o(!c)},c?"Hide examples":"View examples"),c&&l.a.createElement("div",{className:"examples"},l.a.createElement(h,{name:i,path:s,values:a})))):null}t.a=function({children:e,common:t,defaultValue:a,enumValues:i,examples:r,name:c,path:o,relevantWhen:u,templateable:m,type:b,unit:d,required:h}){const[p,O]=Object(n.useState)(!1);let j=e;return p&&(j=j.filter(e=>"p"!=e.props.originalType)),l.a.createElement("div",{className:s()("field","section",h?"field-required":"",p?"field-collapsed":""),required:h},l.a.createElement("div",{className:"badges"},t&&l.a.createElement("span",{className:"badge badge--primary",title:"This is a popular that we recommend for getting started"},"common"),m&&l.a.createElement("span",{className:"badge badge--primary",title:"This option is dynamic and accepts the Vector template syntax"},"templateable"),l.a.createElement("span",{className:"badge badge--secondary"},b),i&&Object.keys(i).length>0&&l.a.createElement("span",{className:"badge badge--secondary",title:"This option is an enumation and only allows specific values"},"enum"),d&&l.a.createElement("span",{className:"badge badge--secondary"},d),h?l.a.createElement("span",{className:"badge badge--danger"},"required"):l.a.createElement("span",{className:"badge badge--secondary"},"optional")),j,!p&&l.a.createElement(f,{defaultValue:a,enumValues:i,examples:r,name:c,path:o,relevantWhen:u}))}},247:function(e,t,a){"use strict";var n=a(1),l=a(0),i=a.n(l),s=a(252),r=a(241),c=a.n(r),o=a(253),u=a.n(o);function m({block:e,centered:t,className:a,style:n,values:l,selectedValue:s,setSelectedValue:r}){return i.a.createElement("div",{className:t?"tabs--centered":""},i.a.createElement("ul",{className:c()("tabs",a,{"tabs--block":e}),style:n},l.map(({value:e,label:t})=>i.a.createElement("li",{className:c()("tab-item",{"tab-item--active":s===e}),key:e,onClick:()=>r(e)},t))))}function b({selectedValue:e,setSelectedValue:t,values:a}){return i.a.createElement(s.a,{className:"react-select-container",classNamePrefix:"react-select",options:a,isClearable:!1,placeholder:"Select a version...",value:a.find(t=>t.value==e),onChange:e=>t(e?e.value:null)})}t.a=function(e){const{block:t,centered:a,children:s,defaultValue:r,select:c,style:o,values:d,urlKey:h}=e,[p,f]=Object(l.useState)(r);return Object(l.useEffect)(()=>{if("undefined"!=typeof window&&window.location&&h){let e=u.a.parse(window.location.search);e[h]&&f(e[h])}},[]),i.a.createElement("div",null,d.length>1&&(c?i.a.createElement(b,Object(n.a)({selectedValue:p,setSelectedValue:f},e)):i.a.createElement(m,Object(n.a)({selectedValue:p,setSelectedValue:f},e))),i.a.createElement("div",{className:"margin-vert--md"},l.Children.toArray(s).filter(e=>e.props.value===p)[0]))}},248:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(e){return l.a.createElement("div",null,e.children)}}}]);