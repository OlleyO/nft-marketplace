import ArtistCard from "@components/common/artist-card";
import Image from "next/image";
import { Artist } from "src/core/types";
import styles from "./styles.module.scss";

const artist: Artist = {
  id: 0,
  username: "Animakid",
  avatar: "/images/avatar-placeholder.png",
};

const HighlightedNftCard: React.FC = () => {
  return (
    <figure className={styles["highlighted-nft-card"]}>
      <div className={styles["image-wrapper"]}>
        <Image
          className={styles["nft-image"]}
          src="/images/nft-placeholder.png"
          alt="Highlighted NFT"
          fill
        />
      </div>
      <div className={styles["text-content"]}>
        <h5 className={styles["nft-name"]}>Space Walking</h5>
        <ArtistCard artist={artist} />
      </div>
    </figure>
  );
};

export default HighlightedNftCard;
