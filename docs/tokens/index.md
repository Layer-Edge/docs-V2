# EDGEN Bridging

## Overview

The EDGEN token was minted on Ethereum mainnet and canonically bridged to Edgen Chain, where it serves as the native gas token. To enable seamless cross-chain functionality, LayerEdge integrates with **[Hyperlane](https://docs.hyperlane.xyz/)**, allowing EDGEN to be bridged across multiple supported blockchains.

## Contract Addresses

| Chain | Address |
|-------|---------|
| Ethereum | `0xAa9806c938836627Ed1a41Ae871c7E1889AE02Ca` ([**link**](https://etherscan.io/address/0xAa9806c938836627Ed1a41Ae871c7E1889AE02Ca)) |
| Binance Smart Chain | `0x0c808f0464c423d5ea4f4454fcc23b6e2ae75562` ([**link**](https://bscscan.com/address/0x0c808f0464c423d5ea4f4454fcc23b6e2ae75562)) |

EDGEN is the **gas token of the Edgen Chain.**

## Technical Implementation

### Architecture:

* **Ethereum Mainnet**: Original ERC20 token contract
* **Edgen Chain**: Canonically bridged as the gas token using Hyperlane
* **Binance Smart Chain (BSC)**: Canonically bridged ERC-20 token using Hyperlane


This design ensures that **EDGEN maintains its native status on the Edgen Chain**, while giving users the flexibility to bridge tokens to other major blockchain networks like Ethereum and BSC. This enables participation in DeFi, liquidity provisioning, and broader ecosystem integrations.

## Bridging Flow

| From ↔ To | Method |
|-----------|--------|
| Ethereum ↔ EdgenChain | [Hyperlane Warp Route](https://docs.hyperlane.xyz/docs/protocol/warp-routes/warp-routes-overview) |
| BSC ↔ Edgen Chain |  [Hyperlane Warp Route](https://docs.hyperlane.xyz/docs/protocol/warp-routes/warp-routes-overview) |
| Ethereum ↔ BSC |  [Hyperlane Warp Route](https://docs.hyperlane.xyz/docs/protocol/warp-routes/warp-routes-overview) |

## Key Features

* **Native Fee Token**: EDGEN serves as the native gas token on Edgen Chain
* **Cross-Chain Compatibility**: Bridge EDGEN seamlessly across Ethereum, BSC, and Edgen Chain
* **Hyperlane Integration**: Leverages Hyperlane's infrastructure for secure cross-chain transfers
* **Wrapped Version**: WEDGEN is available for use in DeFi applications requiring ERC-20 compatibility