# NFT Minting and Bridging Project

This endeavor revolves around producing a collection of five images through the utilization of DALLE 2. The images are then stored on IPFS via the pinata.cloud platform. Subsequently, an ERC721 contract is deployed onto the Goerli Ethereum Testnet, facilitating the bridging of NFTs from Ethereum to Polygon Mumbai via the FxPortal Bridge. The ERC721 contract also encompasses a function to retrieve the prompt employed for generating the images.

---

## Prerequisites

Before executing the scripts, ensure the following prerequisites are met:

-Node.js and npm are installed on your device.
-Hardhat development environment is configured.

---

## Setup

1. Clone the repository of the project.
2. Install project dependencies by executing npm install within the project directory.

## DALLE 2 and IPFS

1. Employ DALLE 2 to generate a collection of five images.
2. Employ pinata.cloud to upload the images to IPFS.
3. Update the baseUrl variable within the NFT.sol contract with the IPFS base URL where the images are stored.

## Deploy ERC721A Contract

1. Modify the contract's name and symbol as necessary within the NFT.sol contract.
2. Execute the deployment script deploy.js to deploy the ERC721A contract onto the Goerli Ethereum Testnet.
   
```bash
npx hardhat run scripts/deploy.js --network goerli
```

3. Record the deployed contract address.

## Batch Mint NFTs

1. Execute the batch minting script batchMint.js to mint five NFTs using the deployed contract address and your private key.
   
```bash
 npx hardhat run scripts/batchMint.js --network goerli
```

## Batch Transfer NFTs to Polygon Mumbai

1. Utilize the batch transfer script batchTransferNft.js to move the minted NFTs from Ethereum to Polygon Mumbai through the FxPortal Bridge.
   
```bash
npx hardhat run scripts/batchTransferNft.js --network goerli
```

2. This script authorizes the NFTs for transfer and then deposits them into the FxPortal Bridge.
   
## Check Mumbai Balance

1. After the bridging process is completed, you can check the balance of the NFTs on the Polygon Mumbai network.

---

## ERC721A Contract Functions

The ERC721A contract has the following functions:

- `mint(uint256 quantity)`: Allows the contract owner to mint NFTs. Only the contract owner can execute this function.
- `promptDescription()`: Returns an array of strings containing the prompt descriptions used to generate the NFT images.

---

## Note

- Remember to include a .env file containing your account's Private Key.
- Customization of the number of minted NFTs and the base URL for images is feasible within the batchMint.js script and the NFT.sol contract, respectively.

Please ensure that these scripts are executed solely on testnets for experimental purposes. Avoid using real assets or private keys on testnets. Moreover, guarantee sufficient testnet tokens for covering gas fees while implementing these scripts.

---

## Acknowledgment
This project was completed as part of the assessment for the Polygon course offered by [MetaCrafters](https://www.metacrafters.io/). I would like to express my gratitude to MetaCrafters for providing the valuable learning resources and guidance throughout the course.

---

## Author
Sourav Kapoor
