---
title: Integration Flow
sidebar_position: 5
---

# Integration Flow

The integration flow illustrates how different components of the LayerEdge verification ecosystem interoperate—from submitting proofs to verifying them and finally anchoring them on Bitcoin. This subpage provides a comprehensive look at how developers and node operators can see the full lifecycle of proof validation in action.

## End-to-End Workflow Overview

LayerEdge is composed of modular components that together power a decentralized zk-verification system. Two key actors in this integration pipeline are:

* **Light Node**: Performs random subset verification on incoming zk-proofs.
* **Verification Layer Tester**: Submits zk-proofs or mock data into the network over ZeroMQ.

The interaction between these two components simulates and validates the entire lifecycle of a verification round.

## Workflow Components

### 1. Local Proof Submission (Verification Layer Tester)

* The **verification-layer-tester** repository provides a CLI interface to:
   * Submit raw zk-proofs or structured JSON files.
   * Transmit these proofs over ZeroMQ to a specified node or aggregator endpoint.
   * Test the flow of incoming proof payloads into the Merkle aggregation tree.
* You can:
   * Send individual proof files via `./run.sh myProof.json`
   * Or paste data into stdin when prompted by the CLI.

### 2. Data Reception & Aggregation (Aggregator or Proof Handler)

* The incoming proofs are received by a LayerEdge node or aggregator.
* These proofs are added to a Merkle tree structure used for batching.
* Once the Merkle root is formed, the tree is broadcast to Light Nodes for distributed verification.

### 3. Distributed Verification (Light Node)

* The Light Node:
   * Discovers newly posted Merkle trees from the LayerEdge network.
   * Randomly selects a subset of the tree's leaves (proofs).
   * Performs zk-verification locally on those selected leaves.
   * Submits attestation if all checks pass.
* Verified proofs are then passed along for final commitment and anchoring.

### 4. Finalization (Bitcoin Anchoring)

* Once a batch has been verified by Light Nodes:
   * An aggregated zk-proof is generated (e.g., using recursive aggregation techniques).
   * The proof or its commitment (Merkle root or hash) is posted to Bitcoin using OP_RETURN or Taproot script-paths.
   * This serves as cryptographic finality rooted in Bitcoin's Proof-of-Work.

## Developer Utility

* This integration allows any protocol team, developer, or data scientist to:
   * Submit zk-proofs using a local dev machine and validate real-world anchoring behavior.
   * Monitor logs in the Light Node to confirm successful verification and reward eligibility.
   * Simulate verifier-challenger interactions using test proof formats.

## Full Path Summary

```
Your ZK Proof (Local JSON / CLI Input)
        ↓
Verification Layer Tester (ZeroMQ Submission)
        ↓
Aggregator / Node → Merkle Tree Commit → Proof Normalization
        ↓
Light Node Discovery → Randomized Subset Verification → Attestation
        ↓
Aggregated zk-Proof Generation → Final Commitment on Bitcoin
```

## What This Enables

* **Seamless onboarding** for test environments and early integrations.
* **Realistic verification flows** without the need to deploy your own aggregator or infrastructure stack.
* **Confidence** in LayerEdge's decentralized proof validation by observing every step of the journey from local machine to Bitcoin finality. 