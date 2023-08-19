// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

//uncomment this line to use console.log
      //import "hardhat/console.sol";

contract Demo{
    uint public  a =10;

    

    // constructor(uint b){
    //     console.log("This the value of b:",b);
    //     b=a;
    // }

    function setVal(uint _a) public{
        a=_a;
    }

    function getVal() public view  returns(uint ){
        return a;
    }
}