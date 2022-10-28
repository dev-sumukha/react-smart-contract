import React from 'react'
import { useState } from 'react';

const MetamaskBtn = () => {
  const [account,setAccount] = useState(0);

  const connectMetamask = async ()=>{
    if(window.ethereum !== 'undefined'){
      const accounts = await window.ethereum.request({method:'eth_requestAccounts'});
      setAccount(accounts[0]);
    } else {
      console.log('install metamask');
    }
  }
  const connectContract = async ()=>{
    
  }
  return (
    <>
        <button onClick={connectMetamask}>Connect to Metamask</button>
        <p style={{fontSize:'20px'}}>{account}</p>

        <button onClick={connectContract}>Connect to Contract</button>
    </>
  )
}

export default MetamaskBtn