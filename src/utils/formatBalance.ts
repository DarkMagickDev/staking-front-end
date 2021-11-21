import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'
import { formatUnits } from 'ethers/lib/utils'
import { BIG_TEN } from './bigNumber'

export const getBalanceNumber = (balance: BigNumber, decimals = 18) => {
  const displayBalance = new BigNumber(balance).dividedBy(new BigNumber(10).pow(decimals))
  return displayBalance.toNumber()
}

// export const getFullDisplayBalance = (balance: BigNumber, decimals = 18) => {
//   return balance.dividedBy(new BigNumber(10).pow(decimals)).toFixed()
// }
export const getFullDisplayBalance = (balance: BigNumber, decimals = 18, displayDecimals?: number) => {
  return getBalanceAmount(balance, decimals).toFixed(displayDecimals)
}

export const getBalanceAmount = (amount: BigNumber, decimals = 18) => {
  return new BigNumber(amount).dividedBy(BIG_TEN.pow(decimals))
}

/**
 * Method to format the display of wei given an ethers.BigNumber object
 * Note: does NOT round
 */
 export const formatBigNumber = (number: ethers.BigNumber, displayDecimals = 18, decimals = 18) => {
  const remainder = number.mod(ethers.BigNumber.from(10).pow(decimals - displayDecimals))
  return formatUnits(number.sub(remainder), decimals)
}