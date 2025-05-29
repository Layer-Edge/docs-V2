# EVM Precompiles

Stateful EVM precompiles on the core protocol allow dApps and users to access logic outside of the EVM, usually built as a Cosmos SDK module. Acting as a gateway, these precompiles define how smart contracts can perform cross-chain transactions (via IBC) and interact with core functionalities on a Cosmos EVM chain (e.g. staking, voting) from the EVM.

> **💡 TIP**
> 
> **Note**: Not sure what Cosmos EVM precompiles are? Precompiles behave like smart contracts that are compiled and deployed within the EVM. These have predefined addresses and, according to their logic, can be classified as stateful or stateless. When they change the state of the chain (transactions) or access state data (queries), precompiles are considered "stateful"; when they don't, they're "stateless".

## Precompiles documentation

Find in this section an outline of the currently implemented Cosmos EVM precompiles with transactions, queries, and examples of using them:

- [Authorization interface](link) (read first if you're new to Cosmos SDK Precompiles for the EVM)
- [Cosmos EVM precompiles shared types](link)
- [`x/staking` module EVM extension](link)
- [`x/distribution` module EVM extension](link)
- [`ibc/transfer` module EVM extension](link)

> **💡 TIP**
> 
> **Note**: Find the EVM Precompile Solidity interfaces and examples in the [Cosmos EVM repo](link).