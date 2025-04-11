---
sidebar_position: 1
---

# High-Throughput Architecture

LayerEdge's architecture is purpose-built to deliver high performance at scale—enabling fast, decentralized verification of zk-proofs without overwhelming the network. By combining recursive aggregation, parallelization, and modular computation layers, LayerEdge achieves near-logarithmic verification time and efficient resource usage.

This section dives into the mechanisms that allow LayerEdge to process thousands to millions of zk-proofs in a scalable, cost-efficient manner—anchored to Bitcoin's Proof-of-Work for finality.

## What Makes LayerEdge Scalable?

* **Recursive zk-Proof Aggregation**  
  Combines multiple zk-proofs into one succinct proof, enabling fast, constant-time verification of large proof batches.

* **Light Node Subset Verification**  
  Verification responsibilities are distributed across many light nodes, each checking only a subset of the batch—ensuring both decentralization and performance.

* **Parallelized Computation**  
  Batch processing and Merkle-partitioned proof data allow different parts of the pipeline to run concurrently, speeding up both aggregation and validation.

* **Aggregator-Verifier Separation**  
  The system separates the heavy computation role (aggregators) from the lightweight validation role (verifiers), reducing on-chain costs and allowing resource specialization.

* **Off-Chain Computation Model**  
  Heavy lifting is offloaded from Layer 1. Only succinct proofs and commitments are anchored on-chain, maintaining low network overhead.

* **Hardware-Ready Design**  
  As hardware accelerators like GPUs and FPGAs evolve, LayerEdge's recursive and modular architecture can scale seamlessly, taking full advantage of modern computational infrastructure.

---