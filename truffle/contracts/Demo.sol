// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Demo {
  uint num = 50;

  function getter() view public returns(uint){
    return num;
  }
}
