import { StaticJsonRpcProvider } from '@ethersproject/providers'

export const BSC_PROD_NODE = process.env.NEXT_PUBLIC_NODE_PRODUCTION || 'https://bsc.nodereal.io'

export const bscRpcProvider = new StaticJsonRpcProvider(BSC_PROD_NODE)

export const Baobabprodnode = 'https://klaytn-baobab-rpc.allthatnode.com:8551/sPrgbg8MAzo2bc10wlCMWg99bQzR81yJ'

export const Klaytnprodnode = 'https://klaytn-mainnet-rpc.allthatnode.com:8551/sPrgbg8MAzo2bc10wlCMWg99bQzR81yJ'

export const baobabRpcProvider = new StaticJsonRpcProvider(Baobabprodnode)

export const klaytnRpcProvider = new StaticJsonRpcProvider(Klaytnprodnode)

export default null
