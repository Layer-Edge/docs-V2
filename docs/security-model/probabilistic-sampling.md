---
title: Probabilistic Sampling & Light Node Security
sidebar_position: 4
---

# Probabilistic Sampling & Light Node Security

LayerEdge introduces a novel probabilistic sampling approach to ensure decentralized and efficient verification at scale. This mechanism is crucial for maintaining the network's trust-minimized security without requiring every node to verify the full proof set. Instead, **Light Nodes** verify a randomly chosen subset of aggregated proofs, contributing collectively to the overall integrity of the system.

## Random Subset Verification

* Every Light Node selects a random subset of the aggregated proof batch for local verification.
* This dramatically reduces the computational burden on individual nodes.
* Even though each node only checks a fraction of the data, the **combined network** can confidently assess the correctness of the entire batch.

This strategy enables LayerEdge to:
* **Scale verifiability linearly with node count**
* **Avoid centralized or heavyweight verifier bottlenecks**
* **Maintain decentralization while optimizing performance**

## Randomness Source Design

To prevent manipulation or bias in subset selection, randomness is derived from:

* **Bitcoin Block Headers**: Immutable, verifiable, and globally synchronized.
* **Verifiable Random Functions (VRFs)**: Each node uses a unique seed (e.g., `nodeSeed`) to compute its proof subset in a tamper-resistant manner.

**Pseudocode for Subset Selection**
```go
function RandomSubsetSelection(nodeSeed, blockHeaderHash):
    combinedRand = Hash(nodeSeed, blockHeaderHash)
    subset = DeterministicSubsetFunction(combinedRand)
    return subset
```

This design guarantees:
* **Unpredictability**: Adversaries cannot precompute or game the selection.
* **Verifiability**: Other participants can validate that a node's subset was selected fairly using its VRF output.

## Exponential Fraud Detection

One of the most powerful aspects of probabilistic verification is its statistical strength:

If an adversary inserts a fraudulent proof in a batch of size **M**, and **L** Light Nodes independently select subsets to verify, the probability that the fraudulent proof escapes detection is:

```math
P(\text{Fraud Undetected}) = \left(1 - \frac{1}{M} \right)^L \approx e^{-L/M}
```

As the number of nodes **L** grows, this probability **drops exponentially**, making fraud practically impossible in a well-participated network.

## Node Collusion Resistance

LayerEdge's decentralized random verification model is **naturally resistant to collusion**:

* Even if some Light Nodes collude or skip checks, others (acting independently) still have a high chance of catching invalid proofs.
* Each node's subset selection is verifiable and tamper-resistant.
* Fraud detection and slashing mechanisms discourage collusion by raising the cost of dishonesty.

## Economic Enforcement

Security isn't just cryptographic—it's economic:

* **Rewards:** Light Nodes that honestly verify and report results earn LayerEdge tokens.
* **Bounties:** Any node that detects fraud and submits a valid `Disprove Transaction` earns a bonus.
* **Slashing:** Nodes that approve bad proofs or fail to verify properly are penalized or lose staked tokens.

These incentives ensure **rational actors** are aligned with the network's security goals.

| Mechanism | Benefit |
|-----------|---------|
| Random Subset Verification | Scalable and efficient zk-proof checking |
| Bitcoin Header + VRF Randomness | Unpredictable and verifiable selection |
| Exponential Detection Guarantee | Near-zero chance of undetected fraud in large networks |
| Collusion Resistance | Independent verification prevents centralized manipulation |
| Slashing + Bounties | Strong economic disincentives for malicious behavior |

LayerEdge's Light Node system is not just efficient—it's one of the **most trust-minimized, decentralized zk-verification systems** designed to scale zk-proofs on Bitcoin. 