/*! For license information please see d131c913.a27cae0d.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{180:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(6),o=(n(0),n(196)),i=n(202),c=n(298),l={title:"Configuration",description:"Configuring Vector"},s={id:"setup/configuration",title:"Configuration",description:"Configuring Vector",source:"@site/docs/setup/configuration.md",permalink:"/docs/setup/configuration",editUrl:"https://github.com/timberio/vector/edit/master/website/docs/setup/configuration.md"},p=[{value:"Example",id:"example",children:[]},{value:"Quick Start",id:"quick-start",children:[]},{value:"How It Works",id:"how-it-works",children:[{value:"Config File Location",id:"config-file-location",children:[]},{value:"Environment Variables",id:"environment-variables",children:[]},{value:"Field Interpolation",id:"field-interpolation",children:[]},{value:"Syntax",id:"syntax",children:[]},{value:"Types",id:"types",children:[]}]}],b={rightToc:p},m="wrapper";function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(m,Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This section covers configuring Vector and creating\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/about/concepts/#pipelines"}),"pipelines")," like the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#example"}),"example")," below.\nVector's configuration uses the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/toml-lang/toml"}),"TOML")," syntax, and the configuration\nfile must be passed via the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/administration/process-management/#flags"}),Object(o.b)("inlineCode",{parentName:"a"},"--config")," flag"),"\nwhen ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/administration/process-management/#starting"}),"starting")," vector:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"vector --config /etc/vector/vector.toml\n")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)(i.a,{fileName:"vector.toml",mdxType:"CodeHeader"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml"}),'# Set global options\ndata_dir = "/var/lib/vector"\n\n# Ingest data by tailing one or more files\n[sources.apache_logs]\n  type         = "file"\n  include      = ["/var/log/apache2/*.log"]    # supports globbing\n  ignore_older = 86400                         # 1 day\n\n# Structure and parse the data\n[transforms.apache_parser]\n  inputs       = ["apache_logs"]\n  type         = "regex_parser"                # fast/powerful regex\n  regex        = \'^(?P<host>[w.]+) - (?P<user>[w]+) (?P<bytes_in>[d]+) [(?P<timestamp>.*)] "(?P<method>[w]+) (?P<path>.*)" (?P<status>[d]+) (?P<bytes_out>[d]+)$\'\n\n# Sample the data to save on cost\n[transforms.apache_sampler]\n  inputs       = ["apache_parser"]\n  type         = "sampler"\n  rate         = 50                            # only keep 50%\n\n# Send structured data to a short-term storage\n[sinks.es_cluster]\n  inputs       = ["apache_sampler"]            # only take sampled data\n  type         = "elasticsearch"\n  host         = "http://79.12.221.222:9200"   # local or external host\n  index        = "vector-%Y-%m-%d"             # daily indices\n\n# Send structured data to a cost-effective long-term storage\n[sinks.s3_archives]\n  inputs       = ["apache_parser"]             # don\'t sample for S3\n  type         = "aws_s3"\n  region       = "us-east-1"\n  bucket       = "my-log-archives"\n  key_prefix   = "date=%Y-%m-%d"               # daily partitions, hive friendly format\n  batch_size   = 10000000                      # 10mb uncompressed\n  compression  = "gzip"                        # compress final objects\n  encoding     = "ndjson"                      # new line delimited JSON\n\n')),Object(o.b)("h2",{id:"quick-start"},"Quick Start"),Object(o.b)("p",null,"At the very minimum, a Vector configuration file must be composed of a\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sources/"}),"source")," and a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sinks/"}),"sink"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/transforms/"}),"transforms"),"\nare optional. To get started:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Choose a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sources/"}),"source")),Object(o.b)("p",{parentName:"li"},"To begin, you'll need to ingest data into Vector. This happens through one\nor more ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sources/"}),"sources"),". For example:"),Object(o.b)(i.a,{fileName:"vector.toml",mdxType:"CodeHeader"}),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml"}),'[sources.nginx_logs]\n  type = "file"\n  include = "/var/log/nginx*.log"\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Optionally choose a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/transforms/"}),"transform")),Object(o.b)("p",{parentName:"li"},"Next, you'll want to choose a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/transforms/"}),"transform"),". Transforms are\noptional, but most configuration include at least one since they help to\nimprove your data through parsing, structuring, and enriching. For example,\nlet's use the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/transforms/regex_parser/"}),Object(o.b)("inlineCode",{parentName:"a"},"regex_parser")," transform")," to parse\nand structure our data:"),Object(o.b)(i.a,{fileName:"vector.toml",mdxType:"CodeHeader"}),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml"}),'[sources.nginx_logs]\n  type = "file"\n  include = "/var/log/nginx*.log"\n\n[transforms.nginx_parser]\n  inputs  = ["nginx_logs"] # <--- connect the transform to our source\n  type    = "regex_parser"\n  include = \'^(?P<host>[w.]+) - (?P<user>[w]+) (?P<bytes_in>[d]+) [(?P<timestamp>.*)] "(?P<method>[w]+) (?P<path>.*)" (?P<status>[d]+) (?P<bytes_out>[d]+)$\'\n')),Object(o.b)("p",{parentName:"li"},"Notice how we connected the new transform to our source via the ",Object(o.b)("inlineCode",{parentName:"p"},"inputs"),"\noption.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Choose a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sinks/"}),"sink")),Object(o.b)("p",{parentName:"li"},"Finally, you'll want to choose a sink. Sinks are responsible for emitting data\nout of Vector. For this example, we'll use the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/reference/sinks/console/"}),Object(o.b)("inlineCode",{parentName:"a"},"console")," sink"),", which is simply writes the data to\n",Object(o.b)("inlineCode",{parentName:"p"},"STDOUT"),":"),Object(o.b)(i.a,{fileName:"vector.toml",mdxType:"CodeHeader"}),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml"}),'[sources.nginx_logs]\n  type = "file"\n  include = "/var/log/nginx*.log"\n\n[transforms.nginx_parser]\n  inputs  = ["nginx_logs"]\n  type    = "regex_parser"\n  include = \'^(?P<host>[w.]+) - (?P<user>[w]+) (?P<bytes_in>[d]+) [(?P<timestamp>.*)] "(?P<method>[w]+) (?P<path>.*)" (?P<status>[d]+) (?P<bytes_out>[d]+)$\'\n\n[sinks.print]\n  inputs = ["nginx_parser"] # <--- connect the sink to our transform\n  type   = "console"\n')),Object(o.b)("p",{parentName:"li"},"Again, notice how we connect the new sink via the ",Object(o.b)("inlineCode",{parentName:"p"},"inputs")," option.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Next steps"),Object(o.b)("p",{parentName:"li"},"This serves as a basic example of how to build a minimal Vector configuration\nfile. It's likely you'll want to build more advanced pipelines which are\ncovered in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/setup/guides/"}),"guides section"),"."))),Object(o.b)("h2",{id:"how-it-works"},"How It Works"),Object(o.b)("h3",{id:"config-file-location"},"Config File Location"),Object(o.b)("p",null,"The location of your Vector configuration file depends on your ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/setup/installation/"}),"installation\nmethod"),". For most Linux based systems the file can be\nfound at ",Object(o.b)("inlineCode",{parentName:"p"},"/etc/vector/vector.toml"),"."),Object(o.b)("h3",{id:"environment-variables"},"Environment Variables"),Object(o.b)("p",null,"Vector will interpolate environment variables within your configuration file\nwith the following syntax:"),Object(o.b)(i.a,{fileName:"vector.toml",mdxType:"CodeHeader"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml"}),'[transforms.add_host]\n  type = "add_fields"\n\n  [transforms.add_host.fields]\n    host = "${HOSTNAME}"\n    environment = "${ENV:-development}" # default value when not present\n')),Object(o.b)(c.a,{type:"info",mdxType:"Alert"},Object(o.b)("p",null,"Interpolation is done before parsing the configuration file. As such, the\nentire ",Object(o.b)("inlineCode",{parentName:"p"},"${ENV_VAR}")," variable will be replaced, hence the requirement of\nquotes around the definition.")),Object(o.b)("h4",{id:"environment-variable-escaping"},"Environment Variable Escaping"),Object(o.b)("p",null,"You can escape environment variable by preceding them with a ",Object(o.b)("inlineCode",{parentName:"p"},"$")," character. For\nexample ",Object(o.b)("inlineCode",{parentName:"p"},"$${HOSTNAME}")," will be treated ",Object(o.b)("em",{parentName:"p"},"literally")," in the above environment\nvariable example."),Object(o.b)("h3",{id:"field-interpolation"},"Field Interpolation"),Object(o.b)("p",null,"Select configuration options support Vector's field interpolation syntax to\nproduce dynamic values derived from the event's data. Two syntaxes are supported\nfor fields that support field interpolation:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.rs/chrono/0.3.1/chrono/format/strftime/index.html"}),"Strptime specifiers"),". Ex: ",Object(o.b)("inlineCode",{parentName:"li"},"date=%Y/%m/%d")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/about/data-model/"}),"Event fields"),". Ex: ",Object(o.b)("inlineCode",{parentName:"li"},"{{ field_name }}"))),Object(o.b)("p",null,"For example:"),Object(o.b)(i.a,{fileName:"vector.toml",mdxType:"CodeHeader"}),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml"}),'[sinks.es_cluster]\n  type  = "elasticsearch"\n  index = "user-{{ user_id }}-%Y-%m-%d"\n')),Object(o.b)("p",null,"The above ",Object(o.b)("inlineCode",{parentName:"p"},"index")," value will be calculated for ",Object(o.b)("em",{parentName:"p"},"each")," event. For example, given\nthe following event:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "timestamp": "2019-05-02T00:23:22Z",\n  "message": "message",\n  "user_id": 2\n}\n')),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"index")," value will result in:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml"}),'index = "user-2-2019-05-02"\n')),Object(o.b)("h3",{id:"syntax"},"Syntax"),Object(o.b)("p",null,"The Vector configuration file follows the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/toml-lang/toml"}),"TOML")," syntax for it's\nsimplicity, explicitness, and relaxed white-space parsing. For more information,\nplease refer to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/toml-lang/toml"}),"TOML documentation"),"."),Object(o.b)("h3",{id:"types"},"Types"),Object(o.b)("p",null,"All TOML values types are supported. For convenience this includes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/toml-lang/toml#string"}),"Strings")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/toml-lang/toml#integer"}),"Integers")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/toml-lang/toml#float"}),"Floats")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/toml-lang/toml#boolean"}),"Booleans")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/toml-lang/toml#offset-date-time"}),"Offset Date-Times")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/toml-lang/toml#local-date-time"}),"Local Date-Times")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/toml-lang/toml#local-date"}),"Local Dates")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/toml-lang/toml#local-time"}),"Local Times")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/toml-lang/toml#array"}),"Arrays")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/toml-lang/toml#table"}),"Tables"))))}u.isMDXComponent=!0},195:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===o)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return n?r.a.createElement(d,c({ref:t},s,{components:n})):r.a.createElement(d,c({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},202:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(91);t.a=function({fileName:e,links:t}){let n=[];for(var a in t)n.push(r.a.createElement("a",{href:a.href},a.text||"Learn more&hellip;"));return r.a.createElement("div",{className:"code-header"},n.length>0&&r.a.createElement("span",{className:"code-header--links"},n),e)}},298:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(195),i=n.n(o);n(97);t.a=function({children:e,fill:t,icon:n,type:a}){let o=null;switch(a){case"success":o="check-circle";break;case"warning":o="alert-triangle";break;default:o="info"}return r.a.createElement("div",{className:i()("alert",`alert--${a}`,{"alert--fill":t}),role:"alert"},r.a.createElement("i",{className:i()("feather",`icon-${n||o}`)}),e)}}}]);