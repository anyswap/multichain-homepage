
import {ethers} from 'ethers'

export function getProvider () {
  if (window && window.ethereum) {
    return new ethers.providers.Web3Provider(window.ethereum)
  } else {
    return new ethers.providers.JsonRpcProvider('')
  }
}

export function getContract (Abi, daiAddress, chainId) {
  const provider = getProvider(chainId)
  const signer = provider.getSigner()
  const contract = new ethers.Contract(daiAddress ? daiAddress : '', Abi, provider).connect(signer)
  return contract
}

export async function getMMBaseInfo () {
  const provider = getProvider()
  const account = await provider.send('eth_requestAccounts', [])
  const chainID = await provider.send('eth_chainId', [])
  return {
    chainId: ethers.utils.bigNumberify(chainID).toString(),
    account: account[0].toLowerCase()
  }
}

let mmWeb3
if (typeof window.ethereum !== 'undefined'|| (typeof window.web3 !== 'undefined')) {
  // Web3 browser user detected. You can now use the provider.
  mmWeb3 = window['ethereum'] || window.web3.currentProvider
}

export {
  mmWeb3
}