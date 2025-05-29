# API

The following API's are recommended for development purposes. For maximum control and reliability it's recommended to run your own node.

## Clients

The Cosmos EVM supports different clients in order to support Cosmos and Ethereum transactions and queries. You can use Swagger as a REST interface for state queries and transactions:

| | Description | Default Port |
|---|---|---|
| **Cosmos gRPC** | Query or send Cosmos EVM transactions using gRPC | 9090 |
| **Cosmos REST (gRPC-Gateway)** | Query or send Cosmos EVM transactions using an HTTP RESTful API | 9091 |
| **Ethereum JSON-RPC** | Query Ethereum-formatted transactions and blocks or send Ethereum txs using JSON-RPC | 8545 |
| **Ethereum Websocket** | Subscribe to Ethereum logs and events emitted in smart contracts. | 8586 |
| **Tendermint RPC** | Query transactions, blocks, consensus state, broadcast transactions, etc. | 26657 |
| **Tendermint Websocket** | Subscribe to Tendermint ABCI events | 26657 |
| **Command Line Interface (CLI)** | Query or send Cosmos EVM transactions using your Terminal or Console. | N/A |