const hre = require("hardhat");

async function main() {
   const Demo = await hre.ethers.getContractFactory("Demo");
   //console.log("Contract factory created:", Demo);

   const demo = await Demo.deploy();
   //console.log("Contract deployment initiated:", demo);

   await demo.deployed();
   //console.log("Contract deployed:", demo);

   console.log(
     `Deployed to ${demo.address}`
   );
}

main().catch((error) => {
   console.error(error);
   process.exitCode = 1;
});
