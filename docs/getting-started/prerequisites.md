---
title: Prerequisites
sidebar_position: 2
---

# Prerequisites

To begin working with the LayerEdge verification system—either as a Light Node operator or proof submitter—you'll need a basic technical setup involving cryptographic understanding, hardware compatibility, and language-specific tools. This guide outlines everything you need before moving to setup and execution.

## Cryptographic & Blockchain Knowledge

Before operating a Light Node or submitting proofs to LayerEdge, ensure you are comfortable with:

* **Zero-Knowledge Proofs**
   * Familiarity with zk-SNARKs and zk-STARKs (e.g., Groth16, Halo2, STARKy).
* **Hashing Algorithms**
   * Understanding of cryptographic hash functions like SHA-256, Poseidon (ZK-friendly), and Merkle Trees.
* **Digital Signatures**
   * Working knowledge of schemes like ECDSA and Schnorr (used in Bitcoin), and optionally Lamport signatures (for post-quantum resilience).
* **Bitcoin Anchoring Concepts**
   * Understanding how transactions are constructed and how commitments (e.g., OP_RETURN outputs) are embedded into Bitcoin blocks.
   * Familiarity with Bitcoin block headers and Merkle roots.

## Hardware & System Requirements

You don't need enterprise-grade hardware to run a Light Node or interact with LayerEdge—basic specs are enough:

### Light Node Operator Requirements

* **CPU**: Modern laptop processor or cloud-based virtual machine (e.g., AWS t3.medium, DigitalOcean Standard Droplet).
* **Memory**: 4–8 GB of RAM for Merkle proof processing and recursive verification tasks.
* **Storage**: Minimal disk space required (most data fetched over network).
* **Connectivity**: Stable internet connection is essential to fetch trees, communicate with LayerEdge, and submit proofs.

### Verification Layer Tester (Proof Submission)

* **Dependencies**:
   * A machine capable of running Go programs and handling network operations over ZeroMQ.
   * Internet access is essential for submitting test data/proofs to remote aggregators or Light Nodes.

## Language & Library Dependencies

Different components of the LayerEdge system require specific tooling. Make sure these are installed on your machine:

### Programming Languages

* **Go (Golang)**
   * Version 1.16+ (recommended: 1.18+)
   * Used for both the Light Node and verification tester
* **Rust**
   * Version 1.81.0+ required
   * Used to run the `risc0-merkle-service` for proof integrity checking and Merkle tree generation

### Messaging Middleware

* **ZeroMQ Stack (required for the verification-layer-tester)**
   * `libzmq`
   * `libczmq`
   * `pkg-config`
   * These libraries are essential for submitting proof payloads over the ZeroMQ interface.

To install on Ubuntu/Debian-based systems:
```bash
sudo apt-get update
sudo apt-get install -y libzmq3-dev libczmq-dev pkg-config
```

Then install Go's ZMQ binding:
```bash
go get gopkg.in/zeromq/goczmq.v4
```

## Additional Notes

* Ensure your system PATH includes Rust and Go binaries.
* On Windows, consider using WSL2 or Git Bash for script compatibility.
* It's recommended to clone both LayerEdge repositories ahead of time:

Light Node: [https://github.com/Layer-Edge/light-node.git](https://github.com/Layer-Edge/light-node.git)

Verification Tester: [https://github.com/Layer-Edge/verification-layer-tester.git](https://github.com/Layer-Edge/verification-layer-tester.git) 