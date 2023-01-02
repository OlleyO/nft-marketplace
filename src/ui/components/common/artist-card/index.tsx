import Image from "next/image";
import { Artist } from "src/core/types";
import styles from "./styles.module.scss";
import cn from "classnames";

interface Props {
  artist: Artist;
  withBackground?: boolean;
}

const ArtistCard: React.FC<Props> = ({ artist, withBackground }) => {
  const { avatar, username } = artist;

  return (
    <div
      className={cn(styles["artist-card"], {
        [styles["with-background"]]: withBackground,
      })}
    >
      <div className={styles["image-wrapper"]}>
        <Image src={avatar} alt="Artist Avatar" fill />
      </div>
      <p className={styles["artist-name"]}>{username}</p>
    </div>
  );
};

export default ArtistCard;
