require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/", //URL of the RPC node for Swisstronik.
      //2nd wallet
      accounts: ["dbbb88a49ee4f7a562294e21044a1a1a90c038a733d34c7ccef5e1ded95ddf35"],
	//Make sure you have enough funds in this wallet to deploy the smart contract
    },
  },
};