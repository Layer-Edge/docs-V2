---
sidebar_position: 1
---

# Introduction

## Background

The history of blockchains is a history of tradeoffs. As the demand for scalable, trustless systems grew, so did the need for infrastructures that could go beyond simple financial transactions — into the realm of general-purpose, verifiable computation. Yet, no existing blockchain architecture fully solves the problem of **how to verify complex computations efficiently, securely, and affordably at global scale**.

Bitcoin was the first to prove that trust can be enforced without intermediaries. Ethereum extended that vision by supporting arbitrary computation. But both — and many that followed — remain fundamentally constrained by their monolithic execution and verification models.

### Blockchain's Core Bottleneck: Global Redundant Verification

Blockchains guarantee integrity by requiring every node to re-execute and re-verify all transactions. This "global interpreter" model creates **a single-threaded world computer**, where:

* Each transaction must be replayed by every validator
* State changes are bottlenecked by sequential, consensus-bound computation
* Verification is inherently expensive and non-parallelizable

This design protects against fraud but also severely limits scalability.

Even with improvements like block propagation, signature aggregation, and optimistic rollups — the **underlying burden of re-verification persists**.

### Different Chains, Same Problem

Each blockchain has approached this constraint differently — with varying trade-offs:

* **Bitcoin** offers the highest security and decentralization but the least programmability. Its scripting language is non-Turing complete and lacks native support for advanced cryptographic operations like pairing-based ZK proof verification.

* **Ethereum** embraced programmability, but still uses global re-execution for all smart contract activity. Its L2s (like zkSync, StarkNet, and Optimism) rely on expensive on-chain proof verification, pushing costs back onto the chain during settlement.

* **Solana** took a performance-first approach, using a highly parallelized runtime and high validator hardware requirements. While it achieves high throughput, this comes at the cost of centralization pressure, complex runtime design, and limited interoperability with Bitcoin-grade trust anchors.

* **Modular chains** like Celestia decouple execution, settlement, and data availability — but still depend on other layers to provide actual cryptographic verification of computation. These systems shift the architecture but not the core problem of scalable trust.

Across all these systems, the challenge remains:

**How can we scale trust?**

Not computation, not throughput — but **verifiable trust in computation results**, without forcing every node to re-check everything.

### ZK Proofs Changed the Game — But Only Halfway

Zero-Knowledge (ZK) proofs — especially SNARKs and STARKs — represent a fundamental shift in how verification is achieved.

They allow computation to happen off-chain, and generate **succinct proofs** that attest to the correctness of those computations.

This means:

* Trust is no longer enforced by re-execution
* A single proof can verify thousands of computations
* Blockchains can act as **verifiers**, not executors

But this breakthrough came with a catch:
**Verification of ZK proofs — especially on Bitcoin — is still expensive, complex, and siloed**.

Ethereum chains now settle proofs directly on L1, but often pay hundreds of dollars in gas per verification. 

Bitcoin lacks the native scripting capabilities to verify them efficiently at all — unless future opcodes like `OP_CAT` are enabled.

### The Missing Infrastructure Layer

As zk-based execution and modular architectures grow, one foundational piece is still missing from the global decentralized stack:

:::note
A shared, scalable, cost-efficient **verification layer** — grounded in Bitcoin — that can serve
**many protocols** without duplication, waste, or trust assumptions.
:::

In today's state:

* Every zk-rollup must pay its own high verification cost
* Every app-specific chain must build or bootstrap its own verifier
* Every attempt to settle on Bitcoin faces severe cost or scripting limitations
* No shared infrastructure exists to **aggregate** verification across ecosystems and amortize the cost

This lack of a **common zk-verification layer** has created fragmentation, redundancy, and prohibitive entry barriers — especially for protocols that want to rely on **Bitcoin's finality** without inheriting its limitations.

### Framing the Need for LayerEdge

LayerEdge was created to fill this missing layer in the blockchain stack. It emerges from a recognition that:

* **ZK proofs** have made trust scalable — but **verification has not scaled with them**
* Bitcoin's security is unmatched — but **still underutilized by the zk ecosystem**
* Trust-minimized infrastructure needs **shared, composable layers**, not bespoke chains
* Proof verification should be **as cheap and decentralized** as proof generation

LayerEdge represents a new category of infrastructure:

Not an L2. Not a rollup. But a decentralized **proof verification layer** — purpose-built to scale Bitcoin's security into the ZK-powered modular future.