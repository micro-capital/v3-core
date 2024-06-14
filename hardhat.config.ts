import '@typechain/hardhat'

import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-ethers'

import '@solarity/hardhat-migrate'

import * as dotenv from 'dotenv'
dotenv.config()

const accounts = process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : undefined

import { HardhatUserConfig } from 'hardhat/config'

const config: HardhatUserConfig = {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts,
      gasMultiplier: 1.2
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts,
      gasMultiplier: 1.2,
    },
    amoy: {
      url: `https://polygon-amoy.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts,
      gasMultiplier: 1.2,
    },
    ethereum: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts,
      gasMultiplier: 1.2,
    },
    polygon: {
      url: `https://polygon-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts,
      gasMultiplier: 1.2,
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    // Or at https://polygonscan.com/
    apiKey: {
      sepolia: `${process.env.ETHERSCAN_API_KEY}`,
      mainnet: `${process.env.ETHERSCAN_API_KEY}`,
      polygonAmoy: `${process.env.POLYGONSCAN_API_KEY}`,
      polygon: `${process.env.POLYGONSCAN_API_KEY}`,
    },
  },
  mocha: {},
  solidity: {
    version: '0.7.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
      },
      metadata: {
        // do not include the metadata hash, since this is machine dependent
        // and we want all generated code to be deterministic
        // https://docs.soliditylang.org/en/v0.7.6/metadata.html
        bytecodeHash: 'none',
      },
    },
  },
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5',
    alwaysGenerateOverloads: true,
    discriminateTypes: true,
  },
}

export default config
