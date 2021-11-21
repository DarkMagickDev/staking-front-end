import { ethers } from 'ethers'
import { simpleRpcProvider } from 'utils/providers'
import bep20Abi from 'config/abi/erc20.json'
import cakeAbi from 'config/abi/cake.json'

const getContract = (abi: any, address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  const signerOrProvider = signer ?? simpleRpcProvider
  return new ethers.Contract(address, abi, signerOrProvider)
}

export const getBep20Contract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(bep20Abi, address, signer)
}

export const getCakeContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(cakeAbi, '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82', signer)
}