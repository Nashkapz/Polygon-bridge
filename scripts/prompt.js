// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/BridgeNFTToken.sol/BridgeNFTToken.json");
require('dotenv').config()

const tokenAddress = "";
const tokenABI = tokenContractJSON.abi;

async function main() {

    let id = 0;
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    console.log("Prompt : " + id + " " + await token.promptDescription(id));
    console.log("URI : " + id + " " + await token.tokenURI(id));
    console.log("URL : "+ "https://gateway.pinata.cloud/ipfs/" + await token.tokenURI(id));

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
