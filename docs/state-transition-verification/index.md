---
title: State Transition Verification (STV)
sidebar_position: 1
---

# State Transition Verification (STV)

LayerEdge's **State Transition Verification (STV)** framework is a scalable and trust-minimized mechanism for validating off-chain computations — such as rollup state transitions, zkVM outputs, or application-specific logic — using Zero-Knowledge (ZK) proofs and Bitcoin anchoring.

STV enables decentralized systems to prove that complex state changes have occurred correctly, **without executing the underlying computation on-chain**. Instead, transitions are computed off-chain and validated using succinct cryptographic proofs, which are then **anchored to Bitcoin** for immutable finality.

## Core Components

This model brings together:

* **ZK-based proof generation** for correctness
* **Off-chain execution** for high throughput and low cost
* **Bitcoin anchoring** for hard finality
* **Challenge-response mechanisms** for fraud detection
* **Modular commitments** for scalable and composable verification