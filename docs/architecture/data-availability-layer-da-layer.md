---
sidebar_position: 4
---
# LayerEdge BSN

The **LayerEdge BSN** guarantees that all zk-proofs processed within the system remain:

* **Publicly accessible**
* **Cryptographically committed**
* **Tamper-evident**
* **Efficiently verifiable** without requiring full data replication

This system is essential for preserving decentralization and trust in a network that handles potentially millions of zk-proofs across rollups, L2s, oracles, and off-chain computation systems.

---

## Purpose and Role

Traditional blockchain designs often require nodes to store and reprocess all submitted data — an approach that doesn't scale for proof-heavy systems like zk-rollups or recursive aggregation networks.

The **LayerEdge BSN** solves this by providing:

* **Lightweight access to proof inclusion**
* **Immutable commitments to all proofs in a given batch**
* **Efficient detection of missing, tampered, or excluded data**

This enables zk-verification to scale while maintaining auditable and tamper-resistant data inclusion, even for light clients.

---

## Architecture: The LayerEdge BSN

The LayerEdge BSN operates as a sovereign Cosmos-based chain purpose-built for data availability and zk-proof anchoring.

### Key Functions:

* Publishes **Merkle roots** representing zk-proofs submitted in each verification epoch
* Maintains **timestamped attestations** of when batches are committed
* Allows **on-demand querying** for proof inclusion and status
* Serves as a **persistent availability layer** ensuring verifiable proof storage

The BSN acts as the durable metadata backbone for the broader LayerEdge protocol.

---

## Merkle Tree Construction

Proofs submitted to the LayerEdge BSN are organized using **Merkle tree commitments** for secure, efficient verification.

### Step-by-Step Process

#### 1. Per-Proof Hashing

Every normalized zk-proof $\pi_i$ is first hashed individually:

- Default hash: `SHA-256`
- ZK-friendly hash (optional): `Poseidon`

$$
H_i = H(\pi_i)H_i = H(\pi_i)
$$

These hashes represent the base data for Merkle tree leaves.

## 2. Merkle Leaves

All $H(\pi_i)$ hashes are used as leaves in the Merkle tree.

$$
Leaf nodes: H(\pi_1), H(\pi_2),..., H(\pi_n)
$$

#### 3. Tree Building

## 3. Tree Building

- Hash pairs of adjacent leaves:

$$
H_{1-2} = H(H(\pi_1)||H(\pi_2))H_{3-4} = H(H(\pi_3)||H(\pi_4))
$$

- Repeat recursively until a single **Merkle root** is produced.

$$
MerkleRoot = root(H(\pi_1), H(\pi_2), ..., H(\pi_n))
$$

This Merkle root is then **published on the LayerEdge BSN**, representing a **verifiable commitment** to the full batch of proofs.

---

## Data Retrieval & Verification

### Merkle Path Queries

Clients can verify proof inclusion by retrieving the Merkle path from leaf to root. Each query only requires:

- The proof hash $H(\pi_i)$
- Its sibling hashes up the tree
- The committed root $\text{MerkleRoot}$

This allows verification in **O(log n)** time with **minimal data transfer** - ideal for light clients.

### Tamper Detection

Merkle commitments are **collision-resistant**. Any alteration to a proof or its hash:

* Breaks the path to the root
* Makes it impossible to re-derive the committed root
* Flags the tampering attempt instantly

This ensures a **cryptographically sound availability model** for all zk-verification operations.

---

## Cross-Layer Interactions

### Aggregated Proof Commitment


* The final recursive proof $\pi_{agg}$ can itself be **hashed and committed** as a node in the Merkle tree
* This creates a **two-level integrity system**:
  * Raw proofs at the leaf level
  * Aggregated proofs or summaries at internal nodes or anchors

This supports both **fine-grained auditability** and **high-level finality checks**.

### Light Node Integration

Light Nodes actively rely on the DA Layer for:

* Verifying that their zk-proofs are included
* Detecting omission or tampering
* Independently querying the BSN for committed Merkle roots
* Attesting that a given aggregated batch includes their participation

This makes the DA system **foundational for trust-minimized light clients**, enabling full protocol participation without needing to store all data.

---

## Use Cases

| Use Case | Role of LayerEdge BSN |
|----------|------------------|
| zk-Rollup Aggregation | Commits to each rollup’s proofs for later verification |
| AI Model Auditing | Verifies off-chain zkML inference was committed |
| Decentralized Oracles | Ensures data feeds have provable zk-backed computation |
| Staking / Airdrop Validation | Commits proof of participation or task completion for rewards |
| Light Node Incentives | Tracks and verifies which users’ nodes contributed valid proofs |

## Performance Advantages

| Feature | Benefit |
|---------|---------|
| Lightweight | Verifiers only need `log(n)` hashes per proof |
| Scalable | Batches millions of proofs into a single commitment |
| Immutable | Once published on BSN, commitments are tamper-proof |
| Trustless Queries | Light clients can audit participation without full state |
| Modular Design | Future support for off-chain DA attestations or zkRollup-DA bridges |

## Summary

The **LayerEdge BSN** is a core trust foundation in LayerEdge:

* It allows zk-proofs to be **anchored and verified without full replication**
* It ensures **data integrity, auditability, and low-bandwidth inclusion verification**
* It empowers **lightweight clients, auditors, and ecosystem integrators** to verify inclusion independently
* It bridges zk-verification to **modular, sovereign DA infrastructure** on the LayerEdge BSN

By using Merkle commitments, log-time queries, and cross-layer integrity hooks, the DA Layer ensures that **every proof matters — and none can be hidden**.