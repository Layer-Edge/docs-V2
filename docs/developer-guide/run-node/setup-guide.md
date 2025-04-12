---
title: Light Node Setup Guide
sidebar_position: 2
---

# Light Node Setup Guide

Follow these steps to set up and run your LayerEdge CLI Light Node efficiently.

## Step 1: Clone the Light Node Repository

```bash
git clone https://github.com/Layer-Edge/light-node.git
cd light-node
```

## Step 2: Install Required Dependencies

Ensure the following dependencies are installed:

* **Go**: Version 1.18 or higher
* **Rust**: Version 1.81.0 or higher
* **Risc0 Toolchain**: If not installed, run:
```bash
curl -L https://risczero.com/install | bash && rzup install
```
* **LayerEdge gRPC Endpoint**: Ensure access to a LayerEdge node for seamless communication.

## Step 3: Configure Environment Variables

Set up the required environment variables in your terminal session or add them to a `.env` file:

```
GRPC_URL=grpc.testnet.layeredge.io:9090
CONTRACT_ADDR=cosmos1ufs3tlq4umljk0qfe8k5ya0x6hpavn897u2cnf9k0en9jr7qarqqt56709
ZK_PROVER_URL=http://127.0.0.1:3001
# Alternatively:
ZK_PROVER_URL=https://layeredge.mintair.xyz/
API_REQUEST_TIMEOUT=100
POINTS_API=https://light-node.layeredge.io
PRIVATE_KEY='cli-node-private-key'
```

**Note:** Replace `'cli-node-private-key'` with the **actual private key** of the wallet address you choose to run the CLI from. Ensure that you store your private key securely and do not expose it in public repositories or logs.

Ensure that the `ZK_PROVER_URL` matches the server where the Merkle service is running.

## Step 4: Start the Merkle Service

Before running the Light Node, start the Merkle service:

```bash
cd risc0-merkle-service
cargo build && cargo run
```

Wait until the Merkle service is fully initialized before proceeding.

## Step 5: Build and Run the LayerEdge Light Node

In a separate terminal window, navigate to the root directory and execute:

```bash
go build
./light-node
```

Ensure that the Light Node is running **independently** and correctly **connected** to the Merkle service. 