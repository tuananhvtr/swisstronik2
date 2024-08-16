require("@nomicfoundation/hardhat-toolbox");
//require("dotenv").config();

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.20",
  networks: {
    swisstronik: {
      // If you're using local testnet, replace `url` with local json-rpc address
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["dbbb88a49ee4f7a562294e21044a1a1a90c038a733d34c7ccef5e1ded95ddf35"],
    },
  },
etherscan: {
    apiKey: `ANY_STRING_WILL_DO`,
    customChains: [
      {
        network: 'swisstronik',
        chainId: 1291,
        urls: {
          apiURL: 'https://explorer-evm.testnet.swisstronik.com/api',
          browserURL: 'https://explorer-evm.testnet.swisstronik.com',
        },
      },
    ],
  },
};