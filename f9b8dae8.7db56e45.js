(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{196:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(1),r=n(6),i=(n(0),n(205)),o={title:"Analyzing Sentiment",sidebar_label:"Analyzing Sentiment",description:"In Depth tutorial of how to extract crypto data in different formats from hundreds of exchanges."},s={id:"tutorials/analyzing-sentiment",title:"Analyzing Sentiment",description:"In Depth tutorial of how to extract crypto data in different formats from hundreds of exchanges.",source:"@site/docs/tutorials/analyzing-sentiment.md",permalink:"/docs/tutorials/analyzing-sentiment",editUrl:"https://github.com/brainrexapi/brainrexapi.github.io/edit/master/docs/tutorials/analyzing-sentiment.md",sidebar_label:"Analyzing Sentiment",sidebar:"docs",previous:{title:"All Tutorials",permalink:"/docs/tutorials"},next:{title:"Analyzing Sentiment Tutorial",permalink:"/docs/tutorials/analyzing-entities"}},l=[{value:"We will learn how to install and use the sentiment API library. For python",id:"we-will-learn-how-to-install-and-use-the-sentiment-api-library-for-python",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Your first call to the General Sentiment API",id:"your-first-call-to-the-general-sentiment-api",children:[]},{value:"Lets download a sample dataset we provide",id:"lets-download-a-sample-dataset-we-provide",children:[]}],p={rightToc:l},c="wrapper";function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(c,Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"brainrex-crypto-sentiment---quickstart"},"Brainrex Crypto Sentiment - Quickstart"),Object(i.b)("h2",{id:"we-will-learn-how-to-install-and-use-the-sentiment-api-library-for-python"},"We will learn how to install and use the sentiment API library. For python"),Object(i.b)("p",null,"Investor Sentiment Analysis\nAudience\nThis tutorial is designed to let you quickly start exploring and developing applications with the BrainrexNatural Language API."),Object(i.b)("p",null,"This tutorial steps through a Natural Language API application using Python code. The purpose here is not to explain the Python client libraries, but to explain how to make calls to the Natural Language API. Applications in Java and Node.js are essentially similar. Consult the Natural Language API Samples for samples in other languages (including this sample within the tutorial)."),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("p",null,"In order to run this tutorial you need to do the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You've installed the Brainrex Language Client for Python"),Object(i.b)("li",{parentName:"ul"},"You have signed up for the Brainrex Free tier."),Object(i.b)("li",{parentName:"ul"},"You have created API keys"),Object(i.b)("li",{parentName:"ul"},"Store API keys as enviroment variables."),Object(i.b)("li",{parentName:"ul"},"Basic familiarity with Python programming."),Object(i.b)("li",{parentName:"ul"},"Set up your Python development environment. It is recommended that you have the latest version of Python 3.8.0, pip, and -virtualenv installed on your system.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"!pip install brainrex\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"Requirement already satisfied: brainrex in /home/ga/.local/lib/python3.6/site-packages (1.0.1)\nRequirement already satisfied: python-dateutil>=2.1 in /usr/local/lib/python3.6/dist-packages (from brainrex) (2.8.0)\nRequirement already satisfied: certifi>=2017.4.17 in /usr/local/lib/python3.6/dist-packages (from brainrex) (2019.9.11)\nRequirement already satisfied: six>=1.10 in /usr/local/lib/python3.6/dist-packages (from brainrex) (1.12.0)\nRequirement already satisfied: urllib3>=1.23 in /usr/local/lib/python3.6/dist-packages (from brainrex) (1.25.6)\n\x1b[33mYou are using pip version 19.0.3, however version 19.3.1 is available.\nYou should consider upgrading via the 'pip install --upgrade pip' command.\x1b[0m\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"### Making your first call quickstart\nfrom __future__ import print_function\nimport time\nimport brainrex\nfrom brainrex.rest import ApiException\nfrom pprint import pprint\n\n# Go to console.brainrex.com/signup > APIs > Subcribe to an API > Dashboard > API Key > Copy\n# Configure API key authorization: APIKeyHeader\nconfiguration = brainrex.Configuration()\nconfiguration.api_key['x-api-key'] = 'INSERT_YOUR_API_KEY_HERE' # Paste key here\n\n# create an instance of the API class\napi_instance = brainrex.LanguageApi(brainrex.ApiClient(configuration))\ntext = brainrex.Text(\"bitcoin is the best\") # Text | String of text to be analyze for investor sentiment.\n\ntry:\n    # Sentiment analysis score using a model trained for buy signals.\n    api_response = api_instance.language_get_price_sentiment(text)\n    pprint(api_response)\nexcept ApiException as e:\n    print(\"Exception when calling LanguageApi->language_get_price_sentiment: %s\\n\" % e)\n\n")),Object(i.b)("h2",{id:"your-first-call-to-the-general-sentiment-api"},"Your first call to the General Sentiment API"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'try:\n    # Sentiment analysis score using a model trained for buy signals.\n    api_response = api_instance.language_get_general_sentiment(text)\n    pprint(api_response)\nexcept ApiException as e:\n    print("Exception when calling LanguageApi->language_get_price_sentiment: %s\\n" % e)\n')),Object(i.b)("h2",{id:"lets-download-a-sample-dataset-we-provide"},"Lets download a sample dataset we provide"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"import pandas as pd\n\ntweets_dataframe = pd.read_csv('https://s3-eu-west-1.amazonaws.com/brainrex.com/data/sample_text_data.csv')\ntweetList= tweets_dataframe.Tweet.to_list()\ntweetList[:5]\n\nfor index, tweet in enumerate(tweetList[344:366]): # Change the number of posts you want to analyze by changing this values. [start:end]\n    try:\n        text = brainrex.Text(tweet)\n        investor_score = api_instance.language_get_price_sentiment(text)\n        sentiment_score = api_instance.language_get_general_sentiment(text)\n        # TODO add response\n        print('Sentence {} investor score of {}, general sentiment score {}'.format(index, investor_score, sentiment_score))\n\n    except ApiException as e:\n        print(\"Exception when calling LanguageApi->language_get_price_sentiment: %s\\n\" % e)\n\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"%matplotlib inline\nimport matplotlib.pyplot as plt\nres = []\nfor tweet in tweetList[:30]: # Change the number of posts you want to analyze by changing this values. [start:end]\n    try:\n        text = brainrex.Text(tweet)\n        api_response = api_instance.language_get_price_sentiment(text)\n        res.append(api_response)\n    except ApiException as e:\n        print(\"Exception when calling LanguageApi->language_get_price_sentiment: %s\\n\" % e)\n# Plot the results from the sentiment scores.\nseries = pd.DataFrame(res)\nseries=series.astype(float)\nplt.style.use('ggplot')\nseries.plot(figsize=(20,4))\n")))}u.isMDXComponent=!0},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,b=u["".concat(o,".").concat(m)]||u[m]||d[m]||i;return n?r.a.createElement(b,s({ref:t},p,{components:n})):r.a.createElement(b,s({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);