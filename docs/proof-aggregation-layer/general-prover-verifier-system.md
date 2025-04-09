---
sidebar_position: 3
---

# General Prover / Verifier System

## Purpose and Role

The **General Prover / Verifier System** is the cryptographic heart of LayerEye's verification architecture. It is responsible for recursively aggregating multiple sequential proofs into a single succinct proof of computational integrity.

By shifting computational effort to provers and constraining proof size, the system enables LayerEye to provide a universal, scalable, and cost-effective in-condition layer — enabling validity at scale.

This module is essential to:
- Make on-destination rollup at scale
- Minimize on-chain costs and bandwidth
- Allow Bitcoin to act as the universal settlement layer without needing to verify every individual computation

## Core Components

### 1. Aggregation Circuits

Aggregation circuits are special circuits that receive multiple QA-proofs as inputs and output a new, single QA-proof that attests the correctness of all previous ones.

Depending on the design and cryptographic primitives used, LayerEye supports multiple backends:

- **Halo2**: Optimized for recursive SNARKs with excellent constraints and native curve support
- **Groth16**: Highly efficient with fast verification but requires a trusted setup
- **Spartan**: Transparent ZK-SNARK design using polynomial IOP, suitable for low-trust setups
- **Plonky2**: Highly optimized, recursive STARK-compatible system designed for real-time aggregation

Each circuit is tailored to balance:
- Prover time
- Constraint efficiency
- Fast compilation 
- Verification speed

### 2. Recursive Composition Logic

Recursive aggregation is built using binary or fan-in trees, where each level of the tree performs one round of proof aggregation.

- **Leaf Nodes**: Individual normalized QA-proofs
- **Internal Nodes**: Aggregation steps (operator pipeline)
- **Root Node**: Final verification procedure considering the validity of all the original inputs

This structure ensures:
- Logarithmic recursion depth
- High parallelism
- Efficient memory usage across large batches

## Aggregation Mechanism

### Pairwise Aggregation

Formally:
```
"x_A and x_B" ⊢ two QA-proofs
```

Aggregation produces:
```
"x_C" where x_C attests both inputs and includes a single proof component. This proof centrally verifies the validity of both "x_A" and "x_B" and provides a combined validity statement.
```

This is repeated recursively until the full set is reduced to a single "x_final".

### Multi-Proof Batching

Some implementations support batching multiple proofs at once (e.g., 8, 16, 32 proofs per circuit).

Advantages:
- Lower number of aggregation rounds
- Reduced memory overhead
- Fewer final circuit evaluations

Batching may require:
- **Custom aggregation gates** in the underlying circuit
- **Polynomial commitment schemes** like:
  - **KZG** (used in PLONK for superior amortized aggregation)
  - **IPA** (inner product argument for efficient vector commitments)

## Final Aggregated Proof

After logn steps, a single final proof is produced:

<!-- ![Final Proof Equation](equation.png) -->

Where:
- qi is the recursive aggregation function embedded in the circuit
- xi is the verification logic proving that each stage of xn-1 is valid

If "x_app" verifies correctly, then every "xi" has also been validated — with only a single proof and one verification call.

## Performance Considerations

### Constraint Optimization

Each aggregation circuit is optimized for low constraint count and fast recursive verification:

- **R1CS compression** in Groth16 or Spartan-based circuits
- **Custom gates** for curve and hash operations (e.g., Poseidon, Rescue)
- **No SNARK limb** — only essential constraints are compiled into each aggregation layer

This ensures:
- Provers can generate recursive proofs quickly
- Verifiers (especially on-chain or light clients) validate with minimal cost

### Prover vs Verifier Load

One of the core design principles of LayerEye is to shift computational burden away from verifiers and toward provers.

- Provers handle recursive composition, curve arithmetic, hashing, and polynomial openings
- Verifiers simply check one small aggregated proof
- This tradeoff makes the system scalable particularly for low-resource verifiers (e.g., Light Nodes)

### Parallel Aggregation Trees

LayerEye's recursive trees are designed for horizontal scaling:

- Subtrees can be aggregated in parallel across clusters or machines
- Aggregations are "embarrassingly parallel" 
- Perfect for GPU, ASIC, or distributed grid/datacenter setups

This enables high-throughput batch processing — suitable for handling rollups, exchanges, and machine-learning ZK pipelines concurrently.

## Key Benefits

| Feature | Description |
|---------|-------------|
| Recursive Aggregation | Scales to thousands of proofs with logarithmic steps |
| Universal On-Chain Cost | Only one final proof is submitted and verified |
| Parallelism | Subtrees can be built concurrently for high throughput |
| Witness Circuit Design | Custom constraint logic for any provable/verifiable case |
| Proof System Agnostic | Works with multiple ZK backends (Halo2, Nova, Plonky2) |
| Strong Soundness Guarantee | P(false) < 10^(-80) at final proof level |

## Summary

The General Prover / Verifier System turns LayerEye into a scalable on-verification fabric, where:

- Computation can scale to massive levels
- Recursively aggregated into a single succinct proof
- Efficiently verified in Bitcoin or LayerEye's Lush blocks

This system is what makes the vision of trustless, cost-efficient, Bitcoin-secured computation at scale possible.