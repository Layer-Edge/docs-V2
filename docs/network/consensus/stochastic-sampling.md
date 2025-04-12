---
title: Light Node Verification via Stochastic Sampling of Proofs
sidebar_position: 3
---

# Light Node Verification via Stochastic Sampling of Proofs

LayerEdge provides a scalable and secure method to verify large sets of zero-knowledge (ZK) proofs sourced from a variety of blockchain environments and off-chain platforms. These sources include:

* **Bitcoin Layer 2 (BTC-L2):** Off-chain solutions providing proofs of correct off-chain transaction batches
* **Data Availability (DA) Layers:** Ensuring that published data is available and verifiable
* **AI Chains:** Producing proofs of model inference correctness and AI computations
* **Decentralized Physical Infrastructure (DePin) Networks:** Attesting to the authenticity and correctness of sensor data, resource allocation, and other physical-world measurements
* **Real-World Asset (RWA) Platforms:** Proving that tokenized assets correctly represent and comply with real-world equivalents

## Aggregation and Anchoring

### Proof Aggregation

* Suppose we have a collection of proofs: π₁, π₂, …, π_N
* LayerEdge uses a binary aggregation operation (⊕) to combine them: π_root = π₁ ⊕ π₂ ⊕ … ⊕ π_N
* This "root proof" succinctly represents the correctness of all underlying proofs

### Anchoring on Bitcoin

* The hash of the root proof, H(π_root), is included in a Bitcoin transaction
* This creates a tamper-evident reference, using Bitcoin's robust security and immutability as a neutral settlement layer

## Light Node Stochastic Sampling of Proofs

* Let M be the total number of nodes (individual and aggregated proofs) in the proof structure
* Each Light Node stochastically selects one node and verifies its proof $π^k: V(π^k) = True $ if valid, False if invalid
* If V(π^k) = False, the Light Node broadcasts an alert, exposing any fraudulent proofs

## Security Through Probability

* Probability a single Light Node detects a given invalid node: $ 1/M $
* With L Light Nodes verifying independently: Probability no detection = $ (1 - 1/M)^L ≈ e^{-L/M} $
* As L increases, the chance of undetected fraud becomes negligible, ensuring a high level of security

## Incentivizing Light Nodes

Light Nodes provide a valuable verification service. To sustain their efforts:
* LayerEdge rewards them with its own tokens
* Clients of LayerEdge (BTC-L2, DA, AI, DePin, RWA) also contribute tokens as they benefit from reliable verification

This creates an economic incentive for continuous, honest participation, ensuring the long-term integrity of the network.

## Key Advantages

* **Scalability:** Each Light Node verifies only one randomly chosen proof node, minimizing computational load
* **Trust Minimization:** By relying on stochastic sampling and Bitcoin anchoring, trust in any single entity is reduced
* **Economic Sustainability:** Token incentives ensure a long-term, stable population of verifiers
* **Interoperability:** Compatible with multiple ZK-proof systems and various blockchain ecosystems

## Conclusion

By combining proof aggregation, Bitcoin anchoring, stochastic sampling of proofs by Light Nodes, and a robust incentive model, LayerEdge achieves a scalable, secure, and economically sustainable verification layer for large sets of ZK proofs. This design ensures broad coverage, strong security guarantees, and continuous incentive-aligned participation, fostering a trustworthy and efficient multi-chain ecosystem. 