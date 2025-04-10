---
title: Verification Workflow
sidebar_position: 4
---

# Verification Workflow

The **Verification Workflow** defines the full lifecycle of how a Light Node in the LayerEdge network performs zk-proof validation. It begins with randomized proof selection, proceeds through cryptographic validation, and culminates in reporting and incentivization.

This mechanism ensures that:

* **Lightweight nodes can contribute meaningfully** to zk-proof validation,
* **Proofs are validated efficiently**, even at large scale,
* **Malicious proofs are caught and challenged** through decentralized detection.

## Step 1: Subset Retrieval

Each Light Node is assigned a **random subset of proofs** from the aggregated zk-proof batch (as explained in Randomized Proof Selection).

### Fetching Proofs

* Light Nodes **do not download the entire batch**.
* Instead, each node fetches **only the zk-proofs referenced in its assigned subset**.

### Merkle Inclusion Verification

To confirm that these subset proofs are part of the original batch:

* Each proof is verified using its **Merkle path** in the **Data Availability (DA) Layer**.
* The node computes the Merkle root using the inclusion path and validates it against the published DA root.

This process ensures:

* The proof was **actually submitted and committed** to the LayerEdge network,
* No node is working with spoofed or external proof data.

## Step 2: Local zk-Proof Validation

Once the subset is retrieved and verified for inclusion, the Light Node proceeds to **locally validate the proofs**.

### Supported Verification Backends

* Light Nodes use native verifier implementations for proof systems such as:  
  * **Groth16**  
  * **Halo2**  
  * **Nova**  
  * **Risc0**  
  * **Plonky2**  
  * **SP1**  
  * Others, depending on what the submitting protocol used.

### Verification Procedure

For each proof πi in the subset:

1. The node loads the public inputs and proof bytes.
2. It runs the appropriate verifier function locally.
3. It checks whether the verification returns `True`.

### Decision Outcomes

* **All subset proofs are valid** → Node signs off on the batch.
* **Any proof fails** → Node triggers a dispute broadcast.

## Step 3: Reporting and Attestation

### Validation Report

After verifying its subset:

* The Light Node constructs a **Validation Report**, which includes:  
  * The list of verified proof indices  
  * Their respective validation outcomes (pass/fail)  
  * A signature attesting to the node's honesty  
  * The randomness seed and Merkle inclusion paths

This report is:

* Broadcasted to the LayerEdge network,
* Stored for future dispute resolution and auditability.

### Honest Attestation

If no fraud is detected:

* The node attests that the batch is valid **within its verified subset**.

### Fraud Detection & Dispute Submission

If a proof fails verification:

* The node **constructs a fraud proof** including:  
  * The invalid zk-proof  
  * Its Merkle path to the batch  
  * A transcript of the failed verification
* This is broadcast as a **Dispute Message** to the LayerEdge fraud handling layer.

## Step 4: Reward & Incentive Distribution

### Token Rewards

* Every Light Node that submits a **valid attestation** receives base token rewards in **$EDGE**.
* Rewards are proportional to:  
  * Subset size verified  
  * System load  
  * Verification accuracy

### Fraud Bounties

If a node:

* Detects a fraudulent proof and
* Successfully submits a dispute that is confirmed by the network

Then:

* The node is awarded an **additional bounty** from the **fraud reward pool**.
* This creates strong incentives for accurate and proactive verification.

## Security Benefits

| Security Mechanism | Description |
|-------------------|-------------|
| **Merkle Verification** | Ensures the subset proofs belong to the committed batch |
| **Verifier Execution** | Validates cryptographic soundness of each zk-proof |
| **Dispute Broadcast** | Enables trustless rejection of invalid proofs |
| **Attestation Signatures** | Guarantees accountability for every node's verification |
| **Reward Logic** | Aligns validator incentives with network integrity |

The Verification Workflow enables LayerEdge to scale zk-proof validation without compromising on trust, decentralization, or efficiency.

By validating only subsets, Light Nodes maintain throughput while providing strong guarantees against fraud — a **modern solution to verifiable trust**, powered by decentralized computation. 