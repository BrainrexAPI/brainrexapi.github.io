---
last_modified_on: "2020-04-19"
$schema: "/.meta/.schemas/guides.json"
title: "Send logs from a TCP, UDP, or UDS socket to Honeycomb"
description: "A simple guide to send logs from a TCP, UDP, or UDS socket to Honeycomb in just a few minutes."
author_github: https://github.com/binarylogic
cover_label: "Socket to Honeycomb Integration"
tags: ["type: tutorial","domain: sources","domain: sinks","source: socket","sink: honeycomb"]
hide_pagination: true
---

import ConfigExample from '@site/src/components/ConfigExample';
import InstallationCommand from '@site/src/components/InstallationCommand';
import Jump from '@site/src/components/Jump';
import ServiceDiagram from '@site/src/components/ServiceDiagram';
import Steps from '@site/src/components/Steps';

Logs are an _essential_ part of observing any
service; without them you are flying blind. But collecting and analyzing them
can be a real challenge -- especially at scale. Not only do you need to solve
the basic task of collecting your logs, but you must do it
in a reliable, performant, and robust manner. Nothing is more frustrating than
having your logs pipeline fall on it's face during an
outage, or even worse, disrupt more important services!

Fear not! In this guide we'll show you how to send send logs from [a TCP, UDP, or UDS socket][urls.socket] to [Honeycomb][urls.honeycomb]
and build a logs pipeline that will be the backbone of
your observability strategy.

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the template located at:

     website/guides/integrate/sources/socket/honeycomb.md.erb
-->

## Background

### What is Honeycomb?

[Honeycomb][urls.honeycomb] provides full stack observability—designed for high cardinality data and collaborative problem solving, enabling engineers to deeply understand and debug production software together.

## Strategy

### How This Guide Works

We'll be using [Vector][urls.vector_website] to accomplish this task. Vector
is a [popular][urls.vector_stars] [open-source][urls.vector_repo] utility for
building observability pipelines. It's written in [Rust][urls.rust], making it
lightweight, [ultra-fast][urls.vector_performance] and highly reliable. And
we'll be deploying Vector as a
[service][docs.strategies#service].

The [service deployment strategy][docs.strategies#service] treats Vector like a
separate service. It is designed to receive data from an upstream source and
fan-out to one or more destinations.
For this guide, Vector will receive data from
a TCP, UDP, or UDS socket via Vector's
[`socket` source][docs.sources.socket].
The following diagram demonstrates how it works.

<ServiceDiagram
  platformName={null}
  sourceName={"socket"}
  sinkName={"honeycomb"} />

### What We'll Accomplish

To be clear, here's everything we'll accomplish in this short guide:

<ul className="list--icons list--icons--checks list--indent">
  <li>
    Accept log data over a TCP, UDP, or UDS socket.
    <ul>
      <li>Automatically enrich logs with host-level context.</li>
    </ul>
  </li>
  <li>
    Send structured logs to the Honeycomb observability service.
    <ul>
      <li>Batch data to maximize throughput.</li>
      <li>Automatically retry failed requests, with backoff.</li>
      <li>Buffer your data in-memory or on-disk for performance and durability.</li>
    </ul>
  </li>
  <li className="list--icons--arrow text--pink text--bold">All in just a few minutes!</li>
</ul>

## Tutorial

<Steps headingDepth={3}>
<ol>
<li>

### Install Vector

<InstallationCommand />

</li>
<li>

### Configure Vector

<ConfigExample
  format="toml"
  path={"vector.toml"}
  sourceName={"socket"}
  sinkName={"honeycomb"} />

</li>
<li>

### Start Vector

```bash
vector --config vector.toml
```

That's it! Simple and to the point. Hit `ctrl+c` to exit.

</li>
</ol>
</Steps>

## Next Steps

Vector is _powerful_ utility and we're just scratching the surface in this
guide. Here are a few pages we recommend that demonstrate the power and
flexibility of Vector:

<Jump to="https://github.com/timberio/vector" leftIcon="github" target="_blank">
  <div className="title">Vector Github repo <span className="badge badge--primary"><i className="feather icon-star"></i> 4k</span></div>
  <div className="sub-title">Vector is free and open-source!</div>
</Jump>

<Jump to="/guides/getting-started/" leftIcon="book">
  <div className="title">Vector getting started series</div>
  <div className="sub-title">Go from zero to production in under 10 minutes!</div>
</Jump>

<Jump to="/docs/about/what-is-vector/" leftIcon="book">
  <div className="title">Vector documentation</div>
  <div className="sub-title">Thoughtful, detailed docs that respect your time.</div>
</Jump>


[docs.sources.socket]: /docs/reference/sources/socket/
[docs.strategies#service]: /docs/setup/deployment/strategies/#service
[urls.honeycomb]: https://honeycomb.io
[urls.rust]: https://www.rust-lang.org/
[urls.socket]: https://en.wikipedia.org/wiki/Network_socket
[urls.vector_performance]: https://vector.dev/#performance
[urls.vector_repo]: https://github.com/timberio/vector
[urls.vector_stars]: https://github.com/timberio/vector/stargazers
[urls.vector_website]: https://vector.dev