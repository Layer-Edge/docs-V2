---
title: Submitting Proofs via the Verification Tester
sidebar_position: 4
---

# Submitting Proofs via the Verification Tester

The Verification Tester is a simple tool built using Go and ZeroMQ that allows you to send zk-proofs or any form of data to the LayerEdge verification layer. It's ideal for developers testing custom proofs, data streams, or integrations.

## Clone the Verification Tester Repo

```bash
git clone https://github.com/Layer-Edge/verification-layer-tester.git
cd verification-layer-tester
```

## Install Prerequisites

Ensure you have the following installed:

* **Go** (1.16 or later)
* **ZeroMQ**, **CZMQ**, **pkg-config**

For Debian/Ubuntu systems:

```bash
sudo apt-get update
sudo apt-get install -y libzmq3-dev libczmq-dev pkg-config
```

Install Go bindings:

```bash
go get gopkg.in/zeromq/goczmq.v4
```

Refer to the repo README for OS-specific variations.

## Building & Running the Tester

To build:

```bash
./build.sh
```

This compiles `sample.go` into a binary named `sample`.

To run:

```bash
./run.sh
```

You can also pass a proof file:

```bash
./run.sh myProof.json
```

If omitted, the tool will prompt for manual input or use a default test proof.

## Connecting to LayerEdge or Custom Endpoints

`sample.go` sends data via ZeroMQ to a LayerEdge node or aggregator. To change the destination:

* Edit `sample.go` or any relevant config.
* Change the endpoint to your desired destination (e.g., `tcp://34.71.52.251:40000`).

## Demo Video

The GitHub repository includes a demo video that shows how to:

* Compile and run the tool.
* Submit data or test zk-proofs.
* Connect to LayerEdge or custom nodes.

It's highly recommended to view this if you're unfamiliar with the tool. 