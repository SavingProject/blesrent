import {
  useContract,
  Web3Button,
} from "@thirdweb-dev/react";
import type { FC } from "react";
import {
  nftDropContractAddress,
  stakingContractAddress,
} from "../consts/contractAddresses";
import styles from "../styles/Home.module.css";

interface NFTCardProps {
  tokenId: number;
}

const NFTCard: FC<NFTCardProps> = ({ tokenId }) => {
  const { contract } = useContract(nftDropContractAddress, "nft-drop");

  // ----------------------------------------------------------------
  // tokenId comienza en 0, y las imágenes locales son: casa1.jpg, casa2.jpg, ...
  // ----------------------------------------------------------------
  const localImage = `/casa${tokenId + 1}.jpg`; // tokenId 0 -> casa1.jpg

  // fallback opcional para la imagen si no existe
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget as HTMLImageElement;
    target.src = "/default.jpg"; // opcional: imagen de respaldo
  };

  return (
    <div className={styles.nftBox}>
      {/* 🖼️ Imagen solo desde carpeta /public */}
      <img
        src={localImage}
        alt={`casa ${tokenId + 1}`}
        className={styles.nftMedia}
        onError={handleImageError}
      />

      {/* 🔤 Nombre del NFT */}
      <h3>{`casa ${tokenId + 1}`}</h3>

      {/* 💰 Botón de retiro */}
      <Web3Button
        action={(contract) => contract?.call("withdraw", [[tokenId]])}
        contractAddress={stakingContractAddress}
      >
        Withdraw
      </Web3Button>
    </div>
  );
};

export default NFTCard;
