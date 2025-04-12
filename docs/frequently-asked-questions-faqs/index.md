---
title: Frequently Asked Questions (FAQs)
sidebar_position: 1
---

# Frequently Asked Questions (FAQs)

### 1. What is LayerEdge?

LayerEdge is a **verification layer** built on Bitcoin's Proof-of-Work (PoW) security. It aggregates and verifies zero-knowledge (zk) proofs from various decentralized protocols, allowing them to inherit Bitcoin's unmatched security. By leveraging zk-proof aggregation, LayerEdge ensures cost-effective and scalable verification.

---

### 2. How does LayerEdge work?

LayerEdge operates as an **verification layer** for zk-proofs using aggregation to amortize the costs. Proofs from zk protocols are aggregated, reducing the computational and onchain verification costs. The final aggregated proof is then settled on Bitcoin's L1, utilizing its PoW security to ensure trust and immutability. This model allows LayerEdge to offer scalable and secure proof verification for various applications.

---

### 3. Is LayerEdge a Bitcoin Layer 2 (L2)?

No, LayerEdge is not an L2 solution. While LayerEdge settles on Bitcoin, it doesn't produce blocks or manage transactions. Instead, it focuses on **zk-proof aggregation** and verification, offering Bitcoin's security to zk protocols through proof settlement. LayerEdge acts as a verification layer rather than handling block production.

---

### 4. How does LayerEdge compare to Polygon's Aggregation Layer?

LayerEdge and Polygon's Aggregation Layer both use **zk-proof aggregation**, but LayerEdge settles on Bitcoin while Polygon operates within the Ethereum ecosystem. Polygon's aggregation layer functions more like a rollup, verifying multiple proofs and managing execution, whereas LayerEdge exclusively aggregates and verifies zk-proofs, settling them on Bitcoin without handling execution. LayerEdge is designed for broader use, serving protocols across various ecosystems.

---

### 5. How does LayerEdge Leverage Babylon for Security?

We believe Bitcoin's Proof-of-Work security is unmatched, and it has the potential to extend far beyond its role as a store of value. LayerEdge integrates with Babylon to bring this computational security to the broader zk ecosystem. Babylon allows Proof-of-Stake (PoS) chains to inherit Bitcoin's economic security, offering them the robust and immutable trust of Bitcoin without compromising on decentralization.

By integrating with Babylon, LayerEdge creates a decentralized network of verifiers backed by Bitcoin's PoW security. This ensures zk-proofs are validated with the highest level of trust, and this shared security model allows LayerEdge to scale securely while maintaining Bitcoin's core properties.

The result?

A zk-verification layer with the computational integrity of Bitcoin, extending its use beyond simple transactions to a scalable, trust-minimized zk ecosystem.

---

### 6. What is the Role of a Validator in LayerEdge?

Validators in LayerEdge are responsible for **verifying zk-proofs**. These validators aggregate proofs from multiple protocols, ensuring their correctness before settling the final aggregated proof on Bitcoin. Validators play a crucial role in maintaining the integrity and security of the proof verification process within LayerEdge.

---

### 7. What are Aggregated Proofs and How is LayerEdge Utilizing These for Cost Efficiency?

Aggregated proofs are collections of zk-proofs from different protocols, combined into a single proof for verification. LayerEdge uses **proof aggregation** to reduce verification costs, as verifying one large aggregated proof is far more efficient than verifying each proof individually. This approach leads to cost savings of up to 95%, while maintaining the security guarantees of Bitcoin's PoW.

---

### 8. How does LayerEdge handle native verification both pre-OP_CAT and post-OP_CAT?

LayerEdge enables **native verification** both pre and post-OP_CAT. Before OP_CAT, each zk-proof must be verified individually, which is computationally expensive. Post-OP_CAT, LayerEdge can **concatenate proofs**, dramatically reducing computational overhead and allowing for more cost-effective verification. Both methods allow for native on-chain verification on Bitcoin, though post-OP_CAT provides significant cost advantages.

---

### 9. How does LayerEdge contribute to the broader zk ecosystem?

LayerEdge enhances the zk ecosystem by providing a **scalable and secure verification layer** built on Bitcoin. It allows zk-protocols to benefit from Bitcoin's PoW security without requiring them to execute directly on-chain. LayerEdge's aggregation model reduces costs and increases throughput, enabling zk-protocols to scale efficiently while inheriting Bitcoin's security.

---

### 10. Does LayerEdge support cross-chain verification?

Yes, LayerEdge is designed to support **cross-chain zk-proof aggregation**. This means that zk-proofs generated from multiple blockchains can be aggregated and verified by LayerEdge, allowing for **cross-chain interoperability** while ensuring the highest security standards by settling on Bitcoin.

---

### 11. How does LayerEdge ensure scalability with Bitcoin's block size constraint?

LayerEdge overcomes Bitcoin's block size constraint by utilizing **zk-proof aggregation**, where multiple proofs are compressed into a single proof for verification. This significantly reduces the on-chain data footprint, ensuring that even large-scale computations can be securely verified on Bitcoin without overwhelming its limited block size.

---

### 12. Can LayerEdge be used for creation of permissionless innovation?

Yes, LayerEdge is ideal for zk based **permissionless innovation** that require **secure and scalable proof verification**. By aggregating zk-proofs, LayerEdge allows appchains, rollups, execution layers to verify computations without overwhelming onchain resources, making it cost-effective for large-scale applications that rely on decentralized verification.

---