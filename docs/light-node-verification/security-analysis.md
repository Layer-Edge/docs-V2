---
title: Security Analysis
sidebar_position: 5
---

# Security Analysis

LayerEdge's Light Node verification system is grounded in a **probabilistic security model** that leverages decentralized sampling, cryptographic randomness, and economic incentives. Despite each Light Node only verifying a subset of zk-proofs, the system achieves extremely high fraud detection guarantees due to **random redundancy** and **economic alignment**.

This section explores the mathematical, economic, and structural security assumptions underpinning Light Node operation.

## Exponential Fraud Detection Probability

The core idea behind LayerEdge's Light Node security model is that the **probability of a fraudulent proof escaping detection declines exponentially** as the number of independent verifiers increases.

### Formal Model

Let:

* $L$ = Number of Light Nodes
* $M$ = Total number of zk-proofs in the aggregated batch

If each Light Node randomly selects and verifies one proof, the probability that **a single fraudulent proof remains undetected** is given by:

$$
P_{\text{undetected}} = \left(1 - \frac{1}{M}\right)^L \approx e^{-L/M}
$$

### Interpretation

* The **more Light Nodes** participate, the **lower** the probability that a fraudulent proof will escape detection.
* Even with a modest number of Light Nodes (e.g., 50–100), the network achieves **strong coverage** and **high assurance**.
* This **exponential decay** makes LayerEdge's verification highly robust even at large scales.

**Example:**

If $M=1000$ and $L=500$, the probability of fraud going undetected is:

$$
P_{\text{undetected}} = \left(1 - \frac{1}{1000}\right)^{500} \approx 0.6065
$$

However, if $L=5000$:

$$
P_{\text{undetected}} = \left(1 - \frac{1}{1000}\right)^{5000} \approx 0.0067
$$

Just by increasing Light Node participation, LayerEdge **radically improves fraud detection reliability**.

## Economic Disincentives for Malicious Behavior

LayerEdge includes **built-in economic punishments** to discourage misbehavior.

### Penalty Model

Malicious Light Nodes that:

* **Fail to verify assigned proofs**,
* **Submit false attestations**, or
* **Approve invalid zk-proofs**

...are penalized in the following ways:

* Loss of EDGEN token rewards for that cycle
* Possible **slashing** of staked assets (if bonded)
* **Reputation downgrade** within the LayerEdge verifier registry
* Temporary or permanent exclusion from the validator set

### Rational Assumption

Rational actors will choose to:

* **Verify honestly**, since failure leads to penalties
* **Actively validate** to earn base and bounty rewards

This aligns network health with economic self-interest.

## Honest Node Incentivization

Light Nodes that verify correctly and/or detect fraud receive:

* **Base verification rewards** in EDGEN
* **Bounty rewards** for catching invalid zk-proofs
* **Enhanced future selection weight** in the verifier set

This economic model:

* Encourages proactive behavior
* Rewards fraud detection
* Reinforces decentralized validation at scale

## Collusion Resistance

### Threat Model

What if malicious nodes **collude to ignore** a fraudulent proof?

### Defense by Design

* Each Light Node independently samples proofs via **VRF + Bitcoin block hash**.
* The subset of proofs seen by one node is **unpredictable to others**.
* This ensures that **honest nodes will likely be assigned the same proof** and can flag it.

### Collusion Cost

For collusion to succeed:

* All Light Nodes assigned to the fraudulent proof must be malicious.
* As honest node count increases, the chance of full collusion over any given proof becomes **negligible**.

LayerEdge's **randomized assignment and auditability** guarantee that:

* Fraud is visible,
* Honest nodes have the power to dispute,
* Collusion at scale is economically irrational and statistically implausible.

## Security Mechanisms

| Security Mechanism | Description |
|-------------------|-------------|
| **Random Sampling** | Ensures decentralized, unpredictable proof assignment |
| **Exponential Detection** | Fraud detection probability improves with every added node |
| **Merkle Inclusion Proofs** | Ensure proofs are part of the committed batch |
| **Economic Penalties** | Deter malicious behavior via slashing or exclusion |
| **Bounty Rewards** | Motivate honest behavior and fraud reporting |
| **Collusion Resistance** | Independent randomness ensures overlapping verification |
| **Auditability** | All validation reports and disputes are publicly verifiable |

LayerEdge's Light Node architecture achieves **scalable and provably secure decentralized verification** by combining:

* **Mathematical guarantees** (via exponential fraud detection),
* **Economic design** (via token incentives and slashing),
* **Cryptographic randomness** (via VRFs and block headers).

This design ensures that even in the presence of adversaries or collusion attempts, **invalid proofs are highly unlikely to persist**, making LayerEdge a robust foundation for global zk-verification. 