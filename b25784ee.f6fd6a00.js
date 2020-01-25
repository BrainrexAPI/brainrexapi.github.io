(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{201:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return s}));var n=a(1),o=a(6),r=(a(0),a(242)),l={id:"zappa-lambda-docker",title:"Deploying machine learning models to AWS Lambda, with Connexion, Zappa and Docker",description:"We are gonna learn how to easily deploy any Python3 application to AWS lambda without having to change any code or even go into the lambda console. ",author_id:"gonwi",tags:["type: tutorial","domain: platforms","platform: aws"]},i={permalink:"/blog/zappa-lambda-docker",source:"@site/blog/2019-11-23-zappa-lambda-docker.md",description:"We are gonna learn how to easily deploy any Python3 application to AWS lambda without having to change any code or even go into the lambda console. ",date:"2019-11-23T00:00:00.000Z",tags:[{label:"type: tutorial",permalink:"/blog/tags/type-tutorial"},{label:"domain: platforms",permalink:"/blog/tags/domain-platforms"},{label:"platform: aws",permalink:"/blog/tags/platform-aws"}],title:"Deploying machine learning models to AWS Lambda, with Connexion, Zappa and Docker",nextItem:{title:"Brainrex joins Libracamp, a boot camp to build on Facebook\u2019s backed cryptocurrency project",permalink:"/blog/libracamp-selected"}},p=[{value:"Meet Micropython. A lightweight API microservice designed for easy deployment we open-sourced.",id:"meet-micropython-a-lightweight-api-microservice-designed-for-easy-deployment-we-open-sourced",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],c={rightToc:p},b="wrapper";function s(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(b,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/3840/1*TA00Ctroh-9eyrzej49Mag.png",alt:null}))),Object(r.b)("p",null,"We are gonna learn how to easily deploy any Python3 application to AWS lambda without having to change any code or even go into the lambda console."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Our proposed architecture.")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Python 3. A popular programming language for data scientists.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Flask. A micro web framework, that works with little dependencies and libraries.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://swagger.io/docs/specification/2-0/basic-structure/"}),"OpenAPI "),"2.0, formerly known as Swagger 2.0.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Zalando\u2019s ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zalando/connexion"}),"Connexion"),". handles routes, requests and response validation automatically from OpenAPI definition.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Docker. Helps us"),Object(r.b)("p",{parentName:"li"},"  cd micro-python\nStart by downloading our boilerplate code application from github"))),Object(r.b)("h2",{id:"meet-micropython-a-lightweight-api-microservice-designed-for-easy-deployment-we-open-sourced"},"Meet Micropython. A lightweight API microservice designed for easy deployment we open-sourced."),Object(r.b)("p",null,"Find source code ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/BrainrexAPI/micropython"}),"here"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"git clone [https://github.com/BrainrexAPI/micropython.git](https://github.com/BrainrexAPI/micropython)\n")),Object(r.b)("p",null,"Create a virtual environment."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"cd micro-python\n\nvirtualenv -m venv myenv\n\nsource venv/bin/activate\n")),Object(r.b)("p",null,"Run the application ",Object(r.b)("strong",{parentName:"p"},"locally")," to check everything is working."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"pip install -r requirements.txt\n\npython app.py\n")),Object(r.b)("p",null,"Open ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://0.0.0.0:5000/ui"}),"http://0.0.0.0:5000/ui")," in a web browser and you should see this:"),Object(r.b)("p",null,"Now let\u2019s deploy to Lambda if you haven\u2019t set up your credentials locally. This is a fast way to do it. First, get authenticated. For the sake of simplicity of this tutorial we are gonna use very permissive permission ( DO NOT use these settings in production)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Go to ",Object(r.b)("strong",{parentName:"p"},"Console > IAM > Users > Security Credentials > Access Keys"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Download Access Keys CSV"),Object(r.b)("p",{parentName:"li"},"  aws configure"),Object(r.b)("p",{parentName:"li"},"  export AWS_DEFAULT_REGION=us-west-2\nexport AWS_PROFILE=default"))),Object(r.b)("p",null,"Build your Docker image from Dockerfile."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"$ docker build -t myimage .\n")),Object(r.b)("p",null,"Now we create an alias for better reusability. This command runs the Docker image using your AWS_PROFILE as an argument. Then it uses the docker image you just pull"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"alias micropyshell='docker run -ti -e AWS_PROFILE=zappa -v $(pwd):/var/task -v ~/.aws/:/root/.aws  --rm myimage'\n")),Object(r.b)("p",null,"Add alias to your bash_profile to be able to run command."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"alias micropyshell >> ~/.bash_profile\n")),Object(r.b)("p",null,"Run the command you just created. This will run the docker image with your AWS configuration on it. Inside this image, we will still our dependencies and deploy to Lambda with Zappa."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"micropyshell\n")),Object(r.b)("p",null,"Now you should be inside the docker container shell."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"micropyshell>\n")),Object(r.b)("p",null,"Let\u2019s create a virtual enviroment inside container."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"virtualenv venv\nsource venv/bin/activate\n")),Object(r.b)("p",null,"Install any python package inside your docker containers."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"pip install -r requirements.txt\n")),Object(r.b)("p",null,"Deploy your services to Lambda. After you press this here is what happens after the scenes."),Object(r.b)("p",null,"From Zappa docs. Credit: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Miserlou/Zappa"}),"https://github.com/Miserlou/Zappa")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"zappa deploy dev\n")),Object(r.b)("p",null,"After you should be given an API gateway URL like this"),Object(r.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Not finding config file")),Object(r.b)("p",null,"botocore.exceptions.ProfileNotFound: The config profile (default) could not be found"),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/2096/1*FIiGHxisqMGNswKg0gE7rg.png",alt:"Error 1. Profile not found."}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"502. This could be an error when running your python program"))),Object(r.b)("p",null,"Zappa tail to see your logs."),Object(r.b)("p",null,"You can also see your logs in Cloudwatch by going to the API gateway."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"500")),Object(r.b)("p",{parentName:"li"},'  "slim_handler": true,\n"memory_size": 3008,')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Problems with NLTK Library.")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Solution: ["),Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/42382662/using-nltk-corpora-with-aws-lambda-functions-in-python"}),"https://stackoverflow.com/questions/42382662/using-nltk-corpora-with-aws-lambda-functions-in-python"),"](",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/42382662/using-nltk-corpora-with-aws-lambda-functions-in-python"}),"https://stackoverflow.com/questions/42382662/using-nltk-corpora-with-aws-lambda-functions-in-python"),")"),Object(r.b)("p",null,"Create a Enviroment Variable in the Lambda Console."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"You are using python 2.7 It won\u2019t work Check"))),Object(r.b)("p",null,"python"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Here\u2019s a weird one. Your package requires GPU")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"from thinc.neural.util import prefer_gpu, require_gpu")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Answer: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/49186886/spacy-throws-oserror-when-deployed-to-aws-lambda-using-zappa"}),"https://stackoverflow.com/questions/49186886/spacy-throws-oserror-when-deployed-to-aws-lambda-using-zappa")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"References")),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://aws.amazon.com/blogs/machine-learning/how-to-deploy-deep-learning-models-with-aws-lambda-and-tensorflow/"}),"https://aws.amazon.com/blogs/machine-learning/how-to-deploy-deep-learning-models-with-aws-lambda-and-tensorflow/")))}s.isMDXComponent=!0}}]);