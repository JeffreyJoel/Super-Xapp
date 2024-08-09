import {
    RainbowKitProvider,
    getDefaultConfig,
    Chain,
  } from '@rainbow-me/rainbowkit';
  import { WagmiProvider } from 'wagmi';
  import {
    QueryClientProvider,
    QueryClient,
  } from "@tanstack/react-query";

  

  const Optimism = {
    id: 11155420,
    name: 'OP Sepolia Testnet',
    iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png',
    iconBackground: '#fff',
    nativeCurrency: { name: 'OP Sepolia Testnet', symbol: 'ETH', decimals: 18},
    rpcUrls: {
      default: { http: ['https://optimism-sepolia.blockpi.network/v1/rpc/public']},
    },
    blockExplorers: {
      default: { name: 'Etherscan', url: 'https://optimism-sepolia.blockscout.com'},
    },
   
  } as const satisfies Chain;

  const Base = {
    id: 84532,
    name: 'Base Sepolia Testnet',
    iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png',
    iconBackground: '#fff',
    nativeCurrency: { name: 'Base Sepolia Testnet', symbol: 'ETH', decimals: 18},
    rpcUrls: {
      default: { http: ['https://base-sepolia.blockpi.network/v1/rpc/public']},
    },
    blockExplorers: {
      default: { name: 'Etherscan', url: 'https://base-sepolia.blockscout.com'},
    },
   
  } as const satisfies Chain;


  const Abitrum = {
    id: 421614,
    name: 'Arbitrum Sepolia',
    iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png',
    iconBackground: '#fff',
    nativeCurrency: { name: 'Arbitrum Sepolia', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
      default: { http: ['https://arbitrum-sepolia.blockpi.network/v1/rpc/public ']},
    },
    blockExplorers: {
      default: { name: 'Etherscan', url: 'https://sepolia-explorer.arbitrum.io'},
    },
   
  } as const satisfies Chain;
  

  const Celo = {
    id: 44787,
    name: 'Alfajores Testnet',
    iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png',
    iconBackground: '#fff',
    nativeCurrency: { name: 'Alfajores Testnet', symbol: 'A-CELO', decimals: 18 },
    rpcUrls: {
      default: { http: ['https://alfajores-forno.celo-testnet.org'] },
    },
    blockExplorers: {
      default: { name: 'Celo', url: 'https://explorer.celo.org/alfajores'},
    },
   
  } as const satisfies Chain;

  const Sepolia = {
    id: 11155111,
    name: 'Sepolia',
    iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png',
    iconBackground: '#fff',
    nativeCurrency: { name: 'Sepolia ETH', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
      default: { http: ['https://eth-sepolia.g.alchemy.com/v2/3hjxNaZiX0_Axc9w2_wiD7hxi_0QU5bs'] },
    },
    blockExplorers: {
      default: { name: 'Etherscan', url: 'https://sepolia.etherscan.io'},
    },
   
  } as const satisfies Chain;



  

  const config = getDefaultConfig({
    appName: 'My RainbowKit App',
    projectId: 'e34a6845ea82b9fad965fa69ab304ec7',
    chains: [Base, Sepolia, Celo, Abitrum,Optimism],
    ssr: true
  });

  const Providers = ({ children }: { children: React.ReactNode }) => {
    const queryClient = new QueryClient();

    // return (
    //   <WagmiProvider config={config}>
    //     <QueryClientProvider client={queryClient}>
    //       <RainbowKitProvider chains={[Base, Sepolia, Celo, Abitrum, Optimism]}>
    //         {children}
    //       </RainbowKitProvider>
    //     </QueryClientProvider>
    //   </WagmiProvider>
    // );
  };
  