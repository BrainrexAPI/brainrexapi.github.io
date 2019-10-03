# Ruby client Library for the Brainrex API

Welcome to the Brainrex API explorer, we make analytics tools for crypto and blockchain. Our currently propiertary models offer sentiment analysis, market making, blockchain monitoring and face-id verification. This AI models can be consumed from this API. We also offer integrations to open data and propietary data providers, as well as free test data we collect. There is a collection of data transformation tools. Join our Telegram group to get the latest news and ask questions [https://t.me/brainrex, #brainrex](https://t.me/brainrex). More about Brainrex at [https://brainrex.com](http://brainrex.com). Full Documentation can be found at [https://brainrexapi.github.io/docs](https://brainrexapi.github.io/docs)

This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.1.1
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.RubyClientCodegen

## Installation

### Build a gem

To build the Ruby code into a gem:

```shell
gem build swagger_client.gemspec
```

Then either install the gem locally:

```shell
gem install ./swagger_client-1.0.0.gem
```
(for development, run `gem install --dev ./swagger_client-1.0.0.gem` to install the development dependencies)

or publish the gem to a gem hosting service, e.g. [RubyGems](https://rubygems.org/).

Finally add this to the Gemfile:

    gem 'swagger_client', '~> 1.0.0'

### Install from Git

If the Ruby gem is hosted at a git repository: https://github.com/YOUR_GIT_USERNAME/YOUR_GIT_REPO, then add the following in the Gemfile:

    gem 'swagger_client', :git => 'https://github.com/YOUR_GIT_USERNAME/YOUR_GIT_REPO.git'

### Include the Ruby code directly

Include the Ruby code directly using `-I` as follows:

```shell
ruby -Ilib script.rb
```

## Getting Started

Please follow the [installation](#installation) procedure and then run the following code:
```ruby
# Load the gem
require 'swagger_client'

api_instance = SwaggerClient::BlockchainApi.new

request = SwaggerClient::Request.new # Request | Name of the blockchain and date range.


begin
  #Calculate average transccion fee of a given blockchain
  result = api_instance.blockchain_average_tx(request)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling BlockchainApi->blockchain_average_tx: #{e}"
end

```

## Documentation for API Endpoints

All URIs are relative to *https://brainrexapi.appspot.com:5000/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SwaggerClient::BlockchainApi* | [**blockchain_average_tx**](ruby/docs/BlockchainApi.md#blockchain_average_tx) | **POST** /average_tx_fee | Calculate average transccion fee of a given blockchain
*SwaggerClient::BlockchainApi* | [**blockchain_list**](ruby/docs/BlockchainApi.md#blockchain_list) | **GET** /list_blockchain | The blockchains data structure supported by the Brainrex API
*SwaggerClient::CryptoApi* | [**exchanges_download_candles**](ruby/docs/CryptoApi.md#exchanges_download_candles) | **POST** /download_candles | Downloads candle format market data
*SwaggerClient::CryptoApi* | [**exchanges_list**](ruby/docs/CryptoApi.md#exchanges_list) | **GET** /markets | The markets data structure supported by the Brainrex Market API
*SwaggerClient::CryptoApi* | [**exchanges_marketmaker**](ruby/docs/CryptoApi.md#exchanges_marketmaker) | **POST** /market_making | Market Making as a Service API.
*SwaggerClient::CryptoApi* | [**exchanges_read**](ruby/docs/CryptoApi.md#exchanges_read) | **GET** /exchanges | The exchanges data structure supported by the Brainrex API
*SwaggerClient::CryptoApi* | [**exchanges_ticker_data_download**](ruby/docs/CryptoApi.md#exchanges_ticker_data_download) | **POST** /download_ticker | Download raw ticker data from major crypto markets
*SwaggerClient::SentimentAnalysisApi* | [**sentiment_get_price_sentiment**](ruby/docs/SentimentAnalysisApi.md#sentiment_get_price_sentiment) | **POST** /get_buy_sentiment | Sentiment analysis score using a model trained for buy signals.
*SwaggerClient::SentimentAnalysisApi* | [**sentiment_get_sentiment**](ruby/docs/SentimentAnalysisApi.md#sentiment_get_sentiment) | **POST** /get_sentiment | Sentiment analysis for any given blob of text


## Documentation for Models

 - [SwaggerClient::InlineResponse200](ruby/docs/InlineResponse200.md)
 - [SwaggerClient::InlineResponse2001](ruby/docs/InlineResponse2001.md)
 - [SwaggerClient::InlineResponse2002](ruby/docs/InlineResponse2002.md)
 - [SwaggerClient::InlineResponse201](ruby/docs/InlineResponse201.md)
 - [SwaggerClient::InlineResponse2011](ruby/docs/InlineResponse2011.md)
 - [SwaggerClient::Request](ruby/docs/Request.md)
 - [SwaggerClient::Request1](ruby/docs/Request1.md)
 - [SwaggerClient::Request2](ruby/docs/Request2.md)
 - [SwaggerClient::Request3](ruby/docs/Request3.md)
 - [SwaggerClient::Text](ruby/docs/Text.md)
 - [SwaggerClient::Text1](ruby/docs/Text1.md)


## Documentation for Authorization

 All endpoints do not require authorization.