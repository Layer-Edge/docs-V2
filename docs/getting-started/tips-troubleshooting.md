---
title: Tips, Best Practices & Troubleshooting
sidebar_position: 6
---

# Tips, Best Practices & Troubleshooting

LayerEdge Light Nodes and proof submission systems are designed for security, reliability, and decentralization. To maximize uptime, efficiency, and network contribution, follow these operational best practices:

## 1. Security of Private Keys

* All nodes (Light Nodes, aggregators, proof submitters) use cryptographic signing for validation.
* **Private keys should never be hardcoded** into code files or shared.
* Use secure vaults (e.g., HashiCorp Vault, GCP Secret Manager) or encrypted `.env` storage.
* Ensure private keys are accessible only by the process invoking proof verification or submission.

## 2. Monitoring & Logs

* Light Nodes emit logs such as:
   * Discovered Merkle Trees
   * Fetched proof batches
   * Verification cycles & statuses
   * Proof validity and submission
* Recommended: Pipe these logs into log aggregators (e.g., Prometheus, Grafana, Datadog).
* Monitor trends like:
   * Drops in proof verification volume
   * Failure to fetch tree roots
   * Latency in submission loops

## 3. Testing in a Local Environment

* For staging or pre-testnet evaluation, LayerEdge allows complete local setup.
* Simulate network participation using:
   * Local aggregator node
   * Local ZeroMQ endpoint
   * Local proof generation via the Verification Layer Tester

This reduces mainnet risk and allows validation of:

* Connectivity
* Proof formatting
* Proof-to-verification lifecycle

## 4. Stay Updated

* LayerEdge's GitHub repositories are under active development.
* Toolchains like RISC Zero or Nova evolve rapidly.
* Action Items:
   * Subscribe to GitHub repo releases
   * Regularly `git pull` the Light Node and Verification Tester
   * Review changelogs for breaking updates or protocol tweaks

## 5. Review Documentation

* Always consult the `README.md` or `/docs` directories in:
    * [`Light Node`](https://github.com/Layer-Edge/light-node)
    * [`Verification Tester`](https://github.com/Layer-Edge/verification-layer-tester)
* Special configuration instructions (e.g., Docker builds, OS-specific paths) are frequently posted there.

## Troubleshooting

### 1. No Verified Proofs Found

* Ensure the Light Node is connected:
   * Validate `GRPC_URL` and `CONTRACT_ADDR` in your `.env`
   * Watch logs for "discovered Merkle tree" messages
* Confirm network sync isn't lagging behind the current root

### 2. ZeroMQ Connection Errors

* Run:
```bash
sudo apt-get install libzmq3-dev libczmq-dev pkg-config
```
* Double-check that `sample.go` or your endpoint config points to a live ZeroMQ server
* If you're testing locally, ensure that the LayerEdge aggregator is running and listening on the correct port

### 3. RISC Zero / Merkle Service Errors

* Ensure `rzup` is installed:
```bash
cargo install --locked --git https://github.com/risc0/risc0 --tag v0.16.1 rzup
rzup install
```
* Launch `cargo run` from the `risc0-merkle-service` directory
* Verify the correct `ZK_PROVER_URL` is set in `.env`

### 4. Script Permission Issues

* On Unix-like systems:
```bash
chmod +x build.sh run.sh
```
* On Windows:
   * Use **Git Bash** or **MSYS2** for shell compatibility
   * Alternatively, convert `.sh` to `.bat` or use WSL

### 5. Port Conflicts or Firewall Blocks

* Ensure that ports (e.g., 3001, 8080, 40000) are not firewalled.
* Use `netstat -lntp` (Linux) or `lsof -i :<port>` to debug conflicts. 