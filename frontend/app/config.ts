import { 
  createConfig, 
  http, 
  cookieStorage,
  createStorage
} from 'wagmi'
import {type Chain} from 'viem'

export const eduTestnet = {
  id: 656476,
  name: 'EDU Chain Testnet',
  nativeCurrency: { name: 'EDU Token', symbol: 'EDU', decimals: 18 },
  rpcUrls: {
    default: { http: ['wss://open-campus-codex-sepolia.drpc.org'] },
  },
  blockExplorers: {
    default: { name: 'EDU Blockscout', url: 'https://edu-chain-testnet.blockscout.com/' },
  },
} as const satisfies Chain

export function getConfig() {
  return createConfig({
    chains: [eduTestnet],
    ssr: true,
    storage: createStorage({
      storage: cookieStorage,
    }),
    transports: {
      [eduTestnet.id]: http(),
    },
  })
}