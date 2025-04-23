---
sidebar_position: 3
---

# Token Utility & Reward Framework

LayerEdge’s token model is carefully engineered to power an economically sustainable, decentralized network. It ensures that token demand grows organically with usage, and that verification participants—both Light and Full Nodes—are fairly and strategically incentivized. This section dives deeper into the **utility mechanics, reward structure**, and **economic rationale** behind LayerEdge’s utility token.

---

## Utility Framework

At its core, the LayerEdge token’s utility is driven by actual demand for decentralized zk-proof verification and state settlement on Bitcoin. This isn’t a speculative or inflation-driven economy—it is a usage-driven, value-for-work system.

**Example:**

- A zk-rollup submits state proofs every 30 minutes
- An AI inference service posts model verification proofs every 10 minutes
- A DePIN protocol submits sensor proofs hourly

As the number of such systems and their verification frequencies rise, the **cumulative verification workload** on LayerEdge increases—and so does **token demand**.

---

### Why This Matters

- **Non-Speculative Value:** Token value reflects real-world utility, not hype
- **Economic Security:** High demand → High rewards → More nodes → Higher decentralization → Stronger fraud resistance

---

## Reward Framework

### Reward Equation

Let **ℓ** represent a verification node. Total token rewards per verification cycle are determined by:

$$
R_{total}(\ell) = R_{base}^{(LayerEdge)} + \sum_{i=1}^{C} R_{client,i} + R_{bonus}^{(performance)}
$$

---

### Breakdown of Reward Components

#### 1. $R_{base}^{(LayerEdge)}$ - Base Protocol Reward
- Determined by the LayerEdge protocol
- Meant to keep the network online during low usage periods
- May be dynamically adjusted over time (e.g., halving, epoch-based reductions)

**Use Case**

> A Light Node in a low-volume region still earns some base rewards for uptime, verification participation, and maintaining synchronization.

#### 2. $R_{client,i}$ - Client-Paid Verification Fees
- Comes directly from users submitting zk-proofs
- Paid proportionally to nodes who performed or attested to the verification
- Encourages nodes to stay online and responsive to demand surges

**Use Case**

> A rollup submits a batch of 10,000 transactions. 100 Light Nodes verify subsets. Each node is rewarded based on its contribution to validating that batch.

#### 3. $R_{bonus}^{(performance)}$ - Bonus for Security & Fraud Detection
- Incentivizes active fraud detection and network monitoring
- Can be funded from:
  - Penalties/slashed funds of malicious actors
  - A bounty pool governed by protocol rules
- Could scale dynamically based on severity or detection rarity

**Use Case**

> A node flags an invalid proof missed by others. After on-chain validation of the Disprove Transaction, it earns 3x its usual reward from the fraud bounty pool.

---

### Implications for Network Design

| Metric | Impact |
|--------|--------|
| More users | More fee-based income (`R_client`) |
| More fraud attempts | More bounties available (`R_bonus`) |
| More validators | Stronger decentralization, better fraud resistance |
| Consistent uptime | Steady `R_base` earnings |

## Additional Considerations

### Fair Distribution Model

LayerEdge's modular architecture supports:

- **Weighted reward allocation**:
  - Nodes with higher uptime or more accurate results can receive a slightly higher share
  
- **Role-based differentiation**:
  - Full Nodes (data availability + aggregation) may earn more per task vs. Light Nodes (sampling-based verification)

| Node Type | Reward Type | Description |
|-----------|------------|-------------|
| Light Node ℓ1 | `R_base` | Participated 12 hours/day; earned baseline reward |
| Light Node ℓ2 | `R_bonus` | Detected invalid Groth16 proof, received 2x bounty |
| Full Node F1 | `R_client` | Aggregated 3 batches, earned 40% of fees |
| Light Node ℓ3 | N/A | Was offline for 24h, received no reward |

---

### Reward Security

- **All reward transactions are recorded on LayerEdge’s Cosmos-based BSN chain**
- **Merkle commitments** tie node actions to their rewards, enabling provable accountability.

---

LayerEdge's reward system is engineered for:

- **Economic resilience** during both high and low usage periods
- **Active incentivization** of useful work and fraud prevention
- **Scalable token utility** tied to real verification volume—not speculation