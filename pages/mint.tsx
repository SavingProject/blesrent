import { Web3Button } from "@thirdweb-dev/react";
import Image from "next/image";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { nftDropContractAddress } from "../consts/contractAddresses";
import styles from "../styles/Home.module.css";

const Mint: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Image src="/icons/casa30.jpg" alt="drop" width={128} height={128} />
      <h1 className={styles.h1}>Comprar Nft</h1>

      <p className={styles.explain}>
      Puedes adquirir tu Nft
        (Cost 500 bles)
      <Image src="/icons/bles.png" alt="drop" width={64} height={64} />
      </p>
      <hr className={`${styles.smallDivider} ${styles.detailPageHr}`} />

      <Web3Button
        theme="dark"
        contractAddress={nftDropContractAddress}
        action={(contract) => contract.erc721.claim(1)}
        onSuccess={() => {
          alert("Purchased House!");
          router.push("/stake");
        }}
        onError={(error) => {
          alert(error);
        }}
      >
        Comprar
      </Web3Button>
    </div>
  );
};

export default Mint;
