---
title: Randomized Proof Selection
sidebar_position: 3
---

# Randomized Proof Selection

In LayerEdge, Light Nodes do **not verify every proof** in the aggregated batch. Instead, each Light Node is responsible for checking a **random subset** of zk-proofs. This approach drastically reduces the computational burden per node while still providing high security through **probabilistic guarantees**.

If all Light Nodes independently verify their assigned subset, then:

* The **likelihood that a fraudulent proof goes undetected becomes exponentially small**.
* The **overall system security increases with the number of participants**, even if each one sees only a tiny fraction of the batch.

This **randomized verification architecture** is central to LayerEdge's scalability and decentralization.

## Why Verifiable Random Functions?

Verifiable Random Functions (VRFs) offer powerful guarantees that make them ideal for secure subset selection in LayerEdge:

| Property | Description |
|----------|-------------|
| **Unpredictability** | Prevents adversaries from knowing which proofs a node will verify ahead of time |
| **Verifiability** | Enables third parties to **confirm** that a Light Node's subset was honestly computed |
| **Tamper Resistance** | Nodes **cannot cheat** by selectively ignoring difficult proofs |
| **Consistency** | Ensures that randomness selection is **deterministic per node**, based on public and private entropy |

## Design Implications

### Security by Randomness

This system ensures that **no single node controls what it sees**, and **no adversary can selectively avoid validation**. If a node attempts to approve a faulty proof, another honest node assigned that same proof will likely detect and report it.

This property is essential to LayerEdge's **collusion resistance and trust-minimization**.

### Deterministic + Auditable

Every Light Node's subset can be:

* **Independently recalculated** using their public VRF key and the known Bitcoin block hash,
* **Audited after the fact** for accuracy and proof coverage,
* **Verified by the network** to enforce reward or slashing policies.

## Element Summary

| Element | Description |
|---------|-------------|
| **Subset Type** | Randomized zk-proof indices from the aggregated batch |
| **Selection Function** | Deterministic, tamper-resistant subset generator |
| **Security Model** | Exponential fraud resistance through decentralized random sampling |
| **Verifiability** | Subsets are audit-friendly and cryptographically provable |

Randomized Proof Selection in LayerEdge ensures that verification:

* **Scales with participation**, not proof size,
* **Stays decentralized** and trustless,
* And enables **millions of zk-proofs to be validated per epoch** — all without burdening individual nodes or relying on centralized authorities.

It's the backbone of scalable zk-validation — making Bitcoin the cryptographic anchor for verifiable computation at internet scale. 