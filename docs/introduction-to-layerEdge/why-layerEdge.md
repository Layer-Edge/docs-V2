---
sidebar_position: 1
---

# Why LayerEdge?

**The Missing Verification Layer for Bitcoin**

Bitcoin is the most secure and censorship-resistant blockchain in existence. However, it was never designed for general-purpose computation or native proof verification. As a result:

* It **cannot directly verify modern zk-proofs** from off-chain computation frameworks (e.g., Groth16, PlonKy2, STARKs).
* It has **limited scripting capabilities**, which restrict its ability to support verifiable state transitions or smart contract logic.

Despite these challenges, developers continue building L2s, rollups, and decentralized applications that want to inherit Bitcoin's security. But without scalable verification, most are **forced to compromise**: 
They either skip proof verification altogether or settle on alternate chains—**breaking Bitcoin's trust model**.

---

### The Problem LayerEdge Solves

LayerEdge addresses this gap by building a **shared proof verification network anchored on Bitcoin**, solving:

1. **High Verification Costs**:
   Verifying even a single zk-proof on Bitcoin can cost hundreds or thousands of dollars. LayerEdge reduces this cost by aggregating many proofs into one succinct recursive proof, **cutting costs by up to 99%**.

2. **Isolation Between Protocols**:
   Without a common verification layer, each protocol must handle zk-proof validation independently, leading to **redundant costs, fragmented infrastructure, and low composability**.

3. **Inefficiency in Fraud Detection**:
   With no decentralized sampling mechanism for fraud detection, verifying proofs at scale without trusting centralized operators remains infeasible. LayerEdge solves this with **probabilistic Light Node validation**.

---

### Why Bitcoin Needs It

Without LayerEdge, Bitcoin's security is effectively siloed—**available only to protocols willing to bear massive costs or operate with weak assumptions**.

But Bitcoin's global trust and immutability should be **programmable, scalable, and accessible**—not locked behind technical or economic barriers.

LayerEdge **makes Bitcoin programmable for verifiable computation**, without compromising on its base layer or requiring opcode changes. It brings Bitcoin into the modular, proof-based future by:

* **Enabling secure, off-chain computation to anchor** back to Bitcoin
* **Facilitating composability across zk-powered protocols**
* **Making economic security scalable and shared**

---

### Changing the Status Quo

Prior to LayerEdge:
* ZK rollups were primarily built for Ethereum due to native verifier support.
* Bitcoin L2s either didn't verify proofs or were centralized bridges claiming Bitcoin alignment.
* Verifying a single proof on Bitcoin could be the cost of an entire chain's operational budget.

With LayerEdge:
* A **network of protocols can share one verifier**, driving per-protocol cost down as participation increases.
* **Light Nodes decentralize verification**, ensuring no single party controls trust.
* **Bitcoin becomes a global trust anchor** not just for currency, but for computation.

LayerEdge isn't just a tool—it's a protocol shift that **unlocks the next phase of Bitcoin-native verifiability**.