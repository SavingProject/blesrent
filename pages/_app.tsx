import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Chain } from "@thirdweb-dev/chains";

// 🔗 Definición completa de la red TUXA
const TuxaChain: Chain = {
  chainId: 1313161573, // Reemplaza por el chainId real de Tuxa si cambia
  name: "Tuxappcoin",
  chain: "TUXA",
  shortName: "tuxa",
  slug: "tuxappcoin",
  nativeCurrency: {
    name: "Tuxa Token",
    symbol: "TUXA",
    decimals: 18,
  },
  rpc: ["https://rpc-0x4e454165.aurora-cloud.dev"], // RPC de la red Tuxa
  explorers: [
    {
      name: "Tuxa Explorer",
      url: "https://explorer.tuxa.aurora.dev", // reemplázalo si tienes tu propio explorador
      standard: "EIP3091",
    },
  ],
  testnet: false, // cambia a true si es una testnet
};

// 🚀 Configuración principal del dApp
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={TuxaChain}
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
