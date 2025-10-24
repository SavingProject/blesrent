import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <img
          src={"/bles.png"}
          alt="github url"
          width={100}
          height={100}
          style={{ float: "left" }}
        />
      {/* Top Section */}
     <Image src="/icons/casa1.jpg" alt="drop" width={300} height={200} />
      <h1 className={styles.h1}>Renta de Nft</h1>
      <h4 className={styles.h1}>Tuxa Network</h4>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`https://thirdweb.com/tuxachain/0xFdE9770DAAdddd487e1F9c2F14Ca93f2f143E35A`)}
        >
          {/* Mint a new NFT */}
          <Image src="/icons/casa30.jpg" alt="drop" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>Comprar Nft</h2>
          <p className={styles.selectBoxDescription}>
            
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/* Staking an NFT */}
          <Image src="/icons/casa10.jpg" alt="token" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>Rentar Nft</h2>
          <p className={styles.selectBoxDescription}>
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;