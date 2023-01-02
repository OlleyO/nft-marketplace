import ArtistCard from "@components/common/artist-card";
import Image from "next/image";
import { Nft } from "src/core/types";
import styles from "./styles.module.scss";
import cn from "classnames";

interface Props {
  className?: string;
  nft: Nft;
}

const NftCard: React.FC<Props> = ({ className, nft }) => {
  const { image, artist, priceETH, highestBidwETH, name } = nft;

  return (
    <div className={cn(styles["nft-card"], className)}>
      <div className={styles["image-wrapper"]}>
        <Image src={image} alt={name} fill />
      </div>
      <div className={styles["nft-info"]}>
        <h5 className={styles.name}>{name}</h5>
        <ArtistCard artist={artist} />
        <div className={styles["nft-bottom"]}>
          <div className={styles["additinal-info"]}>
            <p className={styles.caption}>Price</p>
            <p className={styles.value}>{priceETH} ETH</p>
          </div>
          <div className={styles["additinal-info"]}>
            <p className={styles.caption}>Highest Bid</p>
            <p className={styles.value}>{highestBidwETH} wETH</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
