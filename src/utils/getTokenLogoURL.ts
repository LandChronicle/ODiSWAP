import { ChainId, Token } from '@pancakeswap/sdk'
import { ChainLogo } from 'components/Logo/ChainLogo'

const mapping = {
  [ChainId.BSC]: 'smartchain',
  [ChainId.ETHEREUM]: 'ethereum',
  [ChainId.BAOBAB]: 'klaytn',
  [ChainId.KLAYTN]: 'klaytn'
}

const getTokenLogoURL = (token?: Token) => {
  if (token && mapping[token.chainId]) {
    return `https://raw.githubusercontent.com/LandChronicle/TokenImages/main/${token.address}.png`
  }
  return null
}

export default getTokenLogoURL
