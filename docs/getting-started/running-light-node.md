---
title: Running a Light Node
sidebar_position: 3
---

# Running a Light Node

LayerEdge Light Nodes are responsible for verifying subsets of Merkle trees containing zk-proofs and submitting attestations to the network. Running a Light Node allows you to contribute to decentralized verification and earn token rewards for honest participation. This guide walks you through setup, configuration, and launch.

## Clone the Repository

Start by cloning the official LayerEdge Light Node repository:

```bash
git clone https://github.com/Layer-Edge/light-node.git
cd light-node
```

## Review the README

Before setup, review the `README.md` file provided in the repository. It includes:

* Required dependencies (Go, Rust, RISC Zero toolchain)
* System requirements
* Setup tips
* Instructions for environment variable configuration

> Ensure you've installed all necessary libraries and toolchains (Go, Rust, RISC Zero) **before proceeding**.

## Configure Environment Variables

Create or edit a `.env` file in the root directory of the cloned repo. Example configuration:

```
GRPC_URL=grpc.testnet.layeredge.io:9090
CONTRACT_ADDR=cosmos1ufs3tlq4umljk0qfe8k5ya0x6hpavn897u2cnf9k0en9jr7qarqqt56709
ZK_PROVER_URL=http://127.0.0.1:3001
API_REQUEST_TIMEOUT=100
POINTS_API=http://127.0.0.1:8080
PRIVATE_KEY='cli-node-private-key'
```

### Variable Descriptions

* `GRPC_URL`: Endpoint to connect with LayerEdge's verification network.
* `CONTRACT_ADDR`: Contract address for staking, verification, or reward interaction.
* `ZK_PROVER_URL`: Local URL of your ZK prover or Merkle service.
* `PRIVATE_KEY`: Signing key used to attest verification reports (keep it secure!).

## Build & Run Instructions

### 1. Start the RISC0 Merkle Service

This Rust-based service supports proof tree evaluation:

```bash
cd risc0-merkle-service
cargo build && cargo run
```

Make sure this process is running continuously in the background.

### 2. Build the Light Node

Open a new terminal tab:

```bash
cd ../  # Return to root of the light-node repo
go build
```

### 3. Launch the Node

After building, run:

```bash
./light-node
```

If correctly configured, you should see logs such as:

* Merkle tree detection from the LayerEdge network
* ZK proof subset fetching
* Verification pass/fail logs
* Submission status for verified batches

## Validate Connectivity & Earning Rewards

Once running, your node will begin:

* Discovering Merkle trees
* Randomly selecting a subset of proofs for validation
* Submitting successful attestations

If setup correctly, you'll qualify for token rewards and appear in the Light Node leaderboard.

## Notes on Secure Participation

* Keep your private key safe. Do **not** expose it in public repos or environments.
* Logs can be piped to file or monitoring tools like Prometheus for long-term visibility.
* Restart the node if it halts after version upgrades or Merkle root changes. 