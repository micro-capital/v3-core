# Uniswap V3

[![Lint](https://github.com/Uniswap/uniswap-v3-core/actions/workflows/lint.yml/badge.svg)](https://github.com/Uniswap/uniswap-v3-core/actions/workflows/lint.yml)
[![Tests](https://github.com/Uniswap/uniswap-v3-core/actions/workflows/tests.yml/badge.svg)](https://github.com/Uniswap/uniswap-v3-core/actions/workflows/tests.yml)
[![Fuzz Testing](https://github.com/Uniswap/uniswap-v3-core/actions/workflows/fuzz-testing.yml/badge.svg)](https://github.com/Uniswap/uniswap-v3-core/actions/workflows/fuzz-testing.yml)
[![Mythx](https://github.com/Uniswap/uniswap-v3-core/actions/workflows/mythx.yml/badge.svg)](https://github.com/Uniswap/uniswap-v3-core/actions/workflows/mythx.yml)
[![npm version](https://img.shields.io/npm/v/@uniswap/v3-core/latest.svg)](https://www.npmjs.com/package/@uniswap/v3-core/v/latest)

This repository contains the core smart contracts for the Uniswap V3 Protocol.
For higher level contracts, see the [uniswap-v3-periphery](https://github.com/micro-capital/v3-periphery)
repository.

## Usage 

In order to run tests, first of all you need to install dependencies:

```bash
yarn install
```

If you do not have `yarn` installed, you can install it by running, please refer to the [yarn documentation](https://classic.yarnpkg.com/en/docs/install).

Then you can run tests:

```bash
yarn test
```

### Deployment 

> For seamless and full Uniswap V3 deployment, please refer to the [Uniswap V3 deployment scripts](https://github.com/micro-capital/deploy-v3).
> Below is a general guide on how to deploy ONLY the Uniswap V3 core contracts.

To deploy the Uniswap V3 core contracts, you can use the deployment scripts in the `scripts` directory.

First of all, you need to create a `.env` file in the root directory of the repository. You can use the `.env.example` file as a template.

### Environment Variables for Uniswap EVM Contract Deployment

Here's a general explanation of the environment variables used for deploying Uniswap EVM contracts:

#### Deployer Private Keys
- `PRIVATE_KEY`: The private key of the account that will be used to deploy the contracts on the Ethereum network.
  (**Must have sufficient balance to cover transaction fees**; Must be in Hexadecimal format, e.g: `1234567890abcdef...`)

#### RPC Configuration
- `INFURA_API_KEY`: This variable should hold your Infura project ID. You need to sign up for an Infura account and create a project to obtain the project ID.

#### Etherscan Configuration
- `ETHERSCAN_API_KEY`: The Etherscan API key is used to verify deployed contracts on Etherscan.

#### Uniswap Contract Configuration
- `FACTORY_OWNER`: This variable specifies the address of the owner of the Uniswap V3 Factory contract.

### Deployment Script 

After the `.env` file is created, you can run the deployment script for the network you want to deploy to, for example:

```bash
yarn hardhat migrate --network sepolia --verify
```

## Local deployment

In order to deploy this code to a local testnet, you should install the npm package
`@uniswap/v3-core`
and import the factory bytecode located at
`@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json`.
For example:

```typescript
import {
  abi as FACTORY_ABI,
  bytecode as FACTORY_BYTECODE,
} from '@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json'

// deploy the bytecode
```

This will ensure that you are testing against the same bytecode that is deployed to
mainnet and public testnets, and all Uniswap code will correctly interoperate with
your local deployment.

## Using solidity interfaces

The Uniswap v3 interfaces are available for import into solidity smart contracts
via the npm artifact `@uniswap/v3-core`, e.g.:

```solidity
import '@uniswap/v3-core/contracts/interfaces/IUniswapV3Pool.sol';

contract MyContract {
  IUniswapV3Pool pool;

  function doSomethingWithPool() {
    // pool.swap(...);
  }
}

```

## Licensing

The primary license for Uniswap V3 Core is the Business Source License 1.1 (`BUSL-1.1`), see [`LICENSE`](./LICENSE). However, some files are dual licensed under `GPL-2.0-or-later`:

- All files in `contracts/interfaces/` may also be licensed under `GPL-2.0-or-later` (as indicated in their SPDX headers), see [`contracts/interfaces/LICENSE`](./contracts/interfaces/LICENSE)
- Several files in `contracts/libraries/` may also be licensed under `GPL-2.0-or-later` (as indicated in their SPDX headers), see [`contracts/libraries/LICENSE`](contracts/libraries/LICENSE)

### Other Exceptions

- `contracts/libraries/FullMath.sol` is licensed under `MIT` (as indicated in its SPDX header), see [`contracts/libraries/LICENSE_MIT`](contracts/libraries/LICENSE_MIT)
- All files in `contracts/test` remain unlicensed (as indicated in their SPDX headers).
