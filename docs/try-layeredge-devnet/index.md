---
title: Try LayerEdge (Devnet)
sidebar_position: 1
---

# Try LayerEdge (Devnet)

In this guide, we'll explore sending a ZK Proof to LayerEdge Network with instant pre-confirmation & settlement on a Bitcoin Testnet in the next block, in less than 5 minutes.

## Purpose

- Send data (e.g., ZK proofs) over a ZeroMQ socket.
- Test the proof aggregation layer by sending sample or actual proof data.
- Provide a simple and customizable framework for sending data using Go and ZeroMQ.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Go Programming Language**: Install Go (version 1.16 or later recommended). [Download Go](https://golang.org/dl/).
- **ZeroMQ and CZMQ Libraries**: Install ZeroMQ, CZMQ, and `pkg-config` on your system.

### macOS (Using Homebrew)

#### Install Homebrew

Homebrew is a package manager for macOS that simplifies the installation of software. If you don't have Homebrew installed, follow these steps:

1. **Open Terminal**: You can find Terminal in **Applications > Utilities**.

2. **Install Homebrew**: Run the following command in Terminal:
   ```
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
   - **Note**: This command downloads and runs the Homebrew installation script from the official repository.

   - **Follow Prompts**: You may be prompted to enter your password and confirm the installation. Follow the on-screen instructions.

3. **Verify Installation**:
   ```
   brew --version
   ```
   This should display the version of Homebrew installed.

#### Install Dependencies

With Homebrew installed, proceed to install `pkg-config`, ZeroMQ, and CZMQ:

```
brew update
brew install pkg-config
brew install zeromq
brew install czmq
```

### Ubuntu/Debian

Update your package list and install the required packages:

```
sudo apt-get update
sudo apt-get install -y libzmq3-dev libczmq-dev pkg-config
```

### CentOS/RHEL

First, enable the EPEL repository:

```
sudo yum install -y epel-release
```

Then, install the required packages:

```
sudo yum install -y zeromq-devel czmq-devel pkgconfig
```

### Windows

On Windows, you can use [MSYS2](https://www.msys2.org/) to install the necessary packages.

**Steps**:

1. **Install MSYS2**: Download and install it from https://www.msys2.org/.

2. **Update Package Database**:\
    Open the MSYS2 MSYS terminal and run:
     ```
     pacman -Syuu
     ```
    Close and reopen the terminal if prompted.

3. **Install Packages**:\
    In the MSYS2 MinGW 64-bit terminal, run:
     ```
     pacman -S mingw-w64-x86_64-pkg-config
     pacman -S mingw-w64-x86_64-zeromq
     pacman -S mingw-w64-x86_64-czmq
     ```

4. **Add to PATH**:\
    Ensure that the MinGW binaries are in your system's `PATH`. You can add the following to your environment variables:
     ```
     C:\msys64\mingw64\bin
     ```
    Adjust the path if you installed MSYS2 in a different location.

- **Git**: Ensure Git is installed to clone the repository.

---

## Installation

### Clone the Repository

Clone this repository to your local machine:

```
git clone https://github.com/layer-edge/verification-layer-tester.git
cd verification-layer-tester
```

### Install Dependencies

Install the Go package for ZeroMQ:

```
go get gopkg.in/zeromq/goczmq.v4
```

**Note**: If you encounter errors related to `pkg-config`, ensure it's installed and properly configured in your system's `PATH` (see [Troubleshooting](https://github.com/Layer-Edge/verification-layer-tester#troubleshooting)).

---

## Usage

### Building the Program

Use the provided `build.sh` script to build the `sample` executable:

```
./build.sh
```

This script compiles `sample.go` and produces an executable named `sample`.

### Running the Program

Use the `run.sh` script to run the program.

#### Using a Proof File

If you have a proof file (e.g., `proof.json`), you can provide it as an argument:

```
./run.sh proof.json
```

#### Manual Input

If you want to input the proof data manually:

```
./run.sh
```

When prompted, paste your proof data and press Enter.

#### Using the Default Proof

If you run `./run.sh` and press Enter without typing anything when prompted, the program will use a default proof value defined in `sample.go`.

Once the proof is submitted, head onto: https://devnet-explorer.layeredge.io/ to check the recent batch. or simply search the hash generated onto the explorer to locate the batch where your proof is included. Wait for the bitcoin testnet settlement hash to be updated on the explorer when next bitcoin testnet block is mined.

---

## Troubleshooting

### Common Issues

#### Error: `pkg-config`: executable file not found in $PATH

**Cause**: `pkg-config` is not installed or not in your system's `PATH`.

**Solution**:

- **macOS**:
  ```
  brew install pkg-config
  ```
- **Ubuntu/Debian**:
  ```
  sudo apt-get install -y pkg-config
  ```
- **CentOS/RHEL**:
  ```
  sudo yum install -y pkgconfig
  ```
- **Windows**:
  - Install MSYS2 and use `pacman` to install `pkg-config`.
    ```
    pacman -S mingw-w64-x86_64-pkg-config
    ```
  - Ensure `C:\msys64\mingw64\bin` is added to your system's `PATH`.

### Cannot Connect to Endpoint

- **Solution**:
    - Verify that the endpoint in sample.go is correct and accessible.
    - Replace `tcp://34.71.52.251:40000` with your own endpoint if necessary.

### Missing Dependencies

- **Solution**:
  - Ensure all Go packages and system libraries are installed.
    ```
    go get gopkg.in/zeromq/goczmq.v4
    ```


### Permission Denied

- **Solution**:
  - Ensure the scripts are executable:
    ```
    chmod +x build.sh run.sh
    ```


### ZeroMQ Issues

- **Solution**:
  - Ensure that ZeroMQ and CZMQ are properly installed on your system.
  - Verify installation:
    ```
    pkg-config --modversion libzmq
    pkg-config --modversion libczmq
    ```


## Need Help?

If you're still experiencing issues, please provide:
- Error messages or logs.
- Details about your operating system and environment.
- Steps you've already tried.

Feel free to open an issue on the repository or contact the maintainers, or create a ticket on our discord server.

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**: Click on the 'Fork' button on GitHub.

2. **Clone Your Fork**:
   ```
   git clone https://github.com/layer-edge/verification-layer-tester.git
   ```

3. **Create a Feature Branch**:
   ```
   git checkout -b feature/your-feature-name
   ```

4. **Commit Your Changes**:
   ```
   git commit -am 'Add some feature'
   ```

5. **Push to the Branch**:
   ```
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**: Open a pull request on GitHub.