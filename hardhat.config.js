

require("@nomicfoundation/hardhat-toolbox");


const  ALCHEMY_API_KEY = "rx3wdZB1qrc-LUK1qL1hlFugPMkFqalQ";
const GOERLI_PRIVATE_KEY ="95d3ffd59f1b09f2c7e69fe86de376446d2eaf67ac1cd83b88ce8f71142e5ccd";


module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
};
