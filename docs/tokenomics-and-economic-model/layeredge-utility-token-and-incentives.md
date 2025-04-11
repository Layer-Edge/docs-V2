---
sidebar_position: 2
---

# LayerEdge Utility Token & Incentives

The LayerEdge utility token lies at the heart of the protocol’s decentralized verification economy. It is designed to fuel trustless computation by acting as the **payment medium for clients** and the **reward mechanism for verifiers**.

This subpage covers both:

- The **core utility functions** of the LayerEdge token
- The **incentive structure** that governs node participation, fraud detection, and protocol alignment

---

## Primary Medium of Exchange

### Verification Fee Payments

All computations verified by LayerEdge must be paid for in LayerEdge tokens. This includes:

- **ZK proof verification**
- **Aggregation of multiple proofs**
- **Bitcoin anchoring of final aggregated outputs**

By requiring all clients (e.g., rollups, applications, or individual users) to pay in the native token, LayerEdge ensures that:

- Value flows **directly through the protocol**
- Increased activity translates into **increased token demand**

This makes the economic model self-reinforcing: more usage leads to more verification, which increases token circulation and network activity.

---

## Ecosystem-Wide Service Access

Third-party protocols that wish to integrate LayerEdge's verification infrastructure must:

- Acquire and hold LayerEdge tokens
- Use the tokens to submit their proof data for validation and finality

This creates a persistent **utility loop**, where the LayerEdge token acts as:

- The **gas** for decentralized verification
- The **unit of account** for computation validation

## Usage Drives Demand

Because payment in the LayerEdge token is required across:

- Verification fees
- Proof submission costs
- Aggregation and anchoring services

...the ongoing usage of the protocol results in **recurring and growing demand** for the token.

## Why a Native Token?

### Direct Value Capture

Unlike protocols that rely on third-party tokens for payment, LayerEdge ensures **full economic alignment** by:

- Making all fees payable in its own token
- Capturing network value growth without dilution to external assets
- Keeping **protocol activity tightly coupled to token performance**

## Incentive Alignment

Node operators (Light and Full) are rewarded in the **same token** that clients spend. This circular design ensures:

- Verifiers are economically motivated to participate and stay online
- No disconnection between client payments and validator earnings
- The ecosystem becomes **sustainable and self-incentivizing**

## Cross-Chain Flexibility

As LayerEdge integrates with multiple ecosystems (e.g., Ethereum rollups, Bitcoin L2s, Cosmos chains), it offers a **unified settlement and fee token** that:

- Can be wrapped, bridged, or mirrored to other environments
- Provides a **standardized payment mechanism** for proof verification
- Makes integration easier for multi-chain dApps and protocols

---

## Participant Roles: Who Gets Incentivized?

### Full Nodes

- Perform **heavy verification tasks** like recursive aggregation or final proof generation
- May host or interact with the Data Availability (DA) Layer
- Typically run on higher-resource infrastructure

### Light Nodes

- Perform **random subset validation** of aggregated proofs
- Use cryptographic randomness (e.g., VRFs and Bitcoin block headers)
- Are distributed and lightweight — ideal for community-run validators

**Both roles earn LayerEdge tokens** based on uptime, correctness, and performance.

---

## Bounty & Slashing Mechanisms

LayerEdge has a built-in **challenge-response** mechanism:

- If a node detects a fraudulent or incorrect proof, it can initiate a **Disprove Transaction**
- If the dispute is successful, the honest challenger earns a **bounty reward**
- The bounty is paid from the **penalized stake or escrowed balance** of the dishonest actor

This ensures:

- Fraud is economically discouraged
- Good actors are consistently rewarded
- Decentralized monitoring is incentivized

### Slashing Conditions

Nodes may face **token slashing or penalties** if they:

- Validate or sign off on incorrect/fraudulent proofs
- Repeatedly fail to perform required verification duties
- Attempt collusion or censorship within the network

These mechanisms protect LayerEdge from:

- Dishonest validators
- Proof manipulation
- Reputation-based attacks

## Trust Through Economics

By combining bounties for fraud detection with slashing for bad behavior, LayerEdge creates a **crypto-economic safety net**. Verifiers are both:

- **Motivated to be proactive**
- **Punished for being negligent or dishonest**

| Role | Responsibility | Reward |
|------|----------------|--------|
| Light Node | Verify random subset of proofs | LayerEdge tokens + bounties |
| Full Node | Aggregate + anchor proofs | LayerEdge tokens |
| Whistleblower | Submit Disprove tx | Fraud bounty |
| Malicious Node | Submits invalid proofs | Slashing or loss of stake |

---