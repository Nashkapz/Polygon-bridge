// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "erc721a/contracts/ERC721A.sol";

contract MetaToken is ERC721A {
    
    address private owner;
    string[] private prompts = [
        "A pegasus with rainbow horn",
        "An ant depicted as black panther",
        "A black widow spider with Avengers signature",
        "Beauty and the beast in the school",
        "Pshychadelic color pattern"
    ];

    constructor() ERC721A("BridgeNFT", "BGN") {
        owner = msg.sender;
    }


    function _baseURI() internal view override returns (string memory) {
        return "PawAMn5Dn1rK421bUzBdinn4uabGgWkNQejbTFuy6jD4sx/";
    }

    function promptDescription(uint id) public view returns(string memory) {
        if (id > prompts.length || id < 0) {
            return "Invalid ID";
        }
        return prompts[id];
    }

    function mint(address reciever, uint256 quantity) public {
        require(msg.sender == owner, "Only Owner can mint tokens");
        _safeMint(reciever, quantity); 
    }
}
