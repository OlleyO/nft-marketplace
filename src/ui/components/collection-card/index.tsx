import ArtistCard from "@components/common/artist-card";
import Image from "next/image";
import { TrendingCollectionOverview } from "src/core/types";
import styles from "./styles.module.scss";

import cn from "classnames";

interface Props {
  className?: string;
  collectionData: TrendingCollectionOverview;
}

const CollectionCard: React.FC<Props> = ({ className, collectionData }) => {
  const {
    id,
    artist,
    collectionName,
    primaryNft,
    secondaryNft1,
    secondaryNft2,
    numberOfNfts,
  } = collectionData;

  return (
    <div className={className}>
      <div className={styles["collection-card"]}>
        <div className={styles.nfts}>
          <div className={cn(styles.square, styles.primary)}>
            <Image src={primaryNft} alt="Primary NFT" fill />
          </div>
          <div className={cn(styles.square, styles.secondary)}>
            <Image src={secondaryNft1} alt="Secondary NFT" fill />
          </div>
          <div className={cn(styles.square, styles.secondary)}>
            <Image alt="Secondary NFT" src={secondaryNft2} fill />
          </div>
          <div
            className={cn(
              styles.square,
              styles.secondary,
              styles["number-of-additional-nfts"]
            )}
          >
            {numberOfNfts}
          </div>
        </div>
        <h5 className={styles["collection-name"]}>{collectionName}</h5>
        <ArtistCard artist={artist} />
      </div>
    </div>
  );
};

export default CollectionCard;
