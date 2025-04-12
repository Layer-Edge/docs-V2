---
title: FAQ & Troubleshooting Guide
sidebar_position: 3
---

# FAQ & Troubleshooting Guide

## Common Error Types

### 1. Docker Installation Errors

> **Error Message:** `Processing error: Please install docker first.`

**Cause:** Docker is not installed or improperly configured. Zero-knowledge proof generation requires Docker.

### 2. Docker Execution Errors

> **Error Message:** `Processing error: docker returned failure exit code: Some(132)`

**Cause:** The Docker container starts but fails during execution. Exit code 132 generally points to resource limitations or system-level incompatibility.

### 3. Verification Timing Issues

> **Error Messages:** 
> ```
> Tree [hash] has had the same root [root] for 3 checks, putting to sleep for 5m0s
> No active trees available for verification
> ```

**Cause:** The system performs multiple root checks for Merkle trees. If a tree remains unchanged after 3 checks, it is temporarily put to sleep.

### 4. Environment Setup Issues

> **Warning Message:** `WARNING:(ast) sonic only supports go1.17-1.23, but your environment is not suitable`

**Cause:** Your Go version is incompatible with the Sonic component of the verifier.

### 5. Connection Refused Errors

> **Error Message:** `failed to prove sample for tree [hash]: proof verification error: error making request: Post "http://127.0.0.1:3001/process": dial tcp 127.0.0.1:3001: connect: connection refused`

**Cause:** The ZK prover service is either not running or not accessible on the expected port (3001).

### 6. Low-End Device Performance

**Symptoms:** Proofs silently fail or the node becomes unresponsive.

**Cause:** Devices with insufficient system resources cannot sustain proof generation processes effectively.

### 7. Error: Failed to load .env file

> **Error Message:** `failed to load .env file: open .env: no such file or directory`

**Cause:** The application expects a `.env` file in the working directory but cannot find one.

**Solution:** Create a `.env` file with all required environment variables:

```
GRPC_URL=grpc.testnet.layeredge.io:9090
CONTRACT_ADDR=cosmos1ufs3tlq4umljk0qfe8k5ya0x6hpavn897u2cnf9k0en9jr7qarqqt56709
ZK_PROVER_URL=http://127.0.0.1:3001
API_REQUEST_TIMEOUT=100
POINTS_API=http://127.0.0.1:8080
PRIVATE_KEY='cli-node-private-key'
```

Place this `.env` file in the same directory where you're running the Light Node binary.

## Comprehensive Solutions

### Docker Installation Issues

**Solution:**

```bash
# Install Docker (Ubuntu)
sudo apt-get update
sudo apt install docker.io

# Add Docker group permissions
sudo usermod -aG docker $USER
newgrp docker
```

### Docker Execution Errors

**Solution:**

```bash
# Modify Docker daemon config
sudo nano /etc/docker/daemon.json
```

Add:

```json
{
  "default-shm-size": "2G",
  "default-memory-swap": "4G",
  "default-memory": "2G",
  "default-cpu-shares": 1024
}
```

```bash
# Restart Docker
sudo systemctl restart docker

# Pull latest prover image
docker pull yourcompany/zk-prover:latest

# Cleanup
docker system prune -a --volumes
```

### Connection Refused Errors (ZK Prover)

**Solution:**

```bash
# Check if the prover is running
sudo lsof -i :3001
netstat -tuln | grep 3001

# Start the prover
cd /home/ubuntu/light-node
./start-prover-service.sh

# Firewall config
sudo ufw status
sudo ufw allow 3001/tcp

# Ensure localhost resolves
ping -c 4 localhost

# Update environment if needed
export ZK_PROVER_URL=http://actual-host-ip:3001
```

### Go Version Compatibility

**Solution:**

```bash
# Check Go version
go version

# Install Go 1.23
wget https://golang.org/dl/go1.23.linux-amd64.tar.gz
sudo rm -rf /usr/local/go
sudo tar -C /usr/local -xzf go1.23.linux-amd64.tar.gz

# Update PATH
echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.profile
source ~/.profile

# Verify
go version
```

### Verification Timing and Tree Management

**Solution:**

```bash
# Edit your node config
nano /path/to/config.yaml
```

Update parameters:

```yaml
verification:
  checks_before_sleep: 5
  sleep_duration: 120s
  max_concurrent_trees: 12
  verification_timeout: 180s
```

### Low-End Device Performance

**Recommended Minimum Specs:**
* **CPU:** 4+ cores
* **RAM:** 8GB+
* **Storage:** 50GB SSD
* **OS:** Ubuntu 20.04 LTS or newer

## Deployment Checklist

* Docker installed and configured
* Go version between 1.17 and 1.23
* Prover service running on port 3001
* Firewall allows port 3001
* Docker resource limits configured
* Environmental variables set (.env or system export)
* Latest CLI node version installed

## Additional Issues

### How do I update the gRPC endpoint for the Light Node?

We've recently updated the gRPC endpoint. Please make the following changes in your `.env` file to continue syncing correctly with the LayerEdge network:

**Step 1: Update the .env File**

```
GRPC_URL=grpc.testnet.layeredge.io:9090
```

**Step 2: Rebuild Your Light Node**

If you're using Go:

```bash
go build
./light-node
```

If you're using Docker-based scripts, restart the container or service as appropriate.

**Step 3: Confirm Connection**
Ensure that your node logs confirm a successful connection to the new gRPC endpoint. You should no longer see errors like `connection refused` or `unavailable gRPC service`.

### How do I increase the API request timeout?

If your CLI node is experiencing timeouts while interacting with the LayerEdge services (e.g., Points API, gRPC), you can increase the request timeout duration to ensure smoother operation.

**Step 1: Update the .env File**

```
API_REQUEST_TIMEOUT=100000
```

**Step 2: Restart or Rebuild the Node**

If you're running the node directly:

```bash
go build
./light-node
```

**Step 3: Verify the Change**
Your node should now handle longer response times without triggering timeout errors. 