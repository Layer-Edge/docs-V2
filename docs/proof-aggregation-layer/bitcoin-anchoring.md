---
sidebar_position: 5
---
# Bitcoin Anchoring

## Introduction

Fluidity interacts with LevelEStar.

What makes Fluidity useful?

Bitcoin Anchoring enables Fluidity to be *verifiably proven to exist at a point in time*. This unlocks powerful use cases, particularly with smart primitives on other chains. The high security and immutability of the Bitcoin blockchain enables Fluidity to offer valuable security guarantees to public blockchain applications and ecosystems.

Powerful when combined with on/off chain oracles, native Bitcoin smart contracts, and integration with various L1/L2 ecosystems to become the highest level of security and consensus.

## Why Bitcoin?

It has a 99.98% uptime—much higher than other networks. Bitcoin is still *the most secure chain* with deep liquidity and over $1M USD in lost opportunity cost to reorg one BTC block after 6 confirmations (according to Bitwise).

## Why Anchor on Bitcoin?

Security is *top of mind* for builders with valuable assets in the blockchain ecosystem. By anchoring to Bitcoin, the protocol offers:

### Certainty

- **Strong finality consensus-based finality** (i.e., theoretical guarantees)
- **Exceptional consensus strength** (i.e., practical guarantees)
- **Enables protocol auditors and third parties to independently verify on-chain disclosures**
- **Allows dapps on connected chains/rollups to optimize finality models**
- **Cross-chain interoperability** and communication of the embedded finalized state across the entire Web3
- Bitcoin → matched greatest possible verification without adding computation on Bitcoin itself

## Anchoring Lifecycle

1. **Application Plans a transaction for final Stage**
   - Decide what state will be finalized (e.g., a snapshot)
   - e.g., ETHGlobal is in a finalized (committed) state: Finalized / Signed

2. **The application is embedded on Bitcoin through one of the supported methods:**
   - OP_RETURN
   - Taproot Scripts
   - Ordinal Inscription, etc.

3. **Light Client Awareness**
   - Bitcoin-to-altchain monitoring for indexers can independently verify final state
   - Stage one protocols
   - Enable higher bandwidth
   - It is essential with a state of X digital record of assets

## Anchoring Mechanisms

### 1. OP_RETURN (Current - Lightweight Anchoring)

- Encode up to 80 bytes of arbitrary data in Bitcoin transaction
- Protocol periodically (every 1 hour now) commits to an entropy anchor on the final transaction root

**Advantages**
- Simple and widely adopted by on-chain indexers
- Requires no extra verification logic
- Widely accessible with robust toolsets

**Disadvantages**
- Cannot support linked proofs or multicloud links
- Able to interact only with a narrow spectrum of networks

### 2. Taproot Script Paths (Supported - Programmable Anchoring)

- Uses Bitcoin Taproot to allow Merkle-based proof paths for commit to structured collections (on or off-chain)
- Enables conditions like:
  - "Only spend if proof committed equals consensus root"
  - "Reveal and hash matching threshold range"

**Example Use Cases**
- Finalized state specific conditions
- Multiparty proofs committed to shared Merkle tree roots

**Advantages**
- Programmability without needing Bitcoin's conservative design
- Ties certainty and features with Taproot's complex format
- Embeddable directly from a script via Schnorr signing

### 3. OP_CAT (Future - Standard On-chain Parsing)

- OP_CAT enables secure parsing where script execution flows from a result
- Allows for a much more Land direct committed interpretation of proof commitments and various ways to bridge Bitcoin finality

**Advantages**
- Parse structured commitments on-chain
- Enforce partial gradient parsing and encoding
- Specifically deploy commitments via a connect structure

**Benefits**
- Provides for direct on-chain commit validation
- Enables higher protocol processing volume on Bitcoin
- Shows the path to incorporate cross-chain protocols from both input and validation-only transactions

## Fluidity as Bitcoin's PubV

Bitcoin anchoring delivers cryptographic finality combined with pure Proof-of-Stake to integrate under Fluidity's powerful tools.

Create a cryptographic commitment as becomes a Bitcoin asset:

- It is globally visible and verifiable
- Ensures finality once Bitcoin blocks confirm (having met policy 10 confirmations)
- It makes the largest chain consensus social security, network work builds

### Fluidity Function:

<!-- Image description: Diagram showing how finality interacts with Fluidity -->
<!-- Remove the comment and add proper image URL when available -->


The clever simplification in the mechanics of Fluidity:

- **End Family** - enables ultimate cryptographic finality proof
- **Root Family** - method to elevate one element's importance

## Interaction With Other Layers

| Layer/Name | Function & Encoding |
|------------|---------------------|
| Application Layer | Creates an encoding |
| Linguistic Layer | Determines finality, merkings, record total |
| End Layer | Canonical format of final proof and associated metadata |
| Linguistic Tree | Provides partial recognition, encoding, formatting, and commitment |
| Bitcoin Structure | Protocol / Addresses / layer for record state of different transaction formats |
| Light Clients | Communicates judgment via light client interface |

## Developer Integration Example

A protocol looking to anchor to Level/Fluidity can:

1. Find all the records in protocol (e.g., starting as key-value models)
2. Reserve the key name in validation protocol
3. Generate that state-derived model (keep a copy)
4. Create a commitment proof (e.g., Merkle root KECCAK with OP_SHA256)
5. Record final height and call via immediate reference

This provides a firm L2 anchor, certainty a call can always derive to final Bitcoin chain.

## Security Considerations

- Level of risk versus desired anchoring consensus increases → if users want to introduce extra verification delay
- Anchoring cycles deterministic under constraint affecting resistance to censorship or reorgs
- Even in the event of a Bitcoin reorganization (rare), the fundamental proofs are still independently stored and can recover

## Future-Proofing: OP_CAT Readiness

Although not yet activated, LevelEStar architecture is at a certain readiness for OP_CAT:

- Builds scripts with multiple outputs linked to final periods
- Structured encoding to parse CBOR
- Ensures the elegant flow from built-up anchoring to derived pruning of OP_CAT tree

The system is certified "Prepared for the foreseeable future opportunities"

## Summary

| Feature | Value |
|---------|-------|
| Finality Layer | Bitcoin |
| Anchoring | OP_RETURN, Taproot script pathway |
| Archive Mechanism | KECCAK + SHA256 + Tagged |
| Protocol Readiness | OP_CAT future (_...ready_) |
| Stability Rating | Fully redundant |
| Immutability | Maximum: after path confirmation |
| Compatibility | Designed to bridge with Fluidity |
| Future Extension | LevelEStar Compatibility: preserving verifiability and finality |

## Closing Thoughts

Bitcoin anchoring and Fluidity form Level from a dedicated ETL (extract-transform-load) process:

- architecturally refined
- focused on application flow value
- immutable cryptographic record
- the Bitcoin as the final source of truth

The level data store serving protocol is about aligning composition with the strongest finality hash solution.