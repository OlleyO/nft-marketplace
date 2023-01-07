import Image from "next/image";
import styles from "./styles.module.scss";

import cn from "classnames";

interface Props {
  className?: string;
  title: string;
  img: string;
  description: string;
}

const InfoCard: React.FC<Props> = ({ className, title, img, description }) => {
  return (
    <div className={cn(styles["info-card"], className)}>
      <div className={styles["image-wrapper"]}>
        <Image src={img} alt={`${title} information card image`} fill />
      </div>
      <h5 className={styles.title}>{title}</h5>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default InfoCard;
