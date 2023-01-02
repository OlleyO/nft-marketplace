import Image from "next/image";
import { Artist } from "src/core/types";
import styles from "./styles.module.scss";

interface Props {
  artist: Artist;
}

const ArtistCard: React.FC<Props> = ({ artist }) => {
  return (
    <div className={styles["artist-card"]}>
      <div className={styles.rating}>{artist?.rank}</div>
      <div className={styles["avatar-wrapper"]}>
        <Image src={artist.avatar} alt={`${artist.username}'s avatar`} fill />
      </div>

      <div className={styles["author-info"]}>
        <h5 className={styles.username}>{artist.username}</h5>
        <p className={styles["additional-info"]}>
          <span className={styles["total-sales"]}>Total Sales:</span>
          {artist?.totalSales} ETH
        </p>
      </div>
    </div>
  );
};

export default ArtistCard;
